import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login') // 동적 import
    },
    {
      path: '/hello',
      name: 'Hello',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/',
      redirect: '/posts',
      name: 'TheContainer',
      component: () => import('@/components/layout/TheContainer'),
      children: [
        {
          path: '/posts',
          name: 'Posts',
          component: () => import('@/components/posts/Posts'),
        },
        {
          path: '/posts/detail',
          name: 'PostsDetail',
          component: () => import('@/components/posts/PostsDetail'),
        },
        {
          path: '/posts/reg',
          name: 'PostsReg',
          component: () => import('@/components/posts/PostsReg')
        }
      ]
    }
  ];

export const router = createRouter({
    history: createWebHistory(),
    routes,
  });
