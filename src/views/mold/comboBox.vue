<template>
  <div class="app-container">
    <div class="content_toplayout">
      <div class="search_content fl">
        <el-button type="primary" icon="el-icon-search" />
        <input type="text" class="search_content_input fl" placeholder="请输入关键字">
      </div>
      <div class="button fr">
        <el-button type="primary" icon="el-icon-minus">添加</el-button>
        <el-button type="primary" icon="el-icon-plus">删除</el-button>
      </div>
    </div>

    <div class="table_box">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          label="日期"
          width="120"
        >
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120"
        />
        <el-table-column
          prop="address"
          label="地址"
          show-overflow-tooltip
        />
      </el-table>

    </div>
    <div class="block" style="text-align:center">

      <el-pagination
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>

  </div>

  <!-- <div class="dashboard-container">
    <component :is="currentRole" />
  </div> -->
</template>

<script>
// import { mapGetters } from 'vuex'
// import adminDashboard from './admin'
// import editorDashboard from './editor'

// export default {
//   name: 'Dashboard',
//   components: { adminDashboard, editorDashboard },
//   data() {
//     return {
//       currentRole: 'adminDashboard'
//     }
//   },
//   computed: {
//     ...mapGetters([
//       'roles'
//     ])
//   },
//   created() {
//     if (!this.roles.includes('admin')) {
//       this.currentRole = 'editorDashboard'
//     }
//   }
// }

export default {
  data() {
    return {
      currentPage4: 4,
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, , {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
      multipleSelection: []
    }
  },

  methods: {

    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}

</script>

<style scoped>
.content_toplayout{overflow: hidden; clear: both;}
.search_content{ height: 43px; width: 200px;border-bottom:2px solid #999;}
.search_content button{ background: none; border:none; color: #999; font-size: 25px;float: left; padding: 10px 0;}
.search_content_input{ width: 110px;height: 30px; border: none; background: none;  margin-top: 7px;outline: none; margin-left: 5px; font-family: Arial, Helvetica, sans-serif;color: #666;}

.table_box{ padding:20px 0;}
/*修改提示文字的颜色*/

input::-webkit-input-placeholder { /* WebKit browsers */
color: #aaa !important;
}
input::-moz-placeholder { /* Mozilla Firefox 4 to 18 */
color: #aaa !important;
}
input::-moz-placeholder { /* Mozilla Firefox 19+ */
color: #aaa !important;
}
input::-ms-input-placeholder {    /* Internet Explorer 10+ */
color: #aaa !important;
}

</style>
