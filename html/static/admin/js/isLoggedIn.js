import { checkIfLoggedIn } from './utils/loginUtilities.js';
import { CONFIG } from './config.js.php';
$(document).ready(function () {
  let token = localStorage.getItem('token');
  let expiresAfter = parseInt(localStorage.getItem('token_expires_at'), 10) || 0;

  checkIfLoggedIn(window.fromIndex, token, expiresAfter);

  /**
   * Handle logout button click.
   */
  $('#logout').on('click', function () {
    const url = CONFIG.apiUrl + '/auth/logout';
    // Tokens refreshes after some time,
    // so we need to get the last token from localStorage.
    let lastToken = localStorage.getItem('token');

    $.ajax({
      url: url,
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + lastToken
      },
      success: function (response) {
        console.log('Logout exitoso:', response);
        logout(); // Función que limpia storage y redirige
      },
      error: function (xhr) {
        console.error('Error en logout:', xhr);
        logout(); // Igual cerramos sesión del lado del cliente
      }
    });
  });

  /**
   * Función para cerrar sesión y limpiar el almacenamiento local.
   */
  function logout() {
    // Elimina token y otros datos sensibles
    localStorage.removeItem('token');
    localStorage.removeItem('token_expires_at');

    // sessionStorage.clear();

    // Redirige al login
    window.location.href = '/admin/login.php';
  }
});
