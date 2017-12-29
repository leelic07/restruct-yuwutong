<template>
  <el-row :gutter="0" id="prisoner-import-index">
    <el-row :gutter="0" class="download-box">
      <el-col :span="22" :offset="2">
        <span>点击下载模板：</span>
        <a href="#">罪犯奖惩信息导入模板</a>
      </el-col>
    </el-row>

    <el-row :gutter="0" class="title-box">
      <el-col :span="22" :offset="2">
        <p>上传模板文件：</p>
        <p>限制文件后缀名为 <el-tag type="danger">.xls</el-tag></p>
      </el-col>
    </el-row>

    <el-row :gutter="0" class="button-box">
      <el-col :span="23" :offset="1">
        <input type="file">
        <el-button>选择本地文件</el-button>
      </el-col>
      <el-col :span="22" :offset="2">
        <el-button type="primary">导入文件</el-button>
      </el-col>
    </el-row>

  </el-row>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    data() {
      return {
        breadcrumb:['主页','罪犯奖惩信息管理']
      }
    },
    methods:{
      ...mapMutations({
        breadCrumb:'breadCrumb'
      })
    },
    mounted(){
      this.breadCrumb(this.breadcrumb)
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  #prisoner-import-index
    .download-box
      margin-top: 35px
    .title-box
      margin-top:30px
    .button-box
      .el-col:first-child
        position:relative
        margin-top:15px
        input[type=file]
          position:absolute
          top:0
          left:0
          width:126px
          height:40px
          opacity:0
          &:hover
            cursor:pointer
        .el-button
          color:#6096EE
          border-color:#6096EE
      .el-col:nth-child(2)
        margin-top:25px
        margin-bottom:35px
</style>
