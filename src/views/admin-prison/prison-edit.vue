<template>
  <el-row :gutter="0">
    <el-col
      :span="18"
      :offset="3">
      <el-form
        ref="form"
        :model="prison"
        label-width="140px"
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
          <m-quill-editor :contents="prison.description" @editorChange="editorChange" />
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
          label="单次会见费用"
          prop="cost">
          <el-input
            v-model="prison.cost"
            placeholder="请填写单次会见费用">
            <template slot="append">/元</template>
          </el-input>
        </el-form-item>
        <el-form-item
          label="是否需要分监区"
          prop="branchPrison">
          <el-switch
            v-model="prison.branchPrison"
            active-color="#13ce66"
            inactive-color="#dddddd"
            :active-value="1"
            :inactive-value="0"
            :width="60" />
        </el-form-item>
        <el-form-item
          label="会见模块开放"
          prop="meeting">
          <el-switch
            v-model="prison.meeting"
            active-color="#13ce66"
            inactive-color="#dddddd"
            :active-value="1"
            :inactive-value="0"
            :width="60" />
        </el-form-item>
        <el-form-item
          label="奖励模块开放"
          prop="rewards">
          <el-switch
            v-model="prison.rewards"
            active-color="#13ce66"
            inactive-color="#dddddd"
            :active-value="1"
            :inactive-value="0"
            :width="60" />
        </el-form-item>
        <el-form-item
          label="电子商务模块开放"
          prop="shopping">
          <el-switch
            v-model="prison.shopping"
            active-color="#13ce66"
            inactive-color="#dddddd"
            :active-value="1"
            :inactive-value="0"
            :width="60" />
        </el-form-item>
        <el-form-item
          label="监狱条款模块开放"
          prop="prisonTerm">
          <el-switch
            v-model="prison.prisonTerm"
            active-color="#13ce66"
            inactive-color="#dddddd"
            :active-value="1"
            :inactive-value="0"
            :width="60" />
        </el-form-item>
        <el-form-item
          label="人脸识别模块开放"
          prop="faceRecognition">
          <el-switch
            v-model="prison.faceRecognition"
            active-color="#13ce66"
            inactive-color="#dddddd"
            :active-value="1"
            :inactive-value="0"
            :width="60" />
        </el-form-item>
        <el-form-item
          label="汇款限制"
          prop="remittance">
          <el-input
            v-model="prison.remittance"
            placeholder="请填写单次会见费用">
            <template slot="append">/元</template>
          </el-input>
        </el-form-item>
        <el-form-item
          label="消费限制"
          prop="consumption">
          <el-input
            v-model="prison.consumption"
            placeholder="请填写单次会见费用">
            <template slot="append">/元</template>
          </el-input>
        </el-form-item>
        <el-form-item
          v-for="(item, index) in prison.meetingQueue1"
          :key="index"
          label="会见列表"
          :prop="'meetingQueue1.' + index"
          :rules="[{ required: true, message: '请选择会见时间段' }, { validator: rangeValidate, index: index }]"
          class="meetingQueue">
          <el-time-picker
            is-range
            :clearable="false"
            :disabled="Boolean(prison.meetingQueue1[index + 1])"
            v-model="prison.meetingQueue1[index]"
            :value="prison.meetingQueue1[index]"
            value-format="H:mm"
            format="H:mm"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
            :picker-options="index === 0 ? {} : { start: prison.meetingQueue1[index - 1][1], minTime: prison.meetingQueue1[index - 1][1], selectableRange: prison.meetingQueue1[index - 1][1] + ' - 23:59:59' }"
            @change="onTimeRangeChange">
          </el-time-picker>
        </el-form-item>
        <el-form-item>
          <el-button
            v-if="canAddRange"
            size="mini"
            type="primary"
            @click="onAddRange">新增会见时间段</el-button>
          <el-button
            size="small"
            @click="onRestRange">重置会见列表</el-button>
        </el-form-item>
        <el-form-item
          label="监狱图片"
          prop="imageUrl">
          <m-upload-img
            v-model="prison.imageUrl"
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
  import helper from '@/utils'
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
        canAddRange1: true,
        rangeToAdd: [],
        rules: {
          title: [{ required: true, message: '请输入监狱名称' }],
          description: [{ required: true, message: '请输入监狱简介' }],
          provincesId: [{ required: true, message: '请输入监狱所在省' }],
          citysId: [{ required: true, message: '请输入监狱所在市' }],
          // imageUrl: [{ required: true, message: '请上传监狱图片' }],
          settings: [{ required: true, message: '请输入监狱配置' }],
          zipcode: [{ required: true, message: '请输入监狱编号' }],
          cost: [{ required: true, message: '请填写单次会见费用' }, { validator: helper.isFee }],
          branchPrison: [{ required: true, message: '请选择是否需要分监区' }],
          meeting: [{ required: true, message: '请选择是否开放会见模块' }],
          rewards: [{ required: true, message: '请选择是否开放奖励模块' }],
          shopping: [{ required: true, message: '请选择是否开放电子商务模块' }],
          prisonTerm: [{ required: true, message: '请选择是否开放监狱条款模块' }],
          faceRecognition: [{ required: true, message: '请选择是否开放人脸识别模块' }],
          remittance: [{ required: true, message: '请填写汇款限制' }, { validator: helper.isFee }],
          consumption: [{ required: true, message: '请填写消费限制' }, { validator: helper.isFee }]
        // },
        // prison: {
        //   citysId: '',
        //   imageUrl: '',
        //   cost: 0,
        //   branchPrison: 1,
        //   meeting: 1,
        //   rewards: 1,
        //   shopping: 1,
        //   prisonTerm: 1,
        //   faceRecognition: 1,
        //   remittance: 800,
        //   consumption: 800,
        //   meetingQueue1: [['09:00', '09:30'], ['09:30', '10:00'], ['10:00', '10:30'], ['10:30', '11:00'], ['11:00', '11:30'], ['11:30', '12:00'], ['14:00', '14:30'], ['14:30', '15:00'], ['15:00', '15:30'], ['15:30', '16:00'], ['16:00', '16:30'], ['16:30', '17:00']]
        },
        rangeValidate: (rule, val, callback) => {
          if (rule.index > 0) {
            let minTimeStart = this.prison.meetingQueue1[rule.index - 1][1]
            if (minTimeStart > val[0]) {
              this.canAddRange1 = false
              callback(new Error(`开始时间最早为${ minTimeStart }`))
            }
          }
          if (val[0] === val[1]) {
            this.canAddRange1 = false
            callback(new Error('间隔时间过短'))
          }
          else {
            this.canAddRange1 = true
            callback()
          }
        }
      }
    },
    computed: {
      ...mapState(['prison', 'meetingQueue']),
      canAddRange() {
        let lastIndex = this.prison.meetingQueue1.length - 1
        if (!this.rangeToAdd.length || this.rangeToAdd[0].indexOf('23:59') > -1) {
          return false
        }
        else if (lastIndex > 0 && (this.prison.meetingQueue1[lastIndex - 1][1] > this.prison.meetingQueue1[lastIndex][0])) {
          return false
        }
        else {
          return this.canAddRange1
        }
      }
    },
    mounted() {
      this.getProvincesAll().then(() => {
        this.getPrisonDetail({ id: this.$route.params.id }).then(res => {
          if (!res) return
          this.getCities(this.prison.provincesId).then(res => {
            this.formItem.citysId.getting = false
            this.formItem.citysId.disabled = false
          })
          let meetingQueue1 = []
          this.prison.meetingQueue.forEach(str => {
            meetingQueue1.push(str.split('-'))
          })
          this.prison.meetingQueue1 = meetingQueue1
          this.getNextRange(meetingQueue1[meetingQueue1.length - 1])
        })
        this.formItem.provincesId.getting = false
      })
    },
    methods: {
      ...mapActions(['getPrisonDetail', 'updatePrison', 'getProvincesAll', 'getCities']),
      onSubmit(e) {
        this.$refs.form.validate(valid => {
          if (valid) {
            let prison = Object.assign({}, this.prison), meetingQueue = []
            prison.meetingQueue1.forEach(arr => {
              meetingQueue.push(`${ arr[0] }-${ arr[1] }`)
            })
            prison.meetingQueue = meetingQueue
            if (meetingQueue.toString() !== this.meetingQueue.toString()) prison.changed = 1
            else prison.changed = 0
            delete prison.meetingQueue1
            this.updatePrison(prison).then(res => {
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
        this.$refs.form.validateField('description')
      },
      onSuccess(e) {
        this.prison.imageUrl = e
      },
      onTimeRangeChange(e) {
        if (e[0] !== e[1]) {
          this.getNextRange(e)
        }
      },
      onAddRange() {
        this.prison.meetingQueue1.push(this.rangeToAdd)
        this.getNextRange(this.rangeToAdd)
      },
      onRestRange() {
        this.prison.meetingQueue1 = [null]
        this.rangeToAdd = []
      },
      getNextRange(e) {
        let end = new Date(1970, 0, 1, e[1].split(':')[0], parseInt(e[1].split(':')[1]) + 30)
        if (end.getDate() !== 1) {
          this.rangeToAdd = [e[1], '23:59:59']
        }
        else {
          var minute = `00${ end.getMinutes() }`.slice(-2)
          this.rangeToAdd = [e[1], `${ end.getHours() }:${ minute }`]
        }
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus">
.meetingQueue
  /* .el-range-editor.el-input__inner
    width: 100%; */
  .el-date-editor .el-range-separator
    width: 10%;
  & + .meetingQueue
    > label
      visibility: hidden;

</style>
