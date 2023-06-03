import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)
app.config.productionTip = false

router.beforeEach((to, from, next)=>{
  document.title = `${to.meta.title}`
  // const role = sessionStorage.getItem('name');
  // const id = sessionStorage.getItem('id');
  next()
  // if(id != null && !id.startsWith("m") && to.path === '/dashboard'){
  //   next('/book_search');
  // }else{
  //   next();
  // }
  // if (!role && to.path !== '/login') {
  //   next('/login');
  // } else if (to.meta.permission) {
  //   // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
  //   role === 'admin' ? next() : next('/403');
  // } else {
  //   // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
  //   if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
  //     Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
  //       confirmButtonText: '确定'
  //     });
  //   } else {
  //     next();
  //   }
  // }
})

app.use(Antd)
app.use(router) // 使用路由
app.use(store) // 使用状态管理器

app.mount('#app')
