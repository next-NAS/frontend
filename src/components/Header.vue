<template>
  <el-row class="nav-bar">
    <el-col :span="3">
      <h1 class="logo-text">AutoML</h1>
    </el-col>
    <el-col class="task-bar" :span="6" offset=11>
      <el-dropdown>
        <span class="el-dropdown-link">
          任务列表<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>图像分类：ImageNet</el-dropdown-item>
          <el-dropdown-item>图像分类：TIMIT</el-dropdown-item>
          <el-dropdown-item disabled>图像分类：医疗图像分类</el-dropdown-item>
          <el-dropdown-item divided>目标检测：人脸检测</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button v-on:click="$emit('creat-task')">新建任务</el-button>
      <el-button>帮助</el-button>
    </el-col>  
    <el-col class="user-profile" :span="1">
      <div class="demo-basic--circle">
        <div class="block">
          <el-avatar :size="40" :src="profileURL">
          </el-avatar>
        </div>
      </div>
    </el-col>
    <el-col class="account-bar" :span="3">
      <el-dropdown class="user-account">
        <span>
          系统默认用户<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>切换账号</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'AutomlHeader',
  data() {
    return {
      profileURL: require('../assets/profile.png'),

    }
  }
}
</script>

<style scoped>
.nav-bar {
  height: 55px;
  width: 100%;
}
.logo-text {
  margin: 0;
  position: relative;
  top: 12px;
}
.task-bar {
  position: relative;
  top: 5px;
  box-shadow: 4px 0px 0px -2px rgba(61, 61, 61, 0.12);
}
.account-bar {
  position: relative;
  top: 15px;
  left: -5px;
}
.user-profile {
  position: relative;
  top: 6px;
  left: 15px;
}
.user-account {
  cursor: pointer;
  margin-left: 5px;
  padding-bottom: 18px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>