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
  mutations: {
    setBasic (state, {value, key}) {
      state.form._basic[key].value = value;
    },
    setSummery (state, { value, key, year, subKey }) {
      if (year) {
        let oneYearInfo = state.form._summary.find(value => (value.year === year)).info
        
        if (key && !subKey) {
          oneYearInfo[key].value = value;
        } else if (key && subKey) {
          oneYearInfo[key][subKey].value = value;
        }
      }
    },
    setFlowIn (state, { value, key, year, subKey }) {
      console.log('store', { value, key, year, subKey })
      if (year) {
        let oneYearInfo = state.form._sum_in.find(value => (value.year === year)).info
        
        if (key && !subKey) {
          oneYearInfo[key].value = value;
        } else if (key && subKey) {
          oneYearInfo[key][subKey].value = value;
        }
      }
    }
  },
  actions: {}
})
