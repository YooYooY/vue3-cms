import { createApp } from 'vue'

import './assets/css/index.less'
import 'normalize.css'

import App from './App.vue'
import router from '@/router'

import registerIcons from '@/global/register-icons'

const app = createApp(App)

app.use(registerIcons)
app.use(router)

app.mount('#app')
