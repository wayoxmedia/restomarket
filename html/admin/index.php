<?php require_once("../../secure/config.php"); ?>
<!doctype html>
<html lang="en">
<head>
  <script>
    window.fromIndex = true;
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
  <script type="module" src="../static/admin/js/isLoggedIn.js"></script>
  <title>Redirecting...</title>
</head>
<body>
</body>
</html>
