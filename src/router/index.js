import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: 'type',
    children: [
      {
        path: 'type',
        component: () => import('@/views/mold/type'),
        name: 'mold',
        meta: { title: '类型', icon: 'dashboard', affix: true, parent: 'mold' }
      }
    ]
  },
  {
    path: '/comboBox',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: 'defend',
        component: () => import('@/views/mold/comboBox'),
        name: 'comboBoxDefend',
        meta: { title: '下拉框维护', icon: 'dashboard', affix: true, parent: 'mold' }
      }
    ]
  },
  {
    path: '/outside',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: 'structure',
        component: () => import('@/views/mold/outside'),
        name: 'outsideStructure',
        meta: { title: '表结构', icon: 'dashboard', affix: true, parent: 'mold' }
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
        meta: { title: '实例', icon: 'dashboard', affix: true, parent: 'mold' }
      }
    ]
  },
  {
    path: '/organization',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: 'define',
        component: () => import('@/views/personnel/organizationDefine'),
        name: 'personnel',
        meta: { title: '组织字段定义', icon: 'dashboard', affix: true, parent: 'personnel' }
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
        meta: { title: '岗位字段定义', icon: 'dashboard', affix: true, parent: 'personnel' }
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
        meta: { title: '人员字段定义', icon: 'dashboard', affix: true, parent: 'personnel' }
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
        meta: { title: '角色', icon: 'dashboard', affix: true, parent: 'personnel' }
      }
    ]
  },
  {
    path: '/integration',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: 'crontab',
        component: () => import('@/views/integration/crontab'),
        name: 'integration',
        meta: { title: '定时任务', icon: 'dashboard', affix: true, parent: 'integration' }
      }
    ]
  },
  {
    path: '/dataSource',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: 'define',
        component: () => import('@/views/integration/dataSource'),
        name: 'integrationDataSource',
        meta: { title: '外部数据源', icon: 'dashboard', affix: true, parent: 'integration' }
      }
    ]
  },
  {
    path: '/joggle',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: 'define',
        component: () => import('@/views/integration/joggle'),
        name: 'integrationJoggle',
        meta: { title: '接口对接', icon: 'dashboard', affix: true, parent: 'integration' }
      }
    ]
  },
  {
    path: '/systemBtn',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: 'define',
        component: () => import('@/views/integration/systemBtn'),
        name: 'integrationSystemBtn',
        meta: { title: '系统按钮维护', icon: 'dashboard', affix: true, parent: 'integration' }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
