<template>
  <div>
    
    <div class="my-5 row justify-content-center">
      <div class="col-md-6">
        <table class="table">
          <thead>
            <th></th>
            <th>品名</th>
            <th>數量</th>
            <th>小計</th>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id">
              <td class="align-middle">
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(item.id)"
                >
                  刪除
                </button>
              </td>
               <td class="align-middle">
                {{ item.product.title }}
               </td>

              <td class="align-middle">
                {{ item.qty }}/{{ item.product.unit }}
              </td>
              <td class="align-middle text-right">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right">總計</td>
              <td class="text-right">{{ cart.total }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
     <div class="my-5 row justify-content-center">
      <form class="col-md-6" @submit.prevent="createOrder">
        <div class="form-group">
          <label for="useremail">Email</label>
          <input type="email" class="form-control" name="email" id="useremail"
                     
            v-model="form.user.email" placeholder="請輸入 Email">
           </div>

        <div class="form-group">
          <label for="username">收件人姓名</label>
          <input type="text" class="form-control" name="name" id="username"
           
            v-model="form.user.name" placeholder="輸入姓名">
        
        </div>

        <div class="form-group">
          <label for="usertel">收件人電話</label>
          <input type="tel" class="form-control" id="usertel"
            v-model="form.user.tel" placeholder="請輸入電話">
        </div>

        <div class="form-group">
          <label for="useraddress">收件人地址</label>
          <input type="address" class="form-control" name="address"
           
            id="useraddress" v-model="form.user.address" 
            placeholder="請輸入地址">
       
        </div>

        <div class="form-group">
          <label for="useraddress">留言</label>
          <textarea name="" id="" class="form-control" cols="30" rows="10"
            v-model="form.message"></textarea>
        </div>
        <div class="text-right">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </form>
    </div>
  
  

  </div>
</template>

<script>
// import $ from "jquery";

export default {
  data() {
    return {
    

      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },

      product: {
        
      },
      cart: {
        carts: {},
      },
      prcarts: [],
    };
  },
  methods: {
    
    getCart() {
 
     const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((response) => {
        // console.log("response", response);
        this.cart = response.data.data;
      });
    },
    removeCartItem(id) {
 
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
  
      this.$http.delete(url).then(() => {
        this.getCart();
       
      });
    },

    

    createOrder() {
    //   const vm = this;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(url, { data: order }).then((response) => {
            // console.log('訂單已建立', response);
            if (response.data.success) {
              this.$router.push(`/usercheckout/${response.data.orderId}`);
            }
            else{
              alert('請輸入正確的資料(格式)');
            }
          });
    },





  },

  created() {
  
    this.getCart();
  },
};
</script>