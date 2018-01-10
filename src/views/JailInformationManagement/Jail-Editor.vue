<template>
  <el-row id="jail-editor" :gutter="0">
    <el-col :span="10" :offset="7">
      <el-form ref="form" :model="jails" label-width="80px">
        <el-form-item label="监狱名称">
          <el-input v-model="jails.title"></el-input>
        </el-form-item>
        <el-form-item label="详情">
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
        <el-form-item label="街道">
          <el-input v-model="jails.street"></el-input>
        </el-form-item>
        <el-form-item label="行政区">
          <el-input v-model="jails.district"></el-input>
        </el-form-item>
        <el-form-item label="市">
          <el-input v-model="jails.city"></el-input>
        </el-form-item>
        <el-form-item label="省">
          <el-input v-model="jails.state"></el-input>
        </el-form-item>
        <el-form-item>
          <img :src="_$baseUrl + '/system/jails/images/000/000/001/thumb/' + jails.image_file_name" alt="">
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
//  import {quillEditor} from 'vue-quill-editor'

  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        breadcrumb: ['主页', '监狱基本信息管理', '监狱基本信息编辑'],
        fileList: [],
//        editorOption: {}//富文本编辑器的配置
      }
    },
    computed: {
      ...mapGetters({
        jails: 'jails'//获取编辑的监狱基本信息
      }),
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
      let quill = new Quill('#editor', {
        modules: { toolbar: true },
        theme: 'snow'
      });
    },
    components: {
//      quillEditor
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  #jail-editor
    padding-top: 35px
    .el-form-item
      .upload-demo
        .el-upload
          input
            display: none
      img
        float:left
        width:100%
</style>
