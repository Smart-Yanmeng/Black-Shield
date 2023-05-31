import {createRouter, createWebHistory} from "vue-router";
import Login from "@/pages/views/login.vue";
import Home from "@/pages/views/home.vue";
import Blank from "@/pages/views/blank.vue";
import PersonalDetails from "@/pages/views/PersonalDetails.vue";

const routes = [
    // 匹配空路径的时候，跳转到login页面
    {
        path: "/", redirect: "/login"
    }, {
        path: "/blank",
        name: 'Blank',
        component: Blank
    }, {
        path: '/index',
        name: 'App',
        component: Home
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/user',
        name: 'User',
        component: PersonalDetails
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;