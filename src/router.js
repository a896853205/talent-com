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
import TalentStatusNei from '@/views/TalentStatusNei.vue'
import TalentStatusWai from '@/views/TalentStatusWai.vue'
// let TalentStatus = () => import('@/views/TalentStatus.vue');
import FlowIn from '@/views/FlowIn.vue'
import FlowInNei from '@/views/FlowInNei.vue'
import FlowInWai from '@/views/FlowInWai.vue'
import FlowOut from '@/views/FlowOut.vue'
import FlowOutNei from '@/views/FlowOutNei.vue'
import FlowOutWai from '@/views/FlowOutWai.vue'
import FlowTalentInfo from '@/views/FlowTalentInfo.vue'
import FlowTalentInfoNei from '@/views/FlowTalentInfoNei.vue'
import FlowTalentInfoWai from '@/views/FlowTalentInfoWai.vue'
import Loading from '@/views/Loading.vue'
import Need from '@/views/Need.vue'
import NeedNei from '@/views/NeedNei.vue'
import NeedWai from '@/views/NeedWai.vue'
import AdminIndex from './views/admin/AdminIndex.vue'
import AddUser from './views/admin/AddUser.vue'
import SubmitStatus from './views/admin/SubmitStatus.vue'
import MangerUser from './views/admin/MangerUser.vue'
import AdminChangePassword from './views/admin/ChangePassword.vue'
import AdminLogin from './views/admin/Login.vue'


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
      path: '/adminLogin',
      name: 'adminLogin',
      component: AdminLogin,
      meta: {
        title: '账户分配系统登录'
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
        {
          path: '/admin/adminChangePassword',
          name: 'adminChangePassword',
          component: AdminChangePassword,
          meta: {
            title: '修改密码'
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
          path: 'needNei',
          name: 'needNei',
          component: NeedNei,
          meta: {
            keepAlive: true,
            title: '单位人才需求情况统计-体制内'
          }
        },
        {
          path: 'needWai',
          name: 'needWai',
          component: NeedWai,
          meta: {
            keepAlive: true,
            title: '单位人才需求情况统计-体制外'
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
          path: 'talentStatusNei',
          name: 'talentStatusNei',
          component: TalentStatusNei,
          meta: {
            keepAlive: true,
            title: '单位近10年人才存量统计-编制内'
          }
        },
        {
          path: 'talentStatusWai',
          name: 'talentStatusWai',
          component: TalentStatusWai,
          meta: {
            keepAlive: true,
            title: '单位近10年人才存量统计-编制外'
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
          path: 'flowInNei',
          name: 'flowInNei',
          component: FlowInNei,
          meta: {
            keepAlive: true,
            title: '单位近十年人才流入情况数量统计-编制内'
          }
        },
        {
          path: 'flowInWai',
          name: 'flowInWai',
          component: FlowInWai,
          meta: {
            keepAlive: true,
            title: '单位近十年人才流入情况数量统计-编制外'
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
          path: 'flowOutNei',
          name: 'flowOutNei',
          component: FlowOutNei,
          meta: {
            keepAlive: true,
            title: '单位近十年人才流出数量统计-编制内'
          }
        },
        {
          path: 'flowOutWai',
          name: 'flowOutWai',
          component: FlowOutWai,
          meta: {
            keepAlive: true,
            title: '单位近十年人才流出数量统计-编制外'
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
        {
          path: 'flowTalentInfoNei',
          name: 'flowTalentInfoNei',
          component: FlowTalentInfoNei,
          meta: {
            keepAlive: true,
            title: '单位流失人才基本信息统计-体制内'
          }
        },
        {
          path: 'flowTalentInfoWai',
          name: 'flowTalentInfoWai',
          component: FlowTalentInfoWai,
          meta: {
            keepAlive: true,
            title: '单位流失人才基本信息统计-体制外'
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
