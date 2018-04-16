<template>
  <el-row
    class="row-container"
    :gutter="0">
    <el-row :gutter="0">
      <el-col :span="22" :offset="2">
        <span>点击下载模板：</span>
        <a :href="prisonerHref">罪犯信息导入模板</a>
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
        <el-upload class="upload-demo" ref="upload" :action="_$agency + '/prisoners/upload'" :before-upload="beforeUpload" :file-list="fileList" :auto-upload="false" :limit="1" accept=".xls">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传.xls文件</div>
        </el-upload>
      </el-col>
    </el-row>
    <el-row v-if="prisonerData.length">
      <!--上传模板文件的结果-->
      <el-table :data="prisonerData">
        <el-table-column label="罪犯编号" prop="prisonerNumber"></el-table-column>
        <el-table-column label="罪犯名字" prop="name"></el-table-column>
        <el-table-column label="性别">
          <template slot-scope="scope">
            {{scope.row.gender | gender}}
          </template>
        </el-table-column>
        <el-table-column label="犯罪事实" prop="crimes"></el-table-column>
        <el-table-column label="附加刑" prop="additionalPunishment"></el-table-column>
        <el-table-column label="现刑期起日">
          <template slot-scope="scope">
            {{scope.row.prisonTermStartedAt | Date}}
          </template>
        </el-table-column>
        <el-table-column label="现刑期止日">
          <template slot-scope="scope">
            {{scope.row.prisonTermEndedAt | Date}}
          </template>
        </el-table-column>
        <el-table-column label="地区" prop="prisonArea"></el-table-column>
        <el-table-column label="原判刑期" prop="originalSentence"></el-table-column>
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
      fileList: [],
      prisonerHref: `${ this._$baseURL }/download/downloadfile?filepath=prison_template.xls`
    }
  },
  watch: {
    uploadResult(newValue) {
      this.importPrisoner({ filepath: newValue.path })
    },
    prisonerDataResult(newValue) {
      this.alertInformation(newValue)
    }
  },
  computed: {
    ...mapGetters({
      prisonerDataResult: 'prisonerDataResult', // 获取罪犯模板导入结果
      uploadResult: 'uploadResult', // 获取上传罪犯模板文件的结果
      prisonerData: 'prisonerData' // 获取上传罪犯模板成功的信息
    })
  },
  methods: {
    ...mapActions({
      importPrisoner: 'importPrisoner', // 罪犯数据模板上传成功后将罪犯数据模板导入到服务端
      uploadFile: 'uploadFile' // 上传罪犯模板文件到服务端
    }),
    ...mapMutations({
      resetprisonerData: 'resetprisonerData' // 重置罪犯模板信息
    }),
    submitUpload() {
      this.$refs.upload.submit()
    },
    beforeUpload(file) {
      this.uploadFile(file)
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
    this.resetprisonerData()
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
