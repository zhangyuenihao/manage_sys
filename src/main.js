import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import {request,get,post,deletes} from "./network/request";
Vue.prototype.$axios=axios;
Vue.prototype.$get=get;
Vue.prototype.$post=post;
Vue.prototype.$deletes=deletes;

Vue.config.productionTip = false;
Vue.use(ElementUI)
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");

