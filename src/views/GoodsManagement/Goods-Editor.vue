<template>
  <el-row id="goods-editor">
    <el-col :span="10" :offset="7">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="商品条码">
          <el-input v-model="goodsForEdit.barcode"></el-input>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="goodsForEdit.title"></el-input>
        </el-form-item>
        <el-form-item label="商品简介">
          <el-input type="textarea" v-model="goodsForEdit.description" :rows="8"></el-input>
        </el-form-item>
        <el-form-item label="单位">
          <el-input v-model="goodsForEdit.unit"></el-input>
        </el-form-item>
        <el-form-item label="单价">
          <el-input v-model="goodsForEdit.price"></el-input>
        </el-form-item>
        <el-form-item>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false"
            list-type="picture">
            <el-button size="normal" type="primary" plain>添加商品图片</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="生产厂家">
          <el-input v-model="goodsForEdit.factory"></el-input>
        </el-form-item>
        <el-form-item label="请选择商品部类">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" size="small">更新</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  import {mapActions, mapMutations, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        breadcrumb: ['主页', '商品信息管理', '商品编辑管理'],
        fileList: []
      }
    },
    computed: {
      ...mapGetters({
        goodsForEdit:'goodsForEdit'
      })
    },
    methods: {
      ...mapMutations({
        breadCrumb: 'breadCrumb',//设置商品编辑页面的面包屑信息
        editGoods: 'editGoods'//获取要编辑的商品信息
      }),
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    },
    mounted(){
      this.breadCrumb(this.breadcrumb);
      this.editGoods(this.$route.params.id);
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  #goods-editor
    .el-form-item
      .upload-demo
        .el-upload
          input
            display: none
      &:last-child
        .el-button
          float: right
      &:nth-child(8)
        .el-form-item__label
          width:auto!important
</style>
