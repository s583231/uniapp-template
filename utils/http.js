import store from '../store/store.js';
import config from '../config.js';
const host = config.BASE_URL;


let isAgainLogin = false;

function request(url, method, data, header = {}, isLoading = false, loadingTxt = '') {
	if (isLoading) {
		uni.showLoading({
			title: loadingTxt, // 数据请求前loading
		});
	}
	// 默认header
	let headers = {
		// 'Accept': 'application/json',
		// 'content-type': 'application/json',
		// 'token': store.state.token || undefined,
	};
	// 如果存在自定义header则与默认header合并
	if (header) {
		Object.assign(headers, header);
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: host + url, // 仅为示例，并非真实的接口地址
			method: method,
			data: data,
			header: headers,
			success: function(res) {
				console.log('请求成功',{url, data, res});
				if (res.data.status === 101) {
					if (isAgainLogin) return;
					isAgainLogin = true;
					// 清除登录
					store.commit('token', '');
					store.commit('login', false);
					store.commit('userinfo', {});
					store.commit('nickName', '');
					store.commit('avatarUrl', '');
					uni.navigateTo({
						url: '../pages/login/login.vue'
					});
				}
				if (res.statusCode === 200 && res.data.status === 200) {
					resolve(res.data.datas);
					if (isLoading) uni.hideLoading();
				} else {
					reject(res.data);
				}
			},
			fail: function(err) {
				reject(err);
				uni.showToast({
					icon: 'none',
					title: '服务器链接异常',
					duration: 3000
				});
				// if (isLoading) uni.hideLoading()
			}
		});
	});
}

function get(obj) {
	return request(obj.url, 'GET', obj.data, obj.header, obj.isLoading, obj.loadingTxt);
}

function post(obj) {
	return request(obj.url, 'POST', obj.data, obj.header, obj.isLoading, obj.loadingTxt);
}

function put(obj) {
	return request(obj.url, 'PUT', obj.data, obj.header, obj.isLoading, obj.loadingTxt);
}

function del(obj) {
	return request(obj.url, 'DELETE', obj.data, obj.header, obj.isLoading, obj.loadingTxt);
}

export default {
	request,
	get,
	post,
	put,
	del,
	host
};
