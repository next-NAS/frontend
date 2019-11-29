<template>
  <el-container>
    <el-main>
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span>{{ datasetName === "" ? "未加载" : datasetName }}</span>
        </div>
        <el-row>
          <el-col :span="12">
            样本数量
          </el-col>
          <el-col :span="12">
            {{ sampleNum }}
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row>
          <el-col :span="12">
            文件大小
          </el-col>
          <el-col :span="12">
            {{ datasetSize }}
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row>
          <el-col :span="12">
            样本总数
          </el-col>
          <el-col :span="12">
            {{ classNum }}
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row>
          <el-col :span="12">
            样本分布
          </el-col>
        </el-row>
          <chart style="width: 100%; height:200px;" 
          :options="chartOptionsPie"></chart>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip'
export default {
  name: 'DataInfo',
  props: ["datasetName", "sampleNum", "datasetSize", "classNum", "chartOptionsPie"],
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>