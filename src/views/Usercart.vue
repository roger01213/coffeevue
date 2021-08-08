<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <input
          type="text"
          v-model="search"
          placeholder="口味查詢 ex:抹茶"
          size="20"
          style="font-size: 20px"
        />
      </div>
      <div class="col-md-8">
        <select v-model="selecthistory">
          <option value="" disabled selected>預覽紀錄</option>
          <option :value="item" v-for="item in history" :key="item.title">
            {{ item.title }}
          </option>
        </select>
        <button class="btn btn-danger" @click.prevent="delhistory">
          清除預覽紀錄
        </button>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="item in searchproducts" :key="item.id">
        <div class="card border-0 shadow-sm">
          <a
            @click.prevent="getProduct(item)"
            href="#"
            class="img"
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
          ></a>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{
              item.category
            }}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark" @click.prevent="getProduct(item)">{{
                item.title
              }}</a>
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
              @click="getProduct(item)"
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
      selecthistory: {},
      history: [],
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
    delhistory() {
      localStorage.clear();
      this.history = [];
    },
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
    getProduct(item) {
      //給商品ID轉址到該商品頁面
      const id = item.id;

      this.history.forEach((item1, i) => {
        if (item1.id == item.id) {
          // console.log("index", i);
          this.history.splice(i, 1);
        }
      });
      this.history.push(item);
      localStorage.setItem("history", JSON.stringify(this.history));
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
  watch: {
    selecthistory(item) {
      this.history.forEach((item1, i) => {
        if (item1.id == item.id) {
          // console.log("index", i);
          this.history.splice(i, 1);
        }
      });
      console.log("item", item);
      this.history.push(item);
      localStorage.setItem("history", JSON.stringify(this.history));
      this.$router.push(`/product/${item.id}`);
    },
  },

  created() {
    //由生命週期取得商品資料
    this.getProducts();
    const historylist = JSON.parse(localStorage.getItem("history")) || [];
    //  console.log("historylist",historylist);
    this.history = historylist;
  },
};
</script>