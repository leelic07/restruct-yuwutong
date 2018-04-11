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
        <el-upload class="upload-demo" ref="upload" :action="_$agency + '/prisoner_reward_punishment/upload'" :before-upload="beforeUpload" :file-list="fileList" :auto-upload="false" :limit="1" accept=".xls">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传.xls文件</div>
        </el-upload>
      </el-col>
    </el-row>
    <el-row v-if="prisonerRewardPunishments.length">
      <!--上传模板文件的结果-->
      <el-table :data="prisonerRewardPunishments">
        <el-table-column label="罪犯编号" prop="prisonerNumber"></el-table-column>
        <el-table-column label="罪犯名字" prop="prisonerName"></el-table-column>
        <el-table-column label="年份" prop="datayear"></el-table-column>
        <el-table-column label="奖惩内容" prop="ndry"></el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="scope">
            {{scope.row.createdAt | Date}}
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </el-row>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      prisonerRewardHref: `${ this._$baseURL }/download/downloadfile?filepath=prisoner_reward_punishment_template.xls`,
      fileList: []
    }
  },
  watch: {
    uploadResult(newValue) {
      this.importPrisonerRewardPunishment({ filepath: newValue.path }) // 上传罪犯奖惩模板文件成功后将罪犯奖惩数据给服务端解析
    },
    prisonerRewardPunishmentResult(newValue) {
      this.alertInformation(newValue)
    }
  },
  computed: {
    ...mapGetters({
      prisonerRewardPunishmentResult: 'prisonerRewardPunishmentResult', // 获取罪犯奖惩模板导入结果
      uploadResult: 'uploadResult', // 上传罪犯奖惩模板文件的结果
      prisonerRewardPunishments: 'prisonerRewardPunishments'// 上传模板返回信息
    })
  },
  methods: {
    ...mapActions({
      importPrisonerRewardPunishment: 'importPrisonerRewardPunishment', // 罪犯奖惩模板上传成功后将罪犯奖惩模板导入到服务端
      uploadFile: 'uploadFile' // 上传罪犯奖惩信息到服务端
    }),
    ...mapMutations({
      resetPrisonerRewardPunishments: 'resetPrisonerRewardPunishments' // 重置罪犯奖惩信息
    }),
    // 上传罪犯奖惩模板文件到服务端
    beforeUpload(file) {
      this.uploadFile(file)
      return false
    },
    // 点击上传到服务器执行的方法
    submitUpload() {
      this.$refs.upload.submit()
    },
    // 解析文件成功后执行的方法
    alertInformation(information) {
      this.$notify({
        title: '解析结果提示',
        dangerouslyUseHTMLString: true,
        message: `<p>新增：${ information.add_total }</p>
                  <p>成功：${ information.success_total }</p>
                  <p>修改：${ information.update_total }</p>`,
        duration: 5000,
        offset: 100
      })
    }
  },
  mounted() {
    this.resetPrisonerRewardPunishments()
  }
}
</script>
