$(document).ready(function () {
  /**
   * Variables
   */
  let token = localStorage.getItem('token');
  let expiresAfter = parseInt(localStorage.getItem('token_expires_at'), 10) || 0;

  /************
   * Functions
   ***********/

  /**
   * Check if the user is logged in
   */
  function isLoggedIn() {
    return token !== null && token !== undefined;
  }

  /**
   * Check if the token is expired
   */
  function isTokenExpired() {
    return Date.now() > expiresAfter;
  }

  /**
   * Check if the user is already logged in.
   *
   * If the user is not logged in or the token has expired,
   * clean the localStorage items and redirect to login page.
   */
  function checkIfLoggedIn(fromIndex) {
    if (!isLoggedIn() || isTokenExpired()) {
      // No token or expired, cleanup and redirect to login page.
      localStorage.removeItem('token');
      localStorage.removeItem('token_expires_at');
      window.location.href = '/admin/login.php';
    }
    else {
      // If the user is logged in, refresh the token
      refreshToken();
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
  function setToken(newToken) {
    token = newToken['access_token'];
    localStorage.setItem('token', token);
    let in30Mins = Date.now() + newToken['expires_in'] * 1000;
    localStorage.setItem('token_expires_at', in30Mins.toString());
  }

  /**
   * Refresh the token.
   */
  function refreshToken() {
    if (!token) return;

    $.ajax({
      url: 'http://deepdevs.test/api/auth/refresh',
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      success: function (response) {
        console.log("Token refreshed");
        setToken(response);
      },
      error: function (xhr) {
        console.warn("Token invalid or expired");
        console.log(xhr);
        //logout();
      }
    });
  }

  checkIfLoggedIn(window.fromIndex);
});
