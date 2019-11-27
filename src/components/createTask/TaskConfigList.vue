<template>
<div>
  <el-card shadow="never">
    <el-row>
      <el-col :span="12">
        任务名
      </el-col>
      <el-col :span="12">
        ImageNet分类
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :span="12">
        任务类型
      </el-col>
      <el-col :span="12">
        图像分类
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :span="12">
        数据文件
      </el-col>
      <el-col :span="12">
        imageNet-10-classification
      </el-col>
    </el-row>
  </el-card>
</div>
</template>

<script>
export default {
  name: "TaskConfigList"
}
</script>
