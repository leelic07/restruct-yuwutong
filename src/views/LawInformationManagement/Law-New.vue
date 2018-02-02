<template>
  <el-row id="law-new" :gutter="0">
    <el-col :span="11" :offset="6">
      <el-form ref="form" :model="law">
        <el-form-item label="法律名称">
          <el-input v-model="law.title" placeholder="请填写法律名称"></el-input>
        </el-form-item>
        <el-form-item label="法律简介">
          <vue-quill-editor :contents="law.contents" @editorChange="editorChange"></vue-quill-editor>
        </el-form-item>
        <el-form-item>
          <el-upload
            class="upload-demo"
            :action="_$agency"
            :on-change="handleChange"
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
          <el-button native-type="submit" type="primary" @click="onSubmit" size="small">提交</el-button>
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
        law: {//需要添加的法律信息
          title: '',
          contents: '',
          image: '',
          sys_flag: 1
        },
        breadcrumb: ['主页', '法律法规信息管理', '添加法律信息'],
        fileList: [],
      }
    },
    watch: {
      addLawResult(newValue){
        this.getLawsInformation();
        this.$router.push({
          path: '/laws'
        });
      }
    },
    computed: {
      ...mapGetters({
        addLawResult: 'addLawResult'//获取添加法律法规结果
      }),
    },
    methods: {
      ...mapActions({
        getLawsInformation: 'getLawsInformation',//获取法律法规信息
        addLaw: 'addLaw'//添加法律法规信息
      }),
      ...mapMutations({
        breadCrumb: 'breadCrumb',//设置商品编辑页面的面包屑信息
      }),
      //移除图片执行的方法
      handleRemove(){
        this.law.image = '';
      },
      //选择图片时执行的方法
      handleChange(file){
        this.law.image = file;
      },
      //点击提交时执行的方法
      onSubmit(){
        this.addLaw(this.law);
      },
      //富文本内容发生改变时执行的方法
      editorChange(contents){
        this.law.contents = contents;
      }
    },
    mounted(){
      this.breadCrumb(this.breadcrumb);
    },
    components: {
      VueQuillEditor
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  #law-new
    padding-top: 35px
    .el-form-item
      .el-form-item__label
        float: none
      .upload-demo
        .el-upload
          input
            display: none
      &:last-child
        .el-button
          float: right
</style>
