<?php require_once("../../secure/config.php"); ?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?= SITE_NAME ?> - My Store Admin Panel</title>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">

  <!-- CSS -->
  <link rel="shortcut icon" type="image/png" href="../favicon.svg" />
  <link rel="stylesheet" href="../static/admin/css/styles.min.css" />
  <link rel="stylesheet" href="../static/admin/css/custom.css" />

  <!-- JS -->
  <script src="../static/admin/libs/jquery/dist/jquery.min.js"></script>
</head>

<body>
<!--  Body Wrapper -->
<div class="page-wrapper"
     id="main-wrapper"
     data-layout="vertical"
     data-navbarbg="skin6"
     data-sidebartype="full"
     data-sidebar-position="fixed"
     data-header-position="fixed">
  <div class="position-relative overflow-hidden text-bg-light min-vh-100 d-flex align-items-center justify-content-center">
    <div class="d-flex align-items-center justify-content-center w-100">
      <div class="row justify-content-center w-100">
        <div class="col-md-8 col-lg-6 col-xxl-3">
          <div class="card mb-0">
            <div class="card-body">
              <a href="<?= SITE_URL?>"
                 class="text-nowrap logo-img text-center d-block py-3 w-100">
                <img src="../static/img/eglita_ok.png" alt="">
              </a>
              <p class="text-center"><?= SITE_NAME ?></p>
              <form id="loginForm">
                <input type="hidden" name="XDEBUG_TRIGGER" id="XDEBUG_TRIGGER" value="PHPSTORM">
                <div class="mb-3">
                  <label for="iptEmail"
                         class="form-label">Email</label>
                  <input type="email"
                         class="form-control"
                         id="iptEmail"
                         name="email"
                         required
                         aria-describedby="emailHelp">
                </div>
                <div class="mb-4">
                  <label for="iptPassword"
                         class="form-label">Password</label>
                  <input type="password"
                         class="form-control"
                         name="password"
                         required
                         id="iptPassword">
                </div>
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <div class="form-check">
                    <input class="form-check-input primary"
                           type="checkbox"
                           value=""
                           id="flexCheckChecked"
                           checked>
                    <label class="form-check-label text-dark"
                           for="flexCheckChecked">Remember me</label>
                  </div>
                  <a class="text-primary fw-bold"
                     href="forgot.php">Forgot Password?</a>
                </div>
                <button type="submit"
                        class="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<script>
  const CONFIG = {
    siteName: <?= json_encode(defined('SITE_NAME') ? SITE_NAME : '') ?>,
    supportEmail: <?= json_encode(defined('SUPPORT_EMAIL') ? SUPPORT_EMAIL : '') ?>,
    apiUrl: <?= json_encode(defined('API_URL') ? API_URL : '') ?>,
    local_env: <?= json_encode(defined('LOCAL_ENV') && LOCAL_ENV) ?>
  };
</script>

<script src="../static/admin/libs/jquery/dist/jquery.min.js"></script>
<!-- solar icons -->
<script src="https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js"></script>
<script src="../static/admin/js/login.js"></script>

</body>
</html>
