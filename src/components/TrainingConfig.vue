<template>
  <el-card shadow="never">
    <el-form ref="form" :model="form" label-width="80px">
      <el-row style="height: 0px;">
        <el-col :span="3">
          <el-form-item label="推荐配置">
            <el-switch v-model="form.recommendedConfig"></el-switch>
          </el-form-item>
        </el-col>
        <el-col :span="5" :offset=1>
          <el-form-item label="训练时长">
            <el-select v-model="form.trainingTime" placeholder="选择时长">
              <el-option label="1小时" value="shanghai"></el-option>
              <el-option label="2小时" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="尝试次数">
            <el-select v-model="form.tryTimes" placeholder="选择次数">
              <el-option label="1" value="tryTime1"></el-option>
              <el-option label="2" value="tryTime2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="节点数量">
            <el-select v-model="form.nodeNum" placeholder="选择次数">
              <el-option label="1" value="nodeNum1"></el-option>
              <el-option label="2" value="nodeNum2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-button type="primary" @click="startTraining">开始训练</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: "TrainingConfig",
  data() {
    return {
      form: {
        trainingTime: '',
        tryTimes: '',
        nodeNum: '',
        recommendedConfig: false,
      }
    }
  },
  methods: {
    startTraining() {

    }
  }
}
</script>