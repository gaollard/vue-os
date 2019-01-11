<template>
  <span data-module="TextView" @click="onClick">
    <slot>{{ text }}</slot>
  </span>
</template>

<script>
export default {
  name: 'TextView',
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
