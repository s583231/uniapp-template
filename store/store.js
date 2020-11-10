import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        login: false,
		token:'da2cb430e3eee1c9c79eb42257e97961', 
		userinfo:{}, //用户信息
	},
    mutations: {
		login(state, val) {
		    state.login = val;
		},
		token(state, val) {
		    state.token = val;
		},
		userinfo(state, val) {
		    state.userinfo = val;
		}
    }
})

export default store
