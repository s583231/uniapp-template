## UNIAPP 小程序开发模板
## 开发环境
``` Hbilder X ```
## 项目描述
```
├── apis						// 接口  
├── components					// 组件
├── pages						// 页面代码  
├── static						// 图片
├── store						// 全局 store管理
├── style						// 全局样式
├── unpackage					// 运行后，各个程序的代码
├── utils						// 全局公用方法
├── app.vue						// uni-app的主组件，所有页面都是在App.vue下进行切换的，是页面入口文件。但App.vue本身不是页面，这里不能编写视图元素。
├── config.js					// 可选的配置文件，如果项目的根目录中存在这个文件，那么它会被自动加载，一般用于配置 webpack 等编译选项
├── main.js						// uni-app的入口文件，主要作用是初始化vue实例、定义全局组件、使用需要的插件如vuex
├── manifest.json				// 应用的配置文件，用于指定应用的名称、图标、权限等
├── pages.json					// 全局配置；决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等。
└── uni.scss					// 方便整体控制应用的风格。比如按钮颜色、边框风格，uni.scss文件里预置了一批scss变量预置。
```
## 