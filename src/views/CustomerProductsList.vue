<template>
   <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">訂單編號</th>
        <th width="120">消費者姓名</th>
        <th width="200">住址</th>
        <th>電話</th>
        <th width="120">聯絡信箱</th>
        <th width="120">總金額</th>
        <th width="120">備註</th>
        <th width="120">刪除</th>
        
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.user.name }}</td>
        <td class="text-right">{{ item.user.address }}</td>
        <td>{{ item.user.tel }}</td>
        <td>{{ item.user.email }}</td>
        <td class="text-right">{{ item.total }}</td>
        <td>{{ item.message }}</td>

        
        
        <td>
          <div class="btn-group">
           <button
              class="btn btn-outline-danger btn-sm"
              @click="delorder(item)"
            >
              處理完成並且刪除
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
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
    components: {
        Pagination,
    },
  data() {
    return {
        pagination: {},
    };
  },
  methods:{
      getProducts(page=1){
          const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
          console.log(api);
        this.$http.get(api).then((res)=>{
            if (res.data.success) {
            console.log(res.data);
            this.products = res.data.orders;
            this.pagination = res.data.pagination;
            }
        })
      },
    delorder(item){
     const id=item.id;  
     const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${id}`
     this.$http.delete(api).then((res)=>{
         console.log(res);
          this.getProducts();
     })
   
    }

      
  },
  created() {
      this.getProducts();
  },

};
</script>