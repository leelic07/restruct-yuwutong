<template>
  <ol v-if="breadcrumbs.length > 1" class="breadcrumb">
    <li v-for="bc in breadcrumbs">
      <a href="#" @click="$event.preventDefault()">
        {{bc}}
      </a>
    </li>
  </ol>
  <ol v-else class="breadcrumb">
    <li v-for="bc in breadcrumb">
      <a href="#" @click="$event.preventDefault()">
        {{bc}}
      </a>
    </li>
  </ol>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
export default {
  computed: {
    // 获取vuex数据
    ...mapGetters({
      breadcrumb: 'breadcrumb' // 获取面包屑信息
    }),
    ...mapState({
      breadcrumbs: state => state.breadcrumbs
    })
  },
  watch: {
    $route(to) { // 监听路由变化
      let breadcrumbs = ['主页']
      to.matched.map(item => {
        if (item.name.match(/[1-9]/g)) return
        breadcrumbs.push(item.name)
      })
      this.updateBreadcrumbs(breadcrumbs)
    }
  },
  mounted() {
    let breadcrumbs = ['主页']
    this.$route.matched.map(item => {
      if (item.name.match(/[a-zA-Z]/g)) return
      breadcrumbs.push(item.name)
    })
    this.updateBreadcrumbs(breadcrumbs)
  },
  methods: {
    ...mapActions(['updateBreadcrumbs'])
  }
}
</script>

<style lang="css">
.breadcrumb {
  background: transparent;
  margin-bottom: 0;
  padding: 15px;
}
.breadcrumb> li + li::before{
  content: "\E604";
  font-family: element-icons!important;
}
.breadcrumb > li > a{
  color: #444;
  font-size: 12px;
}
</style>
