<template>
  <el-row id="jail-editor" :gutter="0">
    <el-col :span="13" :offset="5">
      <el-form ref="form" :model="jails">
        <el-form-item label="监狱名称">
          <el-input v-model="jails.title" placeholder="请填写监狱名称"></el-input>
        </el-form-item>
        <el-form-item label="监狱简介">
          <m-quill-editor :contents="jails.description" @editorChange="editorChange"></m-quill-editor>
          <!-- <vue-quill-editor :contents="jails.description" @editorChange="editorChange"></vue-quill-editor> -->
        </el-form-item>
        <el-form-item label="省份">
          <el-select
            v-model="jails.state"
            placeholder="请选择监狱所在省份"
            clearable
            @change="provinceChange">
            <el-option
              v-for="province in $store.state.provincesAll"
              :key="province.id"
              :value="province.name"
              :label="province.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="市区">
          <el-select v-model="jails.city" placeholder="请选择监狱所在市区">
            <el-option
              v-for="city in $store.state.citys"
              :key="city.id"
              :value="city.name"
              :label="city.name"></el-option>
          </el-select>
          <!-- <el-input v-model="jails.city" placeholder="请选择监狱所在市区"></el-input> -->
        </el-form-item>
        <el-form-item label="街道">
          <el-input v-model="jails.street" placeholder="请填写街道名称"></el-input>
        </el-form-item>
        <el-form-item label="行政区">
          <el-input v-model="jails.district" placeholder="请填写行政区名称"></el-input>
        </el-form-item>
        <!-- <el-form-item> -->
          <!-- <img :src="jails.anotherImageUrl" alt=""> -->
          <!--<img src="../../assets/images/default.jpg" alt="">-->
        <!-- </el-form-item> -->
        <el-form-item label="监狱图片">
          <m-upload-img :url="jails.imageUrl" @success="onSuccess"></m-upload-img>
          <!-- <el-upload
            class="upload-demo"
            :action="_$agency + '/avatars'"
            name="avatar"
            :with-credentials="true"
            :headers="authorization"
            :file-list="fileList"
            :on-success="handleSuccess"
            :on-remove="handleRemove"
            :limit="1"
            :on-exceed="handleExceed"
            accept="image/jpeg,image/jpg"
            list-type="picture">
            <el-button size="normal" type="primary" plain>添加监狱图片</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg文件,大小不能超过1Mb</div>
          </el-upload> -->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" size="small">更新</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  import { mapActions, mapMutations, mapGetters } from 'vuex'
  import VueQuillEditor from '@/components/Quill-Editor/Quill-Editor'
  export default {
    components: {
      VueQuillEditor
    },
    data() {
      return {
        gettingProvince: true,
        fileList: [] // 上传图片列表
      }
    },
    watch: {
      // 编辑监狱信息成功跳转到监狱信息页面
      editJailsResult(newValue) {
        this.getJailsInformation()
        this.$router.push({
          path: '/jails/detail'
        })
      }
    },
    computed: {
      ...mapGetters({
        jails: 'jails', // 获取编辑的监狱基本信息
        editJailsResult: 'editJailsResult', // 获取监狱编辑的结果
        authorization: 'authorization' // 上传图片的头部设置
      })
    },
    mounted() {
      this.getProvincesAll().then(() => {
        this.getJailsInformation()
        this.gettingProvince = false
      })
    },
    methods: {
      ...mapActions(['getProvincesAll', 'getCities', 'getJailsInformation', 'editJails']),
      ...mapMutations({
        uploadImg: 'uploadImg' // 上传成功将结果进行处理
      }),
      provinceChange(e) {
        console.log('change', e)
      },
      // 移除图片执行的方法
      handleRemove() {
        this.jails.anotherImageUrl = ''
      },
      // 图片上传成功调用的方法
      handleSuccess(res, file) {
        this.jails.anotherImageUrl = res.url
        this.uploadImage(res)
      },
      onSuccess(e) {
        this.jails.imageUrl = e
      },
      // 上传图片个数超过限制执行的方法
      handleExceed() {
        this.$message({
          type: 'warning',
          message: '每次只能上传一张图片'
        })
      },
      // 上传图片执行的方法
      uploadImage(file) {
        this.uploadImg(file)
        return false
      },
      // 点击更新执行的方法
      onSubmit() {
        console.log(this.jails)
        this.editJails(this.jails)
      },
      // 富文本内容发生改变时执行的方法
      editorChange(contents) {
        this.jails.description = contents
      }
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
        max-width: 100%
      &:last-child
        .el-button
          float: right
</style>
