import { createApp } from 'vue'
import { useStore } from './store'
import './style.css'
import App from './App.vue'

const app = createApp(App)
useStore(app)
app.mount('#app')