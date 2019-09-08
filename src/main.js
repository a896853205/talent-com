import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


import { Button,
  Input,
  Divider,
  Row,
  Col,
  DatePicker,
  Menu,
  MenuItem,
  Select,
  Form,
  FormItem,
  Cascader,
  Alert,
  InputNumber,
  Option,
  Submenu,
  Card,
  Checkbox,
  CheckboxGroup,
  Table,
  Message
 } from 'iview';
import 'iview/dist/styles/iview.css';

import "babel-polyfill"
import ElementUI from 'element-ui';
import cookies from 'vue-cookies'

 // menu card

Vue.component('Button', Button);
Vue.component('Input', Input);
Vue.component('Divider', Divider);
Vue.component('Row', Row);
Vue.component('i-col', Col);
Vue.component('DatePicker', DatePicker);
Vue.component('Menu', Menu);
Vue.component('MenuItem', MenuItem);
Vue.component('Select', Select);
Vue.component('Form', Form);
Vue.component('Form-item', FormItem);
Vue.component('Cascader', Cascader);
Vue.component('Alert', Alert);
Vue.component('Input-number', InputNumber);
Vue.component('Option', Option);
Vue.component('Submenu', Submenu);
Vue.component('Card', Card);
Vue.component('Checkbox', Checkbox);
Vue.component('CheckboxGroup', CheckboxGroup);
Vue.component('Table', Table);

Vue.prototype.$Message = Message;

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
});

Vue.use(ElementUI);
Vue.use(cookies);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
