<template>
  <div class="yt-form">
    <m-form :items="formItems" @submit="onSubmit">
      <!-- <el-button slot="submit">提交</el-button> -->
    </m-form>
  </div>
</template>

<script>
import mForm from './components/form'
export default {
  components: { mForm },
  data() {
    return {
      formItems: {
        buttons: ['add', 'back', 'next'],
        a: { type: 'input', label: '姓名', rules: ['required'] },
        b: { type: 'radio', label: '性别', rules: ['required'] },
        c: { type: 'input', label: '年龄', rules: ['isNumber', 'required'] },
        d: { type: 'date', label: '出生日期' } // , rules: ['isDate']
      }
    }
  },
  methods: {
    onSubmit(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="css">
</style>
