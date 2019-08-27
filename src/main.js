import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
//import 'iview/dist/styles/iview.css'
import "babel-polyfill"
import ElementUI from 'element-ui';
import cookies from 'vue-cookies'

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
});



Vue.use(iView);
Vue.use(ElementUI);
Vue.use(cookies);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
