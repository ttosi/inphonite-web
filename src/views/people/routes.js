export default [
  {
    path: '/people',
    name: 'People',
    meta: { authRequired: true, hasDatatable: true },
    component: () => import('@/views/people/Index')
  },
  {
    path: '/people/details',
    name: 'People | Details',
    redirect: { path: '/people' },
    meta: { authRequired: true },
    component: () => import('@/views/people/Details'),
    children: [
      {
        path: ':id/general',
        name: 'People | Details | General',
        props: true,
        meta: { authRequired: true },
        component: () => import('@/views/people/General')
      },
      {
        path: ':id/appointments',
        name: 'People | Details | Appointments',
        props: true,
        meta: { authRequired: true },
        component: () => import('@/views/people/Appointments')
      },
      {
        path: ':id/results',
        name: 'People | Details | Results',
        props: true,
        meta: { authRequired: true },
        component: () => import('@/views/people/Results')
      }
    ]
  }
]
