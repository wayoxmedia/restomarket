<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?= SITE_NAME ?> - My Store Admin Panel</title>
  <!-- CSS -->
  <link rel="shortcut icon" type="image/png" href="../favicon.svg" />
  <link rel="stylesheet" href="../static/admin/css/styles.min.css" />
  <link rel="stylesheet" href="../static/admin/css/custom.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.css"/>

  <!-- JS -->
  <script>
    const CONFIG = {
      siteName: <?= json_encode(defined('SITE_NAME') ? SITE_NAME : '') ?>,
      supportEmail: <?= json_encode(defined('SUPPORT_EMAIL') ? SUPPORT_EMAIL : '') ?>,
      apiUrl: <?= json_encode(defined('API_URL') ? API_URL : '') ?>,
      local_env: <?= json_encode(defined('LOCAL_ENV') && LOCAL_ENV) ?>
    };
  </script>
  <script src="../static/admin/libs/jquery/dist/jquery.min.js"></script>
  <script src="../static/admin/js/isLoggedIn.js"></script>
  <script src="../static/admin/js/bootstrap.bundle.js"></script>
</head>
