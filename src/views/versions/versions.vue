<template>
  <el-row :gutter="0" id="versions">
    <!--选择显示页数和搜索框内容组件-->
    <select-and-search :c="c" :searching="searching" @sizeChange="sizeChange" @search="search" @searchingChange="searchingChange"></select-and-search>
    <!--监狱版本-->
    <el-row :gutter="0" class="table-box">
      <el-col :span="24">
        <p>监狱版本：</p>
      </el-col>
      <el-col :span="24">
        <el-table :data="prisonVersions" border stripe style="width: 100%">
          <el-table-column label="版本名">
            <template slot-scope="scope">
              <el-input type="text" v-model="scope.row.versionCode" :disabled="scope.row.isCheck"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="版本号">
            <template slot-scope="scope">
              <el-input type="text" v-model="scope.row.versionNumber" :disabled="scope.row.isCheck"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="是否强制更新">
            <template slot-scope="scope">
              <el-select v-model="scope.row.isForce" placeholder="请选择" :disabled="scope.row.isCheck">
                <el-option v-for="(item,$key) in {'是':1,'否':0}" :key="item" :label="$key" :value="item">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="description" label="描述">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="modifyOrSave(scope.row)">
                {{scope.row.buttonText}}
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <!--家属版本-->
    <el-row :gutter="0" class="table-box">
      <el-col :span="24">
        <p>家属版本：</p>
      </el-col>
      <el-col :span="24">
        <el-table :data="familyVersions" border stripe style="width: 100%">
          <el-table-column label="版本名">
            <template slot-scope="scope">
              <el-input type="text" v-model="scope.row.versionCode" :disabled="scope.row.isCheck"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="版本号">
            <template slot-scope="scope">
              <el-input type="text" v-model="scope.row.versionNumber" :disabled="scope.row.isCheck"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="是否强制更新">
            <template slot-scope="scope">
              <el-select v-model="scope.row.isForce" placeholder="请选择" :disabled="scope.row.isCheck">
                <el-option v-for="(item,$key) in {'是':1,'否':0}" :key="item" :label="$key" :value="item">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="description" label="描述">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="modifyOrSave(scope.row)">
                {{scope.row.buttonText}}
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <!--分页组件-->
    <pagination :total="versionsTotal" :pageSize="pagination.rows" :currentPage="pagination.page" @currentChange="currentChange"></pagination>
    <!--修改时弹出登录模态框-->
    <el-dialog title="狱务通版本管理" :visible.sync="dialogVisible">
      <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label-width="0" prop="username">
          <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="用户名" prefix-icon="iconfont icon-account"></el-input>
        </el-form-item>
        <el-form-item label-width="0" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="密码" prefix-icon="iconfont icon-password"></el-input>
        </el-form-item>
        <el-form-item label-width="0" class="btn-box">
          <!-- `checked` 为 true 或 false -->
          <el-button @click="submitForm('ruleForm')">登录</el-button>
          <el-button type="danger" @click="dialogVisible = !dialogVisible">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Pagination from '@/components/Pagination/Pagination'
import SelectAndSearch from '@/components/Select-And-Search/Select-And-Search'

export default {
  data() {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        }
        else if (value !== 'yuwutong') {
          callback(new Error('密码不正确'))
        }
        else {
          callback()
        }
      },
      validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'))
        }
        else if (value !== 'yuwutong') {
          callback(new Error('用户名不正确'))
        }
        else {
          callback()
        }
      }
    return {
      c: 'versions',
      searching: {
        versionNumber: '' // 版本号
      },
      pagination: {
        page: 1, // 当前第几页
        rows: 10 // 每页显示多少条记录
      },
      dialogVisible: false,
      ruleForm: {
        pass: '',
        username: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ]
      },
      modificationRow: {} // 当前需要修改的版本数据
    }
  },
  watch: {
    updateVersionResult(newValue) {
      this.getVersions(this.pagination) // 修改版本信息成功刷新当前页面内容
    }
  },
  computed: {
    ...mapGetters({
      prisonVersions: 'prisonVersions',
      familyVersions: 'familyVersions',
      versionsTotal: 'versionsTotal',
      updateVersionResult: 'updateVersionResult'
    })
  },
  methods: {
    ...mapActions({
      getVersions: 'getVersions', // 获取狱务通app版本信息列表
      updateVersion: 'updateVersion'
    }),
    // 修改或者保存版本信息
    modifyOrSave(row) {
      if (row.buttonText === '修改') {
        // this.dialogVisible = true
        this.modificationRow = row
        this.modificationRow.isCheck = false
        this.modificationRow.buttonText = '保存'
      }
      else if (row.buttonText === '保存') {
        this.updateVersion(row)
      }
    },
    // 点击登录按钮执行的方法
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       this.dialogVisible = false
    //       this.modificationRow.isCheck = false
    //       this.modificationRow.buttonText = '保存'
    //       // 每次登录成功以后 输入框内容清空
    //       for (let key in this.ruleForm) {
    //         this.ruleForm[key] = ''
    //       }
    //     }
    //     else {
    //       console.log('error submit!!')
    //       return false
    //     }
    //   })
    // },
    // 当前页码发生改变时执行的方法
    currentChange(page) {
      this.pagination.page = page
      this.getVersions({ ...this.searching, ...this.pagination })
    },
    // 每页多少条发生改变时执行的方法
    sizeChange(rows) {
      this.pagination.page = 1
      this.pagination.rows = rows
      this.getVersions({ ...this.searching, ...this.pagination })
    },
    // 点击搜索时执行的方法
    search(searching) {
      this.searching = searching
      this.getVersions({ ...this.searching, ...this.pagination })
    },
    // 监听搜索框的变化
    searchingChange(searching) {
      this.searching = searching
    }
  },
  components: {
    Pagination,
    SelectAndSearch
  },
  mounted() {
    this.getVersions(this.pagination)
  }
}
</script>

<style type="text/stylus" lang="stylus">
#versions {
  padding: 20px 1% 0 1%;

  & /deep/ .el-table__body-wrapper {
    overflow: visible;
  }

  .table-box {
    &:nth-child(2) {
      margin-top: 30px;
      margin-bottom: 35px;
    }
  }

  & /deep/ .el-dialog {
    width: 33%;

    .el-form-item__content {
      .el-button {
        float: right;
        margin-left: 30px;
      }
    }
  }
}
</style>
