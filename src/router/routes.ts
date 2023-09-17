import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/story',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Story.vue') }],
  },
  {
    path: '/contacts',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Contacts.vue') }],
  },
  {
    path: '/dialogue',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Dialogue.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
