<template>
  <el-col :span="24" class="filter-box">
    <el-col :span="8">
      <!--页数选择框-->
      <el-select v-model="pageSize" placeholder="请选择" @change="sizeChange">
        <el-option
          v-for="item in selectItem"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
      条记录
    </el-col>
    <!--搜索框-->
    <el-col :span="16" class="search-box">
      <el-col>
        <el-button icon="el-icon-search" @click="onSearch"></el-button>
      </el-col>
      <el-col v-for="(item, index) in items" :key="index">
        <el-input
          v-if="item.type === 'input'"
          v-model="item.value"
          :placeholder="'请输入' + item.label" />

        <el-select
          v-if="item.type === 'select'"
          v-model="item.value"
          :placeholder="'请选择' + item.label"
          :loading="item.getting || false"
          clearable>
          <el-option
            v-for="option in item.options"
            :key="item.belong ? option[item.belong.value] : option.value"
            :label="item.belong ? option[item.belong.label] : option.label"
            :value="item.belong ? option[item.belong.value] : option.value" />
        </el-select>
        <el-date-picker
          v-if="item.type === 'datetime'"
          v-model="item.value"
          type="datetime"
          :placeholder="'请选择' + item.label"
          align="right"
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-col>
    </el-col>
  </el-col>
</template>

<script>
import SearchItem from './form-item'
export default {
  components: { SearchItem },
  props: {
    items: {
      type: Object
    }
  },
  data() {
    return {
      selectItem: [1, 10, 20, 30, 40, 50], // 每页可以提供的显示页数的数组
      pageSize: 10,
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      }
    }
  },
  mounted() {
    this.$parent.$parent.filter = {}
  },
  methods: {
    sizeChange(e) {
      this.$emit('sizeChange', this.pageSize)
    },
    onSearch(e) {
      let params = {}
      Object.keys(this.items).forEach(key => {
        if (!this.items[key].value && parseInt(this.items[key].value) !== 0) return
        params[key] = this.items[key].value
      })
      this.$parent.$parent.filter = params
      this.$emit('search')
    }
  }
}
</script>

<style type="text/stylus" lang="stylus">
.filter-box
  margin-bottom: 25px;
  .search-box
    .el-col
      &:first-child
        width: 8%
      float: right
      width: 22%
      margin-left: 3%
      .el-date-editor.el-input
        width: 100%;
</style>
