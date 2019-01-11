<template>
  <div class="update-props">
    <p>节点ID: {{ options.nodeId }}</p>
    <div class="col" v-for="(item, index) in keys" :key="index">
      <span>{{ item }}</span>
      <input type="text" v-model="currentOptions.props[item]">
    </div>
    <div class="col">
      <p>样式设置</p>
      <textarea cols="30" rows="10" v-model="currentOptions.style"></textarea>
      <div>{{ currentOptions.style }}</div>
    </div>
    <button @click="confirm">确认</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    options () {
      return this.$store.state.edit.options
    },
    keys () {
      return Object.keys(this.options.props)
    }
  },
  data () {
    return {
      currentOptions: {}
    }
  },
  watch: {
    options: {
      handler (val) {
        this.currentOptions = val
        this.currentStyle = val.style
      },
      immediate: true,
    },
    currentOptions: {
      deep: true,
      handler (val) {
        console.log(val)
        this.confirm()
      }
    }
  },
  methods: {
    confirm () {
      this.$store.dispatch('edit/updateData', {
        ...this.currentOptions
      })
    }
  }
}
</script>

<style scoped>
.update-props {
  width: 300px;
  height: 600px;
  padding: 20px;
  margin-left: 40px;
  border: 1px solid #eaeaea;
}

input {
  width: 200px;
  height: 35px;
  padding: 4px;
  line-height: 35px;
}

button {
  width: 60px;
  height: 34px;
  margin-top: 30px;
  cursor: pointer;
}

textarea {
  height: 100px;
  border: 1px solid #eaeaea;
}

.col {
  margin-top: 20px;
}
</style>
