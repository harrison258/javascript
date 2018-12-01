/*
* Author:Harrison
* Date:2018-12-1
* */
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

// 引入css
import 'css/reset.css';
// 引入字体图标
import 'css/iconfont.css';

// 引入fastclick，解决移动端（ipad）点击事件延时300ms问题
import FastClick from 'fastclick'
FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
