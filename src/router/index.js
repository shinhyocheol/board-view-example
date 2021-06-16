import { createWebHistory, createRouter } from 'vue-router';

// 동적 import
const routes = [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login') // 로그인
    },
    {
      path: '/join',
      name: 'Join',
      component: () => import('@/components/Join') // 회원가입
    },
    {
      path: '/hello',
      name: 'Hello',
      component: () => import('@/components/HelloWorld')
    },
    {
      name: 'TheContainer',
      redirect: '/posts',
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
