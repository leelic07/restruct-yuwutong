<template>
  <div class="yt-form">
    <el-form
      ref="form"
      label-width="140px"
      :model="meeting"
      inline
      :rules="rules">
      <div class="el-form-item is-required" style="float: left;">
         <label class="el-form-item__label" style="width: 140px;padding-right: 2px;">常规配置</label>
      </div>
      <div class="time-queue" style="float: left; width: calc(100% - 150px);">
        <template v-for="(item, index) in meeting.usual">
          <el-form-item
            :key="index"
            :prop="'usual.' + index"
            :rules="[{ required: true, message: '请选择会见时间段' }, { validator: validator.timeRange, prev: meeting.usual[index - 1], prop: 'canAddUsual', flag: flag }]">
            <el-time-picker
              is-range
              arrow-control
              v-model="meeting.usual[index]"
              value-format="H:mm"
              format="H:mm"
              :disabled="Boolean(meeting.usual[index + 1])"
              :editable="false"
              :clearable="false"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              :picker-options="index === 0 ? {} : { start: meeting.usual[index - 1][1], end: '23:59:59', step: '03:00', minTime: meeting.usual[index - 1][1], selectableRange: meeting.usual[index - 1][1] + ' - 23:59:59' }">
            </el-time-picker>
          </el-form-item>
        </template>
        <el-button
          :disabled="!flag.canAddUsual"
          type="primary"
          style="margin-right: 10px; margin-bottom: 22px;"
          @click="onAddRange('usual')">新增会见时间段</el-button>
        <el-button
          style="margin-left: 0; margin-bottom: 22px;"
          @click="onRestRange('usual')">重置会见列表</el-button>
      </div>

    </el-form>
    <!-- <div v-if="items.buttons && Object.keys(items.buttons).length" class="button-box">
      <template v-for="(button, index) in items.buttons">
        <el-button
          v-if="button === 'prev' || button.prev"
          :key="index"
          size="small"
          type="primary"
          @click="onPrevClick">上一步</el-button>
        <el-button
          v-if="button === 'next' || button.next"
          :key="index"
          size="small"
          type="primary"
          @click="onSubmit(button, $event)">下一步</el-button>
        <el-button
          v-if="button === 'update'"
          :key="index"
          size="small"
          type="primary">更新</el-button>
        <el-button
          v-if="button === 'add'"
          :key="index"
          size="small"
          type="primary"
          @click="onSubmit">新增</el-button>
        <el-button
          v-if="button === 'back'"
          :key="index"
          size="small">返回</el-button>
      </template>
    </div> -->
    <!-- <m-form :items="formItems" @submit="onSubmit" :values="values"></m-form> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import validator from '@/utils'
export default {
  data() {
    return {
      meeting: {
        usual: [['9:00', '9:30'], ['9:30', '10:00'], ['10:00', '10:30'], ['10:30', '11:00'], ['11:00', '11:30'], ['11:30', '12:00'], ['14:00', '14:30'], ['14:30', '15:00'], ['15:00', '15:30'], ['15:30', '16:00'], ['16:00', '16:30'], ['16:30', '17:00']]
      },
      rules: {},
      flag: {
        canAddUsual: true
      },
      usualToAdd: [],
      validator
    }
  },
  watch: {
    'meeting.usual': function(val) {
      console.log(val[val.length - 1])
      this.usualToAdd = []
    }
  },
  mounted() {
    if (!sessionStorage.getItem('base')) {
      this.$router.push({ query: Object.assign({}, { tag: 'prisonBase' }) })
    }
    else if (parseInt(sessionStorage.getItem('step')) !== 2 || !sessionStorage.getItem('config')) {
      this.$router.push({ query: Object.assign({}, { tag: 'prisonConfig' }) })
    }
  },
  // activated() {
  //   console.log('activated')
  // },
  // deactivated() {
  //   console.log('deactivated')
  // },
  methods: {
    ...mapActions(['getCities']),
    onSubmit(e) {
      // sessionStorage.removeItem('config')
      // sessionStorage.removeItem('base')
      // sessionStorage.removeItem('step')
      console.log(Object.assign({}, JSON.parse(sessionStorage.getItem('base')), JSON.parse(sessionStorage.getItem('config')), e))
      // this.$router.push({ query: Object.assign({}, { tag: 'prisonRemote' }) })
    },
    onAddRange(e) {
      // console.log(this.meeting[e])
      // let
      if (this.meeting[e][this.meeting[e].length - 1] === null) return false
      // console.log(this.meeting[e][this.meeting[e].length - 1])
      this.meeting[e].push(null)
    },
    onRestRange(e) {
      this.meeting[e] = [null]
    },
    onNext(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="css">
</style>
