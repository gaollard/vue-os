<template>
  <div id="app">
    <div class="container">
      <div class="render-view">
        <RenderView :config="config"></RenderView>
      </div>
      <div class="editor-view">
        <EditorView :handleChange="handleChange"></EditorView>
      </div>
    </div>
  </div>
</template>

<script>
  import RenderView from './components/render.vue';
  import EditorView from './components/editor.vue';
  export default {
    name: 'App',
    components: {
      RenderView,
      EditorView
    },
    data() {
      return {
        config: {
          component: 'Block',
          nodes: [
            {
              component: 'Inline',
              nodes: 'inline'
            }
          ]
        }
      }
    },
    methods: {
      handleChange () {
        this.config.nodes.push({
          component: 'Inline',
          nodes: 'inline'
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
    width: 30%;
    padding: 20px;
    min-height: 100vh;
    border: 1px solid #ddd;
  }

  .editor-view {
    width: 70%;
    padding: 20px;
    min-height: 100vh;
  }
</style>
