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
              :classNum="classNum"
              :chartOptionsPie="dataInfoChartOption" />
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
      taskName: "",
      taskType: "",
      userId: "guest",
      datasetName: "",
      sampleNum: "",
      datasetSize: "",
      classNum: "",
      dataInfoChartOption: {
        tooltip : {
          trigger: 'item',
          formatter: "{b} : {c} ({d}%)",
          confine: true
        },
        series : [
          {
            name: '类别分布',
            type: 'pie',
            radius: '55%',
            data:[
              //{value:0, name:'未知类别'},
            ]
          }
        ]
      }
    }
  },
  methods: {
    createTask() {
      this.creatingTask = !this.creatingTask
    },
    onReceivedDatasetInfo(data) {
      this.taskName = data.name
      this.taskType = data.task_type

      let dataset = data.dataset
      this.datasetName = dataset.name
      if(dataset.sample_num > 1000)
        dataset.sample_num = this.countFormat(dataset.sample_num)
      this.sampleNum = dataset.sample_num
      this.datasetSize = this.sizeFormat(dataset.size)
      this.classNum = dataset.class_num
      this.creatingTask = false

      this.createSuccessfully()
      this.updateDataInfoChart(dataset)
    },
    createSuccessfully() {
      this.$message({
        message: '任务创建成功！',
        type: 'success'
      });
    },
    sizeFormat(size) {
      let metrix = ["B", "KB", "MB", "GB", "TB", "PB"]
      return this.human_format(size, metrix, 1024, 2)
    },
    countFormat(count) {
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
    },
    updateDataInfoChart(dataset) {
      let newData = Array()
      for (const index in dataset.classes) {
        newData.push({
          value: dataset.nums[index],
          name: dataset.classes[index],
        })
      }
      this.dataInfoChartOption.series[0].data = newData
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
