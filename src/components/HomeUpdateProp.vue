<template>
  <div class="update-props">
    <div class="col" v-for="(item, index) in keys" :key="index">
      <span>{{ item }}</span>
      <input type="text" v-model="propsData[item]">
    </div>
    <div class="col">
      <p>样式设置</p>
      <textarea cols="30" rows="10" v-model="currentStyle"></textarea>
      <div>{{ currentStyle }}</div>
    </div>
    <div v-show="false">
      <div>banner</div>
      <ul>
        <li>http://mall.airtlab.com/static/img/b1.524e4cf.jpg</li>
        <li>http://mall.airtlab.com/static/img/b2.9529091.jpg</li>
        <li>http://mall.airtlab.com/static/img/b3.f4be826.png</li>
      </ul>
      <div>普通图片</div>
      <ul>
        <li>http://mall.airtlab.com/static/img/c1.5962f87.jpg</li>
        <li>http://mall.airtlab.com/static/img/c2.b0d75f3.jpg</li>
        <li>http://mall.airtlab.com/static/img/c3.d57aaa2.jpg</li>
      </ul>
    </div>
    <button @click="confirm">确认</button>
  </div>
</template>

<script>
export default {
  props: {
    propsData: {},
    styles: String
  },
  data () {
    return {
      currentStyle: ''
    }
  },
  watch: {
    styles (val) {
      this.currentStyle = val
    }
  },
  computed: {
    keys () {
      return Object.keys(this.propsData)
    }
  },
  methods: {
    confirm () {
      this.$emit('add-module', {
        props: this.propsData,
        styles: this.currentStyle
      })
    }
  },
  created () {
    this.currentStyle = this.styles || ''
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
