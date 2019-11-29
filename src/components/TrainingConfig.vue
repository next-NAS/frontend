<template>
  <el-card shadow="never">
    <!-- 这个form并没有实际用途 -->
    <el-form ref="form" label-width="80px">
      <el-row style="height: 0px;">
        <el-col :span="3">
          <el-form-item label="推荐配置">
            <el-switch v-model="recommendedConfig"></el-switch>
          </el-form-item>
        </el-col>
        <el-col :span="5" :offset="1">
          <el-form-item label="尝试次数">
            <el-time-select style="width: 110px;"
              v-model="trainingTime"
              :picker-options="{
                start: '00:30',
                step: '00:30',
                end: '100:00'
              }"
              placeholder="选择时间">
            </el-time-select>
          </el-form-item>
        </el-col>
        <el-col :span="5" :offset="0">
          <el-form-item label="尝试次数">
            <el-input-number size="medium" style="width: 108px;" controls-position="right"
                            v-model="tryTimes" 
                            :min="1" 
                            label="尝试次数">
            </el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="节点数量">
            <el-input-number size="medium" style="width: 108px;" controls-position="right"
                            v-model="nodeNum" 
                            :min="1" 
                            :max="100" 
                            label="节点数量">
            </el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="5">
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
      tryTimes: 1,
      nodeNum: 1,
      trainingTime: "", // 这个时间是一个string
      recommendedConfig: false,
    }
  },
  methods: {
    startTraining() {
    }
  }
}
</script>