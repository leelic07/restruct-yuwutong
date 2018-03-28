<template>
  <el-row id="terminals-new">
    <el-col :span="9" :offset="7">
      <el-row :gutter="0"><h3>添加终端信息</h3></el-row>
      <el-row :gutter="0">
        <el-form :model="terminal" ref="terminal" :rules="rule" label-position="left" label-width="100px">
          <el-form-item label="终端号" prop="terminalNumber">
            <el-input v-model="terminal.terminalNumber" placeholder="请填写终端号"></el-input>
          </el-form-item>
          <el-form-item label="会议室号">
            <el-input v-model="terminal.roomNumber" placeholder="请填写会议室号"></el-input>
          </el-form-item>
          <el-form-item label="主持人密码" prop="hostPassword">
            <el-input v-model="terminal.hostPassword" placeholder="请填写主持人密码"></el-input>
          </el-form-item>
          <el-form-item label="参与密码" prop="mettingPassword">
            <el-input v-model="terminal.mettingPassword" placeholder="请填写参与密码"></el-input>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="24">
          <el-button type="primary" size="small" @click="onSubmit">更新</el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data() {
    return {
      breadcrumb: ['主页', '终端管理', '添加终端信息'],
      terminal: {
        terminalNumber: '',
        roomNumber: '',
        hostPassword: '',
        mettingPassword: ''
      },
      rule: {
        terminalNumber: [{ required: true, message: '请填写终端号', trigger: 'blur' }],
        hostPassword: [{ required: true, message: '请填写主持人密码', trigger: 'blur' }],
        mettingPassword: [{ required: true, message: '请填写参与密码', trigger: 'blur' }]
      }
    }
  },
  watch: {
    // 添加终端信息成功返回到终端管理页面
    addTerminalResult(newValue) {
      this.$router.push({
        path: '/terminals/list'
      })
    }
  },
  computed: {
    ...mapGetters({
      addTerminalResult: 'addTerminalResult' // 获取添加终端信息的结果
    })
  },
  methods: {
    ...mapActions({
      addTerminal: 'addTerminal' // 添加终端信息
    }),
    ...mapMutations({
      breadCrumb: 'breadCrumb' // 设置添加终端页面面包屑的信息
    }),
    // 点击更新时执行的方法
    onSubmit() {
      this.$refs.terminal.validate(valid => {
        if (valid) this.addTerminal(this.terminal)
        else return false
      })
    }
  },
  mounted() {
    this.breadCrumb(this.breadcrumb)
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
  #terminals-new
    > .el-col
      margin-bottom: 25px
      > .el-row
        &:first-child
          h3
            float: left
            margin: 0 0 35px 30%
        &:last-child
          .el-button
            float: right
</style>
