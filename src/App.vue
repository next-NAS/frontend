<template>
  <div id="app">
    <el-dialog width="58%" title="创建任务" 
              :visible.sync="creatingTask" 
              destroy-on-close>
      <create-task-window
              :userId="userId"
              @receive-dataset-info="onReceivedDatasetInfo" />
    </el-dialog>
    <el-container>
      <!-- header -->
      <el-header class="header">
        <automl-header @creat-task="createTask" :userId="userId" />
      </el-header>
      <el-container>
        <!-- aside -->
        <el-aside width="260px">
          <data-info
              :datasetName="datasetName"
              :sampleNum="sampleNum"
              :datasetSize="datasetSize"
              :classNum="classNum" />
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
      creatingTask: false,
      userId: "guest",
      datasetName: "",
      sampleNum: "",
      datasetSize: "",
      classNum: ""
    }
  },
  methods: {
    createTask() {
      this.creatingTask = !this.creatingTask
    },
    onReceivedDatasetInfo(dataset) {
      this.datasetName = dataset.name
      this.sampleNum = dataset.sample_num
      this.datasetSize = this.size_format(dataset.size)
      this.classNum = dataset.class_num
      this.creatingTask = false
      this.createSuccessfully()
    },
    createSuccessfully() {
      this.$message({
        message: '任务创建成功！',
        type: 'success'
      });
    },
    size_format(size) {
      let metrix = ["B", "KB", "MB", "GB", "TB", "PB"]
      return this.human_format(size, metrix, 1024, 2)
    },
    count_format(count) {
      let metrix = ["", "K", "M", "G", "P"]
      return this.human_format(count, metrix, 1000, 2)
    },
    human_format(number, metrix, radix, fix) {
      if (!metrix instanceof Array) {
        return ""
      }
      let index = 0
      while (number >= 1024 && index < metrix.length) {
        number /= radix
        index += 1
      }
      return number.toFixed(fix) + " " + metrix[index]
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
