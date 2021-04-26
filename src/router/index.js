import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
      path: '/hello',
      name: 'Hello',
      component: () => import('@/components/HelloWorld'), // 동적 import
    },
    {
      path: '/posts',
      name: 'Posts',
      component: () => import('@/components/posts/Posts'),
    },
  ];

export const router = createRouter({
    history: createWebHistory(),
    routes,
  });
