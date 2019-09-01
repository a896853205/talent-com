import Vue from 'vue'
import Vuex from 'vuex'
import {
  form_inserting,
  summaryInfo
} from './store/init/form';
import { objectHelper } from './util/object-helper';
import {
  jobCategoryJiGuan,
  jobCategoryQiYe,
  jobCategorySocial,
  jobCategoryCareer
} from './assets/category';
import {
  OFFICE_ONE_LEVEL,
  ENTERPRISE_ONE_LEVEL,
  SOCIETY_ONE_LEVEL,
  JOB_ONE_LEVEL,
  SUMMARY_ITEM
} from './assets/category/summary';

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
    // 设置用户id
    setUserId(state, userId) {
      state.userId = userId;
    },

    // 更新表单
    setForm(state, form) {
      if (form) {
        state.form = form;
      }
    },

    setBasic(state, { value, index, label }) {
      state.form._basic[index].value = value;

      if (label === '单位性质') {
        // 更换单位性质时会将 单位人才,单位人才流动汇总 流入流出全部清除
        // 提示是否确认
        // 如果确认,进行初始化select和select选中的数据
        switch (value) {
          case '机关':
            // 一级菜单进行赋值
            state.form._summary.forEach((item, i) => {
              // 输入select框
              state.form._summary[i].info.children.list = OFFICE_ONE_LEVEL;

              // 清除数据
              state.form._summary[i].info.children.children = [];
              // 输入数据
              OFFICE_ONE_LEVEL.forEach(() => {
                let summaryItem = objectHelper.deepCopy(SUMMARY_ITEM);
                summaryItem.prop = item.label
                state.form._summary[i].info.children.children.push(summaryItem);
              })
            });

            break;
          case '社会团体':
            // 一级菜单进行赋值
            state.form._summary.forEach((item, i) => {
              // 输入select框
              state.form._summary[i].info.children.list = SOCIETY_ONE_LEVEL;

              // 清除数据
              state.form._summary[i].info.children.children = [];
              // 输入数据
              SOCIETY_ONE_LEVEL.forEach(() => {
                let summaryItem = objectHelper.deepCopy(SUMMARY_ITEM);
                summaryItem.prop = item.label;
                state.form._summary[i].info.children.children.push(summaryItem);
              })
            });

            break;
          case '事业单位':
            // 一级菜单进行赋值
            state.form._summary.forEach((item, i) => {
              // 输入select框
              state.form._summary[i].info.children.list = JOB_ONE_LEVEL;

              // 清除数据
              state.form._summary[i].info.children.children = [];
              // 输入数据
              JOB_ONE_LEVEL.forEach(() => {
                let summaryItem = objectHelper.deepCopy(SUMMARY_ITEM);
                summaryItem.prop = item.label;
                state.form._summary[i].info.children.children.push(summaryItem);
              })
            });

            break;
          default:

            // 一级菜单进行赋值
            state.form._summary.forEach((item, i) => {
              // 输入select框
              state.form._summary[i].info.children.list = ENTERPRISE_ONE_LEVEL;

              // 清除数据
              state.form._summary[i].info.children.children = [];
              // 输入数据
              ENTERPRISE_ONE_LEVEL.forEach(() => {
                let summaryItem = objectHelper.deepCopy(SUMMARY_ITEM);
                summaryItem.prop = item.label;
                state.form._summary[i].info.children.children.push(summaryItem);
              })
            });
        }
      }
      console.log('basic', state.form._basic);
    },

    setSummery(state, { value, year, index, propIndex, label }) {
      // 判断赋值是否完成
      let correct = false;

      if (year) {
        let oneYearInfo = state.form._summary.find(value => (value.year === year)).info

        // 对象的一级结构
        if (summaryInfo.label === label) {
          oneYearInfo.value = value;
          correct = true;
        }

        // 对象的二级结构
        if (summaryInfo.children.label === label) {
          oneYearInfo.children.value = value;
          correct = true;
        }

        // 对象的三级结构
        if (!correct) {
          // 找到第三级对应的对象
          oneYearInfo.children.children.forEach((subItem, _index) => {
            if (subItem.prop === oneYearInfo.children.value) {
              if (index && !propIndex) {
                oneYearInfo.children.children[_index].children[index].value = value;
              } else if (index && propIndex) {
                oneYearInfo.children.children[_index].children[index].children[propIndex].value = value;
              }
            }
          });
        }
      }
      console.log('setSummery', state);
    },
    setSummeryIn(state, { value, key, year, subKey }) {
      if (year) {
        let oneYearInfo = state.form._summary_nei.find(value => (value.year === year)).info

        if (key && !subKey) {
          oneYearInfo[key].value = value;
        } else if (key && subKey) {
          oneYearInfo[key][subKey].value = value;
        }
      }
    },
    setSummeryOut(state, { value, key, year, subKey }) {
      if (year) {
        let oneYearInfo = state.form._summary_wai.find(value => (value.year === year)).info

        if (key && !subKey) {
          oneYearInfo[key].value = value;
        } else if (key && subKey) {
          oneYearInfo[key][subKey].value = value;
        }
      }
    },
    setFlowIn(state, { value, key, year, subKey }) {
      if (year) {
        let oneYearInfo = state.form._sum_in.find(value => (value.year === year)).info

        if (key && !subKey) {
          oneYearInfo[key].value = value;
        } else if (key && subKey) {
          oneYearInfo[key][subKey].value = value;
        }
      }
    },
    setFlowInInner(state, { value, key, year, subKey }) {
      if (year) {
        let oneYearInfo = state.form._sum_in_nei.find(value => (value.year === year)).info

        if (key && !subKey) {
          oneYearInfo[key].value = value;
        } else if (key && subKey) {
          oneYearInfo[key][subKey].value = value;
        }
      }
    },
    setFlowInOutter(state, { value, key, year, subKey }) {
      if (year) {
        let oneYearInfo = state.form._sum_in_wai.find(value => (value.year === year)).info

        if (key && !subKey) {
          oneYearInfo[key].value = value;
        } else if (key && subKey) {
          oneYearInfo[key][subKey].value = value;
        }
      }
    },
    setFlowOut(state, { value, key, year, subKey }) {
      if (year) {
        let oneYearInfo = state.form._sum_out.find(value => (value.year === year)).info

        if (key && !subKey) {
          oneYearInfo[key].value = value;
        } else if (key && subKey) {
          oneYearInfo[key][subKey].value = value;
        }
      }
    },
    setFlowOutInner(state, { value, key, year, subKey }) {
      if (year) {
        let oneYearInfo = state.form._sum_out_nei.find(value => (value.year === year)).info

        if (key && !subKey) {
          oneYearInfo[key].value = value;
        } else if (key && subKey) {
          oneYearInfo[key][subKey].value = value;
        }
      }
    },
    setFlowOutOutter(state, { value, key, year, subKey }) {
      if (year) {
        let oneYearInfo = state.form._sum_out_wai.find(value => (value.year === year)).info

        if (key && !subKey) {
          oneYearInfo[key].value = value;
        } else if (key && subKey) {
          oneYearInfo[key][subKey].value = value;
        }
      }
    },
    setOutStatus(state, arr) {
      state._out_status = arr;
    },
    setOutStatusIn(state, arr) {
      state._out_status_nei = arr;
    },
    setOutStatusOut(state, arr) {
      state._out_status_wai = arr;
    },
    setNeed(state, arr) {
      state._need = arr;
    },
    setNeedIn(state, arr) {
      state._need_nei = arr;
    },
    setNeedOut(state, arr) {
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
    },
    unit: state => {
      let unit = '';
      if (state.form._basic['单位性质']) {
        unit = state.form._basic['单位性质'].value;
      }
      return unit;
    }
  },
  actions: {}
})
