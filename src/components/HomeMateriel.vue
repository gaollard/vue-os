<template>
  <ul class="list">
    <li class="item" data-module-name="Block" @click="onClick('Block')">容器组件</li>
    <li class="item" data-module-name="Navigator" @click="onClick('Navigator')">导航组件</li>
    <li class="item" data-module-name="ImageView" @click="onClick('ImageView')">图片组件</li>
    <li class="item" data-module-name="TextView" @click="onClick('TextView')">文本组件</li>
    <li class="item" data-module-name="ButtonView" @click="onClick('ButtonView')">按钮组件</li>
  </ul>
</template>

<script>
export default {
  methods: {
    onClick (name) {
      this.$emit('on-click-materiel', name)
    }
  }
}
</script>

<style scoped>
.item {
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  border: 1px solid #eaeaea;
  border-radius: 2px;
  margin-right: 10px;
  background-color: #eefbf9;
}
</style>
