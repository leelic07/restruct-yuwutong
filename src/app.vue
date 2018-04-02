<template>
    <router-view></router-view>
</template>
<script>
export default {
  watch: {
    $route(to) { // 监听路由变化
      if (!sessionStorage.getItem('user_id') || sessionStorage.getItem('user_id') === 'undefined') {
        this.$router.push('/login')
      }
      else if (to.meta.hidden) {
        this.$router.push('/dashboard')
      }
    }
  },
  mounted() {
    if (!sessionStorage.getItem('user_id') || sessionStorage.getItem('user_id') === 'undefined') {
      this.$router.push('/login')
    }
    else if (this.$route.meta.hidden) this.$router.push('/dashboard')
  }
}
</script>
