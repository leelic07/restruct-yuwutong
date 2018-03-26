<template>
  <el-row id="jail-editor" :gutter="0">
    <el-col :span="13" :offset="5">
      <el-form ref="form" :model="jails">
        <el-form-item label="监狱名称">
          <el-input v-model="jails.title" placeholder="请填写监狱名称"></el-input>
        </el-form-item>
        <el-form-item label="监狱简介">
          <vue-quill-editor :contents="jails.description" @editorChange="editorChange"></vue-quill-editor>
        </el-form-item>
        <el-form-item label="街道">
          <el-input v-model="jails.street" placeholder="请填写街道名称"></el-input>
        </el-form-item>
        <el-form-item label="行政区">
          <el-input v-model="jails.district" placeholder="请填写行政区名称"></el-input>
        </el-form-item>
        <el-form-item label="市">
          <el-input v-model="jails.city" placeholder="请填写所在市名称"></el-input>
        </el-form-item>
        <el-form-item label="省">
          <el-input v-model="jails.state" placeholder="请填写所在省名称"></el-input>
        </el-form-item>
        <el-form-item label="监狱邮编">
          <el-input v-model="jails.zipcode" placeholder="请填写监狱邮编"></el-input>
        </el-form-item>
        <el-form-item>
          <el-upload
            class="upload-demo"
            :action="_$agency + '/avatars'"
            name="avatar"
            :with-credentials="true"
            :headers="authorization"
            :file-list="fileList"
            :on-success="handleSuccess"
            :on-remove="handleRemove"
            :limit="1"
            :on-exceed="handleExceed"
            accept="image/jpeg,image/jpg"
            list-type="picture">
            <el-button size="normal" type="primary" plain>添加监狱图片</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg文件,大小不能超过1Mb</div>
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
        breadcrumb: ['主页', '监狱基本信息管理', '监狱基本信息新增'],
        fileList: [], // 上传图片列表
        jails: {
          title: '', // 监狱名
          description: '', // 监狱描述
          state: '', // 省
          city: '', // 市
          district: '', // 地区
          street: '', // 街道
          zipcode: '' // 监狱邮编
        }
      }
    },
    watch: {
      // 编辑监狱信息成功跳转到监狱信息页面
      addJailsResult(newValue) {
        this.$router.push({
          path: '/jails'
        })
      }
    },
    computed: {
      ...mapGetters({
        addJailsResult: 'addJailsResult', // 获取监狱编辑的结果
        authorization: 'authorization' // 上传图片的头部设置
      })
    },
    methods: {
      ...mapActions({
        getJailsInformation: 'getJailsInformation', // 获取法律法规信息
        addJails: 'addJails' // 点击更新添加监狱信息执行的方法
      }),
      ...mapMutations({
        breadCrumb: 'breadCrumb', // 设置商品编辑页面的面包屑信息
        uploadImg: 'uploadImg' // 上传成功将结果进行处理
      }),
      // 移除图片执行的方法
      handleRemove() {
        this.jails.image = ''
      },
      // 图片上传成功调用的方法
      handleSuccess(res, file) {
        this.uploadImage(res)
      },
      // 上传图片个数超过限制执行的方法
      handleExceed() {
        this.$message({
          type: 'warning',
          message: '每次只能上传一张图片'
        })
      },
      // 上传图片执行的方法
      uploadImage(file) {
        this.uploadImg(file)
        return false
      },
      // 点击更新执行的方法
      onSubmit() {
        this.addJails(this.jails)
      },
      // 富文本内容发生改变时执行的方法
      editorChange(contents) {
        this.jails.description = contents
      }
    },
    components: {
      VueQuillEditor
    },
    mounted() {
      this.breadCrumb(this.breadcrumb)
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  #jail-editor
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
