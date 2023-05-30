import app from "@/App.vue";
import Login from "@/pages/views/login.vue";
import Home from "@/pages/views/home.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    // 匹配空路径的时候，跳转到login页面
    {path: "/",redirect:"/login"},
    {
        path: '/index',
        name: 'App',
        component: Home
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;