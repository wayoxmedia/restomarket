<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dashboard</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
<h1>Dashboard</h1>
<div id="user-data"></div>
<button id="logout">Cerrar sesión</button>

<script>
  $.ajaxSetup({
    xhrFields: {
      withCredentials: true
    }
  });

  $(document).ready(function () {
    $.get(CONFIG.apiUrl + '/profile')
      .done(function (data) {
        $('#user-data').html('<p>Bienvenido, ' + data.name + '</p>');
      })
      .fail(function () {
        window.location.href = 'login.php';
      });

    $('#logout').on('click', function () {
      $.post(CONFIG.apiUrl + '/logout')
        .done(function () {
          window.location.href = 'login.php';
        });
    });
  });
</script>
</body>
</html>
