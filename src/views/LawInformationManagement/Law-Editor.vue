<template>
  <el-row id="law-editor" :gutter="0">
    <el-col :span="11" :offset="6">
      <el-form ref="form" :model="lawForEdit">
        <el-form-item label="监狱名称">
          <el-input v-model="lawForEdit.title" placeholder="请填写监狱名称"></el-input>
        </el-form-item>
        <el-form-item label="法律简介">
          <vue-quill-editor :contents="lawForEdit.contents" @editorChange="editorChange"></vue-quill-editor>
        </el-form-item>
        <el-form-item>
          <img :src="_$agency + lawForEdit.image_url" alt="">
        </el-form-item>
        <el-form-item>
          <el-upload
            class="upload-demo"
            :action="_$agency"
            :on-remove="handleRemove"
            :on-change="handleChange"
            :file-list="fileList"
            :auto-upload="false"
            :limit="1"
            :with-credentials="true"
            accept="image/*"
            list-type="picture">
            <el-button size="normal" type="primary" plain>添加图片</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" size="small">更新</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import VueQuillEditor from '@/components/Quill-Editor/Quill-Editor'

export default {
  data() {
    return {
      breadcrumb: ['主页', '法律法规信息管理', '法律信息编辑'],
      fileList: [],
      editorOption: {} // 富文本编辑器的配置
    }
  },
  watch: {
    editLawResult(newValue) {
      this.$router.push({
        path: '/laws'
      })
    }
  },
  computed: {
    ...mapGetters({
      lawForEdit: 'lawForEdit', // 获取编辑的监狱基本信息
      editLawResult: 'editLawResult' // 获取编辑法律法规结果
    }),
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  methods: {
    ...mapActions({
      editLaw: 'editLaw', // 编辑法律法规执行的方法
      getLawsInformation: 'getLawsInformation' // 获取法律法规列表信息
    }),
    ...mapMutations({
      breadCrumb: 'breadCrumb', // 设置商品编辑页面的面包屑信息
      getLawById: 'getLawById' // 根据id获取需要编辑的法律信息
    }),
    // 点击更新执行的方法
    onSubmit() {
      this.editLaw(this.lawForEdit)
    },
    // 移除图片时执行的方法
    handleRemove() {
      this.lawForEdit.image = ''
    },
    handleChange(file) {
      this.lawForEdit.image = file
    },
    // 富文本内容发生变化时执行的方法
    editorChange(contents) {
      this.lawForEdit.contents = contents
    }
  },
  components: {
    VueQuillEditor
  },
  mounted() {
    this.breadCrumb(this.breadcrumb)
    this.getLawById(this.$route.params.id)
  }
}
</script>

<style type="text/stylus" lang="stylus">
  #law-editor
    padding-top: 35px
    .el-form-item
      .el-form-item__label
        float: none
      .upload-demo
        .el-upload
          input
            display: none
      img
        float: left
        max-width: 100%
      &:last-child
        .el-button
          float: right
</style>
