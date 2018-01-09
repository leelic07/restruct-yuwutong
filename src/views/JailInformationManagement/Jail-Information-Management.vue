<template>
  <el-row id="jail-information-management" :gutter="0">
    <el-col :span="12">
      <img :src="_$baseUrl + '/system/jails/images/000/000/001/thumb/123123111.jpg?1511680679'" alt="">
    </el-col>

    <el-col :span="12">
      <el-col :span="24">
        <h3>英山监狱</h3>
      </el-col>
      <el-col :span="24">
        <el-col :span="12">
          <p>监狱所在省</p>
        </el-col>
        <el-col :span="12">
          <p>广西壮族自治区</p>
        </el-col>
      </el-col>
      <el-col :span="24" class="line"></el-col>
      <el-col :span="24">
        <el-col :span="12">
          <p>监狱所在市</p>
        </el-col>
        <el-col :span="12">
          <p>桂林市</p>
        </el-col>
      </el-col>
      <el-col :span="24" class="line"></el-col>
      <el-col :span="24">
        <el-col :span="12">
          <p>监狱所在行政区</p>
        </el-col>
        <el-col :span="12">
          <p>七星区</p>
        </el-col>
      </el-col>
      <el-col :span="24" class="line"></el-col>
      <el-col :span="24">
        <el-col :span="12">
          <p>监狱所在街道</p>
        </el-col>
        <el-col :span="12">
          <p>横塘路29号</p>
        </el-col>
      </el-col>
      <el-col :span="24" class="line"></el-col>
      <el-col :span="24">
        <p>监狱简介</p>
        <p>
          英山监狱是一座重型犯监狱，依法收押有期徒刑、无期徒刑和死刑缓期二年执行的罪犯。监狱始建于1967年，原址在广西柳州市鹿寨县中渡镇，2007年整体搬迁到桂林市东郊。监狱贯彻落实“惩罚和改造相结合，以改造人为宗旨”的工作方针，坚持惩罚和改造相结合、教育和劳动相结合的原则，将监管改造、教育改造、劳动改造三大改造手段有机结合，不断提高改造质量，将一大批罪犯改造成为守法公民。
          近年来，英山监狱深入贯彻党的十八大、十九大精神，全面落实依法治国战略部署，坚持将教育管理罪犯作为中心任务，深入贯彻治本安全观要求，积极开展创建模范监狱工作，以罪犯教育改造社会一体化工作体系为抓手，不断提高监狱管理水平。进一步规范刑罚执行工作，不断提高执法水平。不断丰富狱务公开内容和形式，进一步提高执法透明度和执法公信力。大力开展平安监狱、文化监狱、法治监狱建设，不断强化人防、物防、技防“三道防线”，确保监狱安全稳定。认真落实“5+1+1”教育改造模式，深入开展“三课”教育，大力开展心理咨询工作，不断推进监区文化建设，稳定罪犯思想，提高教育改造质量，提升罪犯素质和再社会化水平。狠抓罪犯劳动改造，培育罪犯的劳动习惯，提高罪犯劳动技能，依法保障罪犯劳动的权利。大力加强生活卫生工作，严格落实司法部颁布的罪犯伙食实物量标准，保障罪犯合法权益。
          在自治区司法厅、自治区监狱管理局的正确领导下，通过监狱全体警察职工的共同努力，监狱工作不断稳步前进，2010年监狱荣获自治区司法厅记集体三等功，2011年荣获全区监狱系统先进单位，2012年荣获全国监狱劳教（戒毒）场所规范化管理年活动通报表扬单位，2013年荣获全国监狱劳教（戒毒）场所基层基础建设年活动通报表扬单位，2014年荣获全国监狱戒毒系统教育质量年获得通报表扬单位，全国2014年创建为自治区文明单位，2016年成功创建自治区示范性老年活动中心
          。</p>
      </el-col>
      <el-col :span="24">
        <el-button type="text">编辑</el-button>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
  import {mapActions,mapMutations,mapGetters} from 'vuex'
  export default {
    data() {
      return {
        breadcrumb:['主页','监狱基本信息管理']
      }
    },
    methods:{
      ...mapMutations({
        breadCrumb:'breadCrumb'
      })
    },
    mounted(){
      this.breadCrumb(this.breadcrumb);
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  #jail-information-management
    >.el-col-12
      &:first-child
        padding:3% 0 0 2%
      &:nth-child(2)
        padding:18px 2% 0 0
        .el-col-24
          &:first-child
            margin-bottom:10px
            h3
              text-align:center
              font-weight:bold
          &:last-child
            .el-button
              float:right
    .el-col.line
      border-bottom: 1px solid #F3F3F3
      margin-bottom: 10px
    .el-col-24
      .el-col-12
        &:nth-child(2)
          p
            color:#A6A6A6
            text-align:right
</style>
