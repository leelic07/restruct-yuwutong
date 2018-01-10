<template>
  <el-row id="law-information-management" :gutter="0">
    <el-row :gutter="0">
      <div class="col-md-4 lawsList">
        <el-button type="primary" size="normal">添加法律法规信息</el-button>

        <div class="box box-solid">
          <div class="box-header with-border">
            <h3 class="box-title">法律法规列表</h3>

            <div class="box-tools">
              <button type="button" class="btn btn-box-tool" data-widget="collapse">
                <i class="fa fa-minus"></i>
              </button>
            </div>
          </div>
          <div class="box-body no-padding" style="display: block;">
            <ul class="nav nav-pills nav-stacked">
              <li class="active">
                <a href="#"><i class="fa fa-inbox"></i>
                  Inbox
                </a>
              </li>
              <li><a href="#"><i class="fa fa-envelope-o"></i> Sent</a></li>
              <li><a href="#"><i class="fa fa-file-text-o"></i> Drafts</a></li>
              <li>
                <a href="#"><i class="fa fa-filter"></i>
                  Junk
                </a>
              </li>
              <li><a href="#"><i class="fa fa-trash-o"></i> Trash</a></li>
            </ul>
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->
      </div>
      <!-- /.col -->
      <div class="col-md-8">
        <div class="box">
          <div class="box-header with-border">
            <h3 class="box-title">法律内容</h3>
            <!-- /.box-tools -->
          </div>
          <!-- /.box-header -->
          <div class="box-body no-padding">
            <!-- /.mail-box-messages -->
          </div>
          <!-- /.box-body -->
          <!--<div class="box-footer no-padding">-->
          <el-row :gutter="0" class="box-footer no-padding">
            <el-col :span="12">
              <el-button type="danger" size="small">删除</el-button>
            </el-col>
            <el-col :span="12">
              <el-button type="primary" size="small">编辑</el-button>
            </el-col>
          </el-row>
          <!--</div>-->
        </div>
        <!-- /. box -->
      </div>
      <!-- /.col -->
    </el-row>
  </el-row>
</template>

<script>
  import {mapActions, mapMutations, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        breadcrumb: ['主页', '法律法规信息管理']//法律法规信息管理面包屑信息
      }
    },
    methods: {
      ...mapActions({
        getLawsInformation:'getLawsInformation'//获取法律法规信息
      }),
      ...mapMutations({
        breadCrumb: 'breadCrumb'//设置法律法规信息管理页面的面包屑信息
      })
    },
    mounted(){
      this.breadCrumb(this.breadcrumb);

      this.getLawsInformation();
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  #law-information-management
    background-color: #ECF0F5 !important
    .el-row
      > div
        padding: 0
        &.lawsList
          padding-right: 2%
          >.el-button
            width: 100%
            margin-bottom: 20px
        &:nth-child(2)
          .box
            border-top: 0;
            .box-footer
              .el-col
                &:first-child
                  .el-button
                    float: right
                    margin-right:4%
                &:nth-child(2)
                  .el-button
                    float:left
                    margin-left:4%
</style>
