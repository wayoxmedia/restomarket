<?php require_once("../../secure/config.php"); ?>
<!DOCTYPE html>
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
  <!-- Sidebar Start -->
  <aside class="left-sidebar">
    <?php include("admin_sidebar.php"); ?>
  </aside>
  <!--  Sidebar End -->
  <!--  Main wrapper -->
  <div class="body-wrapper">
    <?php include("admin_header.php"); ?>
    <div class="body-wrapper-inner">
      <div class="container-fluid">
        <?php include("component_sales.php"); ?>
        <?php include("component_performance.php"); ?>
        <?php include("component_info.php"); ?>
        <?php include("copyright.php"); ?>
      </div>
    </div>
  </div>
</div>
<?php include("admin_footer.php"); ?>
</body>
</html>
