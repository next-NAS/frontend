import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import uploader from 'vue-simple-uploader'
import Echarts from 'vue-echarts';
Vue.component('chart', Echarts);
Vue.component(CollapseTransition.name, CollapseTransition)
import App from './App.vue'

Vue.use(ElementUI)
Vue.use(uploader)

new Vue({
  el: '#app',
  render: h => h(App)
})