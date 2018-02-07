<template>
  <el-row id="terminals-new">
    <el-col :span="9" :offset="7">
      <el-row :gutter="0"><h3>添加终端信息</h3></el-row>
      <el-row :gutter="0">
        <el-form :model="terminal" ref="terminal" label-position="left" label-width="90px">
          <el-form-item label="终端号">
            <el-input v-model="terminal.terminal_number" placeholder="请填写终端号"></el-input>
          </el-form-item>
          <el-form-item label="会议室号">
            <el-input v-model="terminal.room_number" placeholder="请填写会议室号"></el-input>
          </el-form-item>
          <el-form-item label="主持人密码">
            <el-input v-model="terminal.host_password" placeholder="请填写主持人密码"></el-input>
          </el-form-item>
          <el-form-item label="参与密码">
            <el-input v-model="terminal.metting_password" placeholder="请填写参与密码"></el-input>
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
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    data() {
      return {
        terminal: {
          terminal_number: '',
          room_number: '',
          host_password: '',
          metting_password: ''
        }
      }
    },
    watch: {
      addTerminalResult(newValue){
        this.$router.push({
          path: '/terminals'
        })
      }
    },
    computed: {
      ...mapGetters({
        addTerminalResult: 'addTerminalResult'//获取添加终端信息的结果
      })
    },
    methods: {
      ...mapActions({
        addTerminal: 'addTerminal'//添加终端信息
      }),
      //点击更新时执行的方法
      onSubmit(){
        this.addTerminal(this.terminal);
      }
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
            margin: 0 0 25px 30%
        &:last-child
          .el-button
            float: right
</style>
