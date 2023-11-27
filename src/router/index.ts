import { createRouter, createWebHistory } from 'vue-router'
import { moduleRoutes } from "@/router/modules";
import type { RouteRecordRaw } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_BASE_URL),
  routes: moduleRoutes as unknown as RouteRecordRaw[]
})

export default router
