import http from '../utils/http.js';

export default {
	login(data) {
		return http.post({
			url:'home/index/login',
			data,
			isLoading:true
		});
	},
	outLogin(){
		return http.get({
			url:'/takeout/shop/v1/logout',
			isLoading:true
		});
	},
};