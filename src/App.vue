<template>
 
  <router-view />
</template>

<style lang="scss">
@import "./assets/all";
</style>
<script>
import "bootstrap/dist/js/bootstrap.bundle.min";
import AOS from'aos';

export default {
  
  created() {
    AOS.init();
  },
}
</script>