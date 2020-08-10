import Layout from '@/layout'

export const mold = [
  {
    path: '/comboBox',
    component: Layout,
    redirect: '/moldType/defend',
    children: [
      {
        path: 'defend',
        component: () => import('@/views/mold/comboBox'),
        name: 'comboBoxDefend',
        meta: { title: '下拉框维护', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/outside',
    component: Layout,
    redirect: '/structure',
    children: [
      {
        path: 'structure',
        component: () => import('@/views/mold/outside'),
        name: 'outsideStructure',
        meta: { title: '表结构', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/open',
    children: [
      {
        path: 'open',
        component: () => import('@/views/mold/example'),
        name: 'exampleOpen',
        meta: { title: '实例', icon: 'dashboard', affix: true }
      }
    ]
  }
]

export const personnel = [
  {
    path: '/organization',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: 'define',
        component: () => import('@/views/personnel/organizationDefine'),
        name: 'organizationDefine',
        meta: { title: '组织字段定义', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/post',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: 'define',
        component: () => import('@/views/personnel/postDefine'),
        name: 'postDefine',
        meta: { title: '岗位字段定义', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/personnel',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: 'define',
        component: () => import('@/views/personnel/personnelDefine'),
        name: 'personnelDefine',
        meta: { title: '人员字段定义', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/role',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: 'role',
        component: () => import('@/views/personnel/role'),
        name: 'role',
        meta: { title: '角色', icon: 'dashboard', affix: true }
      }
    ]
  }
]
