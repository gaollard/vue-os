<template>
  <ul class="cmt-list">
    <li class="cmt-item" draggable="true" :data-component="item.name" v-for="item in components"
        @click="add(item.name)">
      {{ item.desc }}
    </li>
    <li class="cmt-item">
      <div>哈哈</div>
    </li>
  </ul>
</template>

<script>
  import Block from '../components/Block.vue';
  import Inline from '../components/Inline.vue';

  const components = [Block, Inline];

  export default {
    components: {
      Block,
      Inline
    },
    data() {
      return {
        components,
      }
    },
    props: ['handleChange'],
    methods: {
      add(c) {
        console.log(c);
        this.handleChange();
      }
    }
  }
</script>

<style scoped="">
  .cmt-item {
    float: left;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-size: 14px;
    color: #666;
    cursor: pointer;
    border: 1px solid #eaeaea;
    border-radius: 2px;
    margin-right: 10px;
    background-color: #eefbf9;
  }

  *[draggable=true] {
    cursor: move;
  }
</style>
