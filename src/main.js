import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
const components = ['block', 'inline'];

const config = [
  {
    component: 'block',
    nodes: 'hello world',
    data: {},
    styles: {}
  },
  {
    component: 'block',
    nodes: [
      {
        component: 'inline',
        nodes: 'yum list'
      },
      {
        component: 'inline',
        nodes: [
          {
            component: 'inline',
            nodes: 'yum list'
          }
        ]
      },
    ]
  }
];

function decode() {
  for (let i = 0; i < config.length; i++) {
    let item = config[i];
    console.log(item);
  }
}

decode();

// function decrypt(config) {
//   return `
//     <block>hello world</block>
//     <block>
//       <inline>yum list</inline>
//       <inline>yum list</inline>
//     </block>
//   `
// }

function decrypt(config = config) {
  let str = '';
  for (let i = 0; i < config.length; i++) {
    let item = config[i];
    if (components.indexOf(item.component) !== -1) {
      if (typeof item.nodes === 'string') {
        str += '<' + item.component + '>' + item.nodes + '</' + item.component + '>';
      } else {
        console.log(str);
      }
    }
  }
  return str;
}

Vue.component('block', {
  template: '<div><slot></slot></div>'
});

Vue.component('inline', {
  template: '<div><slot></slot></div>'
});

// new Vue({
//   el: '#app',
//   template: '<block>' + decrypt(config) + '</block>'
// });

new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(
      'div',
      {},
      [
        '先写一些文字',
        createElement('h1', '一则头条'),
        createElement('block', '一则头条'),
        // createElement(MyComponent, {
        //   props: {
        //     someProp: 'foobar'
        //   }
        // })
      ]
    );
  }
});
