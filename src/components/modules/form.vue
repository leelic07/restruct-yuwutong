<template>
  <div class="yt-form">
    <el-form
      v-if="flag"
      ref="form"
      :inline="items.formConfigs && items.formConfigs.inline"
      :label-width="items.formConfigs && items.formConfigs.labelWidth"
      :model="values"
      :rules="rules">
      <template v-for="(item, key) in items">
        <form-item
          v-if="dismiss.indexOf(key) < 0"
          :key="key"
          :prop="key"
          :item="item"
          :fields="values"
          @validateField="validateField" />
      </template>
    </el-form>
    <div v-if="items.buttons && items.buttons.length" class="button-box">
      <template v-for="(button, index) in items.buttons">
        <el-button
          v-if="button === 'add'"
          :key="index"
          size="small"
          type="primary"
          @click="onSubmit">新增</el-button>
        <el-button
          v-if="button === 'update'"
          :key="index"
          size="small"
          type="primary">更新</el-button>
        <el-button
          v-if="button === 'back'"
          :key="index"
          size="small">返回</el-button>
        <el-button
          v-if="button === 'next'"
          :key="index"
          size="small"
          type="primary">下一步</el-button>
      </template>
    </div>
  </div>
</template>

<script>
import formItem from './form-item'
import helper from '@/utils'
export default {
  components: { formItem },
  props: ['items'],
  data() {
    return {
      dismiss: ['buttons', 'formConfigs'],
      values: {},
      rules: {},
      flag: false
    }
  },
  mounted() {
    Object.keys(this.items).forEach(key => {
      if (this.dismiss.indexOf(key) >= 0) return
      this.initRules(this.items[key])
      this.items[key].rule && (this.rules[key] = this.items[key].rule)
    })
    this.flag = true
  },
  methods: {
    onSubmit(e) {
      console.log(this.values)
      this.$refs.form.validate(valid => {
        console.log(valid)
      })
    },
    // this.$refs.form.validateField(this.prop)
    validateField(e) {
      this.$refs.form.validateField(e)
    },
    initRules(item) {
      if (!item.rules || !item.rules.length) return
      item.rules.forEach((rule, index) => {
        if (index === 0) item.rule = []
        item.rule.push(this.ruleSwitch(rule, item.label, item.type))
      })
      delete item.rules
    },
    ruleSwitch(rule, label, type) {
      let plea = ['input', 'editor'].indexOf(type) > -1 ? '请输入' : '请选择'
      switch (rule) {
        case 'required':
          return { message: `${ plea }${ label }`, required: true }
        case 'isNumber':
          return { validator: helper.isNumber }
        default:
          return {}
      }
    }
  }
}
</script>

<style lang="css" scoped>
.button-box{
  padding-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
