import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import LayoutDefaultVue from '@/layout/LayoutDefault.vue';
import type { RouteModel } from '@/router/model';
export const moduleRoutes: RouteModel[] = [
  {
    path: '/',
    name: 'layout-default',
    redirect: '/dashboard',
    component: LayoutDefaultVue,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: HomeView,
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView,
      },
    ]
  },

];
