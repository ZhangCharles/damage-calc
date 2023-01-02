import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'calculator',
    component: () => import('@/views/calculator.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router