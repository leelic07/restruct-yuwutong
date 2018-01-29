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
        v-model="replyContent">
      </el-input>
    </div>
    <!-- /.box-footer -->
    <div class="box-footer">
      <div class="pull-right">
        <el-button plain size="mini" @click="reply">回复</el-button>
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
        replyContent: '',//回复的内容
        breadcrumb: ['主页', '监狱长信箱', '邮件详情']
      }
    },
    watch: {
      commentResult(newValue){
        newValue.code === 200 && this.$message({
          type: 'success',
          message: '回复邮件成功!'
        });
        this.replyContent = '';
      }
    },
    computed: {
      ...mapGetters({
        mailDetail: 'mailDetail',//邮件详情信息
        commentResult: 'commentResult'//评论结果
      })
    },
    methods: {
      ...mapActions({
        getMailDetailById: 'getMailDetailById',//根据邮件id获取邮件详情信息
        replyComment: 'replyComment'//根据回复的内容添加监狱回复信息
      }),
      ...mapMutations({
        breadCrumb: 'breadCrumb'
      }),
      //点击回复按钮执行的方法
      reply(){
        this.replyComment({
          'id': this.$route.params.id,
          'contents': this.replyContent,
          'family_id': this.mailDetail.family_id,
          'user_id': sessionStorage['user_id']
        });
      }
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
