<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <ul class="nav">
      <li :class="menuType==='mold'? 'active' : ''" @click="change('mold')">模块</li>
      <li :class="menuType==='personnel'? 'active' : ''" @click="change('personnel')">人员</li>
      <li @click="change('integration')">集成</li>
      <li @click="change('mold')">对接</li>
      <li @click="change('mold')">案例</li>
      <li>流转</li>
      <li>事项</li>
    </ul>

    <div class="search">
      <div class="search_box">
        <i class="el-icon-search" />
        <input type="text" class="search_input" placeholder="输入搜索名称">
      </div>
      <input type="button" value="搜索" class="search_btn">
    </div>

    <div class="member">
      <el-avatar icon="el-icon-user-solid" :size="25" />
      <span style="padding-top:5px;">张三</span>
    </div>
    <div class="login_out fr" @click.native="logout">  <i class="el-icon-switch-button" /></div>

    <!-- <div class="right-menu"> -->

    <!-- <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/profile/index">
            <el-dropdown-item>Profile</el-dropdown-item>
          </router-link>
          <router-link to="/">
            <el-dropdown-item>Dashboard</el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">Log Out</span>
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="change('mold')">
            <span style="display:block;">模块</span>
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="change('personnel')">
            <span style="display:block;">人员</span>
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="change('integration')">
            <span style="display:block;">集成</span>
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="change('mold')">
            <span style="display:block;">对接</span>
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="change('mold')">
            <span style="display:block;">案例</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
    <!-- </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device',
      'menuType'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    change(type) {
      this.$router.push({ name: type })
    }
  }
}
</script>

<style lang="scss" scoped>

.nav{ float: left;  padding-top:15px; padding-left: 0;  padding-right: 5%;
  .active{
    font-size: 20px;
  }
}
.nav li{ float: left; font-size: 16px; color: #fff; padding: 0 15px; font-weight: bold; cursor: pointer; }
.search{ float:left;margin-top: 20px; width: 355px;  margin-right: 5%;}
.search_box{ width:298px; border: 1px solid #8aa4da; height: 38px; border-radius: 5px; float: left; }
.search i{color: #fff;margin: 8px 10px 0 13px;}
.search_input{ border:none; background:none;outline:none; color: #fff; }
.search_btn{float: left; border:none; background:none; color: #fff; outline:none; cursor: pointer; margin-top:8px; margin-left:5px;  }
.member{ float:left; margin-top:25px; color: #fff;}
.member span{ display: inline-block; float: left; margin-left: 8px;}
.login_out{ padding-top: 25px; padding-right: 20px;}

.login_out i{ height: 30px;width:30px; color: #fff;font-size:30px;}
.navbar {
  height: 80px;
  overflow: hidden;
  position: relative;
  background: #2f66cc;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    margin-top: 15px;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
