<template>
  <el-form-item
    :label="item.label"
    :prop="attribute">
    <el-input
      v-if="item.type === 'input'"
      v-model="item.value"
      :placeholder="'请输入' + item.label"
      @change="onChange" />
<!-- <template v-if="item.type === 'select'">
  {{ item.rely ? !formData[item.rely] : item.disabled }}
</template> -->
    <el-select
      v-if="item.type === 'select'"
      v-model="item.value"
      :placeholder="'请选择' + item.label"
      clearable
      :disabled="item.disabled"
      :loading="item.getting"
      @change="onChange">
      <el-option
        v-for="option in item.options"
        :key="item.belong ? option[item.belong.value]: option.valve"
        :label="item.belong ? option[item.belong.label]: option.label"
        :value="item.belong ? option[item.belong.value]: option.valve" />
    </el-select>

    <m-quill-editor
      v-if="item.type === 'editor'"
      @editorChange="editorChange" />
  </el-form-item>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    },
    attribute: {
      type: String
    },
    formData: {
      type: Object
    }
  },
  data() {
    return {
      disabled: true
    }
  },
  methods: {
    onChange(e) {
      if (this.item.func) {
        console.log(this.attribute)
        if (this.attribute === 'provincesId') this.$emit('clear', 'citysId')
        this.item.func(e)
      }
      this.formData[this.attribute] = e
      if (this.attribute === 'provincesId') this.formData.citysId = 3
    },
    editorChange(contents, text) {
      this.formData[this.attribute] = contents
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
