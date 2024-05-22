import './assets/styles/global.styl'
import '@fortawesome/fontawesome-free/css/all.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
