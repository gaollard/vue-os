<template>
  <div class="container">
    <div class="render-view">
      <RenderView :config="nodeTree"></RenderView>
    </div>
    <div class="editor-view">
      <HomeEditor @add="handleAdd"></HomeEditor>
    </div>
  </div>
</template>

<script>
import RenderView from '../components/render.vue';
import HomeEditor from '../components/HomeEditor.vue';

export default {
  name: 'Home',
  components: {
    RenderView,
    HomeEditor
  },
  computed: {
    nodeTree () {
      return this.$store.state.nodeTree
    }
  },
  methods: {
    handleAdd ({ name, attrs, styles }) {
      this.$store.dispatch('handleAdd', {
        name, attrs, styles
      })
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
}

.render-view {
  position: relative;
  width: 375px;
  height: 667px;
  margin: 20px;
  border: 1px solid #ddd;
}

.editor-view {
  flex: 1;
  padding: 20px;
  min-height: 100vh;
}
</style>
