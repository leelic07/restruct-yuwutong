<template>
  <el-row class="prison-affairs-disclosure-new" :gutter="0">
    <el-col :span="13" :offset="5">
      <el-form ref="form" :model="news" label-position="top" :rules="rules">
        <el-form-item label="新闻标题" prop="title">
          <el-input v-model="news.title" placeholder="请填写新闻标题"></el-input>
        </el-form-item>
        <el-form-item class="is-required" label="新闻内容" prop="contents">
          <m-quill-editor @editorChange="editorChange"></m-quill-editor>
        </el-form-item>
        <el-form-item>
          <el-upload
            class="upload-demo"
            :action="_$agency + '/avatars'"
            :headers="authorization"
            name="avatar"
            :on-success="handleSuccess"
            :on-remove="handleRemove"
            :on-exceed="handleExceed"
            :file-list="fileList"
            :limit="1"
            accept="image/jpeg,image/jpg"
            list-type="picture">
            <el-button size="normal" type="primary" plain>添加图片</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <!-- `checked` 为 true 或 false -->
          <el-checkbox v-model="news.isFocus">是否设为焦点新闻</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" size="small">更新</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      news: { // 需要添加的法律信息
        typeId: 3,
        title: '',
        contents: '',
        isFocus: false,
        sysFlag: 1
      },
      rules: {
        title: [{ required: true, message: '请填写新闻标题' }]
      },
      fileList: [],
      editorOption: {} // 富文本编辑器的配置
    }
  },
  watch: {
    // 返回添加狱务公开信息结果时跳转到狱务公开信息管理页
    addNewsResult(newValue) {
      window.history.back()
    }
  },
  computed: {
    ...mapGetters({
      addNewsResult: 'addNewsResult', // 获取添加狱务公开信息的结果
      authorization: 'authorization' // 获取上传图片得授权token
    })
  },
  mounted() {
  },
  methods: {
    ...mapActions({
      addNews: 'addNews' // 添加狱务公开信息
    }),
    // 添加图片选中图片时执行的方法
    // handleChange(file) {
    //   this.news.anotherImageUrl = file
    // },
    // 移除选中图片时执行的方法
    handleRemove() {
      this.news.anotherImageUrl = ''
    },
    // 当富文本内容发生改变时执行的方法
    editorChange(contents) {
      this.news.contents = contents
    },
    // 点击更新时执行的方法
    onSubmit() {
      this.addNews(this.news)
    },
    handleSuccess(res) {
      // console.log('上传成功')
      this.news.anotherImageUrl = res.url
    },
    handleExceed() {
      console.log('超出限制')
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
  .prison-affairs-disclosure-new
    padding-top: 35px
    & /deep/ .el-form-item
      .upload-demo
        .el-upload
          .el-upload__input
            display: none !important
      &:last-child
        .el-button
          float: right
</style>
