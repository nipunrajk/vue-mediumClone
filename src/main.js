import { createApp } from 'vue'
import './style.css'

import App from './App.vue'
import router from './router/router.js'

import store from './store/store.js'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

createApp(App).use(router).use(store).use(bootstrap).mount('#app')
