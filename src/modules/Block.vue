<template>
  <div data-module="block" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Block',
  methods: {
    onClick () {
      // const nodeId = this.$attrs['data-node-id']
      // this.$store.dispatch('edit/setNodeId', nodeId)
    }
  }
}
</script>
