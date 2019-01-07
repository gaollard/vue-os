<template>
  <div class="view">
    <div class="module-list">
      <HomeMateriel @on-click-materiel="onClickMateriel"></HomeMateriel>
    </div>
    <HomeUpdateProp
      style="flex: 1"
      v-if="showProps"
      :propsData="propsForm"
      @add-module="addModule"
    ></HomeUpdateProp>
  </div>
</template>

<script>
import Block from '../modules/Block.vue';
import TextView from '../modules/TextView.vue';
import ImageView from '../modules/ImageView.vue';
import ButtonView from '../modules/ButtonView.vue';
import Navigator from '../modules/Navigator.vue';

import HomeMateriel from './HomeMateriel.vue';
import HomeUpdateProp from './HomeUpdateProp.vue';

const modules = {
  Block,
  TextView,
  ImageView,
  Navigator,
  ButtonView
};

export default {
  components: {
    HomeMateriel,
    HomeUpdateProp
  },
  data() {
    return {
      showProps: false,
      propsForm: {},
      propsStyle: {},
      // 当前正在编辑的模块名
      curEditMateriel: ''
    }
  },
  methods: {

    /**
     * 添加物料
     */
    addModule ({ props, styles, name }) {
      this.$store.dispatch('addModule', {
        props,
        styles,
        name: this.curEditMateriel
      })
    },

    /**
     * 点击物料
     * 展示物料编辑区域
     */
    onClickMateriel (name) {
      const module = modules[name]
      this.curEditMateriel = name;
      if (module.props){
        const form = {}
        for (let prop in module.props) {
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
  border: 1px solid #eaeaea;
}
</style>
