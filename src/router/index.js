import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        //首页
        path: '/',
        component: Home,
        children: [{
            path: '',
            name: 'index',
            component: () =>
                import ('../views/index/Index')
        }]
    },
    {
        //选择城市
        path: '/city',
        component: Home,
        children: [{
            path: '',
            name: 'city',
            component: () =>
                import ('../views/city/City')
        }]
    },
    {
        //登录
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login/Login')
    },
    {
        //注册
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/register/Register')
    },
    {
        //404
        path: '*',
        component: Home,
        children: [{
            path: '',
            name: '404',
            component: () =>
                import ('../views/error/Error')
        }]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router