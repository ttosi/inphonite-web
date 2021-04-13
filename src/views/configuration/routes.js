export default [
  {
    path: '/configuration/account',
    name: 'Configuration | Account',
    meta: { authRequired: true },
    component: () => import('@/views/configuration/Account')
  },
  {
    path: '/configuration/user',
    name: 'Configuration | User',
    meta: { authRequired: true },
    component: () => import('@/views/configuration/User')
  },
  {
    path: '/configuration/ruleschedules',
    name: 'Configuration | Rule Schedules',
    meta: { authRequired: true },
    component: () => import('@/views/configuration/RuleSchedules')
  },
  {
    path: '/configuration/credits',
    name: 'Configuration | Manage Credits',
    meta: { authRequired: true },
    component: () => import('@/views/configuration/Credits')
  },
  {
    path: '/configuration/ruleschedules',
    name: 'Configuration | Contact Support',
    meta: { authRequired: true },
    component: () => import('@/views/configuration/Support')
  }
]
