<template>
  <el-row :gutter="0" id="prisoner-import-index">
    <el-row :gutter="0" class="download-box">
      <el-col :span="22" :offset="2">
        <span>点击下载模板：</span>
        <a :href="prisonerRewardHref">罪犯奖惩信息导入模板</a>
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
          :action="_$agency + '/prisoner_reward_punishment/upload'"
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
        breadcrumb: ['主页', '罪犯奖惩信息管理'],
        prisonerRewardHref: this._$agency + '/upload/prisoner_reward_punishment_template.xls',
        fileList: []
      }
    },
    watch: {
      uploadTemplateResult(newValue){
        this.importPrisonerRewardPunishment({filepath: newValue.path});//上传罪犯奖惩模板文件成功后将罪犯奖惩数据给服务端解析
      }
    },
    computed: {
      ...mapGetters({
        prisonerRewardPunishmentResult: 'prisonerRewardPunishmentResult',//获取罪犯奖惩模板导入结果
        uploadTemplateResult: 'uploadTemplateResult'//上传罪犯奖惩模板文件的结果
      })
    },
    methods: {
      ...mapActions({
        importPrisonerRewardPunishment: 'importPrisonerRewardPunishment',//罪犯奖惩模板上传成功后将罪犯奖惩模板导入到服务端
        uploadTemplate: 'uploadTemplate'//上传罪犯奖惩信息到服务端
      }),
      ...mapMutations({
        breadCrumb: 'breadCrumb'
      }),
      //上传罪犯奖惩模板文件到服务端
      beforeUpload(file){
        this.uploadTemplate(file);
        return false;
      },
      //点击上传到服务器执行的方法
      submitUpload() {
        this.$refs.upload.submit();
      }
    },
    mounted(){
      this.breadCrumb(this.breadcrumb)
    }
  }
</script>
