<template>
  <div class="view">
    <div class="module-list">
      <ul class="cmt-list">
        <li class="cmt-item" data-module-name="Block" @click="onClick('Block')">容器组件</li>
        <li class="cmt-item" data-module-name="Navigator" @click="onClick('Navigator')">导航组件</li>
        <li class="cmt-item" data-module-name="ImageView" @click="onClick('ImageView')">图片组件</li>
      </ul>
    </div>
    <UpdateProps
      style="flex: 1"
      v-if="showProps"
      :form="propsForm"
      @update="update"
    ></UpdateProps>
  </div>
</template>

<script>
  import Block from '../components/Block.vue';
  import Inline from '../components/Inline.vue';
  import ImageView from '../components/ImageView.vue';
  import Navigator from '../components/Navigator.vue';
  import UpdateProps from '../components/UpdateProps.vue';

  const components = {
    Block,
    Inline,
    ImageView,
    Navigator
  };

  export default {
    components: {
      UpdateProps
    },
    data() {
      return {
        components,
        showProps: false,
        propsForm: {},
        propsStyle: {},
        currentEditComponentName: ''
      }
    },
    methods: {
      update ({ form, styles }) {
        this.$emit('add', {
          name: this.currentEditComponentName,
          attrs: {
            ...form,
          },
          styles: {
            ...styles
          }
        })
      },
      onClick (name) {
        const VueComponent = components[name]
        this.currentEditComponentName = name;
        if (VueComponent.props){
          const form = {}
          for (let prop in VueComponent.props) {
            form[prop] = ''
          }
          this.propsForm = form
          this.propsStyle = {}
          this.showProps = true
        }
      }
    }
  }
</script>

<style scoped="">
.cmt-item {
  float: left;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  border: 1px solid #eaeaea;
  border-radius: 2px;
  margin-right: 10px;
  background-color: #eefbf9;
}

*[draggable=true] {
  cursor: move;
}

.view {
  display: flex;
}

.module-list {
  height: 667px;
  padding: 20px;
  border: 1px solid #333;
}
</style>
