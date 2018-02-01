<template>
  <el-row id="jail-editor" :gutter="0">
    <el-col :span="11" :offset="6">
      <el-form ref="form" :model="jails">
        <el-form-item label="监狱名称">
          <el-input v-model="jails.title" placeholder="请填写监狱名称"></el-input>
        </el-form-item>
        <el-form-item label="监狱简介">
          <!-- bidirectional data binding（双向数据绑定） -->
          <quill-editor v-model="jails.description"
                        ref="myQuillEditor"
                        :options="editorOption">
          </quill-editor>
          <el-upload
            v-show="false"
            class="upload-demo"
            :action="_$agency + '/prisoners/upload_img'"
            :before-upload="uploadImage"
            :file-list="fileListForEditor"
            :auto-upload="true"
            :limit="1"
            accept="image/*">
            <el-button class="custom-input" size="normal" type="primary" plain>添加富文本图片</el-button>
          </el-upload>
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
        <el-form-item>
          <img :src="_$agency + jails.image_url"
               alt="">
        </el-form-item>
        <el-form-item>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="fileList"
            :auto-upload="false"
            :on-change="handleChange"
            :on-remove="handleRemove"
            :limit="1"
            accept="image/*"
            list-type="picture">
            <el-button size="normal" type="primary" plain>添加监狱图片</el-button>
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
  import {mapActions, mapMutations, mapGetters} from 'vuex'
  import {quillEditor} from 'vue-quill-editor'

  export default {
    data() {
      const _this = this;
      return {
        breadcrumb: ['主页', '监狱基本信息管理', '监狱基本信息编辑'],
        fileList: [],//上传图片列表
        fileListForEditor: [],//富文本上传图片列表
        token: sessionStorage['token']//验证token
      }
    },
    watch: {
      uploadImageResult(newValue){
        newValue.code === 200 && this.editor.insertEmbed(this.editor.getSelection().index, 'image', `${this._$agency}${newValue.url}`)
      }
    },
    computed: {
      ...mapGetters({
        jails: 'jails',//获取编辑的监狱基本信息
        editorOption: 'editorOption',//获取富文本配置信息
        uploadImageResult: 'uploadImageResult'//获取富文本上传图片结果
      }),
      editor(){
        return this.$refs.myQuillEditor.quill
      }
    },
    methods: {
      ...mapActions({
        uploadImageFromEditor: 'uploadImageFromEditor',//富文本上传图片执行的方法
        editJails: 'editJails'//点击更新执行的方法
      }),
      ...mapMutations({
        breadCrumb: 'breadCrumb',//设置商品编辑页面的面包屑信息
      }),
      uploadImage(file){
        this.uploadImageFromEditor(file);
        return false;
      },
      //选择图片执行的方法
      handleChange(file){
        this.jails.image = file;
      },
      //移除图片执行的方法
      handleRemove(){
        this.jails.image = '';
      },
      //点击更新执行的方法
      onSubmit(){
        this.editJails(this.jails);
      },
    },
    mounted(){
      this.breadCrumb(this.breadcrumb);
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
        width: 100%
      &:last-child
        .el-button
          float: right
</style>
