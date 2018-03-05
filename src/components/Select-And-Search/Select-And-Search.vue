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
      <el-col :span="8" :offset="2">
        <!--搜索框-->
        <el-input v-if="c==='prisoners'" placeholder="请输入囚犯姓名" v-model="searching.name"></el-input>
        <el-input v-if="c==='families'" placeholder="请输入家属姓名" v-model="searching.name"></el-input>
        <el-input v-if="c==='accounts'" placeholder="请输入囚犯姓名" v-model="searching.name"></el-input>
      </el-col>
      <el-col :span="8" :offset="1">
        <el-input v-if="c==='prisoners'" placeholder="请输入囚犯号" v-model="searching.prisonerNumber"></el-input>
        <el-input v-if="c==='families'" placeholder="请输入家属身份证号" v-model="searching.uuid"></el-input>
        <el-input v-if="c==='accounts'" placeholder="请输入囚犯号" v-model="searching.prisonerNumber"></el-input>
      </el-col>
      <el-col :span="3" :offset="1">
        <el-button icon="el-icon-search" @click.native="search"></el-button>
      </el-col>
    </el-col>
    <!--搜索框-->
    <!--<el-col :span="16" v-else>-->
    <!--<el-col :span="8" :offset="16">-->
    <!--&lt;!&ndash;搜索框&ndash;&gt;-->
    <!--<el-input placeholder="请输入内容" v-model="searching.name">-->
    <!--<el-button slot="append" icon="el-icon-search" @click.native="search"></el-button>-->
    <!--</el-input>-->
    <!--</el-col>-->
    <!--</el-col>-->
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
      searching(newValue){
        this.$emit('searchingChange', newValue)
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
