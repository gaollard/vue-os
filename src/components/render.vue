<script>
  import Block from '../components/Block.vue';
  import Inline from '../components/Inline.vue';
  import {createNodes} from "../utils/utils";
  export default {
    components: {
      Block,
      Inline,
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
