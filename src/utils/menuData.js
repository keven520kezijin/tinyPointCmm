export const mold = [{
  'path': '/',
  'children': [{
    'path': 'type',
    'name': 'type',
    'meta': {
      'title': '类型',
      'icon': 'dashboard',
      'affix': true,
      'parent': 'mold'
    }
  }]
}, {
  'path': '/comboBox',
  'children': [{
    'path': 'defend',
    'name': 'comboBoxDefend',
    'meta': {
      'title': '下拉框维护',
      'icon': 'dashboard',
      'affix': true,
      'parent': 'mold'
    }
  }]
}, {
  'path': '/outside',
  'children': [{
    'path': 'structure',
    'name': 'outsideStructure',
    'meta': {
      'title': '表结构',
      'icon': 'dashboard',
      'affix': true,
      'parent': 'mold'
    }
  }]
}, {
  'path': '/example',
  'children': [{
    'path': 'open',
    'name': 'exampleOpen',
    'meta': {
      'title': '实例',
      'icon': 'dashboard',
      'affix': true,
      'parent': 'mold'
    }
  }]
}]

export const personnel = [{
  'path': '/organization',
  'children': [{
    'path': 'define',
    'name': 'organizationDefine',
    'meta': {
      'title': '组织字段定义',
      'icon': 'dashboard',
      'affix': true
    }
  }]
}, {
  'path': '/post',
  'redirect': 'noRedirect',
  'children': [{
    'path': 'define',
    'name': 'postDefine',
    'meta': {
      'title': '岗位字段定义',
      'icon': 'dashboard',
      'affix': true
    }
  }]
}, {
  'path': '/personnel',
  'redirect': 'noRedirect',
  'children': [{
    'path': 'define',
    'name': 'personnelDefine',
    'meta': {
      'title': '人员字段定义',
      'icon': 'dashboard',
      'affix': true
    }
  }]
}, {
  'path': '/role',
  'redirect': 'noRedirect',
  'children': [{
    'path': 'role',
    'name': 'role',
    'meta': {
      'title': '角色',
      'icon': 'dashboard',
      'affix': true
    }
  }]
}]

export const integration = [{
  'path': '/integration',
  'children': [{
    'path': 'crontab',
    'name': 'integration',
    'meta': {
      'title': '定时任务',
      'icon': 'dashboard',
      'affix': true
    }
  }]
}, {
  'path': '/dataSource',
  'redirect': 'noRedirect',
  'children': [{
    'path': 'define',
    'name': 'integrationDataSource',
    'meta': {
      'title': '外部数据源',
      'icon': 'dashboard',
      'affix': true
    }
  }]
}, {
  'path': '/joggle',
  'redirect': 'noRedirect',
  'children': [{
    'path': 'define',
    'name': 'integrationJoggle',
    'meta': {
      'title': '接口对接',
      'icon': 'dashboard',
      'affix': true
    }
  }]
}, {
  'path': '/systemBtn',
  'redirect': 'noRedirect',
  'children': [{
    'path': 'define',
    'name': 'integrationSystemBtn',
    'meta': {
      'title': '系统按钮维护',
      'icon': 'dashboard',
      'affix': true
    }
  }]
}]
