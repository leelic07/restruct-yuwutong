<template>
  <el-form
    v-if="show"
    ref="form"
    :model="formData"
    :rules="rules"
    :inline="inline"
    :label-position="labelPosition"
    :label-width="labelWidth">
    <template v-for="(item, index) in formItem">
      <items :formData="formData" :key="index" :attribute="index" :item="item" @clear="onClear"></items>
    </template>
    <el-button class="form-button" size="mini" type="primary" @click="onSubmit" :loading="buttonLoading">{{ buttonText }}</el-button>
    <slot />
  </el-form>
</template>

<script>
import Items from './form-item'
export default {
  components: { Items },
  props: {
    formItem: {
      type: Object,
      required: true
    },
    inline: {
      type: Boolean,
      default: false
    },
    labelPosition: {
      type: String,
      default: 'right'
    },
    labelWidth: {
      type: String
    },
    buttonLoading: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: '提交'
    }
  },
  data() {
    return {
      show: false,
      formData: {},
      rules: {}
    }
  },
  watch: {
    formItem: {
      handler: function(val) {
        console.log(123)
        this.render()
        console.log(this.formData)
      },
      deep: true
    }
  },
  mounted() {
    this.render()
  },
  methods: {
    render() {
      this.show = false
      let rule = {}
      Object.keys(this.formItem).forEach(key => {
        this.formData[key] = this.formItem[key].value
        if (!this.formItem[key].rules) return
        rule[key] = this.addRules(key, this.formItem[key].rules, this.formItem[key])
      })
      this.rules = Object.assign({}, rule)
      this.show = true
    },
    addRules(prop, rules, item) {
      let arr = [], setting = {}
      rules.forEach((rule, index) => {
        switch (rule) {
          case 'required':
            setting = {
              required: true,
              message: `${ item.type === 'select' ? '请选择' : '请输入' }${ item.label }`
            }
            arr.push(Object.assign({}, setting))
            break
          case 'required-blur':
            setting = {
              required: true,
              message: `${ item.type === 'select' ? '请选择' : '请输入' }${ item.label }`,
              trigger: 'blur'
            }
            arr.push(Object.assign({}, setting))
            break
          default:
            //
        }
      })
      return arr
    },
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          this.$emit('submit', false)
        }
        else {
          this.$emit('submit', this.formData)
        }
      })
    },
    onClear(e) {
      this.formData[e] = ''
      // this.formData = Object.assign({}, this.formData, { [e]: undefined })
      // console.log(this.formData)
      // console.log(e)
      // console.log(this.$refs.form)
      // let field = this.$refs.form.fields.find(item => {
      //   return item.labelFor === e
      // })
      // field.resetField()
      // console.dir(this.formData)
      // console.dir(this.formData)
    }
  }
}
</script>

<style lang="css">
.form-button{
  float: right;
  margin-bottom: 20px;
}
</style>
