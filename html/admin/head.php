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
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"
          integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
          crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"></script>
  <script src="../static/admin/js/isLoggedIn.js"></script>
</head>
