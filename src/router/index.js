import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [

  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Homepage.vue'),
    children: [
      {
        path: "",
        component: () => import('../views/Inside.vue'),
      },
      {
        path: "login",
        component: () => import('../views/Login.vue'),
      },
      {
        path: 'customer_order', //產品列表
        component: () => import('../views/Usercart.vue'),
      },
      {
        path: 'product/:productId', //產品內頁
        component: () => import('../views/Userproduct.vue'),
      },
      {
        path: 'cartlist', //產品內頁
        component: () => import('../views/Cartlist.vue'),
      },
      {
        path: 'usercheckout/:id', //產品內頁
        component: () => import('../views/Usercheckout.vue'),
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('../views/Login.vue')
  // },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Products.vue'),
      },
    ]
  },
 
];







const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
