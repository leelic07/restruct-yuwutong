<template>
  <div>
    <div class="form-container">
      <el-steps :active="status" finish-status="success" simple style="margin-bottom: 20px">
        <el-step title="基本信息" ></el-step>
        <el-step title="配置信息" ></el-step>
        <el-step title="远程会见" ></el-step>
      </el-steps>

      <template v-for="(item, index) in tabMapOptions">
        <keep-alive>
          <component v-if='status == index' :is="item.key"></component>
        </keep-alive>
      </template>

    </div>
  </div>

</template>

<script>
import prisonBase from './components/prison-base'
import prisonConfig from './components/prison-config'
import prisonRemote from './components/prison-remote'

export default {
  components: { prisonBase, prisonConfig, prisonRemote },
  data() {
    return {
      activeName: 'prisonBase',
      placeHolder: 0,
      tabMapOptions: [
        { label: '基本信息', key: 'prisonBase' },
        { label: '配置信息', key: 'prisonConfig' },
        { label: '远程会见', key: 'prisonRemote' }
      ]
    }
  },
  computed: {
    status() {
      switch (this.$route.query.tag) {
        case 'prisonBase':
          return 0
        case 'prisonConfig':
          return 1
        case 'prisonRemote':
          return 2
        default:
          return 0
      }
    }
  },
  mounted() {
    this.render()
  },
  methods: {
    render() {
      sessionStorage.removeItem('base')
      sessionStorage.removeItem('config')
      sessionStorage.removeItem('step')
      this.$router.push({ query: Object.assign({}, { tag: 'prisonBase' }) })
    }
  }
}
</script>
