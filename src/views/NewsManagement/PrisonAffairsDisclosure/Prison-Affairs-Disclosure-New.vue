<template>
  <el-row id="prison-affairs-disclosure-new" :gutter="0">
    <el-col :span="10" :offset="7">
      <el-form ref="form" :model="news" label-width="80px">
        <el-form-item label="新闻类型">
          <el-select v-model="news.type_id" placeholder="请选择">
            <el-option
              v-for="item,key in newsType"
              :key="item"
              :label="key"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="新闻名称">
          <el-input v-model="news.title" placeholder="请填写新闻名称"></el-input>
        </el-form-item>
        <el-form-item label="新闻简介">
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
          <!-- `checked` 为 true 或 false -->
          <el-checkbox v-model="news.checked">是否设为焦点新闻</el-checkbox>
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
        news: {//需要添加的法律信息
          type_id: 1,
          title: '',
          checked: false
        },
        breadcrumb: ['主页', '狱务公开信息管理', '狱务公开', '新闻信息管理'],
        fileList: [],
//        editorOption: {}//富文本编辑器的配置
        newsType: {//新闻类型
          '狱务公开': 1,
          '工作动态': 2,
          '投诉公示': 3
        }
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

<style type="text/stylus" lang="stylus" scoped>
  #prison-affairs-disclosure-new
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
