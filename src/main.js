import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

import './assets/common.css';
import './directives/onDrop';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<router-view/>'
});
