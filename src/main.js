import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

//引入
import "bootstrap/dist/css/bootstrap.css";

//axios 全局配置
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false; //这句是什么意思 axios

new Vue({
  render: (h) => h(App),
}).$mount("#app");
