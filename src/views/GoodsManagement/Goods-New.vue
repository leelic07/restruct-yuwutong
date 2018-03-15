<template>
  <el-row id="goods-new">
    <el-col :span="10" :offset="6">
      <el-form ref="form-new" :model="goods" :rules="rule" label-width="110px">
        <el-form-item label="商品条码">
          <el-input v-model="goods.barcode"></el-input>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="goods.title"></el-input>
        </el-form-item>
        <el-form-item label="商品简介">
          <el-input type="textarea" v-model="goods.description" :rows="8"></el-input>
        </el-form-item>
        <el-form-item label="单位">
          <el-input v-model="goods.unit"></el-input>
        </el-form-item>
        <el-form-item label="单价" prop="price">
          <el-input v-model="goods.price"></el-input>
        </el-form-item>
        <el-form-item>
          <el-upload
            class="upload-demo"
            ref="upload"
            :action="_$agency"
            name="avatar"
            :file-list="fileList"
            :on-change="handleChange"
            :on-remove="handleRemove"
            :auto-upload="false"
            :limit="1"
            :with-credentials="true"
            accept="image/*"
            list-type="picture">
            <el-button size="normal" type="primary" plain>添加商品图片</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="生产厂家">
          <el-input v-model="goods.factory"></el-input>
        </el-form-item>
        <el-form-item label="请选择商品部类">
          <el-select v-model="goods.categoryId" placeholder="请选择">
            <el-option
              v-for="item,key in options"
              :key="item"
              :label="key"
              :value="item">
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
  import axios from 'axios'
  export default {
    data() {
      return {
        breadcrumb: ['主页', '商品信息管理', '商品新增管理'],
        fileList: [],
        options: {//选择的商品类型
          '洗化日用': 1,
          '食品饮料': 2,
          '服饰鞋帽': 3,
          '医药保健': 4,
          '电话卡': 5
        },
        goods: {//需要新添加的商品
          barcode: '',
          title: '',
          description: '',
          unit: '',
          price: '',
          factory: '',
          categoryId: '',
          image: '',
          sysFlag: 1,
          ranking: 0
        },
        rule: {
          price: [
            {pattern: /^(?:[1-9][0-9]*\.[0-9]+|0\.(?!0+$)[0-9]+|[1-9]+\d*)$/, message: '单价必须为数字', trigger: 'blur'}
          ]
        }
      }
    },
    watch: {
      //监听编辑商品列表的结果
      addGoodsResult(){
        this.$router.push({
          path: '/goods_management'
        });
      }
    },
    computed: {
      ...mapGetters({
        addGoodsResult: 'addGoodsResult'//获取编辑商品结果
      })
    },
    methods: {
      ...mapActions({
        addGoods: 'addGoods'//编辑商品信息
      }),
      ...mapMutations({
        breadCrumb: 'breadCrumb',//设置商品编辑页面的面包屑信息
      }),
      //点击更新时执行的方法
      onSubmit(){
        this.$refs['form-new'].validate(validate => {
          if (validate) this.addGoods(this.goods);
          else return false;
        });
      },
      //选择上传文件时的方法
      handleChange(file){
        this.goods.image = file;
      },
      //移除上传文件执行的方法
      handleRemove(){
        this.goods.image = '';
      }
    },
    mounted(){
      this.breadCrumb(this.breadcrumb);
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  #goods-new
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
          width: auto !important
</style>
