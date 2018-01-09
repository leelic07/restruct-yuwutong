<template>
  <el-row :gutter="0" id="orders-import-index">
    <el-row :gutter="0" class="download-box">
      <el-col :span="22" :offset="2">
        <span>点击下载模板：</span>
        <a :href="prisonerHref">家属订单导入模板</a>
      </el-col>
    </el-row>

    <el-row :gutter="0" class="title-box">
      <el-col :span="22" :offset="2">
        <p>上传模板文件：</p>
        <p>限制文件后缀名为
          <el-tag type="danger">.xls</el-tag>
        </p>
      </el-col>
    </el-row>

    <el-row :gutter="0">
      <el-col :span="6" :offset="1">
        <el-upload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false"
          :limit="1"
          accept=".xls"
        >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传.xls文件</div>
        </el-upload>
      </el-col>
    </el-row>

  </el-row>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    data() {
      return {
        breadcrumb: ['主页', '订单信息管理'],
//        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        fileList: [],
        prisonerHref: this._$baseUrl + '/upload/order_template.xls'
      }
    },
    methods: {
      ...mapMutations({
        breadCrumb: 'breadCrumb'
      }),
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    },
    mounted(){
      this.breadCrumb(this.breadcrumb)
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  #orders-import-index
    min-height:370px
    .download-box
      margin-top: 35px
    .title-box
      margin-top: 30px
    & /deep/ .upload-demo
      margin-bottom: 45px
      > .el-button
        margin-top: 20px
      .el-upload
        margin-right: 50%
        margin-top: 15px
        .el-button
          float: left
        input[type=file]
          display: none

</style>
