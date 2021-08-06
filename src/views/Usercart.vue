<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <input
          type="text"
          v-model="search"
          placeholder="口味查詢 ex:抹茶"
          size="50"
          style="font-size: 20px"
        />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="item in searchproducts" :key="item.id">
        <div class="card border-0 shadow-sm">
          <a
             @click.prevent="getProduct(item.id)"
            href="#"
            class="img"
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
          ></a>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{
              item.category
            }}</span>
            <h5 class="card-title">
              <a
                href="#"
                class="text-dark"
                @click.prevent="getProduct(item.id)"
                >{{ item.title }}</a>
            </h5>
            <p class="card-text">{{ item.content }}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5" v-if="!item.price">
                {{ item.origin_price }} 元
              </div>
              <del class="h6" v-if="item.price"
                >原價 {{ item.origin_price }} 元</del
              >
              <div class="h5" v-if="item.price">
                現在只要 {{ item.price }} 元
              </div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm"
              @click="getProduct(item.id)"
            >
              <i class="fas fa-spinner fa-spin"></i>
              查看更多
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm ml-auto"
              @click="addToCart(item.id)"
            >
              <i class="fas fa-spinner fa-spin"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AddModal ref="AddModal"></AddModal>
</template>

<style scoped>
.img {
  display: block; 
  height: 150px;
  background-size: cover;
  background-position: center;
}
.img:hover {
  opacity: 0.5;
}
</style>


<script>
import AddModal from "@/components/AddModal.vue";
export default {
  data() {
    return {
      products: [],
      product: {},
      search: "",
      searchproducts: [],
    };
  },
  components: {
    AddModal,
  },
  methods: {
    getProducts() {
      //取得商品資料
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      // this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        console.log("products:", response);
        this.isLoading = false;
      });
    },
    getProduct(id) {
      //給商品ID轉址到該商品頁面
      this.$router.push(`/product/${id}`);
    },

    addToCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      const addmodalcomponent = this.$refs.AddModal;
      this.$http.post(url, { data: cart }).then((response) => {
        console.log("成功加入購物車");
        addmodalcomponent.showModal();
      });
    },
  },
  computed: {
    searchproducts() {
      return this.products.filter((item, i) => {
        return item.title.match(this.search);
      });
    },
  },

  created() {
    //由生命週期取得商品資料
    this.getProducts();
  },
};
</script>