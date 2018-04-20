<template>
  <el-row
    class="row-container"
    :gutter="0">
    <el-col
      :span="13"
      :offset="5">
      <el-form
        ref="form"
        :model="jailInformation"
        label-position="top"
        :rules="rules">
        <el-form-item
          label="监狱名称"
          prop="title">
          <el-input
            v-model="jailInformation.title"
            placeholder="请填写监狱名称" />
        </el-form-item>
        <el-form-item
          label="监狱简介"
          prop="description">
          <m-quill-editor
            :contents="jailInformation.description"
            @editorChange="editorChange" />
        </el-form-item>
        <el-form-item
          label="监狱配置"
          prop="settings">
          <el-input
            type="textarea"
            autosize
            v-model="jailInformation.settings"
            placeholder="请填写监狱配置" />
        </el-form-item>
        <el-form-item
          label="所在省"
          prop="provincesId">
          <el-select
            v-model="jailInformation.provincesId"
            :loading="formItem.provincesId.getting"
            placeholder="请选择所在省名称"
            filterable
            @change="onProvinceChange">
            <el-option
              v-for="(province, index) in provincesAll"
              :key="province.id"
              :label="province.name"
              :value="province.id" />
          </el-select>
        </el-form-item>
        <el-form-item
          label="所在市"
          prop="citysId">
          <el-select
            :disabled="formItem.citysId.disabled"
            v-model="jailInformation.citysId"
            :loading="formItem.citysId.getting"
            filterable
            placeholder="请选择所在市名称">
            <el-option
              v-for="(city, index) in $store.state.cities"
              :key="index"
              :label="city.name"
              :value="city.id" />
          </el-select>
        </el-form-item>
        <el-form-item
          label="街道"
          prop="street">
          <el-input
            v-model="jailInformation.street"
            placeholder="请填写街道名称" />
        </el-form-item>
        <el-form-item
          label="监狱编号"
          prop="zipcode">
          <el-input
            v-model="jailInformation.zipcode"
            placeholder="请填写监狱编号" />
        </el-form-item>
        <el-form-item
          label="监狱图片"
          prop="imageUrl">
          <m-upload-img
            v-model="jailInformation.imageUrl"
            @success="onSuccess" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
            size="small">更新</el-button>
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
          settings: [{ required: true, message: '请填写监狱配置' }],
          zipcode: [{ required: true, message: '请填写监狱编号' }],
          imageUrl: [{ required: true, message: '请上传监狱图片' }]
        }
      }
    },
    computed: {
      ...mapState(['jailInformation', 'provincesAll'])
    },
    mounted() {
      this.getJailInformation().then(() => {
        this.getProvincesAll().then(() => {
          this.getCities(this.jailInformation.provincesId).then(res => {
            this.formItem.citysId.getting = false
            this.formItem.citysId.disabled = false
          })
        })
        this.formItem.provincesId.getting = false
      })
    },
    methods: {
      ...mapActions(['getJailInformation', 'editJails', 'getProvincesAll', 'getCities']),
      onSubmit(e) {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.editJails(this.jailInformation).then(res => {
              if (!res) return
              this.$router.push('/jails/detail')
            })
          }
        })
      },
      onProvinceChange(e) {
        this.formItem.citysId.getting = true
        this.jailInformation.citysId = ''
        if (e) {
          this.getCities(e).then(res => {
            this.formItem.citysId.getting = false
            this.formItem.citysId.disabled = false
          })
        }
      },
      editorChange(contents, text) {
        this.jailInformation.description = contents
      },
      onSuccess(e) {
        this.jailInformation.imageUrl = e
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus">

</style>
