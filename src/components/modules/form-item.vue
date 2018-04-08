<template>
  <span class="filter">
    <el-input
      v-if="item.type==='input'"
      v-model="item.value"
      :placeholder="'请输入' + item.label"></el-input>
  </span>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
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
