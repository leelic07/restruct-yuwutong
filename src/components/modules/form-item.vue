<template>
  <el-form-item
    v-if="flag"
    :label="item.label"
    :prop="prop">
    <el-input
      v-if="item.type === 'input'"
      v-model="fields[prop]"
      :placeholder="'请输入' + item.label" />
      <!-- <template v-if="item.type === 'select'">{{ item }}</template> -->
    <el-select
      v-if="item.type === 'select'"
      :placeholder="'请选择' + item.label"
      v-model="fields[prop]"
      :loading="item.loading"
      filterable
      :disabled="item.disabled"
      @change="item.func ? item.func($event, prop) : onSelectChange($event, prop)">
      <el-option
        v-for="(option) in item.options"
        :key="item.props ? option[item.props.value] : option.value"
        :label="item.props.label ? option[item.props.label] : option.label"
        :value="item.props.value ? option[item.props.value] : option.value"/>
    </el-select>
    <m-quill-editor
      v-if="item.type === 'editor'"
      :contents="fields[prop]"
      @editorChange="editorChange" />
  </el-form-item>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  props: {
    item: Object,
    prop: String,
    fields: Object
  },
  data() {
    return {
      flag: true
      // getting: true
      // options: {}
    }
  },
  // watch
  mounted() {
    console.log(this.item, this.prop, this.fields)
    if (this.item.type === 'select') this.initSelect()
  },
  methods: {
    // ...mapActions({ this.item.action }),
    initSelect() {
    },
    onSelectChange(e, prop) {
      // this.fields[prop] = e
      // if (this.item.rely)
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
