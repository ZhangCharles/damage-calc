import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'calc',
    component: () => import('@/views/calc.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router