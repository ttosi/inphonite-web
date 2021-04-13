import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store.js';
import VueCookie from 'vue-cookie';
import { 
  authService as auth, 
  sessionService as session }
from '@/services';

import peopleRoutes from '@/views/people/routes';
import apptRoutes from '@/views/appointments/routes';
import configurationRoutes from '@/views/configuration/routes';

Vue.use(Router);

const baseRoutes = [
  { meta: { authRequired: false }, path: '/login', name: 'Login', component: () => import('@/views/Login') },
  { meta: { authRequired: false }, path: '/logout', name: 'Logout', component: () => import('@/views/Login') },
  { meta: { authRequired: true }, path: '/home', name: 'Home', component: () => import('@/views/Home') },
  { meta: { authRequired: true }, path: '/', redirect: '/home' },
  { meta: { authRequired: true }, path: '/queue', name: 'Queue', component: () => import('@/views/Queue') },
  { meta: { authRequired: true }, path: '/reports', name: 'Reports', component: () => import('@/views/Reports') },
  { meta: { authRequired: true }, path: '/importexport', name: 'Import & Export', component: () => import('@/views/ImportExport') },
  { meta: { authRequired: true }, path: '/donotcontact', name: 'Do Not Contact', component: () => import('@/views/DoNotContact') },
  { meta: { authRequired: true }, path: '/rules', name: 'Rules', component: () => import('@/views/Rules') },
  { meta: { authRequired: true }, path: '/subscriptions', name: 'Subscriptions', component: () => import('@/views/Subscriptions') },
  { meta: { authRequired: true }, path: '/archive', name: 'Report Archive', component: () => import('@/views/Archive') },
  {
    meta: { authRequired: false },
    path: '*',
    name: 'Not Found',
    component: () => import('@/views/NotFound'),
    beforeEnter: (to, from, next) => {
      next();
    }
  }
];

const routes = baseRoutes.concat(
  ...peopleRoutes,
  ...apptRoutes,
  ...configurationRoutes
);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.authRequired)) {
    if (store.getters.isAuthenticated || VueCookie.get('authenticated') === 'true') {
      // user is authenticated so reload user from local storage
      // this is helpful when the page is regreshed
      const user = JSON.parse(localStorage.getItem('user'));
      if (!store.getters.isAuthenticated) {
        store.commit('setUser', { ...user });
        store.commit('setAuthentication', {
          isAuthenticated: true,
          token: user.token,
          accountId: user.accountId
        });
      }
      session.restart();
      next()
    } else {
      auth.logout().then(() => {
        next({
          path: '/login'
        });
      });
    }
  } else if (!to.matched.some(r => r.meta.authRequired)) {
    next();
  }
});

export default router;