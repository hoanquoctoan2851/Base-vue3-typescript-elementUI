import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import type { RouteModel } from '@/router/model'
export const moduleRoutes: RouteModel[] = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {}
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    }
]
