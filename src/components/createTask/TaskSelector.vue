<template>
<el-card :class="[selected ? 'selected-style': 
          (isAvailable ? 'available' : 'disable')]"
  :body-style="{ padding: '0px' }" >
  <div class="task-icon">
    <i :class="iconClass"></i>
  </div>
  <div style="padding: 14px;">
    <span>{{ firstTitle }}<br/>{{secondTitle}} </span>
  </div>
</el-card>
</template>

<script>
export default {
  name: "TaskSelector",
  props: ['firstTitle', 'secondTitle', 'iconClass', 'isAvailable', 'selected'],
  data() {
    return {
    }
  }
}
</script>

<style scoped>

.available {
  color:rgb(77, 165, 236);
}
.available:hover {
  cursor: pointer;
}
.disable {
  color: grey;
}
.selected-style {
  color: darkorange;
}

.task-icon {
  margin-top: 12px;
  font-size: 40px;
}
</style>