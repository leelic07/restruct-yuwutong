<template>
  <el-row id="law-information-management" :gutter="0">
    <el-row class="law-information-box" :gutter="0" v-if="!isLawNew">
      <div class="col-md-4 lawsList">
        <el-button type="primary" size="normal" @click="$router.push({path:'/laws/new'})">添加法律法规信息</el-button>
        <div class="box box-solid">
          <div class="box-header with-border">
            <h3 class="box-title">法律法规列表</h3>
            <div class="box-tools">
              <button type="button" class="btn btn-box-tool" data-widget="collapse">
                <i class="el-icon-circle-plus"></i>
              </button>
            </div>
          </div>
          <div class="box-body no-padding" style="display: block;">
            <ul class="nav nav-pills nav-stacked">
              <li v-for="law in laws[lawManagementPage]">
                <a href="#" @click="showLawDetail(law,$event)"><i class="el-icon-message"></i>
                  {{law.title}}
                </a>
              </li>
              <el-col tag="li" :span="24">
                <p class="pull-left">总共{{laws.length}}页</p>
                <el-button plain size="mini" @click="nextPage()"><i class="el-icon-arrow-right"></i>
                </el-button>
                <p class="pull-right">第{{lawManagementPage + 1}}页</p>
                <el-button plain size="mini" @click="prePage()"><i class="el-icon-arrow-left"></i>
                </el-button>
              </el-col>
            </ul>
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->
      </div>
      <!-- /.col -->
      <div class="col-md-8">
        <el-row :gutter="0" class="box">
          <el-row :gutter="0" class="box-header with-border">
            <h3 class="box-title">法律内容</h3>
            <!-- /.box-tools -->
          </el-row>
          <!-- /.box-header -->
          <el-row :gutter="0" class="box-body no-padding">
            <!-- /.mail-box-messages -->
            <img :src="_$agency + lawDetail.image_url" alt="">
            <p v-html="lawDetail.contents"></p>
          </el-row>
          <!-- /.box-body -->
          <!--<div class="box-footer no-padding">-->
          <el-row :gutter="0" class="box-footer no-padding">
            <el-col :span="12">
              <el-button type="danger" size="small" @click="deleteLaw(lawDetail.id)">删除</el-button>
            </el-col>
            <el-col :span="12">
              <el-button type="primary" size="small" @click="editLaw(lawDetail.id)">编辑</el-button>
            </el-col>
          </el-row>
          <!--</div>-->
        </el-row>
        <!-- /. box -->
      </div>
      <!-- /.col -->
    </el-row>
    <!--添加法律法规路由-->
    <router-view></router-view>
  </el-row>
</template>

<script>
  import {mapActions, mapMutations, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        breadcrumb: ['主页', '法律法规信息管理'],//法律法规信息管理面包屑信息
        isLawNew: false//是否是添加法律法规信息页面
      }
    },
    watch: {
      //监听路由变化
      $route(to){
        if (to.path === '/laws') {
          this.breadCrumb(this.breadcrumb);//重新设置路由信息
          this.isLawNew = false;
        } else {
          this.isLawNew = true;
        }
      },
//      //监听laws的变化
//      laws(newValue){
//        //将第一页第一条法律信息赋值给法律详情
//        this.lawDetail = newValue[0][0];
//      }
    },
    computed: {
      ...mapGetters({
        laws: 'laws',//获取法律法规信息
        deleteLawResult: 'deleteLawResult',//根据id删除法律法规的结果
        lawManagementPage: 'lawManagementPage',//法律法规页码
        lawDetail: 'lawDetail'//右侧内容区域显示的法律法规信息
      })
    },
    methods: {
      ...mapActions({
        getLawsInformation: 'getLawsInformation',//获取法律法规信息
        deleteLawById: 'deleteLawById'//根据id删除法律法规
      }),
      ...mapMutations({
        breadCrumb: 'breadCrumb',//设置法律法规信息管理页面的面包屑信息
        nextPage: 'nextPage',//点击下一页执行的方法
        prePage: 'prePage',//点击上一页执行的方法
        setLawDetail: 'setLawDetail'//设置法律法规的详情页面
      }),
      //点击法律法规详情标题来显示法律法规详情
      showLawDetail(law, e){
        e.preventDefault();
        this.setLawDetail(law);
      },
      //编辑法律法规
      editLaw(id){
        this.$router.push({
          path: `/laws/${id}/edit`
        });
      },
      //点击删除法律法规
      deleteLaw(id){
        this.$confirm('此操作将删除法律法规，是否继续？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteLawById(id);
        });
      }
    },
    mounted(){
      this.breadCrumb(this.breadcrumb);
      this.getLawsInformation();
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  #law-information-management
    .el-row
      &.law-information-box
        background-color: #ECF0F5 !important
      > div
        padding: 0
        &.lawsList
          padding-right: 2%
          > .el-button
            width: 100%
            margin-bottom: 20px
          .box-body
            .nav
              li:last-child
                padding: 5px 4%
                float: left
                p
                  margin: 0
                  line-height: 38px
                .el-button
                  float: right
                  margin-top: 5px
                  &:nth-child(4)
                    margin-right: 2%
                  &:nth-child(2)
                    margin-left: 2%
        &:nth-child(2)
          .box
            border-top: 0;
            .box-header
              padding: 10px 0 10px 2%
            .box-body
              img
                max-width: 100%
                display: block
                margin: 10px auto 0 auto
              > p
                max-height: 500px
                overflow: auto
                padding: 0 4%
            .box-footer
              .el-col
                margin: 10px 0
                &:first-child
                  .el-button
                    float: right
                    margin-right: 4%
                &:nth-child(2)
                  .el-button
                    float: left
                    margin-left: 4%
</style>
