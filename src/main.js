import { createApp } from 'vue'

import { store } from './store/index.js'
import { router } from './router/index.js'
import { sync } from 'vuex-router-sync'
import axios from 'axios'

import App from './App.vue'

// import VMdEditor from '@kangc/v-md-editor';
// import '@kangc/v-md-editor/lib/style/base-editor.css';
// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
// import '@kangc/v-md-editor/lib/theme/style/github.css';
// import koKR from '@kangc/v-md-editor/lib/lang/ko-KR';
// import hljs from 'highlight.js';

// VMdEditor.lang.use('ko-KR', koKR);
// VMdEditor.use(githubTheme, {
//   Hljs: hljs,
// });

// import { editor } from './editor/index.js'

sync(store, router)

// Create Vue Instance
const app = createApp(App);
app.use(store);
app.use(router);

app.mount('#app');

app.config.globalProperties.axios=axios   // axios 전역사용
app.config.globalProperties.store=store   // store 전역사용
app.config.globalProperties.router=router // router 전역사용
