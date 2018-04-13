<template>
  <div class="">
    <el-upload
      class="avatar-uploader"
      ref="uploadImg"
      :action="action"
      :headers="headers"
      :multiple="multiple"
      :name="name"
      :accept="accept"
      :listType="listType"
      :file-list="fileList"
      :limit="limit"
      :on-preview="handlePictureCardPreview"
      :on-success="handleSuccess"
      :before-upload="beforUpload"
      :on-exceed="handleExceed"
      :on-error="handleError"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
      <div slot="tip" class="el-upload__tip">
        只能上传<span class="red">jpg/jpeg</span>文件,且文件大小不超过<span class="red">1MB</span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="imageUrl" alt="">
    </el-dialog>
  </div>

</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    },
    action: {
      type: String,
      default: 'http://39.108.185.51:1339/avatars'
    },
    headers: {
      type: Object,
      default: function() {
        return {
          Authorization: '523b87c4419da5f9186dbe8aa90f37a3876b95e448fe2a'
        }
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: 'avatar'
    },
    accept: {
      type: String,
      default: 'image/jpeg,image/jpg'
    },
    listType: {
      type: String,
      default: 'picture-card'
    },
    limit: {
      type: Number,
      default: 1
    }
  },
  computed: {
    fileList() {
      if (this.url) return [{ url: `${ this.url }?token=${ this.headers.Authorization }` }]
    }
  },
  data() {
    return {
      imageUrl: '',
      dialogVisible: false,
      uploadList: {}
    }
  },
  watch: {
    url(val) {
      if (this.limit === 1 && val) {
        this.$refs.uploadImg.$el.getElementsByClassName('el-upload el-upload--picture-card')[0].style.display = 'none'
      }
      else if (this.limit === 1 && !val) {
        this.$refs.uploadImg.$el.getElementsByClassName('el-upload el-upload--picture-card')[0].style.display = 'inline-block'
      }
    }
  },
  mounted() {
    if (this.limit === 1 && this.url) {
      this.$refs.uploadImg.$el.getElementsByClassName('el-upload el-upload--picture-card')[0].style.display = 'none'
    }
  },
  methods: {
    handleSuccess(res, file) {
      switch (res.code) {
        case 200:
          this.$message.success('图片上传成功')
          this.$emit('success', res.url)
          break
        default:
          this.$message.error(`上传图片失败:${ res.message }`)
      }
    },
    beforUpload(file) {
      let fileType = this.accept.split(',')
      const isAccept = fileType.indexOf(file.type) > -1
      const isSize = file.size / 1024 / 1024 < 1
      if (!isAccept) {
        let accept = []
        fileType.forEach(type => { accept.push(type.substr(type.lastIndexOf('/') + 1)) })
        this.$message.error(`请上传${ accept.join('或') }格式的文件`)
      }
      if (!isSize) {
        this.$message.error('文件大小不能超过1MB!')
      }
      return isAccept && isSize
    },
    handlePictureCardPreview(file) {
      this.imageUrl = file.url
      this.dialogVisible = true
    },
    handleExceed() {
      this.$message.error('图片数量超出限制')
    },
    handleError(e) {
      console.log(e)
    },
    handleRemove(file, fileList) {
      this.$emit('success', '')
    }
  }
}
</script>

<style lang="css">
  .el-upload__tip{
    margin-top: 0;
    line-height: 20px;
  }
  .red{
    color: #f00;
  }
</style>
