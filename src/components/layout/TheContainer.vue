<template>
  <div>
    
    <!-- Header -->
    <Header />
    <!-- Body -->
    <RouterView />

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