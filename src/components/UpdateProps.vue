<template>
  <div class="update-props">
    <div v-for="(item, index) in keys" :key="index">
      <span>{{ item }}</span>
      <input type="text" v-model="form[item]">
    </div>
    <div style="margin-top: 20px">
      <p>样式设置</p>
      <textarea name="" id="" cols="30" rows="10" v-model="styles"></textarea>
      <div>
        {{ fomatStyle }}
      </div>
    </div>
    <div>
      http://img.airtlab.com/productlogo/iPhone%206S.png
    </div>
    <button @click="confirm">确认</button>
  </div>
</template>

<script>
export default {
  props: {
    form: {},
    styles: 'width: 500px;',
    fomatStyle: {}
  },
  watch: {
    styles (val) {
      var list = val.split(';');
      const style = {}
      list.forEach(item => {
        if (item) {
          const obj = item.split(':')
          if (obj[0] && obj[1]) {
            const name = obj[0].replace(/\s/g, '');
            const value = obj[1].replace(/\s/g, '');
            style[name] = value;
          }
        }
      })
      this.fomatStyle = style;
    }
  },
  computed: {
    keys () {
      return Object.keys(this.form)
    }
  },
  methods: {
    confirm () {
      this.$emit('update', {
        form: this.form,
        styles: this.fomatStyle
      });
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
  border: 1px solid #333;
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
  margin-top: 20px;
  height: 100px;
}
</style>
