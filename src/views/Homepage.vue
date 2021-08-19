<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">好喝咖啡</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item linkhover">
         <router-link class="nav-link text-center" href="#" to="/"><i class="bi bi-house-door">首頁</i> </router-link>
        </li>
        <li class="nav-item linkhover">
          <router-link class="nav-link text-center" href="#" to="/customer_order"><i class="bi bi-cup-straw">咖啡精品</i></router-link>
        </li>
        <li class="nav-item linkhover text-center">
          <router-link class="nav-link" href="#" to="/cartlist"><i class="bi bi-cart-fill">購物車</i></router-link>
        </li>
         <li class="nav-item linkhover text-center">
          <router-link class="nav-link" href="#" to="/login"> <i class="bi bi-person">登入頁面</i></router-link>
        </li>
      </ul>
     </div>
  </div>
</nav>

 <router-view></router-view>


  <div class="bg-primary  pt-m pb-xxl">
    <div class="container text-white">
      <ul class=" d-md-flex justify-content-between list-unstyled">
        <li>
          <ul class="list-unstyled d-flex ">
           <router-link  class="navbar text-white" to="/"> <span class="h2">好喝咖啡</span> </router-link>
           
          </ul>
        </li>
        <li>
          <ul class=" list-unstyled  d-md-flex justify-content-md-between d-none d-md-block pt-s">
          <li> <router-link  class="text-white  text-center d-md-block" to="/"> <i class="bi bi-house-door">首頁</i></router-link></li>
          <li> <router-link  class="text-white  text-center d-md-block m-l-l" to="/login"> <i class="bi bi-person">登入頁面</i></router-link></li>
          <li><router-link class="text-white  text-center d-md-block m-l-l" to="/customer_order"><i class="bi bi-cup-straw">咖啡精品</i></router-link></li>
          <li><router-link class="text-white  text-center d-md-block m-l-l" to="/cartlist"><i class="bi bi-cart-fill">購物車</i></router-link></li>

          </ul>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  
  data() {
    return {
     
    };
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
