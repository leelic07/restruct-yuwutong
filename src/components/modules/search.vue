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
        <search-item :item="item"></search-item>
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
      pageSize: 10
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
</style>
