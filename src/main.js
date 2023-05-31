import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)
app.config.productionTip = false

app.use(Antd)
app.use(router) // 使用路由
app.use(store) // 使用状态管理器

app.mount('#app')
