<template>
  <el-row class="row-container" :gutter="0">
    <el-button
      size="small"
      type="primary"
      plain
      class="button-add"
      @click="onAdd">添加监狱</el-button>
    <m-search
      :items="searchItems"
      @sizeChange="sizeChange"
      @search="onSearch" />
    <el-col :span="24">
      <el-tabs
        value="first"
        type="card">
        <el-tab-pane
          label="监狱"
          name="first" />
      </el-tabs>
      <el-table
        :data="prisons.contents"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="title"
          label="监狱名称" />
        <el-table-column label="监狱图片">
          <template slot-scope="scope">
            <img :src="scope.row.imageUrl + '?token=523b87c4419da5f9186dbe8aa90f37a3876b95e448fe2a'" alt="">
          </template>
        </el-table-column>
        <el-table-column
          prop="zipcode"
          label="监狱邮编" />
        <el-table-column label="所在地区">
          <template slot-scope="scope">
            <span
              class="separate"
              v-if="scope.row.provincesName">{{scope.row.provincesName}}</span>
            <span
              class="separate"
              v-if="scope.row.citysName">{{scope.row.citysName}}</span>
            <span
              class="separate"
              v-if="scope.row.street">{{scope.row.street}}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <m-pagination
      ref="pagination"
      :total="prisons.total"
      @onPageChange="getDatas" />
  </el-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      searchItems: {
        title: { type: 'input', label: '监狱名称' }
      }
    }
  },
  computed: {
    ...mapState(['prisons'])
  },
  mounted() {
    this.getDatas()
  },
  methods: {
    ...mapActions(['getPrisons']),
    sizeChange(rows) {
      this.$refs.pagination.handleSizeChange(rows)
      this.getDatas()
    },
    getDatas() {
      this.getPrisons({ ...this.filter, ...this.pagination })
    },
    onSearch() {
      this.$refs.pagination.handleCurrentChange(1)
    },
    onAdd() {
      this.$router.push('/prison/add')
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
</style>
