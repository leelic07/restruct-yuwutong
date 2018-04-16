<template>
  <el-row
    class="row-container"
    :gutter="0">
    <el-row :gutter="0">
      <el-col :span="22" :offset="2">
        <span>点击下载模板：</span>
        <a :href="prisonTermHref">刑期变动信息导入模板</a>
      </el-col>
    </el-row>
    <el-row :gutter="0">
      <el-col :span="22" :offset="2">
        <span>上传模板文件：</span>
        <p>限制文件后缀名为<span class="red">.xls</span></p>
      </el-col>
    </el-row>
    <el-row :gutter="0">
      <el-col :span="6" :offset="2">
        <el-upload class="upload-demo" ref="upload" :action="_$agency + '/prison_term/upload'" :before-upload="beforeUpload" :file-list="fileList" :auto-upload="false" :limit="1" accept=".xls">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传.xls文件</div>
        </el-upload>
      </el-col>
    </el-row>
    <el-row v-if="prisonTerms.length">
      <!--上传模板文件的结果-->
      <el-table :data="prisonTerms">
        <el-table-column label="罪犯编号" prop="prisonerNumber"></el-table-column>
        <el-table-column label="减刑时间" prop="changedate"></el-table-column>
        <el-table-column label="变动类型" prop="changetype"></el-table-column>
        <el-table-column label="减刑始日" prop="termStart"></el-table-column>
        <el-table-column label="减刑止日" prop="termFinish"></el-table-column>
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
      prisonTermHref: `${ this._$baseURL }/download/downloadfile?filepath=prison_term_template.xls`, // 下载罪犯刑期模板文件的地址
      fileList: []
    }
  },
  watch: {
    uploadResult(newValue) {
      this.importPrisonTerm({ filepath: newValue.path }) // 罪犯刑期模板上传成功后将罪犯刑期数据给服务端解析
    },
    prisonTermResult(newValue) {
      this.alertInformation(newValue)
    }
  },
  computed: {
    ...mapGetters({
      prisonTermResult: 'prisonTermResult', // 获取刑期变动模板导入结果
      uploadResult: 'uploadResult', // 获取上传罪犯刑期模板文件的结果
      prisonTerms: 'prisonTerms' // 获取罪犯刑期变动的模板文件
    })
  },
  methods: {
    ...mapActions({
      importPrisonTerm: 'importPrisonTerm', // 刑期变动模板上传成功后将刑期变动模板导入到服务端
      uploadFile: 'uploadFile' // 上传罪犯刑期模板文件到服务端
    }),
    ...mapMutations({
      resetPrisonTerms: 'resetPrisonTerms' // 重置刑期变动信息
    }),
    // 上传罪犯刑期模板文件到服务端
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
    this.resetPrisonTerms()
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
.row-container
  min-height: 370px;
  line-height: 40px;
  .red
    color: #F56C6C;
    font-weight: bold;
</style>
