import Mock from 'mockjs'

export const table_columu = [
  { field: 'name', label: '姓名', width: '100' },
  { field: 'address', label: '地址', width: '100' },
  { field: 'date', label: '时间', width: '100' }
]

export const tableData = Mock.mock({
  'list|100-2000': [{
    'id|+1': 1,
    title: '@title(5, 10)',
    name: '@cname',
    address: '@ctitle(5, 10)',
    timestamp: +Mock.Random.date('T'),
    date: '@datetime'
  }]
}).list

console.log('mock')

