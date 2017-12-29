<template>
  <div id="login">
    <el-row :gutter="0" class="loginBackground">
      <el-col :span="6" :offset="9">
        <el-col :span="24">
          <p class="projectName">狱务公开管理平台</p>
        </el-col>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label-width="0" prop="prisonCode">
            <el-input type="text" v-model="ruleForm2.prisonCode" auto-complete="off" placeholder="监狱代码"></el-input>
          </el-form-item>

          <el-form-item label-width="0" prop="username">
            <el-input type="text" v-model="ruleForm2.username" auto-complete="off" placeholder="用户名"></el-input>
          </el-form-item>

          <el-form-item label-width="0" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="密码"></el-input>
          </el-form-item>

          <el-form-item label-width="0" class="btn-box">
            <!-- `checked` 为 true 或 false -->
            <el-checkbox v-model="ruleForm2.checked">记住密码</el-checkbox>
            <el-button type="" @click="submitForm('ruleForm2')" >提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };

      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };

      var validatePrisonCode = (rule,value,callback) => {
        if (value === '') {
          callback(new Error('请输入监狱代码'));
        } else {
          callback();
        }
      }

      return {
        ruleForm2: {
          pass: '',
          username: '',
          prisonCode:'',
          checked:false//是否选总记住密码
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          prisonCode: [
            { validator: validatePrisonCode, trigger: 'blur'}
          ]
        }
      };

    },
    methods: {
      //点击提交按钮执行的方法
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  white = #fff
  #login
    .loginBackground
      background:#4F98C2
      margin-top:10%
    .projectName
      font-size: 35px
      color:white
      margin-top:20px
      margin-bottom:20px
    .btn-box
      & /deep/ .el-button
        background:#186C9C
        color:white
        float:right
        border:0
        border-radius:0
        width: 86px
        height:34px
        vertical-align:middle
      & /deep/ .el-checkbox
        float:left
      & /deep/ .el-checkbox__label
        color:white
</style>
