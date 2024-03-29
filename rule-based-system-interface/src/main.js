import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from '../node_modules/element-ui/lib/locale/lang/en'

Vue.config.productionTip = false;

Vue.use(ElementUI, {locale});

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
