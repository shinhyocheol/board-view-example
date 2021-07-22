<template>
  <div class="card-columns">

    <div class="card shadow-lg">
      <img class="card-img-top" src="/img/spring-boot.png" alt="spring-boot">
      <div class="card-body">
        <h5 class="card-title">Spring Boot</h5>
        <span class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</span>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>

    <div class="card shadow-lg">
      <img class="card-img-top" src="/img/vue-js.png" alt="vue-js">
      <div class="card-body">
        <h5 class="card-title">Vue</h5>
        <span class="card-text">This card has supporting text below as a natural lead-in to additional content.</span>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>

    <div class="card shadow-lg">
      <img class="card-img-top" src="/img/mysql.png" alt="mysql">
      <div class="card-body">
        <h5 class="card-title">MySQL</h5>
        <span class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</span>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "Article"
}
</script>
<style scoped>
.card-body {
  background-color: rgba(0,0,0,.03);
  max-height: 200px;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
}
</style>