// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import './javascript/rem'
import './styleSheets/main.css'

//完整引入mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

//完整引入vant ui
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant);

//引入fastclick,并绑定到body
import FastClick from 'fastclick'
FastClick.attach(document.body);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
