<template>
  <el-row id="jail-editor" :gutter="0">
    <el-col :span="13" :offset="5">
      <el-form ref="form" :model="jailsInformation" label-position="top" :rules="rules">
        <el-form-item label="监狱名称" prop="title">
          <el-input v-model="jailsInformation.title" placeholder="请填写监狱名称"></el-input>
        </el-form-item>
        <el-form-item label="监狱简介" prop="description">
          <m-quill-editor :contents="jailsInformation.description" @editorChange="editorChange" />
        </el-form-item>
        <el-form-item label="所在省" prop="provincesId">
          <el-select v-model="jailsInformation.provincesId" :loading="formItem.provincesId.getting" placeholder="请选择所在省名称" @change="onProvinceChange">
            <el-option v-for="(province, index) in provincesAll"
              :key="province.id"
              :label="province.name"
              :value="province.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="所在市" prop="citysId">
          <el-select :disabled="formItem.citysId.disabled" v-model="jailsInformation.citysId" :loading="formItem.citysId.getting" placeholder="请选择所在市名称">
            <el-option v-for="(city, index) in $store.state.cities"
              :key="index"
              :label="city.name"
              :value="city.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="街道" prop="street">
          <el-input v-model="jailsInformation.street" placeholder="请填写街道名称"></el-input>
        </el-form-item>
        <el-form-item label="监狱邮编" prop="zipcode">
          <el-input v-model="jailsInformation.zipcode" placeholder="请填写监狱邮编"></el-input>
        </el-form-item>
        <el-form-item label="监狱图片" prop="imageUrl">
          <m-upload-img :url="jailsInformation.imageUrl" @success="onSuccess"></m-upload-img>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" size="small">更新</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
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
        }
      }
    },
    computed: {
      ...mapState(['jailsInformation', 'provincesAll'])
    },
    mounted() {
      this.getJailsInformation().then(() => {
        this.getProvincesAll().then(() => {
          this.getCities(this.jailsInformation.provincesId).then(res => {
            this.formItem.citysId.getting = false
            this.formItem.citysId.disabled = false
          })
        })
        this.formItem.provincesId.getting = false
      })
    },
    methods: {
      ...mapActions(['getJailsInformation', 'editJails', 'getProvincesAll', 'getCities']),
      onSubmit(e) {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.editJails(this.jailsInformation).then(res => {
              if (!res) return
              this.$router.push('/jails/detail')
            })
          }
        })
      },
      onProvinceChange(e) {
        this.formItem.citysId.getting = true
        this.jailsInformation.citysId = ''
        if (e) {
          this.getCities(e).then(res => {
            this.formItem.citysId.getting = false
            this.formItem.citysId.disabled = false
          })
        }
      },
      editorChange(contents, text) {
        this.jailsInformation.description = contents
      },
      onSuccess(e) {
        this.jailsInformation.imageUrl = e
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus">

</style>
