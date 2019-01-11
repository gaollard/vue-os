<template>
  <a data-module="navigator" :href="url" @click="onClick">
    <slot>{{ text }}</slot>
  </a>
</template>

<script>
export default {
  name: 'navigator',
  props: {
    url: String,
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
