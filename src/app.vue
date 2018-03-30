<template>
    <router-view></router-view>
</template>
<script>
export default {
  watch: {
    $route(to) { // 监听路由变化
      if (!sessionStorage.getItem('user_id')) {
        this.$router.push('/login')
      }
      if (to.meta.hidden) {
        this.$router.push('/dashboard')
      }
    }
  },
  mounted() {
    if (this.$route.meta.hidden) this.$router.push('/dashboard')
  }
}
</script>
