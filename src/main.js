import { createApp } from 'vue'

import { store } from './store'
import { router } from './router/index.js'
import axios from 'axios'

import App from './App.vue'

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

// Create Vue Instance
const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueSidebarMenu)

app.config.globalProperties.axios=axios

app.mount('#app')