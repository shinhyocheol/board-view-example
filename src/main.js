import { createApp } from 'vue'

import { store } from './store/index.js'
import { router } from './router/index.js'
import { sync } from 'vuex-router-sync'
import axios from 'axios'

import App from './App.vue'

sync(store, router)

// Create Vue Instance
const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');

app.config.globalProperties.axios=axios // axios 전역사용
app.config.globalProperties.store=store // store 전역사용
app.config.globalProperties.router=router // router 전역사용
