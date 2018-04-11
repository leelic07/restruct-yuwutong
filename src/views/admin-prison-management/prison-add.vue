<template>
  <el-row id="jail-editor" :gutter="0">
    <el-col :span="13" :offset="5">
      <!-- <m-form ref="fff" labelPosition="top" :formItem="formItem" @submit="onSubmit"> -->
      <!-- </m-form> -->
      <el-form ref="form" :model="jails" label-position="top" :rules="rules">
        <el-form-item label="监狱名称" prop="title">
          <el-input v-model="jails.title" placeholder="请填写监狱名称"></el-input>
        </el-form-item>
        <el-form-item label="监狱简介" prop="description">
          <m-quill-editor @editorChange="editorChange" />
        </el-form-item>
        <el-form-item label="所在省" prop="provincesId">
          <el-select v-model="jails.provincesId" :loading="formItem.provincesId.getting" placeholder="请选择所在省名称" @change="onProvinceChange">
            <el-option v-for="(province, index) in $store.state.provincesAll"
              :key="index"
              :label="province.name"
              :value="province.id" />
          </el-select>
          <!-- <el-input v-model="jails.state" placeholder="请填写所在省名称"></el-input> -->
        </el-form-item>
        <el-form-item label="所在市" prop="citysId">
          <el-select :disabled="formItem.citysId.disabled" v-model="jails.citysId" :loading="formItem.citysId.getting" placeholder="请选择所在市名称">
            <el-option v-for="(city, index) in $store.state.cities"
              :key="index"
              :label="city.name"
              :value="city.id" />
          </el-select>
          <!-- <el-input v-model="jails.city" placeholder="请填写所在市名称"></el-input> -->
        </el-form-item>
        <!-- <el-form-item label="行政区">
          <el-input v-model="jails.district" placeholder="请填写行政区名称"></el-input>
        </el-form-item> -->
        <el-form-item label="街道" prop="street">
          <el-input v-model="jails.street" placeholder="请填写街道名称"></el-input>
        </el-form-item>
        <el-form-item label="监狱邮编" prop="zipcode">
          <el-input v-model="jails.zipcode" placeholder="请填写监狱邮编"></el-input>
        </el-form-item>
        <el-form-item label="监狱图片" prop="imageUrl">
          <m-upload-img @success="onSuccess"></m-upload-img>
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
  // import http from '@/service/modules/select'
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        formItem: {
          provincesId: {
            getting: true
          },
          citysId: {
            disabled: true,
            getting: true
          }
        },
        rules: {
          title: [{ required: true, message: '请输入监狱名称' }],
          description: [{ required: true, message: '请输入监狱简介' }],
          provincesId: [{ required: true, message: '请输入监狱所在省' }],
          citysId: [{ required: true, message: '请输入监狱所在市' }],
          // street: [{ required: true, message: '请输入监狱名称' }],
          // title: [{ required: true, message: '请输入监狱名称' }],
          imageUrl: [{ required: true, message: '请上传监狱图片' }]
        },
        jails: {}
      }
    },
    mounted() {
      this.getProvincesAll().then(() => {
        this.formItem.provincesId.options = this.$store.state.provincesAll
        this.formItem.provincesId.getting = false
      })
    },
    methods: {
      ...mapActions(['addJails', 'getProvincesAll', 'getCities']),
      onSubmit(e) {
        this.$refs.form.validate(valid => {
          console.log(this.jails)
          if (valid) this.addJails(this.jails)
        })
      },
      onProvinceChange(e) {
        this.formItem.citysId.getting = true
        if (e) {
          this.getCities(e).then(res => {
            this.formItem.citysId.options = this.$store.state.cities
            this.formItem.citysId.getting = false
            this.formItem.citysId.disabled = false
          })
        }
      },
      editorChange(contents, text) {
        this.jails.description = contents
      },
      onSuccess(e) {
        this.jails.imageUrl = e
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus">

</style>
