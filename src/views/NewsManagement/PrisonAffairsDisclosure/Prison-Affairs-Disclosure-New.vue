<template>
  <el-row id="prison-affairs-disclosure-new" :gutter="0">
    <el-col :span="11" :offset="6">
      <el-form ref="form" :model="news">
        <el-form-item label="新闻类型">
          <el-select v-model="news.type_id" placeholder="请选择">
            <el-option
              v-for="item,key in newsType"
              :key="item"
              :label="key"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="新闻名称">
          <el-input v-model="news.title" placeholder="请填写新闻名称"></el-input>
        </el-form-item>
        <el-form-item label="新闻简介">
          <vue-quill-editor :contents="news.contents" @editorChange="editorChange"></vue-quill-editor>
        </el-form-item>
        <el-form-item>
          <el-upload
            class="upload-demo"
            :action="_$agency"
            :on-change="handleChange"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false"
            :limit="1"
            accept="image/*"
            list-type="picture">
            <el-button size="normal" type="primary" plain>添加图片</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <!-- `checked` 为 true 或 false -->
          <el-checkbox v-model="news.is_focus">是否设为焦点新闻</el-checkbox>
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
  import VueQuillEditor from '@/components/Quill-Editor/Quill-Editor'

  export default {
    data() {
      return {
        news: {//需要添加的法律信息
          type_id: 1,
          title: '',
          contents: '',
          is_focus: false,
          sys_flag: 1
        },
        breadcrumb: ['主页', '狱务公开信息管理', '新闻信息管理'],
        fileList: [],
        editorOption: {},//富文本编辑器的配置
        newsType: {//新闻类型
          '狱务公开': 1,
          '工作动态': 2,
          '投诉公示': 3
        }
      }
    },
    watch: {
//      $route(to, from){
//        switch (from.path) {
//          case '/news-management/prison_affairs_disclosure':
//            this.breadCrumb(['主页', '狱务公开信息管理', '狱务公开', '新闻信息管理']);
//            break;
//          case '/news-management/working_dynamics':
//            this.breadCrumb(['主页', '狱务公开信息管理', '工作动态', '新闻信息管理']);
//            break;
//          case '/news-management/complaints_proposals':
//            this.breadCrumb(['主页', '狱务公开信息管理', '投诉建议公示', '新闻信息管理']);
//            break;
//          default:
//            this.breadCrumb([]);
//            break;
//        }
//      }
      //返回添加狱务公开信息结果时跳转到狱务公开信息管理页
      addNewsResult(newValue){
        window.history.back();
      }
    },
    computed: {
      ...mapGetters({
        addNewsResult: 'addNewsResult'//获取添加狱务公开信息的结果
      }),
    },
    methods: {
      ...mapActions({
        addNews: 'addNews'//添加狱务公开信息
      }),
      ...mapMutations({
        breadCrumb: 'breadCrumb'//设置商品编辑页面的面包屑信息
      }),
      //添加图片选中图片时执行的方法
      handleChange(file){
        this.news.image = file;
      },
      //移除选中图片时执行的方法
      handleRemove(){
        this.news.image = '';
      },
      //当富文本内容发生改变时执行的方法
      editorChange(contents){
        this.news.contents = contents;
      },
      //点击更新时执行的方法
      onSubmit(){
        this.addNews(this.news);
      }
    },
    components: {
      VueQuillEditor
    },
    mounted(){
      this.breadCrumb(this.breadcrumb);
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  #prison-affairs-disclosure-new
    padding-top: 35px
    & /deep/ .el-form-item
      .el-form-item__label
        float: none
      .upload-demo
        .el-upload
          .el-upload__input
            display: none !important
      &:last-child
        .el-button
          float: right
</style>
