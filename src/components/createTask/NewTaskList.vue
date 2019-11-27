<template>
  <div class="popup">
    <el-tabs type="border-card">
      <el-tab-pane label="图像类">
        <el-row class="tasks-row">
          <el-col :span="5" :offset=0>
            <task-selector @click.native="selectType('imageClassification')"
              firstTitle="图像" 
              secondTitle="分类" 
              iconClass="el-icon-picture-outline" 
              isAvailable="true"
              :selected="selected === 'imageClassification'"
              />
          </el-col>  
          <el-col :span="5" :offset=1>
            <task-selector 
              firstTitle="目标" 
              secondTitle="检测" 
              iconClass="el-icon-camera" />
          </el-col>  
          <el-col :span="5" :offset=1>
            <task-selector 
              firstTitle="语义" 
              secondTitle="分割" 
              iconClass="el-icon-set-up" />
          </el-col>  
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="文本类">
        <el-row class="tasks-row">
          <el-col :span="5" :offset=0>
            <task-selector 
              firstTitle="文本" 
              secondTitle="分类" 
              iconClass="el-icon-tickets"/>
          </el-col>  
          <el-col :span="5" :offset=1>
            <task-selector 
              firstTitle="序列" 
              secondTitle="标注" 
              iconClass="el-icon-edit"/>
          </el-col>  
          <el-col :span="5" :offset=1>
            <task-selector 
              firstTitle="文本" 
              secondTitle="匹配" 
              iconClass="el-icon-document-copy"/>
          </el-col>  
          <el-col :span="5" :offset=1>
            <task-selector 
              firstTitle="文本" 
              secondTitle="生成" 
              iconClass="el-icon-chat-line-round"/>
          </el-col>  
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="表格类">
        <el-row class="tasks-row"> 
          <el-col :span="5" :offset=0>
            <task-selector 
              firstTitle="分类"  
              iconClass="el-icon-s-data"/>
          </el-col>   
          <el-col :span="5" :offset=1>
            <task-selector 
              firstTitle="回归"  
              iconClass="el-icon-finished"/>
          </el-col>  
          <el-col :span="5" :offset=1>
          
          </el-col>  
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TaskSelector from "./TaskSelector"
export default {
  name: "NewTaskList",
  props: ["selected"],
  components: {
    "task-selector": TaskSelector
  },
  data() {
    return {}
  },
  methods: {
    selectType(selectedType) {
      this.$emit('select-task-type', selectedType);
    }
  }
}
</script>

<style scoped>
.popup {
  z-index: 1000;
}
.tasks-row {
  width: 420px;
  height: 130px;
}
.selected-style {
  color: darkorange;
}
</style>