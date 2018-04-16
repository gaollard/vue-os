import Vue from 'vue';

Vue.directive('drop', {
  inserted: function (el) {
    console.log(el)
    el.addEventListener('click', function () {
      console.log(1);
    });
    el.addEventListener('drop', function () {
      console.log(el);
    })
  }
});
