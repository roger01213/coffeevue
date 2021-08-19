import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const app= createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.use(AOS);
app.mount('#app');
