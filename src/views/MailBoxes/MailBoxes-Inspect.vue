<template>
  <el-row id="mailboxes-inspect" :gutter="0">
    <div class="box-header with-border">
      <h3 class="box-title">主题：狱务通</h3>
    </div>
    <!-- /.box-header -->
    <div class="box-body no-padding">
      <div class="mailbox-read-info">
        <h5>来自：
          <!--<span class="mailbox-read-time pull-right">15 Feb. 2016 11:03 PM</span></h5>-->
          <span>lcc &nbsp;&nbsp;&nbsp; &lt;章子子 的 母女&gt;</span>
        </h5>
        <h5>日期：
          <span>2017-11-14 03:25:58</span>
        </h5>
      </div>

      <!-- /.mailbox-controls -->
      <div class="mailbox-read-message">
        <h5>信件内容：</h5>
        <p>Hello John,</p>

        <p>Keffiyeh blog actually fashion axe vegan, irony biodiesel. Cold-pressed hoodie chillwave put a bird
          on it aesthetic, bitters brunch meggings vegan iPhone. Dreamcatcher vegan scenester mlkshk. Ethical
          master cleanse Bushwick, occupy Thundercats banjo cliche ennui farm-to-table mlkshk fanny pack
          gluten-free. Marfa butcher vegan quinoa, bicycle rights disrupt tofu scenester chillwave 3 wolf moon
          asymmetrical taxidermy pour-over. Quinoa tote bag fashion axe, Godard disrupt migas church-key tofu
          blog locavore. Thundercats cronut polaroid Neutra tousled, meh food truck selfies narwhal American
          Apparel.</p>

        <p>Thanks,<br>Jane</p>
      </div>
      <!-- /.mailbox-read-message -->
    </div>
    <!-- /.box-body -->
    <div class="box-footer">
      <el-input
        type="textarea"
        :rows="4"
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
  import {mapMutations} from 'vuex'

  export default {
    data() {
      return {
        replayContent: '',//回复的内容
        breadcrumb: ['主页', '监狱长信箱', '邮件详情']
      }
    },
    watch: {},
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

<style type="text/stylus" lang="stylus" scoped>
  #mailboxes-inspect
    .box-body
      .mailbox-read-info
        h5
          &:nth-child(2)
            margin-top: 12px
</style>
