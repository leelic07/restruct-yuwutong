/**
 * Created by Administrator on 2018/2/1/001.
 */
export default {
  uploadImageResult: {},//富文本图片上传结果
  //富文本配置信息
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
              this.quill.format('image', this.$el.querySelector('.custom-input').click());
            else
              this.quill.format('image', false);
          }
        }
      }
    }
  }//富文本编辑器的配置
}
