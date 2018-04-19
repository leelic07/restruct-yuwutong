<template>
  <el-row
    class="page-edit"
    :gutter="0">
    <el-col
      :span="13"
      :offset="5">
      <el-form
        ref="form"
        :model="advertisement"
        label-position="top"
        :rules="rules">
        <el-form-item
          label="广告名称"
          prop="name">
          <el-input
            v-model="advertisement.name"
            placeholder="请填写广告名称" />
        </el-form-item>
        <el-form-item
          label="广告类型"
          prop="typeId">
          <el-select
            v-model="advertisement.typeId"
            :loading="gettingType"
            placeholder="请选择广告类型">
            <el-option
              v-for="advertisementType in advertisementTypes"
              :key="advertisementType.id"
              :label="advertisementType.name"
              :value="advertisementType.id" />
          </el-select>
        </el-form-item>
        <el-form-item
          label="广告有效时间"
          prop="time">
          <el-date-picker
            v-model="advertisement.time"
            type="datetimerange"
            start-placeholder="广告开始生效时间"
            end-placeholder="广告截止生效时间"
            format="yyyy-MM-dd HH:mm:ss"
            value-format="yyyy-MM-dd HH:mm:ss"
            :default-time="['00:00:00', '23:59:59']"
            @change="onTimeRangeChange">
          </el-date-picker>
        </el-form-item>
        <el-form-item
          label="省份"
          prop="provinceId">
          <el-select
            v-model="advertisement.provinceId"
            :loading="gettingProvince"
            filterable
            placeholder="请选择省份">
            <el-option
              v-for="province in provincesAll"
              :key="province.id"
              :label="province.name"
              :value="province.id" />
          </el-select>
        </el-form-item>
        <el-form-item
          label="是否上架"
          prop="status">
          <el-radio-group v-model="advertisement.status">
            <el-radio :label="1">上架</el-radio>
            <el-radio :label="0">不上架</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="广告图片"
          prop="imageUrl">
          <m-upload-img
            :url="advertisement.imageUrl"
            @success="onSuccess" />
        </el-form-item>
      </el-form>
      <el-button
        class="submit"
        type="primary"
        size="small"
        @click="onSubmit">更新</el-button>
    </el-col>
  </el-row>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import * as dateFormate from '@/filters/modules/date'
  const helper = dateFormate.default
  export default {
    data() {
      return {
        gettingType: true,
        gettingProvince: true,
        rules: {
          name: [{ required: true, message: '请填写广告名称' }],
          typeId: [{ required: true, message: '请选择广告类型' }],
          time: [{ required: true, message: '请选择广告有效时间' }],
          imageUrl: [{ required: true, message: '请上传广告图片' }],
          status: [{ required: true, message: '请选择是否上架' }]
        }
      }
    },
    computed: {
      ...mapState(['advertisement', 'advertisementTypes', 'provincesAll'])
    },
    mounted() {
      this.getAdvertisementsDetail({ id: this.$route.params.id }).then(() => {
        if (!this.advertisement.startDate || !this.advertisement.endDate) return
        this.advertisement.startDate = helper.Date(this.advertisement.startDate)
        this.advertisement.endDate = helper.Date(this.advertisement.endDate)
        this.advertisement.time = [this.advertisement.startDate, this.advertisement.endDate]
      })
      this.getAdvertisementTypes().then(() => {
        this.gettingType = false
      })
      this.getProvincesAll().then(() => {
        this.gettingProvince = false
      })
    },
    methods: {
      ...mapActions(['getAdvertisementsDetail', 'updateAdvertisements', 'getAdvertisementTypes', 'getProvincesAll']),
      onSubmit(e) {
        this.$refs.form.validate(valid => {
          if (valid) {
            let params = Object.assign({}, this.advertisement)
            delete params.time
            this.updateAdvertisements(params).then(res => {
              if (!res) return
              this.$router.push('/advertisement/list')
            })
          }
        })
      },
      onTimeRangeChange(e) {
        if (e) {
          this.advertisement.startDate = e[0]
          this.advertisement.endDate = e[1]
        }
        else {
          this.advertisement.startDate = ''
          this.advertisement.endDate = ''
        }
      },
      onSuccess(e) {
        this.advertisement.imageUrl = e
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus">

</style>
