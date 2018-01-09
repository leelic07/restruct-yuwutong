<template>
  <el-row id="order-detail" :gutter="0">
    <!--表格头部信息-->
    <el-row :gutter="0" class="title-box">
      <el-col :span="7">
        <h4>订单号：{{orderDetail.trade_no}}</h4>
      </el-col>
      <el-col :span="2">
        <h4>{{orderDetail.prisoner_name}}</h4>
      </el-col>
      <el-col :span="2">
        <h4>{{orderDetail.jail_id}}</h4>
      </el-col>
      <el-col :span="13">
        <p>{{orderDetail.gmt_payment}}</p>
      </el-col>
    </el-row>

    <!--表格部分-->
    <el-row :gutter="0" class="table-box">
      <el-table
        :data="orderDetail.goods"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="goodsName"
          label="商品名称">
        </el-table-column>
        <el-table-column
          prop="goodsPrice"
          label="商品单价">
        </el-table-column>
        <el-table-column
          prop="goodsCounts"
          label="商品数量">
        </el-table-column>
      </el-table>
    </el-row>

    <!--总计部分-->
    <el-row :gutter="0" class="total-box">
      <h3>总计：{{orderDetail.amount}}</h3>
    </el-row>
  </el-row>
</template>

<script>
  import {mapMutations, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        breadcrumb: ['主页', '家属订单管理', '订单详情'],
      }
    },
    computed: {
      ...mapGetters({
        orderDetail: 'orderDetail'//获取订单的详情信息
      })
    },
    methods: {
      ...mapMutations({
        breadCrumb: 'breadCrumb',
        getOrderById:'getOrderById'//根据id过去家属订单详情信息
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
            margin-top:10px
    .total-box
      margin-top: 10px
      h3
        float: right
</style>
