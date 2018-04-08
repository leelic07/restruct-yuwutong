<template>
  <el-row id="terminals-edit">
    <el-col :span="9" :offset="7">
      <el-row :gutter="0"><h3>编辑终端信息</h3></el-row>
      <el-row :gutter="0">
        <el-form :model="terminalForEdit" :rules="rule" ref="terminal" label-position="left" label-width="100px">
          <el-form-item label="终端号" prop="terminalNumber">
            <el-input v-model="terminalForEdit.terminalNumber" placeholder="请填写终端号"></el-input>
          </el-form-item>
          <el-form-item label="会议室号">
            <el-input v-model="terminalForEdit.roomNumber" placeholder="请填写会议室号"></el-input>
          </el-form-item>
          <el-form-item label="主持人密码" prop="hostPassword">
            <el-input v-model="terminalForEdit.hostPassword" placeholder="请填写主持人密码"></el-input>
          </el-form-item>
          <el-form-item label="参与密码" prop="mettingPassword">
            <el-input v-model="terminalForEdit.mettingPassword" placeholder="请填写参与密码"></el-input>
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
      rule: {
        terminalNumber: [{ required: true, message: '请填写终端号', trigger: 'blur' }],
        hostPassword: [{ required: true, message: '请填写主持人密码', trigger: 'blur' }],
        mettingPassword: [{ required: true, message: '请填写参与密码', trigger: 'blur' }]
      }
    }
  },
  watch: {
    // 监听编辑终端信息成功的结果然后返回终端管理页面
    editTerminalResult(newValue) {
      this.$router.push({
        path: '/terminals/list'
      })
    }
  },
  computed: {
    ...mapGetters({
      terminalForEdit: 'terminalForEdit', // 获取需要编辑的终端信息
      editTerminalResult: 'editTerminalResult' // 获取编辑终端信息的结果
    })
  },
  methods: {
    ...mapActions({
      editTerminal: 'editTerminal' // 编辑终端信息
    }),
    ...mapMutations({
      getTerminalById: 'getTerminalById' // 根据id获取终端信息
    }),
    // 点击更新时执行的方法
    onSubmit() {
      this.$refs.terminal.validate(valid => {
        if (valid) this.editTerminal(this.terminalForEdit)
        else return false
      })
    }
  },
  mounted() {
    this.getTerminalById(this.$route.params.id)
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
  #terminals-edit
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
