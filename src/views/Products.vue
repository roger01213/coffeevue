<template>
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal(true)">
      增加產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">{{ item.origin_price }}</td>
        <td class="text-right">{{ item.price }}</td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openDelProductModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pagination"
    @emit-pages="getProducts"
    @emit-nextPage="getProducts"
    @emit-prePage="getProducts"
    
    
    ></Pagination>

  <!-- 取一個ref讓按鈕可以呼叫元件ProductModal -->
  <ProductModal
    ref="ProductModal"
    :product="tempProduct"
    @update-product="updateProduct"
  ></ProductModal>
    <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"></DelModal>
</template>

<script>
import ProductModal from "@/components/ProductModal.vue";
import DelModal from "@/components/DelModal.vue";
import Pagination from '@/components/Pagination.vue';
export default {
  data() {
    return {
      tempProduct: {},
      products: [],
      pagination: {},
      isNew: false,
    };
  },
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
  methods: {
    updateProduct(item) {
      //item即為 ProductModal emit所傳出來的參數"tempProduct"
      this.tempProduct = item;
      //新增產品
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = "post";

      //編輯產品
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = "put";
      }

      const productComponent = this.$refs.ProductModal;
      this.$http[httpMethod](api, { data: this.tempProduct }).then(
        (response) => {
          console.log(response);
          productComponent.hideModal();
          this.getProducts();
        }
      );
    },
    openModal(isNew, item) {
      console.log(isNew, item);
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;

      const productComponent = this.$refs.ProductModal;
      productComponent.showModal();
    },
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      // console.log(api)
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          //   console.log(res.data);
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          console.log("res.data",res.data);
          console.log("products", this.products);
          console.log("pagination", this.pagination);
        }
      });
    },
    openDelProductModal(item) {
      this.tempProduct = { ...item }; //將要刪除的品項傳進去(讓他可以顯示刪除資訊)
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    delProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.$http.delete(url).then((response) => {
        console.log(response.data);
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getProducts();
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>