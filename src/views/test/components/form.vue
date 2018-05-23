<template>
  <div class="yt-form">
    <el-form
      v-if="flag"
      ref="form"
      :model="values"
      :rules="rules">
      <template v-for="(item, key) in items">
        <form-item
          v-if="key !== 'button'"
          :key="key"
          :prop="key"
          :item="item"
          :fields="values" />
      </template>
    </el-form>
    <div v-if="items.button && items.button.length" class="button-box">

    </div>
    <slot name="submit" @click="onSubmit">sss</slot>
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
      values: {},
      rules: {},
      flag: false
    }
  },
  mounted() {
    Object.keys(this.items).forEach(key => {
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
    initRules(item) {
      if (!item.rules || !item.rules.length) return
      item.rules.forEach((rule, index) => {
        if (index === 0) item.rule = []
        item.rule.push(this.ruleSwitch(rule, item.label, item.type))
      })
      delete item.rules
    },
    ruleSwitch(rule, label, type) {
      let plea = ['input'].indexOf(type) > -1 ? '请输入' : '请选择'
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

<style lang="css">
</style>
