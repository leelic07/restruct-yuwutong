<template>
  <el-row id="jail-information-management" :gutter="0">
    <el-row :gutter="0" v-if="!isJailEdit">
      <el-col :span="12">
        <img :src="_$agency + jails.image_url" alt="">
      </el-col>
      <el-col :span="12">
        <el-col :span="24">
          <h3>{{jails.title}}</h3>
        </el-col>
        <el-col :span="24">
          <el-col :span="12">
            <p>监狱所在省</p>
          </el-col>
          <el-col :span="12">
            <p>{{jails.state}}</p>
          </el-col>
        </el-col>
        <el-col :span="24" class="line"></el-col>
        <el-col :span="24">
          <el-col :span="12">
            <p>监狱所在市</p>
          </el-col>
          <el-col :span="12">
            <p>{{jails.city}}</p>
          </el-col>
        </el-col>
        <el-col :span="24" class="line"></el-col>
        <el-col :span="24">
          <el-col :span="12">
            <p>监狱所在行政区</p>
          </el-col>
          <el-col :span="12">
            <p>{{jails.district}}</p>
          </el-col>
        </el-col>
        <el-col :span="24" class="line"></el-col>
        <el-col :span="24">
          <el-col :span="12">
            <p>监狱所在街道</p>
          </el-col>
          <el-col :span="12">
            <p>{{jails.street}}</p>
          </el-col>
        </el-col>
        <el-col :span="24" class="line"></el-col>
        <el-col :span="24" class="description">
          <p>监狱简介</p>
          <p v-html="jails.description"></p>
        </el-col>
        <el-col :span="24">
          <el-button type="text" @click="editJails(jails.id)">编辑</el-button>
        </el-col>
      </el-col>
    </el-row>

    <!--监狱基本信息修改路由-->
    <router-view></router-view>

  </el-row>
</template>

<script>
  import {mapActions, mapMutations, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        breadcrumb: ['主页', '监狱基本信息管理'],//监狱基本信息管理的面包屑信息
        isJailEdit: false//是否是监狱基本信息编辑页面
      }
    },
    watch: {
      $route(to){
        if (to.path === '/jails')
          this.isJailEdit = false;
        else
          this.isJailEdit = true;
      }
    },
    computed: {
      ...mapGetters({
        jails: 'jails'//获取监狱基本信息
      })
    },
    methods: {
      ...mapActions({
        getJailsInformation: 'getJailsInformation',//获取监狱基本信息
      }),
      ...mapMutations({
        breadCrumb: 'breadCrumb'//获取监狱基本信息管理的面包屑
      }),
      //编辑监狱基本信息
      editJails(id){
        this.$router.push({
          path: `/jails/${id}/edit`
        });
      }
    },
    created(){
      this.getJailsInformation();
    },
    mounted(){
      this.breadCrumb(this.breadcrumb);
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  #jail-information-management
    > .el-row
      > .el-col-12
        &:first-child
          padding: 3% 2% 0 2%
          img
            width: 100%
            float: left
        &:nth-child(2)
          padding: 18px 2% 0 0
          .el-col-24
            &:first-child
              margin-bottom: 10px
              h3
                text-align: center
                font-weight: bold
            &:last-child
              .el-button
                float: right
      .el-col.line
        border-bottom: 1px solid #F3F3F3
        margin-bottom: 10px
      & /deep/ .el-col-24
        &.description
          img
            width: 100%
        .el-col-12
          &:nth-child(2)
            p
              color: #A6A6A6
              text-align: right
</style>
