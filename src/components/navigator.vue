<template>
  <a class="navigator" data-module="navigator" :href="url">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'navigator',
  props: {
    url: String
  }
}
</script>
