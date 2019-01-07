<template>
  <img data-module="ImageView" :src="src" @click="onClick">
</template>

<script>
export default {
  name: 'ImageView',
  props: {
    src: String
  },
  methods: {
    onClick () {
      const nodeId = this.$attrs['data-node-id']
      this.$store.dispatch('editNode', nodeId)
    }
  }
}
</script>
