<script>
  const msaConfig = {
    siteName: <?= json_encode(defined('SITE_NAME') ? SITE_NAME : '') ?>,
    supportEmail: <?= json_encode(defined('SUPPORT_EMAIL') ? SUPPORT_EMAIL : '') ?>,
    apiUrl: <?= json_encode(defined('API_URL') ? API_URL : '') ?>,
    local_env: <?= json_encode(defined('LOCAL_ENV') && LOCAL_ENV) ?>
  };
</script>
<script src="https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js"></script>
<script src="../static/admin/js/login.js"></script>
