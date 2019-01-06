<template>
  <div id="app">
    <div class="container">
      <div class="render-view">
        <RenderView :config="config"></RenderView>
      </div>
      <div class="editor-view">
        <EditorView :handleChange="handleChange" @add="handleAdd"></EditorView>
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
              component: 'TextView',
              nodes: '我是文本'
            },
            {
              component: 'Navigator',
              attrs: {
                url: 'https://www.baidu.com'
              },
              nodes: '去估价'
            },
            {
              component: 'Block',
              nodes: [
              ]
            }    
          ]
        }
      }
    },
    methods: {
      handleChange() {
        this.config.nodes.push({
          component: 'Inline',
          nodes: 'inline'
        })
      },
      handleAdd ({ name, attrs, styles }) {
        this.config.nodes.push({
          component: name,
          attrs: {
            ...attrs
          },
          style: {
            ...styles
          }
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
