<template>
  <div id="app">
    <!-- <create-task-window v-show="creatingTask"/> -->
    <el-dialog width="58%" title="创建任务" :visible.sync="creatingTask">
      <create-task-window />
    </el-dialog>
    <el-container>
      <!-- header -->
      <el-header class="header">
        <automl-header @creat-task="createTask"/>
      </el-header>
      <el-container>
        <!-- aside -->
        <el-aside width="260px">
          <data-info/>
        </el-aside>
        <!-- main -->
        <el-main>
          <div>
            <training-result/>
            <training-config/>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AutomlHeader from "./components/Header"
import DataInfo from "./components/DataInfo"
import TrainingResult from "./components/TrainingResult"
import TrainingConfig from "./components/TrainingConfig"
import CreateTaskWindow from "./components/createTask/CreateTaskWindow"

export default {
  components: {
    "automl-header": AutomlHeader,
    "data-info": DataInfo,
    "training-result": TrainingResult,
    "training-config": TrainingConfig,
    "create-task-window": CreateTaskWindow
  },
  data() {
    return {
      creatingTask: false
    }
  },
  methods: {
    createTask() {
      this.creatingTask = !this.creatingTask
    }
  }
}

</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.header {
  height: 55px;
  bottom:1px;
  box-shadow: 0 4px 0px -3px rgba(17, 17, 17, 0.2);
}
</style>
