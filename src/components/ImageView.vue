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
      console.log(this)
    }
  }
}
</script>
