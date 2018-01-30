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
                        :options="editorOption"
                        @blur="onEditorBlur($event)"
                        @focus="onEditorFocus($event)"
                        @ready="onEditorReady($event)"
                        @change="onEditorChange($event)">
          </quill-editor>
          <el-upload
            v-show="false"
            class="upload-demo"
            name="dir"
            :action="_$agency + '/prisoners/upload_img'"
            :headers="{common:{'Authorization':token}}"
            :on-success="handleSuccess"
            :file-list="fileList"
            :auto-upload="true"
            :limit="1"
            :with-credentials="true"
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
          <img :src="_$baseUrl + '/system/jails/images/000/000/001/thumb/' + jails.image_file_name" alt="">
        </el-form-item>
        <el-form-item>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
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
  import {quillEditor} from 'vue-quill-editor'

  export default {
    data() {
      const _this = this;
      return {
        breadcrumb: ['主页', '监狱基本信息管理', '监狱基本信息编辑'],
        fileList: [],//上传图片列表
        token: sessionStorage['token'],//验证token
        editorOption: {
          modules: {
//            toolbar: '#toolbar',
            toolbar: {
              container: [
                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                ['blockquote', 'code-block'],

                [{'header': 1}, {'header': 2}],               // custom button values
                [{'list': 'ordered'}, {'list': 'bullet'}],
                [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
                [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
                [{'direction': 'rtl'}],                         // text direction

                [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
                [{'header': [1, 2, 3, 4, 5, 6, false]}],

                [{'color': []}, {'background': []}],          // dropdown with defaults from theme
                [{'font': []}],
                [{'align': []}],
                ['image', 'link'],
                ['clean']                                         // remove formatting button
              ],
              handlers: {
                'image': function (value) {
                  if (value)
                    this.quill.format('image', _this.$el.querySelector('.custom-input').click());
                  else
                    this.quill.format('image', false);
                }
              }
            }
          }
        }//富文本编辑器的配置
      }
    },
    computed: {
      ...mapGetters({
        jails: 'jails'//获取编辑的监狱基本信息
      }),
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    methods: {
      ...mapActions({
        uploadImage: 'uploadImage'//富文本上传图片执行的方法
      }),
      ...mapMutations({
        breadCrumb: 'breadCrumb',//设置商品编辑页面的面包屑信息
      }),
      onSubmit() {
        console.log('submit!');
      },
      handleSuccess(response){
        console.log(response);
      },
      onEditorBlur(editor){
//        console.log(editor);
      },
      onEditorFocus(editor){
//        console.log(editor);
      },
      onEditorReady(editor){
//        console.log(editor);
      },
      onEditorChange(editor){
//        console.log('editor has been changed' + editor);
      },
      upload(e){
        console.log(e.target.files[0]);
        this.uploadImage(e.target.files[0]);
      }
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
