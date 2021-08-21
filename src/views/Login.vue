<template>
  <div>
     <div class="container pb-xl pt-xxl">
    <ul class="row list-unstyled  align-items-center">
      <li class="col-md-8 col-12">
        <div class="log-img"></div>
      </li>
      <li class="col-md-4 col-12 ">
        <form class="form-signin" @submit.prevent="singin">
      <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        v-model="user.username"
        placeholder="Email address"
        required
        autofocus
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        v-model="user.password"
        placeholder="Password"
        required
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
 
    </form>
      </li>
    </ul>
  </div>

  </div>
</template>
 


<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    singin() {
      // console.log('login123');
      const api = `${process.env.VUE_APP_API}admin/signin`;
      // console.log(api)
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token};expire=${new Date(expired)}`; ///將token及到期日存到cookie裡
          // console.log(res);
          this.$router.push('/dashboard/products'); //登入後轉址到products產品列表
        }
      });
    },
  },
};
</script>