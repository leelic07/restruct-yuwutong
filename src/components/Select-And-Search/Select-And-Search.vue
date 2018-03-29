<template>
  <el-col :span="24" class="select-search-box">
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
        <el-button v-if="c !== 'terminals'" icon="el-icon-search" @click.native="search"></el-button>
      </el-col>
      <el-col>
        <el-input
          v-if="['prisoners', 'accounts'].indexOf(c) > -1"
          placeholder="请输入囚犯号"
          v-model="searching.prisonerNumber"></el-input>
        <el-input
          v-if="['families', 'registrations', 'meetings', 'feedback'].indexOf(c) > -1"
          placeholder="请输入身份证号"
          v-model="searching.uuid"></el-input>
        <el-input
          v-if="c==='versions'"
          placeholder="请输入版本号"
          v-model="searching.versionNumber"></el-input>
        <el-input
          v-if="c==='goods'"
          placeholder="请输入商品名称"
          v-model="searching.title"></el-input>
        <el-input
          v-if="c==='prisonAffairsDisclosure'"
          placeholder="请输入新闻标题"
          v-model="searching.title"></el-input>
        <el-input
          v-if="c==='prisonUser'"
          placeholder="请输入监狱名称"
          v-model="searching.jail"></el-input>
      </el-col>
      <el-col>
        <!--搜索框-->
        <el-input
          v-if="['prisoners', 'accounts'].indexOf(c) > -1"
          placeholder="请输入囚犯姓名"
          v-model="searching.name"></el-input>
        <el-input
          v-if="c==='families'"
          placeholder="请输入家属姓名"
          v-model="searching.name"></el-input>
        <el-input
          v-if="c==='registrations'"
          placeholder="请输入囚犯号"
          v-model="searching.prisonerNumber"></el-input>
        <el-input
          v-if="c==='meetings'"
          placeholder="请输入囚犯号"
          v-model="searching.prisonerNumber"></el-input>
        <el-input
          v-if="c==='feedback'"
          placeholder="请输入手机号"
          v-model="searching.phone"></el-input>
        <el-input
          v-if="c==='prisonUser'"
          placeholder="请输入用户名"
          v-model="searching.username"></el-input>
      </el-col>
      <el-col>
        <el-input
          v-if="['registrations', 'meetings', 'feedback'].indexOf(c) > -1"
          placeholder="请输入家属姓名"
          v-model="searching.name"></el-input>
        <el-select v-if="c==='prisonUser'" v-model="searching.role" placeholder="请选择角色" clearable>
          <el-option
            v-for="item in $store.state.role"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-col>
  </el-col>
</template>

<script>
// import roleList from '@/filters/modules/role'
export default {
  props: {
    c: {
      type: String
    }
  },
  data() {
    return {
      selectItem: [1, 10, 20, 30, 40, 50], // 每页可以提供的显示页数的数组
      pageSize: 10, // 默认每页显示的条数
      searching: {}
    }
  },
  watch: {
    'searching': {
      handler: function(newValue) {
        this.$emit('searchingChange', newValue)
      },
      deep: true
    }
  },
  methods: {
    search() {
      this.$emit('search', this.searching)
    },
    // 选择不同的页数执行的方法
    sizeChange() {
      this.$emit('sizeChange', this.pageSize)
    }
  }
}
</script>

<style type="text/stylus" lang="stylus">
  .select-search-box
    margin-bottom: 25px
    .search-box
      .el-col
        &:first-child
          width: 8%
        float: right
        width: 22%
        margin-left: 3%
</style>
