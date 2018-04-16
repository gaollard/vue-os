import Vue from 'vue';
import App from './App.vue';
import './assets/common.css';
import router from './router/index';

import './directives/onDrop';

import Block from './components/Block.vue';
import Inline from './components/Inline.vue';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: {
    Block,
    Inline,
    App
  },
  template: '<App/>'
});
