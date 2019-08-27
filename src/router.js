import Vue from 'vue'
import Router from 'vue-router'
import Guide from './views/Guide.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import ChangePassword from './views/ChangePassword.vue'
import Form from './views/Form.vue'
import CompanyInfo from '@/views/CompanyInfo.vue'
import TalentStatus from '@/views/TalentStatus.vue'
// let TalentStatus = () => import('@/views/TalentStatus.vue');
import FlowIn from '@/views/FlowIn.vue'
import FlowOut from '@/views/FlowOut.vue'
import FlowTalentInfo from '@/views/FlowTalentInfo.vue'
import Loading from '@/views/Loading.vue'
import Need from '@/views/Need.vue'
import AdminIndex from './views/admin/AdminIndex.vue'
import AddUser from './views/admin/AddUser.vue'
import SubmitStatus from './views/admin/SubmitStatus.vue'
import MangerUser from './views/admin/MangerUser.vue'


Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'guide',
            component: Guide,
            meta: {
                title: '黑龙江省企业人才统计'
            }
        },

        {
            path: '/admin/index',
            name: 'adminIndex',
            component: AdminIndex,
            meta: {
                title: '账号分配系统'
            },
            children: [
                {
                    path: '/admin/addUser',
                    name: 'addUser',
                    component: AddUser,
                    meta: {
                        title: '分配用户'
                    }
                },
                {
                    path: '/admin/submitStatus',
                    name: 'submitStatus',
                    component: SubmitStatus,
                    meta: {
                        title: '审核提交'
                    }
                },
                {
                    path: '/admin/mangerUser',
                    name: 'mangerUser',
                    component: MangerUser,
                    meta: {
                        title: '账号管理'
                    }
                },
            ]
        },
        {
            path: '/loading',
            name: 'loading',
            component: Loading
        },
        {
            path: '/changePassword',
            name: 'changePassword',
            component: ChangePassword,
            meta: {
                title: '修改密码'
            }
        },
        {
            path: '/form',
            name: 'form',
            component: Form,
            children: [
                {
                    path: 'companyInfo',
                    name: 'companyInfo',
                    component: CompanyInfo,
                    meta: {
                        keepAlive: true,
                        title: '单位基本信息填报'
                    }
                },
                {
                    path: 'need',
                    name: 'need',
                    component: Need,
                    meta: {
                        keepAlive: true,
                        title: '单位人才需求情况统计'
                    }
                },
                {
                    path: 'talentStatus',
                    name: 'talentStatus',
                    component: TalentStatus,
                    meta: {
                        keepAlive: true,
                        title: '单位近10年人才存量统计'
                    }
                },
                {
                    path: 'flowIn',
                    name: 'flowIn',
                    component: FlowIn,
                    meta: {
                        keepAlive: true,
                        title: '单位近十年人才流入情况数量统计'
                    }
                },
                {
                    path: 'flowOut',
                    name: 'flowOut',
                    component: FlowOut,
                    meta: {
                        keepAlive: true,
                        title: '单位近十年人才流出数量统计'
                    }
                },
                {
                    path: 'flowTalentInfo',
                    name: 'flowTalentInfo',
                    component: FlowTalentInfo,
                    meta: {
                        keepAlive: true,
                        title: '单位流失人才基本信息统计'
                    }
                },
            ]
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                title: '注册账号'
            }
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                title: '登录'
            }
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
