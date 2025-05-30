import { CONFIG } from '../config.js.php';

/**
 * Check if the user is logged in
 */
export function isLoggedIn(token) {
  return token !== null && token !== undefined;
}

/**
 * Check if the token is expired
 */
export function isTokenExpired() {
  let expiresAfter = parseInt(localStorage.getItem('token_expires_at'), 10) || 0;
  return Date.now() > expiresAfter;
}

/**
 * Check if the user is already logged in.
 *
 * If the user is not logged in or the token has expired,
 * clean the localStorage items and redirect to login page.
 */
export function checkIfLoggedIn(fromIndex, token) {
  if (!isLoggedIn(token) || isTokenExpired()) {
    // No token or expired, cleanup and redirect to login page.
    logout();
  }
  else {
    // If the user is logged in, refresh the token
    refreshToken(token);
    // redirect to dashboard page if coming from admin/index.php.
    if (fromIndex) {
      window.location.href = '/admin/dashboard.php';
    } // else, do nothing, just show the requested page.
  }
}

/**
 * Set the token in localStorage.
 * @param newToken
 */
export function setToken(newToken) {
  let refreshedToken = newToken['access_token'];
  localStorage.setItem('token', refreshedToken);
  let in30Mins = Date.now() + newToken['expires_in'] * 1000;
  localStorage.setItem('token_expires_at', in30Mins.toString());
}

/**
 * Refresh the token.
 */
export function refreshToken(token) {
  if (!token) return;

  $.ajax({
    url: CONFIG.apiUrl + 'auth/refresh',
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + token
    },
    success: function (response) {
      setToken(response);
    },
    error: function (xhr) {
      console.warn("Token invalid or expired");
      console.log(xhr);
      clearToken()
      logout();
    }
  });
}

/**
 * Clear the token from localStorage.
 */
export function clearToken() {
  localStorage.removeItem('token');
  localStorage.removeItem('token_expires_at');
}

/**
 * Logout the user by clearing the token and redirecting to the login page.
 */
export function logout() {
  // Clear the token and redirect to login page
  clearToken();
  window.location.href = '/admin/login.php';
}
