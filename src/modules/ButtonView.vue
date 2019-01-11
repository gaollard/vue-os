<template>
  <button @click="onClick">{{ text }}</button>
</template>

<script>
export default {
  name: 'ButtonView',
  props: {
    text: String
  },
  methods: {
    onClick () {
      const nodeId = this.$attrs['data-node-id']
      this.$store.dispatch('edit/setNodeId', nodeId)
    }
  }
}
</script>

<style>
button {
  padding: 6px 14px;
  outline: none;
  color: #fff;
  background: #009688;
  border: 0;
  font-size: 14px;
}
</style>
