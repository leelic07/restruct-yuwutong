<template>
  <el-row id="law-new" :gutter="0">
    <el-col :span="11" :offset="6">
      <el-form ref="form" :model="law">
        <el-form-item label="法律名称">
          <el-input v-model="law.title" placeholder="请填写法律名称"></el-input>
        </el-form-item>
        <el-form-item label="法律简介">
          <quill-editor v-model="law.description"
                        ref="myQuillEditor"
                        :options="editorOption">
          </quill-editor>
        </el-form-item>
        <el-form-item>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
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
  import {quillEditor} from 'vue-quill-editor'

  export default {
    data() {
      return {
        law: {//需要添加的法律信息
          title: '',
          contents: '',
          image: ''
        },
        breadcrumb: ['主页', '法律法规信息管理', '添加法律信息'],
        fileList: [],
        editorOption: {}//富文本编辑器的配置
      }
    },
    computed: {
      ...mapGetters({}),
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    methods: {
      ...mapMutations({
        breadCrumb: 'breadCrumb',//设置商品编辑页面的面包屑信息
      }),
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handleChange(){

      },
      //点击提交时执行的方法
      onSubmit(){

      },
    },
    mounted(){
      this.breadCrumb(this.breadcrumb);
    },
    components: {
      quillEditor
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
