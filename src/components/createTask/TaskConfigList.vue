<template>
<div>
  <el-card shadow="never">
    <el-row>
      <el-col :span="12">
        任务名
      </el-col>
      <el-col :span="12">
        {{ taskName }}
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :span="12">
        任务类型
      </el-col>
      <el-col :span="12">
        {{ taskType }}
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :span="12">
        数据文件
      </el-col>
      <el-col :span="12">
        {{ datasetName }}
      </el-col>
    </el-row>
  </el-card>
</div>
</template>

<script>
export default {
  name: "TaskConfigList",
  props: ["taskName", "taskType", "datasetName"]
}
</script>
