$(document).ready(function () {
  $.ajaxSetup({
    xhrFields: {
      withCredentials: true
    }
  });
  $('form').on('submit', function (e) {debugger;
    e.preventDefault();

    const email = $('#iptEmail').val();
    const password = $('#iptPassword').val();

    $.ajax({
      url: 'http://deepdevs.test/api/login?XDEBUG_TRIGGER=PHPSTORM',
      method: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({email, password}),
      success: function (res) {debugger;
        console.log('✅ Login exitoso:', res);
        // Guarda el token en localStorage
        localStorage.setItem('token', res.access_token);
        alert('Bienvenido');
        // Redireccionar o actualizar UI
      },
      error: function (xhr) {debugger;
        console.error('❌ Error de login:', xhr);
        alert('Error al iniciar sesión');
      }
    });
  });

  $('#btnLogout').on('click', function () {
    $.ajax({
      url: CONFIG.apiUrl + 'logout',
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
