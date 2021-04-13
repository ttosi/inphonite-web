import Vue from "vue";
import App from "./App.vue";
import router from "@/router.js";
import store from "@/store.js";
import './filters'

import vuetify from "./plugins/vuetify";
import VueMasonry from 'vue-masonry-css'
import Sugar from "sugar-date";

Vue.config.productionTip = false;
Sugar.extend();

Vue.use(Sugar);
Vue.use(VueMasonry);

export const eventBus = new Vue();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");