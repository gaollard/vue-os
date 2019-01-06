<script>
  import Block from '../components/Block.vue';
  import Inline from '../components/Inline.vue';
  import TextView from '../components/TextView.vue';
  import Navigator from '../components/Navigator.vue';
  import ImageView from '../components/ImageView.vue';

  import { createNodes } from "../utils/utils";

  export default {
    components: {
      Block,
      Inline,
      TextView,
      Navigator,
      ImageView
    },
    props: ['config'],
    render: function (createElement) {
      return createNodes(this.config, createElement)
    }
  }
</script>
<style scoped>
  .component {
    margin: 2px;
    border: 1px solid rebeccapurple;
  }
</style>
