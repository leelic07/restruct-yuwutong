<template>
  <div id="app" :class="path">
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      path: ''
    }
  },
  methods: {
    render() {
      this.path = location.pathname.split('/').pop()
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'render'
  },
  mounted() {
    this.render()
  }
}
</script>
