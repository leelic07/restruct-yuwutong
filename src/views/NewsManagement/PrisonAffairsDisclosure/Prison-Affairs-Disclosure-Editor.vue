<template>
  <el-row id="prison-affairs-disclosure-editor" :gutter="0">
    <el-col :span="13" :offset="5">
      <el-form ref="form" :model="newsForEdit">
        <el-form-item label="新闻名称">
          <el-input v-model="newsForEdit.title" placeholder="请填写新闻名称"></el-input>
        </el-form-item>
        <el-form-item label="新闻详情">
          <vue-quill-editor :contents="newsForEdit.contents" @editorChange="editorChange"></vue-quill-editor>
        </el-form-item>
        <el-form-item>
          <img :src="_$agency + newsForEdit.imageUrl" alt="">
          <!--<img src="../../../assets/images/default.jpg" alt="">-->
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
            accept="image/*"
            list-type="picture">
            <el-button size="normal" type="primary" plain>添加图片</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <!-- `checked` 为 true 或 false -->
          <el-checkbox v-model="newsForEdit.isFocus">是否设为焦点新闻</el-checkbox>
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
  import VueQuillEditor from '@/components/Quill-Editor/Quill-Editor'
  export default {
    data() {
      return {
        breadcrumb: ['主页', '狱务公开信息管理', '新闻信息编辑'],
        fileList: [],
        fromPath: ''//来自哪个页面
      }
    },
    watch: {
      //监听编辑狱务公开信息的结果
      editNewsResult(newValue){
        window.history.back();
      }
    },
    computed: {
      ...mapGetters({
        newsForEdit: 'newsForEdit',//获取编辑的狱务公开基本信息
        editNewsResult: 'editNewsResult'//获取编辑狱务公开信息的结果
      })
    },
    methods: {
      ...mapActions({
        editNews: 'editNews'//编辑狱务公开信息
      }),
      ...mapMutations({
        breadCrumb: 'breadCrumb',//设置商品编辑页面的面包屑信息
        getNewsById: 'getNewsById'//根据id获取需要编辑的新闻信息
      }),
      //添加图片选中图片时执行的方法
      handleChange(file){
        this.newsForEdit.image = file;
      },
      //移除选中的图片时执行的方法
      handleRemove(){
        this.newsForEdit.image = '';
      },
      //当富文本内容发生变化时执行的方法
      editorChange(contents){
        this.newsForEdit.contents = contents;
      },
      //点击更新时执行的方法
      onSubmit(){
        this.editNews(this.newsForEdit);
      }
    },
    components: {
      VueQuillEditor
    },
    mounted(){
      this.breadCrumb(this.breadcrumb);
      this.getNewsById(this.$route.params.id);
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  #prison-affairs-disclosure-editor
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
        width: 200px
      &:last-child
        .el-button
          float: right
</style>
