import Vue from 'vue'
import Vuex from 'vuex'
import {
  form_inserting,
  summaryInfo,
  sumInInfo,
  sumOutInfo
} from './store/init/form';
import { objectHelper } from './util/object-helper';
import {
  jobCategoryJiGuan,
  jobCategoryQiYe,
  jobCategorySocial,
  jobCategoryCareer
} from './assets/category/category';
import {
  OFFICE_ONE_LEVEL,
  ENTERPRISE_ONE_LEVEL,
  SOCIETY_ONE_LEVEL,
  JOB_ONE_LEVEL,
} from './assets/category/category-one-level';

import {
  SUMMARY_ITEM,
  SUMMARY_PERSON_CATEGORY
} from './store/init/summary';

import {
  SUM_IN_ITEM,
  SUM_IN_ITEM_PERSON_CATEGORY
} from './store/init/sum-in';

import {
  SUM_OUT_ITEM,
  SUM_OUT_ITEM_PERSON_CATEGORY
} from './store/init/sum-out';

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
      state.form._from_user = userId;
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

              // 清除数据
              state.form._summary[i].info[0].children.children = [];
              state.form._summary[i].info[0].children.value = OFFICE_ONE_LEVEL[0].value;
              state.form._summary[i].info[0].children.inputChildren = [];

              // 输入数据
              OFFICE_ONE_LEVEL.forEach(oneLevelItem => {
                let summaryItem = objectHelper.deepCopy(SUMMARY_ITEM);
                let summaryPersonCategory = objectHelper.deepCopy(SUMMARY_PERSON_CATEGORY);
                summaryItem.prop = oneLevelItem.label;
                summaryPersonCategory.prop = oneLevelItem.label;
                state.form._summary[i].info[0].children.children.push(summaryItem);
                state.form._summary[i].info[0].children.inputChildren.push(summaryPersonCategory);
              })
            });

            // 一级菜单进行赋值
            state.form._sum_in.forEach((item, i) => {

              // 清除数据
              state.form._sum_in[i].info[0].children.children = [];
              state.form._sum_in[i].info[0].children.value = OFFICE_ONE_LEVEL[0].value;
              state.form._sum_in[i].info[0].children.inputChildren = [];

              // 输入数据
              OFFICE_ONE_LEVEL.forEach(oneLevelItem => {
                let sumInItem = objectHelper.deepCopy(SUM_IN_ITEM);
                let sumInPersonCategory = objectHelper.deepCopy(SUM_IN_ITEM_PERSON_CATEGORY);

                sumInItem.prop = oneLevelItem.label;
                sumInPersonCategory.prop = oneLevelItem.label;

                state.form._sum_in[i].info[0].children.children.push(sumInItem);
                state.form._sum_in[i].info[0].children.inputChildren.push(sumInPersonCategory);
              })
            });

            // 一级菜单进行赋值
            state.form._sum_out.forEach((item, i) => {

              // 清除数据
              state.form._sum_out[i].info[0].children.children = [];
              state.form._sum_out[i].info[0].children.value = OFFICE_ONE_LEVEL[0].value;
              state.form._sum_out[i].info[0].children.inputChildren = [];


              // 输入数据
              OFFICE_ONE_LEVEL.forEach(oneLevelItem => {
                let sumOutItem = objectHelper.deepCopy(SUM_OUT_ITEM);
                let sumOutPersonCategory = objectHelper.deepCopy(SUM_OUT_ITEM_PERSON_CATEGORY);

                sumOutItem.prop = oneLevelItem.label;
                sumOutPersonCategory.prop = oneLevelItem.label;

                state.form._sum_out[i].info[0].children.children.push(sumOutItem);
                state.form._sum_out[i].info[0].children.inputChildren.push(sumOutPersonCategory);
              })
            });

            break;
          case '社会团体':

            // 一级菜单进行赋值
            state.form._summary.forEach((item, i) => {

              // 清除数据
              state.form._summary[i].info[0].children.children = [];
              state.form._summary[i].info[0].children.value = SOCIETY_ONE_LEVEL[0].value;
              state.form._summary[i].info[0].children.inputChildren = [];
              // 输入数据
              SOCIETY_ONE_LEVEL.forEach(oneLevelItem => {
                let summaryItem = objectHelper.deepCopy(SUMMARY_ITEM);
                let summaryPersonCategory = objectHelper.deepCopy(SUMMARY_PERSON_CATEGORY);
                summaryItem.prop = oneLevelItem.label;
                summaryPersonCategory.prop = oneLevelItem.label;
                state.form._summary[i].info[0].children.children.push(summaryItem);
                state.form._summary[i].info[0].children.inputChildren.push(summaryPersonCategory);
              })
            });

            // 一级菜单进行赋值
            state.form._sum_in.forEach((item, i) => {

              // 清除数据
              state.form._sum_in[i].info[0].children.children = [];
              state.form._sum_in[i].info[0].children.value = SOCIETY_ONE_LEVEL[0].value;
              state.form._sum_in[i].info[0].children.inputChildren = [];
              // 输入数据
              SOCIETY_ONE_LEVEL.forEach(oneLevelItem => {
                let sumInItem = objectHelper.deepCopy(SUM_IN_ITEM);
                let sumInPersonCategory = objectHelper.deepCopy(SUM_IN_ITEM_PERSON_CATEGORY);

                sumInItem.prop = oneLevelItem.label;
                sumInPersonCategory.prop = oneLevelItem.label;

                state.form._sum_in[i].info[0].children.children.push(sumInItem);
                state.form._sum_in[i].info[0].children.inputChildren.push(sumInPersonCategory);
              })
            });

            // 一级菜单进行赋值
            state.form._sum_out.forEach((item, i) => {

              // 清除数据
              state.form._sum_out[i].info[0].children.children = [];
              state.form._sum_out[i].info[0].children.value = SOCIETY_ONE_LEVEL[0].value;
              state.form._sum_out[i].info[0].children.inputChildren = [];
              // 输入数据
              SOCIETY_ONE_LEVEL.forEach(oneLevelItem => {
                let sumOutItem = objectHelper.deepCopy(SUM_OUT_ITEM);
                let sumOutPersonCategory = objectHelper.deepCopy(SUM_OUT_ITEM_PERSON_CATEGORY);

                sumOutItem.prop = oneLevelItem.label;
                sumOutPersonCategory.prop = oneLevelItem.label;

                state.form._sum_out[i].info[0].children.children.push(sumOutItem);
                state.form._sum_out[i].info[0].children.inputChildren.push(sumOutPersonCategory);
              })
            });

            break;
          case '事业单位':
            //  编制内
            for (let i = 0; i < state.form._summary_nei.length; i++) {
              // 清除数据
              state.form._summary_nei[i].info[0].children.children = [];
              state.form._summary_nei[i].info[0].children.value = JOB_ONE_LEVEL[0].value;
              state.form._summary_nei[i].info[0].children.inputChildren = [];
              // 输入数据

              for (let oneLevelItem of JOB_ONE_LEVEL) {
                let summaryItem = objectHelper.deepCopy(SUMMARY_ITEM);
                let summaryPersonCategory = objectHelper.deepCopy(SUMMARY_PERSON_CATEGORY);

                summaryItem.prop = oneLevelItem.label;
                summaryPersonCategory.prop = oneLevelItem.label;

                state.form._summary_nei[i].info[0].children.children.push(summaryItem);
                state.form._summary_nei[i].info[0].children.inputChildren.push(summaryPersonCategory);
              }
            }

            console.log('state', state);
            //  编制外
            state.form._summary_wai.forEach((item, i) => {

              // 清除数据
              state.form._summary_wai[i].info[0].children.children = [];
              state.form._summary_wai[i].info[0].children.value = JOB_ONE_LEVEL[0].value;
              state.form._summary_wai[i].info[0].children.inputChildren = [];
              // 输入数据
              JOB_ONE_LEVEL.forEach(oneLevelItem => {
                let summaryItem = objectHelper.deepCopy(SUMMARY_ITEM);
                let summaryPersonCategory = objectHelper.deepCopy(SUMMARY_PERSON_CATEGORY);
                summaryItem.prop = oneLevelItem.label;
                summaryPersonCategory.prop = oneLevelItem.label;
                state.form._summary_wai[i].info[0].children.children.push(summaryItem);
                state.form._summary_wai[i].info[0].children.inputChildren.push(summaryPersonCategory);
              })
            });

            // 一级菜单进行赋值
            state.form._sum_in_nei.forEach((item, i) => {

              // 清除数据
              state.form._sum_in_nei[i].info[0].children.children = [];
              state.form._sum_in_nei[i].info[0].children.value = JOB_ONE_LEVEL[0].value;
              state.form._sum_in_nei[i].info[0].children.inputChildren = [];
              // 输入数据
              JOB_ONE_LEVEL.forEach(oneLevelItem => {
                let sumInItem = objectHelper.deepCopy(SUM_IN_ITEM);
                let sumInPersonCategory = objectHelper.deepCopy(SUM_IN_ITEM_PERSON_CATEGORY);

                sumInItem.prop = oneLevelItem.label;
                sumInPersonCategory.prop = oneLevelItem.label;

                state.form._sum_in_nei[i].info[0].children.children.push(sumInItem);
                state.form._sum_in_nei[i].info[0].children.inputChildren.push(sumInPersonCategory);
              })
            });

            // 一级菜单进行赋值
            state.form._sum_in_wai.forEach((item, i) => {

              // 清除数据
              state.form._sum_in_wai[i].info[0].children.children = [];
              state.form._sum_in_wai[i].info[0].children.value = JOB_ONE_LEVEL[0].value;
              state.form._sum_in_wai[i].info[0].children.inputChildren = [];
              // 输入数据
              JOB_ONE_LEVEL.forEach(oneLevelItem => {
                let sumInItem = objectHelper.deepCopy(SUM_IN_ITEM);
                let sumInPersonCategory = objectHelper.deepCopy(SUM_IN_ITEM_PERSON_CATEGORY);

                sumInItem.prop = oneLevelItem.label;
                sumInPersonCategory.prop = oneLevelItem.label;

                state.form._sum_in_wai[i].info[0].children.children.push(sumInItem);
                state.form._sum_in_wai[i].info[0].children.inputChildren.push(sumInPersonCategory);
              })
            });

            // 一级菜单进行赋值
            state.form._sum_out_nei.forEach((item, i) => {

              // 清除数据
              state.form._sum_out_nei[i].info[0].children.children = [];
              state.form._sum_out_nei[i].info[0].children.value = JOB_ONE_LEVEL[0].value;
              state.form._sum_out_nei[i].info[0].children.inputChildren = [];
              // 输入数据
              JOB_ONE_LEVEL.forEach(oneLevelItem => {
                let sumOutItem = objectHelper.deepCopy(SUM_OUT_ITEM);
                let sumOutPersonCategory = objectHelper.deepCopy(SUM_OUT_ITEM_PERSON_CATEGORY);

                sumOutItem.prop = oneLevelItem.label;
                sumOutPersonCategory.prop = oneLevelItem.label;

                state.form._sum_out_nei[i].info[0].children.children.push(sumOutItem);
                state.form._sum_out_nei[i].info[0].children.inputChildren.push(sumOutPersonCategory);
              })
            });

            // 一级菜单进行赋值
            state.form._sum_out_wai.forEach((item, i) => {

              // 清除数据
              state.form._sum_out_wai[i].info[0].children.children = [];
              state.form._sum_out_wai[i].info[0].children.value = JOB_ONE_LEVEL[0].value;
              state.form._sum_out_wai[i].info[0].children.inputChildren = [];
              // 输入数据
              JOB_ONE_LEVEL.forEach(oneLevelItem => {
                let sumOutItem = objectHelper.deepCopy(SUM_OUT_ITEM);
                let sumOutPersonCategory = objectHelper.deepCopy(SUM_OUT_ITEM_PERSON_CATEGORY);

                sumOutItem.prop = oneLevelItem.label;
                sumOutPersonCategory.prop = oneLevelItem.label;

                state.form._sum_out_wai[i].info[0].children.children.push(sumOutItem);
                state.form._sum_out_wai[i].info[0].children.inputChildren.push(sumOutPersonCategory);
              })
            });

            break;
          default:

            // 一级菜单进行赋值
            state.form._summary.forEach((item, i) => {

              // 清除数据
              state.form._summary[i].info[0].children.children = [];
              state.form._summary[i].info[0].children.value = ENTERPRISE_ONE_LEVEL[0].value;
              state.form._summary[i].info[0].children.inputChildren = [];
              // 输入数据
              ENTERPRISE_ONE_LEVEL.forEach(oneLevelItem => {
                let summaryItem = objectHelper.deepCopy(SUMMARY_ITEM);
                let summaryPersonCategory = objectHelper.deepCopy(SUMMARY_PERSON_CATEGORY);
                summaryItem.prop = oneLevelItem.label;
                summaryPersonCategory.prop = oneLevelItem.label;
                state.form._summary[i].info[0].children.children.push(summaryItem);
                state.form._summary[i].info[0].children.inputChildren.push(summaryPersonCategory);
              })
            });

            // 一级菜单进行赋值
            state.form._sum_in.forEach((item, i) => {

              // 清除数据
              state.form._sum_in[i].info[0].children.children = [];
              state.form._sum_in[i].info[0].children.value = ENTERPRISE_ONE_LEVEL[0].value;
              state.form._sum_in[i].info[0].children.inputChildren = [];
              // 输入数据
              ENTERPRISE_ONE_LEVEL.forEach(oneLevelItem => {
                let summaryItem = objectHelper.deepCopy(SUMMARY_ITEM);
                let summaryPersonCategory = objectHelper.deepCopy(SUMMARY_PERSON_CATEGORY);
                summaryItem.prop = oneLevelItem.label;
                summaryPersonCategory.prop = oneLevelItem.label;
                state.form._sum_in[i].info[0].children.children.push(summaryItem);
                state.form._sum_in[i].info[0].children.inputChildren.push(summaryPersonCategory);
              })
            });

            // 一级菜单进行赋值
            state.form._sum_out.forEach((item, i) => {

              // 清除数据
              state.form._sum_out[i].info[0].children.children = [];
              state.form._sum_out[i].info[0].children.value = ENTERPRISE_ONE_LEVEL[0].value;
              state.form._sum_out[i].info[0].children.inputChildren = [];
              // 输入数据
              ENTERPRISE_ONE_LEVEL.forEach(oneLevelItem => {
                let sumOutItem = objectHelper.deepCopy(SUM_OUT_ITEM);
                let sumOutPersonCategory = objectHelper.deepCopy(SUM_OUT_ITEM_PERSON_CATEGORY);

                sumOutItem.prop = oneLevelItem.label;
                sumOutPersonCategory.prop = oneLevelItem.label;

                state.form._sum_out[i].info[0].children.children.push(sumOutItem);
                state.form._sum_out[i].info[0].children.inputChildren.push(sumOutPersonCategory);
              })
            });
        }
      }
    },

    setSummery(state, { value, year, index, propIndex, label }) {

      if (year) {
        let oneYearInfo = state.form._summary.find(v => (v.year === year)).info;

        initSummaryPageCate(oneYearInfo, { value, year, index, propIndex, label });

        debugger;
      }
    },
    setSummeryIn(state, { value, year, index, propIndex, label }) {

      if (year) {
        let oneYearInfo = state.form._summary_nei.find(value => (value.year === year)).info
        debugger;
        initSummaryPageCate(oneYearInfo, { value, year, index, propIndex, label });
      }
    },
    setSummeryOut(state, { value, year, index, propIndex, label }) {

      if (year) {
        let oneYearInfo = state.form._summary_wai.find(value => (value.year === year)).info

        initSummaryPageCate(oneYearInfo, { value, year, index, propIndex, label });
      }
    },

    setFlowIn(state, { value, year, index, propIndex, label }) {

      if (year) {
        let oneYearInfo = state.form._sum_in.find(value => (value.year === year)).info

        initSumInPageCate(oneYearInfo, { value, year, index, propIndex, label });
      }
    },
    setFlowInInner(state, { value, year, index, propIndex, label }) {

      if (year) {
        let oneYearInfo = state.form._sum_in_nei.find(value => (value.year === year)).info

        initSumInPageCate(oneYearInfo, { value, year, index, propIndex, label });
      }
    },
    setFlowInOutter(state, { value, year, index, propIndex, label }) {

      if (year) {
        let oneYearInfo = state.form._sum_in_wai.find(value => (value.year === year)).info

        initSumInPageCate(oneYearInfo, { value, year, index, propIndex, label });
      }
    },

    setFlowOut(state, { value, year, index, propIndex, label }) {

      if (year) {
        let oneYearInfo = state.form._sum_out.find(value => (value.year === year)).info

        initSumOutPageCate(oneYearInfo, { value, year, index, propIndex, label });
      }
    },
    setFlowOutInner(state, { value, year, index, propIndex, label }) {

      if (year) {
        let oneYearInfo = state.form._sum_out_nei.find(value => (value.year === year)).info

        initSumOutPageCate(oneYearInfo, { value, year, index, propIndex, label });
      }
    },
    setFlowOutOutter(state, { value, year, index, propIndex, label }) {

      if (year) {
        let oneYearInfo = state.form._sum_out_wai.find(value => (value.year === year)).info

        initSumOutPageCate(oneYearInfo, { value, year, index, propIndex, label });
      }
    },
    setOutStatus(state, arr) {
      state.form._out_status = arr;
    },
    setOutStatusIn(state, arr) {
      state.form._out_status_nei = arr;
    },
    setOutStatusOut(state, arr) {
      state.form._out_status_wai = arr;
    },
    setNeed(state, arr) {
      state.form._need = arr;
    },
    setNeedIn(state, arr) {
      state.form._need_nei = arr;
    },
    setNeedOut(state, arr) {
      state.form._need_wai = arr;
    },
  },
  getters: {
    stationCategory: state => {
      let arr = [];

      state.form._basic.forEach(item => {
        if (item.label === '单位性质') {
          if (item.value) {
            switch (item.value) {
              case '机关':
                arr = jobCategoryJiGuan;
                break;
              case '社会团体':
                arr = jobCategorySocial;
                break;
              case '事业单位':
                arr = jobCategoryCareer;
                break;
              default:
                arr = jobCategoryQiYe;
            }
          } else {
            arr = [];
          }
        }
      })

      return arr;
    },

    oneLevelStationCategory: state => {
      let arr = [];

      state.form._basic.forEach(item => {
        if (item.label === '单位性质') {
          if (item.value) {
            switch (item.value) {
              case '机关':
                arr = OFFICE_ONE_LEVEL;
                break;
              case '社会团体':
                arr = SOCIETY_ONE_LEVEL;
                break;
              case '事业单位':
                arr = JOB_ONE_LEVEL;
                break;
              default:
                arr = ENTERPRISE_ONE_LEVEL;
            }
          } else {
            arr = [];
          }
        }
      })

      return arr;
    },

    twoLevelStationCategory: (state, getters) => year => {
      let oneYearSummary = state.form._summary.find(item => {
        return (year === item.year);
      }).info;

      let twoCategory = getters.stationCategory.find(item => {
        return (item.label === oneYearSummary[0].children.value)
      })

      if (twoCategory) {
        return twoCategory.children;
      } else {
        return [];
      }
    },
    getSummaryObjCombin: state => year => {

      let summaryObjCombinBox = {},
        summaryObjCombin = [];
      let oneYearSummary = state.form._summary.find(item => {
        return (year === item.year);
      }).info;

      summaryObjCombinBox = oneYearSummary[0].children.children.find(item => {
        return (item.prop === oneYearSummary[0].children.value);
      });

      if (summaryObjCombinBox) {
        summaryObjCombin = summaryObjCombinBox.children;
      }

      debugger;

      return summaryObjCombin;
    },
    getSummaryInput: state => year => {
      let summaryInput = {};
      let oneYearSummary = state.form._summary.find(item => {
        return (year === item.year);
      }).info;

      summaryInput = oneYearSummary[0].children.inputChildren.find(item => {
        return (item.prop === oneYearSummary[0].children.value);
      });

      debugger;
      return summaryInput;
    },

    getSummaryNeiObjCombin: state => year => {

      let summaryObjCombinBox = {},
        summaryObjCombin = [];
      let oneYearSummary = state.form._summary_nei.find(item => {
        return (year === item.year);
      }).info;

      summaryObjCombinBox = oneYearSummary[0].children.children.find(item => {
        return (item.prop === oneYearSummary[0].children.value);
      });

      if (summaryObjCombinBox) {
        summaryObjCombin = summaryObjCombinBox.children;
      }

      debugger;
      return summaryObjCombin;
    },
    getSummaryNeiInput: state => year => {
      let summaryInput = {};
      let oneYearSummary = state.form._summary_nei.find(item => {
        return (year === item.year);
      }).info;

      summaryInput = oneYearSummary[0].children.inputChildren.find(item => {
        return (item.prop === oneYearSummary[0].children.value);
      });

      return summaryInput;
    },
    twoLevelSummaryNeiStationCategory: (state, getters) => year => {
      let oneYearSummary = state.form._summary_nei.find(item => {
        return (year === item.year);
      }).info;

      let twoCategory = getters.stationCategory.find(item => {
        return (item.label === oneYearSummary[0].children.value)
      })

      if (twoCategory) {
        return twoCategory.children;
      } else {
        return [];
      }
    },

    getSummaryWaiObjCombin: state => year => {

      let summaryObjCombinBox = {},
        summaryObjCombin = [];
      let oneYearSummary = state.form._summary_wai.find(item => {
        return (year === item.year);
      }).info;

      summaryObjCombinBox = oneYearSummary[0].children.children.find(item => {
        return (item.prop === oneYearSummary[0].children.value);
      });

      if (summaryObjCombinBox) {
        summaryObjCombin = summaryObjCombinBox.children;
      }

      return summaryObjCombin;
    },
    getSummaryWaiInput: state => year => {
      let summaryInput = {};
      let oneYearSummary = state.form._summary_wai.find(item => {
        return (year === item.year);
      }).info;

      summaryInput = oneYearSummary[0].children.inputChildren.find(item => {
        return (item.prop === oneYearSummary[0].children.value);
      });

      return summaryInput;
    },
    twoLevelSummaryWaiStationCategory: (state, getters) => year => {
      let oneYearSummary = state.form._summary_wai.find(item => {
        return (year === item.year);
      }).info;

      debugger;

      let twoCategory = getters.stationCategory.find(item => {
        return (item.label === oneYearSummary[0].children.value)
      })

      debugger;

      if (twoCategory) {
        return twoCategory.children;
      } else {
        return [];
      }
    },

    twoLevelSumInStationCategory: (state, getters) => year => {
      let oneYearSummary = state.form._sum_in.find(item => {
        return (year === item.year);
      }).info;

      let twoCategory = getters.stationCategory.find(item => {
        return (item.label === oneYearSummary[0].children.value)
      })

      if (twoCategory) {
        return twoCategory.children;
      } else {
        return [];
      }
    },
    getSumInObjCombin: state => year => {

      let summaryObjCombinBox = {},
        summaryObjCombin = [];
      let oneYearSummary = state.form._sum_in.find(item => {
        return (year === item.year);
      }).info;

      summaryObjCombinBox = oneYearSummary[0].children.children.find(item => {
        return (item.prop === oneYearSummary[0].children.value);
      });

      if (summaryObjCombinBox) {
        summaryObjCombin = summaryObjCombinBox.children;
      }

      return summaryObjCombin;
    },
    getSumInInput: state => year => {
      let summaryInput = {};
      let oneYearSummary = state.form._sum_in.find(item => {
        return (year === item.year);
      }).info;

      summaryInput = oneYearSummary[0].children.inputChildren.find(item => {
        return (item.prop === oneYearSummary[0].children.value);
      });

      return summaryInput;
    },

    twoLevelSumInNeiStationCategory: (state, getters) => year => {
      let oneYearSummary = state.form._sum_in_nei.find(item => {
        return (year === item.year);
      }).info;

      let twoCategory = getters.stationCategory.find(item => {
        return (item.label === oneYearSummary[0].children.value)
      })

      if (twoCategory) {
        return twoCategory.children;
      } else {
        return [];
      }
    },
    getSumInNeiObjCombin: state => year => {

      let summaryObjCombinBox = {},
        summaryObjCombin = [];
      let oneYearSummary = state.form._sum_in_nei.find(item => {
        return (year === item.year);
      }).info;

      summaryObjCombinBox = oneYearSummary[0].children.children.find(item => {
        return (item.prop === oneYearSummary[0].children.value);
      });

      if (summaryObjCombinBox) {
        summaryObjCombin = summaryObjCombinBox.children;
      }

      return summaryObjCombin;
    },
    getSumInNeiInput: state => year => {
      let summaryInput = {};
      let oneYearSummary = state.form._sum_in_nei.find(item => {
        return (year === item.year);
      }).info;

      summaryInput = oneYearSummary[0].children.inputChildren.find(item => {
        return (item.prop === oneYearSummary[0].children.value);
      });

      return summaryInput;
    },

    twoLevelSumInWaiStationCategory: (state, getters) => year => {
      let oneYearSummary = state.form._sum_in_wai.find(item => {
        return (year === item.year);
      }).info;

      let twoCategory = getters.stationCategory.find(item => {
        return (item.label === oneYearSummary[0].children.value)
      })

      if (twoCategory) {
        return twoCategory.children;
      } else {
        return [];
      }
    },
    getSumInWaiObjCombin: state => year => {

      let summaryObjCombinBox = {},
        summaryObjCombin = [];
      let oneYearSummary = state.form._sum_in_wai.find(item => {
        return (year === item.year);
      }).info;

      summaryObjCombinBox = oneYearSummary[0].children.children.find(item => {
        return (item.prop === oneYearSummary[0].children.value);
      });

      if (summaryObjCombinBox) {
        summaryObjCombin = summaryObjCombinBox.children;
      }

      return summaryObjCombin;
    },
    getSumInWaiInput: state => year => {
      let summaryInput = {};
      let oneYearSummary = state.form._sum_in_wai.find(item => {
        return (year === item.year);
      }).info;

      summaryInput = oneYearSummary[0].children.inputChildren.find(item => {
        return (item.prop === oneYearSummary[0].children.value);
      });

      return summaryInput;
    },

    twoLevelSumOutStationCategory: (state, getters) => year => {
      let oneYearSummary = state.form._sum_out.find(item => {
        return (year === item.year);
      }).info;

      let twoCategory = getters.stationCategory.find(item => {
        return (item.label === oneYearSummary[0].children.value)
      })

      if (twoCategory) {
        return twoCategory.children;
      } else {
        return [];
      }
    },
    getSumOutObjCombin: state => year => {

      let summaryObjCombinBox = {},
        summaryObjCombin = [];
      let oneYearSummary = state.form._sum_out.find(item => {
        return (year === item.year);
      }).info;

      summaryObjCombinBox = oneYearSummary[0].children.children.find(item => {
        return (item.prop === oneYearSummary[0].children.value);
      });

      if (summaryObjCombinBox) {
        summaryObjCombin = summaryObjCombinBox.children;
      }

      return summaryObjCombin;
    },
    getSumOutInput: state => year => {
      let summaryInput = {};
      let oneYearSummary = state.form._sum_out.find(item => {
        return (year === item.year);
      }).info;

      summaryInput = oneYearSummary[0].children.inputChildren.find(item => {
        return (item.prop === oneYearSummary[0].children.value);
      });

      return summaryInput;
    },

    twoLevelSumOutNeiStationCategory: (state, getters) => year => {
      let oneYearSummary = state.form._sum_out_nei.find(item => {
        return (year === item.year);
      }).info;

      let twoCategory = getters.stationCategory.find(item => {
        return (item.label === oneYearSummary[0].children.value)
      })

      if (twoCategory) {
        return twoCategory.children;
      } else {
        return [];
      }
    },
    getSumOutNeiObjCombin: state => year => {

      let summaryObjCombinBox = {},
        summaryObjCombin = [];
      let oneYearSummary = state.form._sum_out_nei.find(item => {
        return (year === item.year);
      }).info;

      summaryObjCombinBox = oneYearSummary[0].children.children.find(item => {
        return (item.prop === oneYearSummary[0].children.value);
      });

      if (summaryObjCombinBox) {
        summaryObjCombin = summaryObjCombinBox.children;
      }

      return summaryObjCombin;
    },
    getSumOutNeiInput: state => year => {
      let summaryInput = {};
      let oneYearSummary = state.form._sum_out_nei.find(item => {
        return (year === item.year);
      }).info;

      summaryInput = oneYearSummary[0].children.inputChildren.find(item => {
        return (item.prop === oneYearSummary[0].children.value);
      });

      return summaryInput;
    },

    twoLevelSumOutWaiStationCategory: (state, getters) => year => {
      let oneYearSummary = state.form._sum_out_wai.find(item => {
        return (year === item.year);
      }).info;

      let twoCategory = getters.stationCategory.find(item => {
        return (item.label === oneYearSummary[0].children.value)
      })

      if (twoCategory) {
        return twoCategory.children;
      } else {
        return [];
      }
    },
    getSumOutWaiObjCombin: state => year => {

      let summaryObjCombinBox = {},
        summaryObjCombin = [];
      let oneYearSummary = state.form._sum_out_wai.find(item => {
        return (year === item.year);
      }).info;

      summaryObjCombinBox = oneYearSummary[0].children.children.find(item => {
        return (item.prop === oneYearSummary[0].children.value);
      });

      if (summaryObjCombinBox) {
        summaryObjCombin = summaryObjCombinBox.children;
      }

      return summaryObjCombin;
    },
    getSumOutWaiInput: state => year => {
      let summaryInput = {};
      let oneYearSummary = state.form._sum_out_wai.find(item => {
        return (year === item.year);
      }).info;

      summaryInput = oneYearSummary[0].children.inputChildren.find(item => {
        return (item.prop === oneYearSummary[0].children.value);
      });

      return summaryInput;
    },

    unit: state => {
      let unit = '';

      if (state.form._basic[4]) {
        unit = state.form._basic[4].value;
      }

      return unit;
    }
  },
  actions: {}
})

