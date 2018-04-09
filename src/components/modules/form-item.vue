<template>
  <span class="filter">
    <el-input
      v-if="item.type === 'input'"
      v-model="item.value"
      :placeholder="'请输入' + item.label" />
      
    <el-select
      v-if="item.type === 'select'"
      v-model="item.value"
      :placeholder="'请选择' + item.label">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value" />
    </el-select>
  </span>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    options() {
      switch (this.item.label) {
        case '角色':
          let optionObj = require('@/filters/modules/role')
          return optionObj.default.role
        default:
          return []
      }
    }
  }
}
</script>

<style lang="css">
.filter{
  display: inline-block;
  width: 100%;
}
</style>
