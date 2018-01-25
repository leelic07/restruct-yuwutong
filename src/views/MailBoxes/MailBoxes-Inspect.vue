<template>
  <el-row id="mailboxes-inspect" :gutter="0">
    <div class="box-header with-border">
      <h3 class="box-title">{{mailDetail.title}}</h3>
    </div>
    <!-- /.box-header -->
    <div class="box-body no-padding">
      <div class="mailbox-read-info">
        <h5>来自：
          <!--<span class="mailbox-read-time pull-right">15 Feb. 2016 11:03 PM</span></h5>-->
          <span>{{mailDetail.poster}} &nbsp;&nbsp;&nbsp; &lt;{{mailDetail.prisonerName}} 的 {{mailDetail.relationship}}&gt;</span>
        </h5>
        <h5>日期：
          <span>{{mailDetail.created_at}}</span>
        </h5>
      </div>

      <!-- /.mailbox-controls -->
      <div class="mailbox-read-message">
        <h5>信件内容：</h5>
        <p class="contents">{{mailDetail.contents}}</p>
      </div>
      <!-- /.mailbox-read-message -->
    </div>
    <!-- /.box-body -->
    <div class="box-footer">
      <el-row :gutter="0" v-for="comments in mailDetail.comments" :key="comments.id">
        <el-col :span="24">
          <el-button type="text">监狱回复：</el-button>
          <span>{{comments.updated_at}}</span>
        </el-col>
        <el-col :span="24">
          <p class="contents">{{comments.contents}}</p>
        </el-col>
      </el-row>
      <el-input
        type="textarea"
        :rows="3"
        placeholder="快速回复"
        v-model="replayContent">
      </el-input>
    </div>
    <!-- /.box-footer -->
    <div class="box-footer">
      <div class="pull-right">
        <el-button
          plain
          size="mini"
        >回复
        </el-button>
      </div>
    </div>
    <!-- /.box-footer -->
    <!-- /. box -->
  </el-row>
</template>

<script>
  import {mapActions, mapMutations, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        replayContent: '',//回复的内容
        breadcrumb: ['主页', '监狱长信箱', '邮件详情']
      }
    },
    watch: {},
    computed: {
      ...mapGetters({
        mailDetail: 'mailDetail'//邮件详情信息
      })
    },
    methods: {
      ...mapActions({
        getMailDetailById: 'getMailDetailById'//根据邮件id获取邮件详情信息
      }),
      ...mapMutations({
        breadCrumb: 'breadCrumb'
      })
    },
    mounted(){
      this.breadCrumb(this.breadcrumb);

      this.getMailDetailById(this.$route.params.id);
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  #mailboxes-inspect
    p.contents
      margin-left: 15px
    .box-body
      .mailbox-read-info
        h5
          &:nth-child(2)
            margin-top: 12px
</style>
