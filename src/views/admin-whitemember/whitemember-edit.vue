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
          label="监狱名称"
          prop="jailId">
          <el-select
            v-model="whitemember.jailId"
            placeholder="请选择监狱名称"
            filterable
            :loading="gettingJails"
            clearable>
            <el-option
              v-for="item in prisonAll"
              :key="item.id"
              :label="item.title"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="用户名"
          prop="username">
          <el-input
            v-model="whitemember.username"
            placeholder="请填写用户名"></el-input>
        </el-form-item>
        <el-form-item
          label="角色"
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
        size="small">更新</el-button>
    </el-col>
  </el-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      rules: {
        jailId: [{ required: true, message: '请选择监狱名称' }],
        username: [{ required: true, message: '请填写用户名' }],
        role: [{ required: true, message: '请选择角色' }]
      },
      gettingJails: true
    }
  },
  computed: {
    ...mapState(['prisonAll', 'whitemember'])
  },
  methods: {
    ...mapActions(['updateWhitemember', 'getPrisonAll', 'getWhitememberDetail']),
    onSubmit() {
      this.$refs.whitemember.validate(valid => {
        if (valid) {
          this.updateWhitemember(this.whitemember).then(res => {
            if (!res) return
            this.$router.push('/prison-user/list')
          })
        }
      })
    }
  },
  mounted() {
    this.getPrisonAll().then(res => {
      this.gettingJails = false
    })
    this.getWhitememberDetail(this.$route.params.id)
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>

</style>
