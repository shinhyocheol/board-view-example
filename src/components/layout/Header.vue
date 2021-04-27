<template>
  <div class="main-header">
    <div class="navbar navbar-dark bg-dark shadow-sm mb-3">
      <div class="container d-flex justify-content-between">
        <a href="/" class="navbar-brand d-flex align-items-center">
          <strong>Hyo's Blog</strong>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopBar'
}
</script>
<style scoped>
.main-header {
    width: calc(100% - 250px);
    min-width: 500px;
    float: right;
}
</style>
