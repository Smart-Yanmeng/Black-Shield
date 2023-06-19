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
import Index from "@/pages/views/Index.vue";
import QueryScore from "@/pages/views/QueryScore.vue";

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
        name: 'Index',
        component: Index
    }, {
        path: '/home',
        name: 'Home',
        meta: {
            requireAuth: true,
        },
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
        meta: {
            requireAuth: true,
        },
        component: Appointment
    }, {
        path: '/changePwd',
        name: '/ChangePwd',
        meta: {
            requireAuth: true,
        },
        component: PasswordChange
    }, {
        path: '/online',
        name: 'Online',
        meta: {
            requireAuth: true,
        },
        component: Online
    }, {
        path: '/online/exam',
        name: 'OnlineExam',
        meta: {
            requireAuth: true,
        },
        component: OnlineExam
    }, {
        path: '/online/exam/answer',
        name: 'ExamAnswer',
        meta: {
            requireAuth: true,
        },
        component: OnlineExamAnswer
    }, {
        path: '/online/score',
        name: 'Score',
        meta: {
            requireAuth: true,
        },
        component: QueryScore
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (localStorage.getItem("token")) {
            next()
        } else {
            alert('请先登录');
            next('/login');
        }
    } else {
        if (localStorage.getItem("token") && to.path === '/login') {
            next('/home')
        } else {
            next();
        }
    }
});

export default router;