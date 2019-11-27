<template>
  <el-card class="box-card" shadow="hover">
    <chart style="width: 100%; height:380px;" 
          :options="chartOptionsHistoryLine"></chart>
    <el-row>
      <el-progress :percentage="percentage" :color="customColors"></el-progress>
    </el-row>
  </el-card>
</template>

<script>
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/markLine'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'

export default {
  name: "TrainingResult", 
  data() {
    return {
      chartOptionsHistoryLine: {
        title: {
          text: '训练历史',
          subtext: '记录了每一次的训练结果'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data:['准确率','召回率', 'F1值']
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis:  {
          type: 'category',
          boundaryGap: false,
          data: ['1','2','3','4','5','6','7']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          }
        },
        series: [
          {
            name:'准确率',
            type:'line',
            data:[0.11, 0.31, 0.65, 0.63, 0.42, 0.73, 0.55],
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            }
          },
          {
            name:'召回率',
            type:'line',
            data:[0.1, 0.2, 0.2, 0.5, 0.63, 0.62, 0.3],
            markPoint: {
              data: [
                {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
              ]
            }
          },
          {
            name:'F1值',
            type:'line',
            data:[0.1, 0.23, 0.25, 0.6, 0.60, 0.64, 0.4],
            markPoint: {
              data: [
                {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'},
                [
                  {
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                  }, 
                  {
                    symbol: 'circle',
                    label: {
                      normal: {
                      position: 'start',
                      formatter: '最大值'
                    }
                  },
                  type: 'max',
                  name: '最高点'
                }]
              ]
            }
          }
        ]
      },
      // 进度条
      percentage: 50,
      customColor: '#409eff',
      customColors: [
        {color: '#f56c6c', percentage: 20},
        {color: '#e6a23c', percentage: 40},
        {color: '#5cb87a', percentage: 60},
        {color: '#1989fa', percentage: 80},
        {color: '#6f7ad3', percentage: 100}
      ]
    }
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? '完成' : `${percentage}%`;
    }
  }
}
</script>