<template>

  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item linkhover"><router-link to="/customer_order">購物車</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <div class="col-6">
        
        <img :src="product.imageUrl" alt="" class="img-fluid mb-3">
      </div>
      <div class="col-6">
        <h2>{{ product.title }}</h2>
        <div>{{ product.content }}</div>
        <div>{{ product.description }}</div>
        <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
        <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
        <div class="h5" v-if="product.price">現在只要 {{ product.price }} 元</div>
        <hr>
        <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                選購 {{ num }} {{ product.unit }}
              </option>
            </select>
        <button type="button" class="btn btn-outline-danger"
                @click="addToCart(product.id,product.num)">
          加到購物車
        </button>
      </div>
    </div>
  </div>
  <AddModal ref="AddModal"></AddModal>
</template>



<script>
import AddModal from"@/components/AddModal.vue";
export default {
  data() {
    return {
      product: {
        num:1,
      },
        
      id: '',
    };
  },
  components: {
    AddModal,
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
     
      this.$http.get(api).then((response) => {
        console.log(response.data);
     
        if (response.data.success) {
          this.product = {...response.data.product};
          this.product.num=1;
          console.log('product',this.product);

}
      });
    },
    addToCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      const addmodalcomponent=this.$refs.AddModal;
      // this.isLoading = true;
      this.$http.post(url, { data: cart }).then((response) => {
        this.isLoading = false;
        // this.$httpMessageState(response, '加入購物車');
        console.log("成功加入購物");
        this.$router.push('/customer_order');
        addmodalcomponent.showModal();
      });
    },
  },
  created() {
    this.id = this.$route.params.productId; //藉由網址取得動態id在傳給id當作參數
    this.getProduct();
  },
};
</script>