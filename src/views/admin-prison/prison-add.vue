<template>
  <el-row :gutter="0">
    <el-col
      :span="13"
      :offset="5">
      <el-form
        ref="form"
        :model="prison"
        label-position="top"
        :rules="rules">
        <el-form-item
          label="监狱名称"
          prop="title">
          <el-input
            v-model="prison.title"
            placeholder="请填写监狱名称" />
        </el-form-item>
        <el-form-item
          label="监狱简介"
          prop="description">
          <m-quill-editor @editorChange="editorChange" />
        </el-form-item>
        <el-form-item
          label="监狱配置"
          prop="settings">
          <el-input
            type="textarea"
            autosize
            v-model="prison.settings"
            placeholder="请填写监狱配置" />
        </el-form-item>
        <el-form-item
          label="所在省"
          prop="provincesId">
          <el-select
            v-model="prison.provincesId"
            :loading="formItem.provincesId.getting"
            filterable
            auto-complete="address-level1"
            placeholder="请选择所在省名称"
            @change="onProvinceChange">
            <el-option
              v-for="(province, index) in $store.state.provincesAll"
              :key="index"
              :label="province.name"
              :value="province.id" />
          </el-select>
        </el-form-item>
        <el-form-item
          label="所在市"
          prop="citysId">
          <el-select
            :disabled="formItem.citysId.disabled"
            v-model="prison.citysId"
            :loading="formItem.citysId.getting"
            filterable
            auto-complete="address-level2"
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
            v-model="prison.street"
            placeholder="请填写街道名称" />
        </el-form-item>
        <el-form-item
          label="监狱编号"
          prop="zipcode">
          <el-input
            v-model="prison.zipcode"
            auto-complete="postal-code"
            placeholder="请填写监狱编号" />
        </el-form-item>
        <el-form-item
          label="监狱图片"
          prop="imageUrl">
          <m-upload-img @success="onSuccess" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
            size="small">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
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
          settings: [{ required: true, message: '请输入监狱配置' }],
          zipcode: [{ required: true, message: '请输入监狱编号' }],
          imageUrl: [{ required: true, message: '请上传监狱图片' }]
        },
        prison: {
          citysId: '',
          settings: '{"cost": 50, "modules": {"meeting": 1, "rewards": 1, "shopping": 1, "prison_term": 1}, "restrictions": {"remittance": 800, "consumption": 800}, "meeting_queue": ["9:00 - 9:30", "9:30 - 10:00", "10:00 - 10:30", "10:30 - 11:00", "11:00 - 11:30", "11:30 - 12:00", "14:00 - 14:30", "14:30 - 15:00", "15:00 - 15:30", "15:30 - 16:00", "16:00 - 16:30", "16:30 - 17:00"]}'
        }
      }
    },
    mounted() {
      this.getProvincesAll().then(() => {
        this.formItem.provincesId.getting = false
      })
    },
    methods: {
      ...mapActions(['addPrison', 'getProvincesAll', 'getCities']),
      onSubmit(e) {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.addPrison(this.prison).then(res => {
              if (!res) return
              this.$router.push('/prison/list')
            })
          }
        })
      },
      onProvinceChange(e) {
        this.formItem.citysId.getting = true
        this.prison.citysId = ''
        if (e) {
          this.getCities(e).then(res => {
            this.formItem.citysId.getting = false
            this.formItem.citysId.disabled = false
          })
        }
      },
      editorChange(contents, text) {
        this.prison.description = contents
      },
      onSuccess(e) {
        this.prison.imageUrl = e
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus">

</style>
