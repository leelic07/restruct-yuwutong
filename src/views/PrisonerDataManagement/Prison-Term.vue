<template>
  <el-row :gutter="0" id="prisoner-import-index">
    <el-row :gutter="0" class="download-box">
      <el-col :span="22" :offset="2">
        <span>点击下载模板：</span>
        <a :href="prisonTermHref">刑期变动信息导入模板</a>
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
          :action="_$agency + '/prison_term/upload'"
          :before-upload="beforeUpload"
          :file-list="fileList"
          :auto-upload="false"
          :limit="1"
          accept=".xls">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传.xls文件</div>
        </el-upload>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
  import {mapMutations, mapActions, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        breadcrumb: ['主页', '刑期变动信息管理'],
        prisonTermHref: this._$agency + '/download/downloadfile?filepath=prison_term_template.xls',//下载罪犯刑期模板文件的地址
        fileList: []
      }
    },
    watch: {
      uploadResult(newValue){
        this.importPrisonTerm({filepath: newValue.path});//罪犯刑期模板上传成功后将罪犯刑期数据给服务端解析
      }
    },
    computed: {
      ...mapGetters({
        prisonTermResult: 'prisonTermResult',//获取刑期变动模板导入结果
        uploadResult: 'uploadResult'//获取上传罪犯刑期模板文件的结果
      })
    },
    methods: {
      ...mapActions({
        importPrisonTerm: 'importPrisonTerm',//刑期变动模板上传成功后将刑期变动模板导入到服务端
        uploadFile: 'uploadFile'//上传罪犯刑期模板文件到服务端
      }),
      ...mapMutations({
        breadCrumb: 'breadCrumb'
      }),
      //上传罪犯刑期模板文件到服务端
      beforeUpload(file){
        this.uploadFile(file);
        return false;
      },
      //点击上传到服务器执行的方法
      submitUpload(){
        this.$refs.upload.submit();
      }
    },
    mounted(){
      this.breadCrumb(this.breadcrumb)
    }
  }
</script>
