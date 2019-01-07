<template>
  <a data-module="navigator" :href="url">
    <slot>{{ text }}</slot>
  </a>
</template>

<script>
export default {
  name: 'navigator',
  props: {
    url: String,
    text: String
  }
}
</script>
