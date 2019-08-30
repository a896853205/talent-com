import Vue from 'vue'
import Vuex from 'vuex'
import { form_inserting } from './store/init/form';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 155,
    loaded: false,
    loading: false,
    unitType: '事业单位',
    page_load: {
      'companyInfo': true,
      'talentStatus': false,
      'flowIn': false,
      'flowOut': false,
      'flowTalentInfo': false,
      'need': false
    },
    form: form_inserting,
    vueElementLoading: false,
  },
  mutations: {},
  actions: {}
})
