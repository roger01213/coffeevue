<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
           <li class="nav-item">
            <router-link class="nav-link" href="#" to="/dashboard/products">products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" href="#" to="/dashboard/customerproductlist">客戶訂單</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="signout">登出</a>
          </li>
        </ul>
        <span class="navbar-text"> Navbar text with an inline element </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    signout() {
      //存在本地端的cookie會馬上失效
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          this.$router.push("/login");
          // console.log(res);
        }
      });
    },
  },
};
</script>