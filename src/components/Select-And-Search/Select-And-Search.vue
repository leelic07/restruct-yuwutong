<template>
  <el-col :span="24" id="select-search-box">
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
    <el-col :span="16">
      <el-col :span="6">
        <el-input v-if="c==='registrations'" placeholder="请输入家属姓名" v-model="searching.name"></el-input>
        <el-input v-if="c==='meetings'" placeholder="请输入家属姓名" v-model="searching.name"></el-input>
      </el-col>
      <el-col :span="6" :offset="1">
        <!--搜索框-->
        <el-input v-if="c==='prisoners'" placeholder="请输入囚犯姓名" v-model="searching.name"></el-input>
        <el-input v-if="c==='families'" placeholder="请输入家属姓名" v-model="searching.name"></el-input>
        <el-input v-if="c==='accounts'" placeholder="请输入囚犯姓名" v-model="searching.name"></el-input>
        <el-input v-if="c==='registrations'" placeholder="请输入囚犯号" v-model="searching.prisonerNumber"></el-input>
        <el-input v-if="c==='meetings'" placeholder="请输入囚犯号" v-model="searching.prisonerNumber"></el-input>
      </el-col>
      <el-col :span="6" :offset="1">
        <el-input v-if="c==='prisoners'" placeholder="请输入囚犯号" v-model="searching.prisonerNumber"></el-input>
        <el-input v-if="c==='families'" placeholder="请输入身份证号" v-model="searching.uuid"></el-input>
        <el-input v-if="c==='accounts'" placeholder="请输入囚犯号" v-model="searching.prisonerNumber"></el-input>
        <el-input v-if="c==='registrations'" placeholder="请输入身份证号" v-model="searching.uuid"></el-input>
        <el-input v-if="c==='meetings'" placeholder="请输入身份证号" v-model="searching.uuid"></el-input>
        <el-input v-if="c==='versions'" placeholder="请输入版本号" v-model="searching.versionNumber"></el-input>
        <el-input v-if="c==='goods'" placeholder="请输入商品名称" v-model="searching.title"></el-input>
        <el-input v-if="c==='prisonAffairsDisclosure'" placeholder="请输入新闻标题" v-model="searching.title"></el-input>
      </el-col>
      <el-col :span="3" :offset="1">
        <el-button v-if="c !== 'terminals'" icon="el-icon-search" @click.native="search"></el-button>
      </el-col>
    </el-col>
  </el-col>
</template>

<script>
  export default {
    props: {
      c: {
        type: String
      },
      searching: {
        type: Object
      },//搜索的内容
    },
    data() {
      return {
        selectItem: [1, 10, 20, 30, 40, 50],//每页可以提供的显示页数的数组
        pageSize: 10//默认每页显示的条数
      }
    },
    watch: {
      'searching': {
        handler: function (newValue) {
          this.$emit('searchingChange', newValue)
        },
        deep: true
      }
    },
    methods: {
      //点击搜索执行的方法
      search(){
        this.$emit('search', this.searching)
      },
      //选择不同的页数执行的方法
      sizeChange(){
        this.$emit('sizeChange', this.pageSize)
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  #select-search-box
    margin-bottom: 25px
</style>
