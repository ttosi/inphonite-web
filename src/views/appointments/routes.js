export default [
  {
    path: '/appointments',
    name: 'Appointments',
    meta: { authRequired: true },
    component: () => import('@/views/appointments/Index')
  },
  {
    path: '/appointments/details',
    name: 'Appointments | Details',
    redirect: { path: '/appointments' },
    meta: { authRequired: true },
    component: () => import('@/views/appointments/Details'),
    children: [
      {
        path: ':id/general',
        props: true,
        name: 'Appointments | Details | General',
        meta: { authRequired: true },
        component: () => import('@/views/appointments/General')
      },
      {
        path: ':id/results',
        props: true,
        name: 'Appointments | Details | Results',
        meta: { authRequired: true },
        component: () => import('@/views/appointments/Results')
      }
    ]
  }
]
