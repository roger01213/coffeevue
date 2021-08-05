<template>
<!-- HOMEPAGE預設 -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/user/cart">用戶端範例</router-link>
    </div>
  </nav>
  <div class="container-fluid mt-3 position-relative">
    
    <router-view/>
  </div>
</template>

<script>


export default {
  
  provide() {
    return {
  
    };
  },
  created() {
  },
};
</script>