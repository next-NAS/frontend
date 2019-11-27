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
          <upload-file-folder />
        </div>
        <div v-if="step === 3">
          <task-config-list />
        </div>
      </div>
    </el-col>
    <el-col :span="2">
      <el-button style="float: right;  margin-right:0px;" 
                circle 
                :type="step === 3 ? 'success' : 'primary'" 
                :icon="step === 3 ? 'el-icon-check' : 'el-icon-arrow-right'"
                @click="next"
                :disabled="checkIntegrality"> </el-button>
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
  data() {
    return {
      step: 0,
      taskType: "",
      taskName: ""
    }
  },
  methods: {
    next() {
      if (this.step < 3) {
        this.step++;
      }
    },
    prev() {
      if (this.step > 0) {
        this.step--;
      }
    },
    setTaskType(selectedType) {
      this.taskType = selectedType
      console.log(this.taskType)
    }
  },
  computed: {
    checkIntegrality() {
      if (this.step === 0) {
        return this.taskType === ""
      }
      else if (this.step === 1) {
        return this.taskName === ""
      }
      return false
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