<template>
  <div class="wrapper">
    <!-- Header -->
    <Header />

    <!-- Side Bar -->
    <!-- <LeftBar />  -->

    <!-- Body -->
    <div class="content-view">
      <router-view></router-view>
    </div>

  </div>
</template>
<script>
import Header from '@/components/layout/Header' 
// import LeftBar from '@/components/layout/LeftBar' 
export default {
  components: {Header},
  name: "NavBar"
}
</script>
<style scoped>
  .content-view {
    /* width: calc(100% - 250px); */
    /* min-width: 750px; */
    /* float: right; */
  }
</style>