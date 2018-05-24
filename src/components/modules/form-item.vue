<template>
  <el-form-item
    :label="item.label"
    :prop="prop">
    <el-input
      v-if="item.type==='input'"
      v-model="fields[prop]"
      :placeholder="'请输入' + item.label" />
    <!-- <el-select></el-select> -->
    <m-quill-editor
      v-if="item.type==='editor'"
      :contents="fields[prop]"
      @editorChange="editorChange" />
  </el-form-item>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  props: ['item', 'prop', 'fields'],
  data() {
    return {
      getting: true
    }
  },
  mounted() {
    // console.log(this.item, this.prop, this.fields)
    if (this.item.type === 'select') this.initSelect()
  },
  methods: {
    // ...mapActions({ this.item.action }),
    initSelect() {
      console.log(this)
      if (this.item.action) {
        this.$store.dispatch(this.item.action).then(res => {
          console.log(res)
        })
        // console.log(a)
      }
    },
    editorChange(contents, text) {
      this.fields[this.prop] = contents
      this.$emit('validateField', this.prop)
    }
  }
}
</script>

<style lang="css">
</style>
