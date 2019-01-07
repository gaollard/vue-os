<template>
  <span data-module="TextView">
    <slot>{{ text }}</slot>
  </span>
</template>

<script>
export default {
  name: 'TextView',
  props: {
    text: String
  }
}
</script>
