<template>
  <div>
    <div class="form-container">
      <el-tabs v-model="activeName" type="border-card" class="no-bottom-padding" @tab-click="handleClick">
        <el-tab-pane v-for="item in tabMapOptions" :label="item.label" :key='item.key' :name="item.key">
          <keep-alive>
            <component v-if='activeName == item.key' :is="activeName"></component>
          </keep-alive>
        </el-tab-pane>
      </el-tabs>
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
  watch: {
    '$route': 'render'
  },
  mounted() {
    this.render()
  },
  methods: {
    handleClick(tag, e) {
      this.tabMapOptions[this.placeHolder].query = this.$route.query
      this.placeHolder = tag.index
      let query = this.tabMapOptions[tag.index].query || ''
      this.$router.push({ query: Object.assign({}, query, { tag: tag.name }) })
    },
    render() {
      if (!this.$route.query.tag) {
        this.$router.push({ query: { tag: 'prisonBase' } })
      }
      if (this.$route.query.tag !== this.activeName) {
        this.activeName = this.$route.query.tag || 'prisonBase'
        this.placeHolder = this.tabMapOptions.findIndex((value) => { return value.key === this.activeName })
      }
    }
  }
}
</script>