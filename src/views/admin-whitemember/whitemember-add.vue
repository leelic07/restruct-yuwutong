<template>
  <el-row
    class="page-edit"
    :gutter="0">
    <el-col
      :span="9"
      :offset="7">
      <el-form
        :model="whitemember"
        :rules="rules"
        ref="whitemember"
        label-position="top">
        <el-form-item
          label="手机号"
          prop="phone">
          <el-input
            v-model="whitemember.phone"
            placeholder="请填写手机号">
            <el-button
              slot="append"
              :disabled="isChecked"
              @click="onCheck">检验</el-button>
          </el-input>
        </el-form-item>
        <el-form-item
          label="省份"
          prop="username">
          <el-input
            v-model="whitemember.username"
            placeholder="请填写用户名"></el-input>
        </el-form-item>
        <el-form-item
          label="城市"
          prop="role">
          <el-select
            v-model="whitemember.role"
            placeholder="请选择角色"
            clearable>
            <el-option
              v-for="item in $store.state.role"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-button
        class="submit"
        type="primary"
        @click="onSubmit"
        size="small">新增</el-button>
    </el-col>
  </el-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import helper from '@/utils'

export default {
  data() {
    return {
      rules: {
        phone: [{ required: true, message: '请填写手机号' }, { validator: helper.phone }],
        username: [{ required: true, message: '请填写用户名' }],
        role: [{ required: true, message: '请选择角色' }]
      },
      phone: '',
      isChecked: false,
      gettingJails: true,
      whitemember: {}
    }
  },
  computed: {
    ...mapState(['prisonAll'])
  },
  watch: {
    'whitemember.phone'(val) {
      if (this.phone === val) {
        this.isChecked = true
      }
      else {
        var reg = /^1\d{10}$/
        if (val && (reg.test(val))) {
          this.isChecked = false
        }
        else {
          this.isChecked = true
        }
      }
    }
  },
  methods: {
    ...mapActions(['addWhitemember', 'checkPhoneWhitemember', 'getPrisonAll']),
    onSubmit() {
      this.$refs.whitemember.validate(valid => {
        if (valid) {
          this.addWhitemember(this.whitemember).then(res => {
            if (!res) return
            this.$router.push('/prison-user/list')
          })
        }
      })
    },
    onCheck() {
      this.$refs.whitemember.validateField('phone', valid => {
        if (valid) return
        this.checkPhoneWhitemember(this.whitemember.phone).then(res => {
          if (!res) return
          this.phone = this.whitemember.phone
          this.isChecked = true
        })
      })
    }
  },
  mounted() {
    console.log(this)
    this.getPrisonAll().then(res => {
      this.gettingJails = false
    })
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>

</style>
