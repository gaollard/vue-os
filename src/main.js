import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

import './assets/common.css';
import './directives/onDrop';

const config = {
  component: 'block',
  nodes: {
    component: 'inline',
    nodes: 'inline'
  },
};

function render(tag, slot) {
  return `<${tag}>` + slot + `</${tag}>`
}

function createNode(node) {
  if (node.nodes.constructor === String) {
    return render(node.component, node.nodes);
  } else {
    console.log(render(node.component));
    return createNode(node.nodes);
  }
}

console.log(createNode(config));

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
