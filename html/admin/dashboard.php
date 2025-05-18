<?php require_once("../../secure/config.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dashboard</title>
  <script src="../static/admin/libs/jquery/dist/jquery.min.js"></script>
  <script src="../static/admin/js/isLoggedIn.js"></script>
</head>
<body>
<h1>Dashboard</h1>
<div id="user-data"></div>
<button id="logout">Cerrar sesión</button>

<script>
  const CONFIG = {
    siteName: <?= json_encode(defined('SITE_NAME') ? SITE_NAME : '') ?>,
    supportEmail: <?= json_encode(defined('SUPPORT_EMAIL') ? SUPPORT_EMAIL : '') ?>,
    apiUrl: <?= json_encode(defined('API_URL') ? API_URL : '') ?>,
    local_env: <?= json_encode(defined('LOCAL_ENV') ? LOCAL_ENV : false) ?>
  };

  $(document).ready(function () {
    let url = CONFIG.apiUrl + 'auth/me';
    let token = localStorage.getItem('token');

    $.ajax({
      url,
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      success: function (data) {
        $('#user-data').html('<p>Bienvenido, ' + data.name + '</p>');
      },
      error: function (xhr) {
        console.log(xhr);
      }
    });

    $('#logout').on('click', function () {
      debugger;
      let ur2 = CONFIG.apiUrl + 'auth/logout';
      $.ajax({
        url: ur2,
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        success: function (response) {
          console.log(response);
          logout();
        },
        error: function (xhr) {
          console.log(xhr);
          logout();
        }
      });
    });

    function logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('token_expires_at');
      window.location.href = '/admin/login.php';
    }
  });
</script>
</body>
</html>
