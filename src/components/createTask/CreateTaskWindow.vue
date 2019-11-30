<template>
<div>
  <el-row align="middle" type="flex" style="margin-bottom:20px;">
    <el-col :span="2">
      <el-button style="float: left; margin-left:0px;" 
                  circle 
                  type="primary" 
                  @click="prev" 
                  icon="el-icon-arrow-left" 
                  :disabled="step === 0">  </el-button>
    </el-col>
    <el-col :span="20">
      <div style="height: 215px;">
        <div v-if="step === 0">
          <new-task-list :selected="taskType" @select-task-type="setTaskType" />
        </div>
        <div v-if="step === 1">
          <el-row class="vertical-center-align">
            <el-col :span="5">
              <span class="text item" 
                    style="font-size:21px; position: relative; top: 5px;">
                    任务名</span>
            </el-col>
            <el-col :span="17">
              <el-input v-model="taskName" placeholder="请输入任务名"></el-input>
            </el-col>
          </el-row>
        </div>
        <div v-if="step === 2">
          <upload-file-folder
              :userId="userId"
              :taskName="taskName" 
              @upload-complete="onUploadComplete"/>
        </div>
        <div v-if="step === 3">
          <task-config-list 
              :taskName="taskName" 
              :taskType="taskType" 
              :datasetName="datasetName" />
        </div>
      </div>
    </el-col>
    <el-col :span="2">
      <el-tooltip class="item" effect="dark" placement="top-end"
                  :content="missingTooltip"
                  :disabled="checkIntegrality">
        <!-- 由于tooltip不支持disable的元素，所以在外面套一层div -->
        <div>
        <el-button style="float: right;  margin-right:0px;" 
                  circle 
                  :type="step === 3 ? 'success' : 'primary'" 
                  :icon="step === 3 ? 'el-icon-check' : 'el-icon-arrow-right'"
                  @click="next"
                  :disabled="!checkIntegrality">
        </el-button>
        </div>
       </el-tooltip>
    </el-col>
  </el-row>
  <el-steps :space="300" :active="step" finish-status="success" simple>
    <el-step title="任务类型"></el-step>
    <el-step title="任务命名"></el-step>
    <el-step title="数据上传"></el-step>
    <el-step title="确认配置"></el-step>
  </el-steps>
</div>
</template>

<script>
import axios from 'axios'
import NewTaskList from "./NewTaskList"
import UploadFileFolder from "./UploadFileFolder"
import TaskConfigList from "./TaskConfigList"

export default {
  name: "CreateTaskWindow",
  components: {
    "new-task-list": NewTaskList,
    "upload-file-folder": UploadFileFolder,
    "task-config-list": TaskConfigList
  },
  props: ["userId"],
  data() {
    return {
      step: 0,
      taskType: "",
      taskName: "",
      datasetName: ""
    }
  },
  methods: {
    next() {
      if (this.step < 3) {
        this.step++;
      }
      else { // 最后一步，完成任务
        this.postMetaData();
      }
    },
    prev() {
      if (this.step > 0) {
        this.step--;
      }
    },
    setTaskType(selectedType) {
      this.taskType = selectedType
    },
    onUploadComplete(datasetName) {
      this.datasetName = datasetName
    },
    postMetaData() {
      let that = this
      axios.post(["api", this.userId, "tasks"].join("/"), {
        task_type: this.taskType,
        dataset_name: this.datasetName,
        task_id: this.taskName
      }, )
      .then(function(response) {
        let data = response.data
        that.$emit("receive-dataset-info", data)
      })
      .catch(function(error) {
        console.log(error)
        alert("未知错误")
      })
    }
  },
  computed: {
    checkIntegrality() {
      if (this.step === 0) {
        return this.taskType !== ""
      }
      else if (this.step === 1) {
        return this.taskName !== ""
      }
      else if (this.step === 2) {
        return this.datasetName !== ""
      }
      return true
    },
    missingTooltip() {
      if (this.step === 0) {
        return "请点击选择要创建的任务类型"
      }
      else if (this.step === 1) {
        return "请输入任务的名称"
      }
      else if (this.step === 2) {
        return "请上传数据集文件夹"
      }
      return ""
    }
  }
}
</script>

<style scoped>
.vertical-center-align {
  position: relative;
  top: 86px;
}
</style>