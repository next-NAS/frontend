<template>
  <el-row class="nav-bar" type="flex" align="middle">
    <el-col :span="3">
      <h1 class="logo-text">AutoML</h1>
    </el-col>
    <el-col :span="2" :offset="11">
      <el-dropdown>
        <span class="el-dropdown-link">
          任务列表<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="task in taskList" :key="task.id">
            {{ transferTaskType(task.task_type) }}：{{ task.name }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
    <el-col :span="2">  
      <el-button v-on:click="$emit('creat-task')">新建任务</el-button>
    </el-col>
    <el-col class="task-bar" :span="2">
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
          {{ userId === "guest" ? "系统默认用户" : userId }}
          <i class="el-icon-arrow-down el-icon--right"></i>
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
  props: ["userId", "taskList"],
  data() {
    return {
      profileURL: require('../assets/profile.png'),
    }
  },
  methods: {
    transferTaskType(originType) {
      let transferMap = {
        "imageClassification": "图像分类"
      }
      return transferMap[originType]
    }
  }
}
</script>

<style scoped>
.nav-bar {
  height: 55px;
  width: 100%;
}

.task-bar {
  box-shadow: 4px 0px 0px -2px rgba(61, 61, 61, 0.12);
}
.account-bar {
  position: relative;
  top: 8px;
  left: -5px;
}
.user-profile {
  position: relative;
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