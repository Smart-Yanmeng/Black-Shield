import {createRouter, createWebHistory} from "vue-router";
import Login from "@/pages/views/login.vue";
import Home from "@/pages/views/home.vue";
import Blank from "@/pages/views/blank.vue";
import PersonalDetails from "@/pages/views/PersonalDetails.vue";
import Appointment from "@/pages/views/Appointment.vue";
import PasswordChange from "@/pages/views/PasswordChange.vue";
import Online from "@/pages/views/Online.vue";
import OnlineExam from "@/pages/views/OnlineExam.vue";
import OnlineExamAnswer from "@/pages/views/OnlineExamAnswer.vue";

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
        meta: {
            requireAuth: true,
        },
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
    }, {
        path: '/online/exam',
        name: 'OnlineExam',
        component: OnlineExam
    }, {
        path: '/online/exam/answer',
        name: 'ExamAnswer',
        component: OnlineExamAnswer
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (localStorage.getItem("access_token")) {  // 从本地存储localStorage获取当前的token是否存在
            next()
        } else {
            next('/login') //如果token不存在，就跳到登录
        }
    } else {
        if (localStorage.getItem("access_token") && to.path === '/login') {  // token存在时候，进去登录页面就自动跳转到首页
            next('/home')
        } else {
            next()
        }
    }
});

export default router;