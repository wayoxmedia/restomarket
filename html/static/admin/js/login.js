$(document).ready(function () {
  // Handle form submission
  $('form').on('submit', function (e) {
    e.preventDefault();

    const email = $('#iptEmail').val();
    const password = $('#iptPassword').val();

    $.ajax({
      url: 'http://deepdevs.test/api/auth/login',
      method: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        email,
        password,
      }),
      beforeSend: function () {
        $('#login-error').remove(); // elimina mensaje previo, si existe.
      },
      success: function (res) {
        // Save token in localStorage
        // TODO: rename to 'token_XXX' (the store name or id) using a var from config.
        localStorage.setItem('token', res['access_token']);
        let in30Mins = Date.now() + res['expires_in'] * 1000;
        localStorage.setItem('token_expires_at', in30Mins.toString());
        window.location.href = 'dashboard.php'; // Redirect OK.
      },
      error: function (xhr) {
        console.error('❌ Error de login:', xhr);
        $('form').after(
          `<div id="login-error" style="color: red; margin-top: 1em;">
           ${xhr['responseJSON']?.error || 'Error al iniciar sesión. Verifica tus credenciales.'}
         </div>`
        );
      }
    });
  });

  $('#btnLogout').on('click', function () {
    $.ajax({
      url: CONFIG.apiUrl + 'auth/logout',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      success: function () {
        localStorage.removeItem('token');
        alert('Sesión cerrada');
        // Redirigir o limpiar UI
      },
      error: function () {
        alert('Error al cerrar sesión');
      }
    });
  });
});
