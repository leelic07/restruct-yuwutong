<template>
  <el-row id="dash-board" :gutter="0">
    <el-col :span="17" :offset="7">
      <h1>欢迎来到狱务公开管理平台</h1>
    </el-col>
  </el-row>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    data() {
      return {
        breadcrumb: ['主页']
      }
    },
    methods: {
      ...mapMutations({
        breadCrumb: 'breadCrumb'
      })
    },
    mounted(){
      this.breadCrumb(this.breadcrumb);
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  #dash-board
    h1
      margin-top: 100px
</style>
