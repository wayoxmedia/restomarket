<?php require_once("../../secure/config.php"); ?>
<!doctype html>
<html lang="en">
<?php include("head.php"); ?>
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
              <form>
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
                           for="flexCheckChecked">
                      Remember me
                    </label>
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
<?php include('scripts_login.php'); ?>
</body>
</html>
