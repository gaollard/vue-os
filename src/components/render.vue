<script>
  import Block from '../modules/Block.vue';
  import TextView from '../modules/TextView.vue';
  import Navigator from '../modules/Navigator.vue';
  import ImageView from '../modules/ImageView.vue';
  import ButtonView from '../modules/ButtonView.vue';

  import { createNodes } from "../utils/utils";

  export default {
    components: {
      Block,
      TextView,
      Navigator,
      ImageView,
      ButtonView
    },
    props: ['config'],
    methods: {
      HandleEdit (nodeId) {
        this.$emit('on-edit', nodeId);
      }
    },
    render: function (createElement) {
      return createNodes(this.config, createElement)
    }
  }
</script>
<style scoped>
.render-view {
  position: relative;
}
img {
  max-width: 100%;
}
.component {
  margin: 2px;
  border: 1px solid rebeccapurple;
}
</style>
