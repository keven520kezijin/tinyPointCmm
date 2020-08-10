<template>
  <el-dialog title="基础" width="800px" :visible.sync="dialogTableVisible">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="基础" name="foundation">用户管理11</el-tab-pane>
      <el-tab-pane label="界面" name="interface">配置管理22</el-tab-pane>
      <el-tab-pane label="权限" name="power">角色管理</el-tab-pane>
      <el-tab-pane label="默认值" name="acquiesce">定时任务补偿</el-tab-pane>
      <el-tab-pane label="页面定义" name="page">定时任务补偿</el-tab-pane>
      <el-tab-pane label="编码" name="encoded">定时任务补偿</el-tab-pane>
      <el-tab-pane label="值联动" name="valueLinkage">定时任务补偿</el-tab-pane>
      <el-tab-pane label="值联动扩展" name="valueLinkageExtension">定时任务补偿</el-tab-pane>
      <el-tab-pane label="明细汇总" name="detailedSummary">定时任务补偿</el-tab-pane>
      <el-tab-pane label="值计算" name="valueComputation">定时任务补偿</el-tab-pane>
      <el-tab-pane label="树形" name="tree">定时任务补偿</el-tab-pane>
      <el-tab-pane label="系统按钮" name="system">定时任务补偿</el-tab-pane>
      <el-tab-pane label="查询" name="query">定时任务补偿</el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      activeName: 'foundation'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>
</style>
