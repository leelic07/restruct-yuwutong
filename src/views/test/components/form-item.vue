<template>
  <el-form-item
    :label="item.label"
    :prop="prop">
    <el-input
      v-if="item.type==='input'"
      v-model="fields[prop]"
      :placeholder="'请输入' + item.label" />
    <!-- <el-select></el-select> -->
  </el-form-item>
</template>

<script>
export default {
  props: ['item', 'prop', 'fields'],
  mounted() {
    // console.log(this.item, this.prop, this.fields)
  }
}
</script>

<style lang="css">
</style>
