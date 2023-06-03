import {createRouter, createWebHistory} from "vue-router";
import Login from "@/pages/views/login.vue";
import Home from "@/pages/views/home.vue";
import Blank from "@/pages/views/blank.vue";
import PersonalDetails from "@/pages/views/PersonalDetails.vue";
import Appointment from "@/pages/views/Appointment.vue";
import PasswordChange from "@/pages/views/PasswordChange.vue";
import Online from "@/pages/views/Online.vue";

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
    }, {
        path: '/appointment',
        name: 'Appointment',
        component: Appointment
    }, {
        path: '/changePwd',
        name: '/ChangePwd',
        component: PasswordChange
    }, {
        path: '/online',
        name: 'Online',
        component: Online
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;