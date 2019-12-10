import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
//引用全局数据文件
import global_ from '@/util/Global'
import Router from 'vue-router' 
Vue.use(Router) // 引入路由
Vue.prototype.GLOBAL = global_

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
