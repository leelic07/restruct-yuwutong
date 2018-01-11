<template>
  <el-row id="law-new" :gutter="0">
    <el-col :span="10" :offset="7">
      <el-form ref="form" :model="law" label-width="80px">
        <el-form-item label="法律名称">
          <el-input v-model="law.title" placeholder="请填写法律名称"></el-input>
        </el-form-item>
        <el-form-item label="法律简介">
          <!--<el-input type="textarea" v-model="jails.description" :rows="8"></el-input>-->
          <!--<div class="edit_container">-->
          <!--<quill-editor-->
          <!--v-model="jails.description"-->
          <!--ref="myQuillEditor"-->
          <!--class="editer"-->
          <!--:options="editorOption"-->
          <!--@ready="onEditorReady($event)">-->
          <!--</quill-editor>-->
          <!--</div>-->
          <div id="editor"></div>
        </el-form-item>
        <el-form-item>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
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
  import {mapActions, mapMutations, mapGetters} from 'vuex'
  //  import {quillEditor} from 'vue-quill-editor'

  export default {
    data() {
      return {
        law: {//需要添加的法律信息
          title: ''
        },
        breadcrumb: ['主页', '法律法规信息管理', '添加法律信息'],
        fileList: [],
//        editorOption: {}//富文本编辑器的配置
      }
    },
    computed: {
      ...mapGetters({}),
//      editor() {
//        return this.$refs.myQuillEditor.quill
//      }
    },
    methods: {
      ...mapMutations({
        breadCrumb: 'breadCrumb',//设置商品编辑页面的面包屑信息
      }),
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
//      onEditorReady(editor){
//
//      }
    },
    mounted(){
      this.breadCrumb(this.breadcrumb);
    },
    components: {
//      quillEditor
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  #law-new
    padding-top: 35px
    .el-form-item
      .upload-demo
        .el-upload
          input
            display: none
      &:last-child
        .el-button
          float: right
</style>
