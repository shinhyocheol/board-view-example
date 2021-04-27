<template>
  <div class="wrapper">
    <Header />  <!-- 헤더 -->
    <LeftBar /> <!-- 좌츠 메뉴바 -->
    
    <div class="content-view">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from '@/components/layout/Header' 
import LeftBar from '@/components/layout/LeftBar' 
export default {
  components: {Header, LeftBar},
  name: "NavBar"
}
</script>
<style scoped>
  .content-view {
    width: calc(100% - 250px);
    min-width: 500px;
    float: right;
  }
</style>