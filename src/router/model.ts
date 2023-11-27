import type { RouteMeta } from "vue-router";
import type { Component } from "vue";


declare module 'vue-router' {
    interface RouteMeta extends Record<string | number | symbol, unknown> {
        title?: string,
        order?: number,
        icon?: string;
        hideMenu?: boolean;
    }
}
export interface RouteModel {
    path: string;
    name: string;
    meta?: RouteMeta | null
    component: Component;
    children?: RouteModel[];
    test?: string
}