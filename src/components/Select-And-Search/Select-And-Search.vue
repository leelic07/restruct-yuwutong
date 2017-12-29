<template>
  <el-col :span="24" id="select-search-box">
    <el-col :span="12">
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
    <el-col :span="12">
      <el-col :span="12" :offset="12">
        <!--搜索框-->
        <el-input placeholder="请输入内容" v-model="searching">
          <el-button slot="append" icon="el-icon-search" @click.native="search"></el-button>
        </el-input>
      </el-col>
    </el-col>

  </el-col>
</template>

<script>
  export default {
    data() {
      return {
        selectItem:[1,10,20,30,40,50],//每页可以提供的显示页数的数组
        searching:'',//搜索的内容
        pageSize:10//默认每页显示的条数
      }
    },
    watch:{
      searching(){
        this.$emit('searchingChange',this.searching)
      }
    },
    methods:{
      //点击搜索执行的方法
      search(){
        this.$emit('search',this.searching)
      },
      //选择不同的页数执行的方法
      sizeChange(){
        this.$emit('sizeChange',this.pageSize)
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  #select-search-box
    margin-bottom:25px
</style>
