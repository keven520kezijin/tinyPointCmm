<template>
  <div class="app-container">
    <global-table :table-data="tableData" :table-columu="columu" :table-option="options" @handelBtn="handelBtn" />
  </div>
</template>
<script>
import GlobalTable from '@/components/GlobalTable'
import { table_columu, tableData } from './data'
export default {
  components: { GlobalTable },
  data() {
    return {
      tableData,
      columu: table_columu,
      options: []
    }
  },
  methods: {
    handelBtn(val) {}
  }
}
</script>
