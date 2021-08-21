<template>
<Navbar></Navbar>
<div class="container-fluid">
  <router-view />
</div>


</template>



<script>
//將Navbar變成元件import進來
import Navbar from'../components/Navbar.vue'
export default {
    components:{
        Navbar,
    },
  created() {
    //將cookie裡的token取出來
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    // console.log("token", token);
    this.$http.defaults.headers.common.Authorization = token; //將token加進header

    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api).then((res) => {
      if (!res.data.success) {
        //檢查cookie是否存在 如果沒有就轉址回login
        this.$router.push("/login");
      }
    });
  },
};
</script>