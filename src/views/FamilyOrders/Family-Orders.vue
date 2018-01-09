<template>
  <el-row id="family-orders" :gutter="0">
    <el-row :gutter="0" v-if="!isOrderDetail">

      <el-col :span="24">
        <el-table
          :data="familyOrders"
          stripe
          border
          style="width: 100%">
          <el-table-column
            prop="trade_no"
            label="订单号">
          </el-table-column>
          <el-table-column
            prop="status"
            label="订单状态">
          </el-table-column>
          <el-table-column
            prop="created_at"
            label="创建时间">
          </el-table-column>
          <el-table-column
            prop="gmt_payment"
            label="支付日期">
          </el-table-column>
          <el-table-column
            label="更改配送状态">
            <template slot-scope="scope">
              <el-button type="primary" size="small" @click="dispatchingComplete(scope.row)">配送完成</el-button>
            </template>
          </el-table-column>
          <el-table-column
            label="订单详情">
            <template slot-scope="scope">
              <el-button type="text" @click="orderDetail(scope.row)">订单详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>

      <!--分页组件-->
      <pagination :total="ordersTotal" :pageSize="pagination.limit" :currentPage="pagination.page + 1"
                  @currentChange="currentChange"></pagination>
    </el-row>

    <!--邮件详情路由页面-->
    <router-view></router-view>
  </el-row>

</template>

<script>
  import {mapMutations, mapActions, mapGetters} from 'vuex'
  import Pagination from '@/components/Pagination/Pagination'

  export default {
    data() {
      return {
        breadcrumb: ['主页', '家属订单管理'],//面包屑数组
        pagination: {
          limit: 10,//每页显示记录条数
          page: 0//当前显示第几页
        },
        isOrderDetail: false,//是否是查看邮箱信息页面
      }
    },
    watch: {
      //从邮件详情页面跳转到邮箱列表路由使邮箱列表显示
      $route(to, from) {
        if (to.path === '/orders') {
          this.isOrderDetail = false;
          this.breadCrumb(this.breadcrumb);//路由发生改变重新发送面包屑信息
        } else {
          this.isOrderDetail = true;
        }
      }
    },
    computed: {
      ...mapGetters({
        familyOrders: 'familyOrders',//获取家属订单信息列表
        ordersTotal:'ordersTotal'//获取家属订单信息列表总记录数
      })
    },
    methods: {
      ...mapMutations({
        breadCrumb: 'breadCrumb', //设置家属订单页面的面包屑信息
      }),
      ...mapActions({
        getFamilyOrders: 'getFamilyOrders'//获取家属订单信息
      }),
      //当前页发生变化时执行的方法
      currentChange(page){
        this.$set(this.pagination, 'page', page - 1);
        this.getFamilyOrders(this.pagination);
      },
      //点击配送完成执行的方法
      dispatchingComplete(row){
        console.log(row.id);
      },
      //点击订单详情执行的方法
      orderDetail(row){
        console.log(row.id);
        this.$router.push({
          path: `/orders/${row.id}`
        });
      }
    },
    components: {
      Pagination
    },
    mounted(){
      this.breadCrumb(this.breadcrumb);
      this.getFamilyOrders(this.pagination);
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  #family-orders
    padding: 30px 1% 0 1%
    & /deep/ .el-table__body-wrapper
      overflow: visible
    & /deep/ .el-col-24
      > .el-button--default
        float: right
</style>
