import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(createPinia())
app.use(router)
app.use(pinia)
app.provide('backendUrl', 'http://localhost:8000')

app.mount('#app')