function initSummaryPageCate(oneYearInfo, { value, year, index, propIndex, label }) {
  // 判断赋值是否完成
  let correct = false;

  // 对象的一级结构
  if (summaryInfo[0].label === label) {
    oneYearInfo[0].value = value;
    correct = true;
  }

  if (summaryInfo[1].label === label) {
    oneYearInfo[1].value = value;
    correct = true;
  }

  // 对象的二级结构
  if (!correct) {
    if (summaryInfo[0].children.label === label) {
      oneYearInfo[0].children.value = value;
      correct = true;
    }

    if (!correct) {
      let oneInput = oneYearInfo[0].children.inputChildren.find(item => {
        return (item.prop === oneYearInfo[0].children.value);
      })
      if (oneInput.label === label) {
        oneInput.value = value;
        correct = true;
      }
    }
  }

  // 对象的三级结构
  if (!correct) {
    // 找到第三级对应的对象
    let child = oneYearInfo[0].children.children.find(subItem => {
      return (subItem.prop === oneYearInfo[0].children.value);
    });

    if ((index !== undefined) && (propIndex === undefined)) {
      child.children[index].value = value;
    } else if ((index !== undefined) && (propIndex !== undefined)) {
      child.children[propIndex].children[index].value = value;
    }
  }
}
// 流入修改页面函数
function initSumInPageCate(oneYearInfo, { value, year, index, propIndex, label }) {
  // 判断赋值是否完成
  let correct = false;

  // 对象的一级结构
  if (sumInInfo[0].label === label) {
    oneYearInfo[0].value = value;
    correct = true;
  }

  // 对象的二级结构
  if (!correct) {
    if (sumInInfo[0].children.label === label) {
      oneYearInfo[0].children.value = value;
      correct = true;
    }

    if (!correct) {
      let oneInput = oneYearInfo[0].children.inputChildren.find(item => {
        return (item.prop === oneYearInfo[0].children.value);
      })

      if (oneInput.label === label) {
        oneInput.value = value;
        correct = true;
      }
    }

  }
  // 对象的三级结构
  if (!correct) {
    // 找到第三级对应的对象
    let child = oneYearInfo[0].children.children.find(subItem => {
      return (subItem.prop === oneYearInfo[0].children.value);
    });

    if ((index !== undefined) && (propIndex === undefined)) {
      child.children[index].value = value;
    } else if ((index !== undefined) && (propIndex !== undefined)) {
      child.children[propIndex].children[index].value = value;
    }
  }
}

// 流入修改页面函数
function initSumOutPageCate(oneYearInfo, { value, year, index, propIndex, label }) {
  // 判断赋值是否完成
  let correct = false;

  // 对象的一级结构
  if (sumOutInfo[0].label === label) {
    oneYearInfo[0].value = value;
    correct = true;
  }

  // 对象的二级结构
  if (!correct) {
    if (sumOutInfo[0].children.label === label) {
      oneYearInfo[0].children.value = value;
      correct = true;
    }

    if (!correct) {
      let oneInput = oneYearInfo[0].children.inputChildren.find(item => {
        return (item.prop === oneYearInfo[0].children.value);
      })

      if (oneInput.label === label) {
        oneInput.value = value;
        correct = true;
      }
    }

  }
  // 对象的三级结构
  if (!correct) {
    // 找到第三级对应的对象
    let child = oneYearInfo[0].children.children.find(subItem => {
      return (subItem.prop === oneYearInfo[0].children.value);
    });

    if ((index !== undefined) && (propIndex === undefined)) {
      child.children[index].value = value;
    } else if ((index !== undefined) && (propIndex !== undefined)) {
      child.children[propIndex].children[index].value = value;
    }
  }
}