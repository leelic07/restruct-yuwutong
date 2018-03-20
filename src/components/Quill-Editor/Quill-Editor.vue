<template>
  <el-row id="quill-editor">
    <!-- bidirectional data binding（双向数据绑定） -->
    <quill-editor :content="contents"
                  ref="myQuillEditor"
                  :options="editorOption"
                  @change="editorChange($event)">
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
  </el-row>
</template>

<script>
  import {mapActions, mapMutations, mapGetters} from 'vuex'
  export default {
    props: {
      contents: {
        type: String,
        required: true,
        default: ''
      }//初始化富文本的内容
    },
    data() {
      const _this = this;
      return {
        fileListForEditor: [],//富文本上传图片列表
        editorOption: {
          modules: {
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
    watch: {
      //图片上传成功后获取上传图片的地址放入到编辑器当中
      uploadResult(newValue){
        newValue.code === 200 && this.editor.insertEmbed(this.editor.getSelection().index, 'image', `${this._$agency}${newValue.path.substring(6)}`);
      }
    },
    computed: {
      ...mapGetters({
        uploadResult: 'uploadResult'
      }),
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    methods: {
      ...mapActions({
        uploadFile: 'uploadFile'//富文本上传图片执行的方法
      }),
      //当富文本的内容发生改变的时候传给父组件
      editorChange({editor, html, text}){
        this.$emit('editorChange', html);
      },
      //富文本上传图片执行的方法
      uploadImage(file){
        this.uploadFile(file);
        return false;
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  #quill-editor
    /deep/ .ql-editor
      min-height: 145px
</style>
