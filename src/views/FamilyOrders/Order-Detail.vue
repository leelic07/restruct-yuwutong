<template>
  <el-row id="order-detail" :gutter="0">
    <!--表格头部信息-->
    <el-row :gutter="0" class="title-box">
      <el-col :span="7">
        <h4>订单号：{{orderDetailInfo.tradeNo}}</h4>
      </el-col>
      <el-col :span="3" :offset="1">
        <h4>罪犯名字：{{orderDetailInfo.name}}</h4>
      </el-col>
      <el-col :span="3" :offset="1">
        <h4>监狱名字：{{orderDetailInfo.title}}</h4>
      </el-col>
      <el-col :span="9">
        <p>支付时间：{{orderDetailInfo.gmtPayment | Date}}</p>
      </el-col>
    </el-row>
    <!--表格部分-->
    <el-row :gutter="0" class="table-box">
      <el-table
        :data="orderDetailList"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="title"
          label="商品名称">
        </el-table-column>
        <el-table-column
          prop="price"
          label="商品单价">
        </el-table-column>
        <el-table-column
          prop="quantity"
          label="商品数量">
        </el-table-column>
      </el-table>
    </el-row>
    <!--总计部分-->
    <el-row :gutter="0" class="total-box">
      <h3>总计：{{orderDetailInfo.amount}}</h3>
    </el-row>
  </el-row>
</template>

<script>
  import {mapActions, mapMutations, mapGetters} from 'vuex'
  export default {
    data() {
      return {
        breadcrumb: ['主页', '家属订单管理', '订单详情'],
      }
    },
    computed: {
      ...mapGetters({
        orderDetailList: 'orderDetailList',//获取订单的详情信息
        orderDetailTotal: 'orderDetailTotal',//获取商品订单详情总计
        orderDetailInfo: 'orderDetailInfo'//获取商品详情信息
      })
    },
    methods: {
      ...mapActions({
        getOrderById: 'getOrderById'//根据id过去家属订单详情信息
      }),
      ...mapMutations({
        breadCrumb: 'breadCrumb',
      })
    },
    mounted(){
      this.breadCrumb(this.breadcrumb);
      this.getOrderById(this.$route.params.id);
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  #order-detail
    padding-bottom: 30px
    .title-box
      margin-bottom: 5px
      .el-col
        &:last-child
          p
            margin-bottom: 0
            color: #999999
            font-size: 15px
            float: right
            margin-right: 1%
            margin-top: 10px
    .total-box
      margin-top: 10px
      h3
        float: right
</style>
