import App from './App'
import store from './store'
import { createApp } from 'vue'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(store).mount('#app')
