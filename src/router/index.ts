import { createRouter, createWebHistory } from 'vue-router'

import Top from '@/pages/Top.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      components: Top,
    },
  ],
})
