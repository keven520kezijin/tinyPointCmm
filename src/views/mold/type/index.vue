<template>
  <div class="app-container">
    <addDialog ref="addRef" />
    <div class="content_toplayout">
      <div class="search_content fl">
        <el-button type="primary" icon="el-icon-search" />
        <input type="text" class="search_content_input fl" placeholder="请输入关键字">
      </div>
      <div class="button fr">
        <el-button type="primary" icon="el-icon-minus" @click="add">添加</el-button>
        <el-button type="primary" icon="el-icon-plus">删除</el-button>
      </div>
    </div>
    <global-table :table-data="tableData" :table-columu="columu" :table-option="options" @handelBtn="handelBtn" />
  </div>
</template>
<script>
import GlobalTable from '@/components/GlobalTable'
import { table_columu, tableData } from './data'
import addDialog from './components/index'
export default {
  components: { GlobalTable, addDialog },
  data() {
    return {
      tableData,
      columu: table_columu,
      options: []
    }
  },
  methods: {
    add() {
      this.$refs.addRef.dialogTableVisible = true
    },
    handelBtn(val) {}
  }
}
</script>

<style scoped>
.content_toplayout {
  overflow: hidden;
  clear: both;
}
.search_content {
  height: 43px;
  width: 200px;
  border-bottom: 2px solid #999;
}
.search_content button {
  background: none;
  border: none;
  color: #999;
  font-size: 25px;
  float: left;
  padding: 10px 0;
}
.search_content_input {
  width: 110px;
  height: 30px;
  border: none;
  background: none;
  margin-top: 7px;
  outline: none;
  margin-left: 5px;
  font-family: Arial, Helvetica, sans-serif;
  color: #666;
}
</style>
