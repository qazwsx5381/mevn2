import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store)
app.use(router).mount('#app')
app.config.globalProperties.$myname = '누구게' // 전역변수
app.config.globalProperties.$myfn = () => {
  alert('나타났다')
} // 전역변수
