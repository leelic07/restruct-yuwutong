<template>
  <el-row
    class="row-container"
    :gutter="0">
    <el-col :span="24">
      <div style="margin-bottom: 10px;">
        <label class="el-form-item__label">调整日期</label>
        <el-date-picker
          v-model="adjustDate"
          type="date"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          :clearable="false"
          placeholder="选择日期"
          :picker-options="pickerOptions">
        </el-date-picker>
        <el-button type="primary" style="margin-left: 10px;" @click="getConfigs">确定</el-button>
        <div class="adjustTable" style="width: 200px;float: right;line-height:40px;">
            <div style="float: left;margin-right: 20px;"><div class="occupied" style="height: 20px;width: 20px;margin: 10px 5px;float: left;"></div>已分配</div>
            <div style="float: left;margin-right: 20px;"><div class="is-clicked" style="height: 20px;width: 20px;margin: 10px 5px;float: left;"></div>已选择</div>
        </div>
      </div>
      <div class="adjustTable" v-if="show">
        <div class="adjust-row bold">
          <div class="adjust-col" :style="'width:' + (100 / (meetingAdjustment.meetingQueue.length + 1)) + '%'">
            终端号
          </div>
          <div v-for="meetingQueue in meetingAdjustment.meetingQueue" :key="meetingQueue" class="adjust-col" :style="'width:' + (100 / (meetingAdjustment.meetingQueue.length + 1)) + '%'">
            {{ meetingQueue }}
          </div>
        </div>
        <div v-for="(terminal, row) in meetingAdjustment.terminals" :key="row" class="adjust-row">
          <div class="adjust-col bold" :style="'width:' + (100 / (meetingAdjustment.meetingQueue.length + 1)) + '%'">
            {{ terminal.terminalNumber }}
          </div>
          <div
            v-for="(meetingQueue, col) in meetingAdjustment.meetingQueue"
            :key="col"
            class="adjust-col pointer"
            :class="[
              meetings[terminal.terminalNumber][meetingQueue].id ? 'occupied' : '',
              {
                'is-clicked': clicked.length === 1 && clicked[0].terminalNumber === terminal.terminalNumber && clicked[0].duration === meetingQueue
              }]"
            :style="'width:' + (100 / (meetingAdjustment.meetingQueue.length + 1)) + '%'"
            @click="onCellClick(row, col, meetings[terminal.terminalNumber][meetingQueue], $event)">
            {{ meetings[terminal.terminalNumber][meetingQueue].name }}
            <!-- {{ terminal.terminalNumber }}-{{ meetingQueue }}**{{ meetings[terminal.terminalNumber][meetingQueue].terminalNumber }}-{{ meetings[terminal.terminalNumber][meetingQueue].duration }} -->
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import helper from '@/filters/modules/date'
export default {
  data() {
    return {
      show: false,
      // adjustDate: helper.dateFormate(new Date(Date.now() + 172800000)),
      adjustDate: helper.dateFormate(new Date(2018, 4, 12, 12, 12, 12)),
      pickerOptions: {
        disabledDate(time) {
          // return time.getTime() < Date.now() + 86400000
          return time.getTime() > Date.now() + 86400000
        }
      },
      meetings: {},
      clicked: []
    }
  },
  computed: {
    ...mapState(['meetingAdjustment'])
  },
  methods: {
    ...mapActions(['adjustMeeting']),
    getConfigs() {
      this.adjustMeeting(this.adjustDate).then(res => {
        if (!res) return
        this.meetingAdjustment.terminals.forEach((terminal, index) => {
          this.meetings[terminal.terminalNumber] = {}
          this.meetingAdjustment.meetingQueue.map(meetingQueue => {
            this.meetings[terminal.terminalNumber][meetingQueue] = { terminalNumber: terminal.terminalNumber, duration: meetingQueue }
          })
        })
        this.meetingAdjustment.meetings.map(meeting => {
          let time = meeting.meetingTime.replace(`${ this.adjustDate } `, '')
          this.meetings[meeting.terminalNumber][time] = Object.assign({}, meeting, { duration: time })
        })
        this.clicked = []
        this.show = true
      })
    },
    onCellClick(row, col, meeting) {
      this.clicked.push(Object.assign({}, meeting))
      if (this.clicked.length === 2 && (this.clicked[0].id || this.clicked[1].id)) {
        if (this.clicked[0].id === this.clicked[1].id) this.clicked = []
        else {
          let toChange = Object.assign({}, this.meetings[this.clicked[0].terminalNumber][this.clicked[0].duration])
          this.meetings[this.clicked[0].terminalNumber][this.clicked[0].duration] = Object.assign({}, this.clicked[1], { terminalNumber: this.clicked[0].terminalNumber, duration: this.clicked[0].duration })
          this.meetings[this.clicked[1].terminalNumber][this.clicked[1].duration] = Object.assign({}, toChange, { terminalNumber: this.clicked[1].terminalNumber, duration: this.clicked[1].duration })
          this.clicked = []
        }
      }
      else if (this.clicked.length === 2 && !this.clicked[0].id && !this.clicked[1].id) {
        this.clicked.shift()
      }
      this.show = false
      this.show = true
    }
  },
  destroyed() {
    console.log(999)
  }
}
</script>

<style lang="css" scoped>
.adjustTable{
  margin-bottom: 10px;
  overflow-x: auto;
}
.bold{
  font-weight: bold;
}
.pointer{
  cursor: pointer;
}
.pointer:hover{
  background: #f5f7fa;
}
.adjustTable .adjust-row{
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.adjustTable .adjust-row:last-child .adjust-col{
  border-bottom: 1px solid #ebeef5;
  margin-bottom: 10px;
}
.adjustTable .adjust-row .adjust-col:last-child{
  border-right: 1px solid #ebeef5;
}
.adjustTable .adjust-col{
  min-width: 100px;
  min-height: 40px;
  border-top: 1px solid #ebeef5;
  border-left: 1px solid #ebeef5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #909399;
  flex-shrink: 0;
}
.adjustTable .is-clicked{
  background: #ebeef5;
}
.adjustTable .occupied{
  background: #3c8dbc;
  transition: background 1s ease-in-out;
  color: #fff;
}
</style>
