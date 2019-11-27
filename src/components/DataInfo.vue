<template>
  <el-container>
    <el-main>
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span>ImageNet</span>
        </div>
        <el-row>
          <el-col :span="12">
            样本数量
          </el-col>
          <el-col :span="12">
            12.3 K
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row>
          <el-col :span="12">
            文件大小
          </el-col>
          <el-col :span="12">
            42.7 TB
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row>
          <el-col :span="12">
            样本总数
          </el-col>
          <el-col :span="12">
            5
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
  data() {
    return {
      chartOptionsPie: {
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
              {value:235, name:'狗'},
              {value:274, name:'猫'},
              {value:310, name:'牛'},
              {value:335, name:'羊'},
              {value:400, name:'猪'}
            ]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>