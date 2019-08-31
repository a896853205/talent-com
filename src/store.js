import Vue from 'vue'
import Vuex from 'vuex'
import { form_inserting } from './store/init/form';
import { 
  jobCategoryJiGuan, 
  jobCategoryQiYe,
  jobCategorySocial,
  jobCategoryCareer
} from './assets/category';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: '',
    count: 155,
    loaded: false,
    loading: false,
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
    setUserId(state, userId) {
      state.userId = userId;
    },
    setForm(state, form) {
      state.form = form;
    },
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
    setSummeryIn (state, { value, key, year, subKey }) {
      if (year) {
        let oneYearInfo = state.form._summary_nei.find(value => (value.year === year)).info
        
        if (key && !subKey) {
          oneYearInfo[key].value = value;
        } else if (key && subKey) {
          oneYearInfo[key][subKey].value = value;
        }
      }
    },
    setSummeryOut (state, { value, key, year, subKey }) {
      if (year) {
        let oneYearInfo = state.form._summary_wai.find(value => (value.year === year)).info
        
        if (key && !subKey) {
          oneYearInfo[key].value = value;
        } else if (key && subKey) {
          oneYearInfo[key][subKey].value = value;
        }
      }
    }, 
    setFlowIn (state, { value, key, year, subKey }) {
      if (year) {
        let oneYearInfo = state.form._sum_in.find(value => (value.year === year)).info
        
        if (key && !subKey) {
          oneYearInfo[key].value = value;
        } else if (key && subKey) {
          oneYearInfo[key][subKey].value = value;
        }
      }
    },
    setFlowInInner (state, { value, key, year, subKey }) {
      if (year) {
        let oneYearInfo = state.form._sum_in_nei.find(value => (value.year === year)).info
        
        if (key && !subKey) {
          oneYearInfo[key].value = value;
        } else if (key && subKey) {
          oneYearInfo[key][subKey].value = value;
        }
      }
    },
    setFlowInOutter () {
      if (year) {
        let oneYearInfo = state.form._sum_in_wai.find(value => (value.year === year)).info
        
        if (key && !subKey) {
          oneYearInfo[key].value = value;
        } else if (key && subKey) {
          oneYearInfo[key][subKey].value = value;
        }
      }
    },
    setFlowOut (state, { value, key, year, subKey }) {
      if (year) {
        let oneYearInfo = state.form._sum_out.find(value => (value.year === year)).info
        
        if (key && !subKey) {
          oneYearInfo[key].value = value;
        } else if (key && subKey) {
          oneYearInfo[key][subKey].value = value;
        }
      }
    },
    setFlowOutInner (state, { value, key, year, subKey }) {
      if (year) {
        let oneYearInfo = state.form._sum_out_nei.find(value => (value.year === year)).info
        
        if (key && !subKey) {
          oneYearInfo[key].value = value;
        } else if (key && subKey) {
          oneYearInfo[key][subKey].value = value;
        }
      }
    },
    setFlowOutOutter (state, { value, key, year, subKey }) {
      if (year) {
        let oneYearInfo = state.form._sum_out_wai.find(value => (value.year === year)).info
        
        if (key && !subKey) {
          oneYearInfo[key].value = value;
        } else if (key && subKey) {
          oneYearInfo[key][subKey].value = value;
        }
      }
    },
    setOutStatus (state, arr) {
      state._out_status = arr;
    },
    setOutStatusIn (state, arr) {
      state._out_status_nei = arr;
    },
    setOutStatusOut (state, arr) {
      state._out_status_wai = arr;
    },
    setNeed (state, arr) {
      state._need = arr;
    },
    setNeedIn (state, arr) {
      state._need_nei = arr;
    },
    setNeedOut (state, arr) {
      state._need_wai = arr;
    },
  },
  getters: {
    stationCategory: state => {
      switch (state.form._basic['单位性质'].value) {
        case '机关':
          return jobCategoryJiGuan;
        case '社会团体':
          return jobCategorySocial;
        case '事业单位':
          return jobCategoryCareer;
        default:
          return jobCategoryQiYe;
      }
    }
  },
  actions: {}
})
