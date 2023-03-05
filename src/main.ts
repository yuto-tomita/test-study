import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'

import './assets/index.css'
import { router } from '@/router'

createApp(App)
  .use(router)
  .use(createPinia())
  .use(VueQueryPlugin)
  .mount('#app')
