<template>
  <div class="pop_box">
    <div class="pop_tit">
      <h3>集成-接口对接-接口信息</h3>
      <div class="pop_btn">
        <el-button icon="el-icon-full-screen" />
        <el-button icon="el-icon-close" />

      </div>

    </div>
    <div class="pop_container">
      <div class="pop_tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="接口信息" name="first">

            <el-form label-width="80px">
              <el-row :gutter="40">
                <el-col :span="24">
                  <div class="form_btn">
                    <el-button type="primary">保存</el-button>
                    <el-button>取消</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="40">
                <el-col :span="12">
                  <el-form-item label="api名称">
                    <el-input v-model="form.name" />
                  </el-form-item>

                </el-col>
                <el-col :span="12">
                  <el-form-item label="类型">
                    <el-input v-model="form.name" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="40">
                <el-col :span="12">
                  <el-form-item label="排序">
                    <el-input v-model="form.name" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="是否启用">
                    <el-input v-model="form.name" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="40">
                <el-col :span="12">
                  <el-form-item label="内容">
                    <el-input v-model="form.name" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="活动名称">
                    <el-input v-model="form.name" />
                  </el-form-item>
                </el-col>

              </el-row>
              <el-row :gutter="40">
                <el-col :span="24">
                  <el-form-item label="名称">
                    <el-input v-model="form.name" />
                  </el-form-item>
                </el-col>

              </el-row>
            </el-form>

          </el-tab-pane>
          <el-tab-pane label="" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="11">11定时任务补偿</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="22">22定时任务补偿</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="33">33定时任务补偿</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="44">44定时任务补偿</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="55">55定时任务补偿</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="66">66定时任务补偿</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="77">77定时任务补偿</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="88">88定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>

    </div>

  </div>

  <!-- <div class="app-container documentation-container">
    <a class="document-btn" target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/">Documentation</a>
    <a class="document-btn" target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">Github Repository</a>
    <a class="document-btn" target="_blank" href="https://panjiachen.gitee.io/vue-element-admin-site/zh/">国内文档</a>
    <dropdown-menu class="document-btn" :items="articleList" title="系列文章" />
    <a class="document-btn" target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/zh/job/">内推招聘</a>
  </div> -->
</template>

<script>
// import DropdownMenu from '@/components/Share/DropdownMenu'

// export default {
//   name: 'Documentation',
//   components: { DropdownMenu },
//   data() {
//     return {
//       articleList: [
//         { title: '基础篇', href: 'https://juejin.im/post/59097cd7a22b9d0065fb61d2' },
//         { title: '登录权限篇', href: 'https://juejin.im/post/591aa14f570c35006961acac' },
//         { title: '实战篇', href: 'https://juejin.im/post/593121aa0ce4630057f70d35' },
//         { title: 'vue-admin-template 篇', href: 'https://juejin.im/post/595b4d776fb9a06bbe7dba56' },
//         { title: 'v4.0 篇', href: 'https://juejin.im/post/5c92ff94f265da6128275a85' },
//         { title: '自行封装 component', href: 'https://segmentfault.com/a/1190000009090836' },
//         { title: '优雅的使用 icon', href: 'https://juejin.im/post/59bb864b5188257e7a427c09' },
//         { title: 'webpack4（上）', href: 'https://juejin.im/post/59bb864b5188257e7a427c09' },
//         { title: 'webpack4（下）', href: 'https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc' }
//       ]
//     }
//   }
// }

export default {
  data() {
    return {
      activeName: 'first',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''

      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>

.alerb_box{ padding:20px;}
.el-row { margin-bottom: 0px;}
.pop_box{ margin:20px; }
.pop_tit{position: relative; height:60px; background:#2f66cc; text-align: center; color: #fff; }
.pop_tit h3{ line-height: 60px; font-weight: normal; margin: 0; padding: 0;}
.pop_btn{ position:absolute; right: 10px; top:10px}
.pop_btn button{ background: none; border: none; color: #fff; font-size: 20px; padding: 10px 5px;}
.pop_container{ overflow: hidden; zoom: 1; padding: 20px; background: #fff;}
.form_btn{ text-align: right; margin-bottom: 20px;}
.el-tabs__nav-prev,.el-tabs__nav-next {
    top: 15px;
}

</style>

