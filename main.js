import Vue from 'vue'
import App from './App'
import store from './store/store.js'
import './style/common.scss'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$store = store;
const app = new Vue({
    ...App
})
app.$mount()
