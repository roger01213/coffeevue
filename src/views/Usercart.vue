<template>
  <div class="container ">
    
    <div class="input-group mb-3 mt-3">
      <span class="input-group-text" id="inputGroup-sizing-default"
        >口味查詢</span>
      <input
        type="text"
        v-model="search"
        placeholder="ex:抹茶"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
    <div class="input-group mb-3">
      <button
        class="btn btn-secondary"
        type="button"
        @click.prevent="delhistory"
      >
        清除預覽紀錄
      </button>
      <select
        v-model="selecthistory"
        class="form-select"
        id="inputGroupSelect03"
        aria-label="Example select with button addon"
      >
        <option disabled selected>預覽紀錄</option>
        <option :value="item" v-for="item in history" :key="item.title">
          {{ item.title }}
        </option>
      </select>
    </div>

    

    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="item in searchproducts" :key="item.id">
        <div
          class="card border-0 shadow-sm"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
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
              <i class="bi bi-search"></i>
              查看更多
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm ml-auto"
              @click="addToCart(item.id)"
            >
              <i class="bi bi-cart-plus"></i>加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AddModal ref="AddModal"></AddModal>
</template>

<style scoped>
ul {
  list-style: none;
}
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

      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        // console.log("products:", response);
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
        // console.log("成功加入購物車");
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
      // console.log("item", item);
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