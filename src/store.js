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
  SUMMARY_ITEM,
  SUMMARY_PERSON_CATEGORY
} from './assets/category/summary';

function getStationCategory (state) {

  if(state.form._basic) {
    state.form._basic.forEach(item => {

      if(item.label === '单位性质') {
        switch (item.value) {
          case '机关':
            debugger;
            return jobCategoryJiGuan;
          case '社会团体':
  
            return jobCategorySocial;
          case '事业单位':
  
            return jobCategoryCareer;
          default:
  
            return jobCategoryQiYe;
        }
      }
    })
  } else {
    return [];
  }
}

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
              state.form._summary[i].info[0].children.list = OFFICE_ONE_LEVEL;

              // 清除数据
              state.form._summary[i].info[0].children.children = [];
              state.form._summary[i].info[0].children.value = undefined;
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
            
            break;
          case '社会团体':
            // 一级菜单进行赋值
            state.form._summary.forEach((item, i) => {
              // 输入select框
              state.form._summary[i].info[0].children.list = SOCIETY_ONE_LEVEL;

              // 清除数据
              state.form._summary[i].info[0].children.children = [];
              state.form._summary[i].info[0].children.value = undefined;
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

            break;
          case '事业单位':
            // 一级菜单进行赋值 编制内
            state.form._summary_nei.forEach((item, i) => {
              // 输入select框
              state.form._summary_nei[i].info[0].children.list = JOB_ONE_LEVEL;
              
              // 清除数据
              state.form._summary_nei[i].info[0].children.children = [];
              state.form._summary_nei[i].info[0].children.value = undefined;
              // 输入数据
              JOB_ONE_LEVEL.forEach(oneLevelItem => {
                let summaryItem = objectHelper.deepCopy(SUMMARY_ITEM);
                let summaryPersonCategory = objectHelper.deepCopy(SUMMARY_PERSON_CATEGORY);
                summaryItem.prop = oneLevelItem.label;
                summaryPersonCategory.prop = oneLevelItem.label;
                state.form._summary_nei[i].info[0].children.children.push(summaryItem);
                state.form._summary_nei[i].info[0].children.inputChildren.push(summaryPersonCategory);
              })
            });

            // 一级菜单进行赋值 编制外
            state.form._summary_wai.forEach((item, i) => {
              // 输入select框
              state.form._summary_wai[i].info[0].children.list = JOB_ONE_LEVEL;
              
              // 清除数据
              state.form._summary_wai[i].info[0].children.children = [];
              state.form._summary_wai[i].info[0].children.value = undefined;
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
            break;
          default:

            // 一级菜单进行赋值
            state.form._summary.forEach((item, i) => {
              // 输入select框
              state.form._summary[i].info[0].children.list = ENTERPRISE_ONE_LEVEL;

              // 清除数据
              state.form._summary[i].info[0].children.children = [];
              state.form._summary[i].info[0].children.value = undefined;
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
        }
      }
    },

    setSummery(state, { value, year, index, propIndex, label }) {
      // 判断赋值是否完成
      let correct = false;

      if (year) {
        let oneYearInfo = state.form._summary.find(value => (value.year === year)).info

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
        if (summaryInfo[0].children.label === label) {
          oneYearInfo[0].children.value = value;

          // 设置下面的人员类别二级菜单
          let cate = [];
          state.form._basic.forEach(item => {

            if(item.label === '单位性质') {
              switch (item.value) {
                case '机关':
                  
                  cate = jobCategoryJiGuan;
                  break;
                case '社会团体':
        
                  cate = jobCategorySocial;
                  break;
                case '事业单位':
        
                  cate = jobCategoryCareer;
                  break;
                default:
        
                  cate =  jobCategoryQiYe;
                  break;
              }
            }
          })

          cate.forEach(eachCategory => {
            if (eachCategory.value === oneYearInfo[0].children.value) {
              // 这里把人员类别的位置写死了
              // 如果调整了单位人才情况汇总需要调整这里
              oneYearInfo[0].children.children.forEach((everyCategoryObj, everyCategoryIndex) => {
                if( everyCategoryObj.prop === eachCategory.value) {
                  oneYearInfo[0].children.children[everyCategoryIndex];

                  oneYearInfo[0].children.children[everyCategoryIndex].children[4].data = eachCategory.children;
                }
              });
            }
          });

          correct = true;
        }

        // 对象的三级结构
        if (!correct) {
          // 找到第三级对应的对象
          oneYearInfo[0].children.children.forEach((subItem, _index) => {
            if (subItem.prop === oneYearInfo[0].children.value) {
              if (index && !propIndex) {
                oneYearInfo[0].children.children[_index].children[index].value = value;
                debugger;
              } else if (index && propIndex) {
                oneYearInfo[0].children.children[_index].children[index].children[propIndex].value = value;
              }
            }
          });
        }
      }
    },
    setSummeryIn(state, { value, year, index, propIndex, label }) {
      // 判断赋值是否完成
      let correct = false;

      if (year) {
        let oneYearInfo = state.form._summary_nei.find(value => (value.year === year)).info

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
        if (summaryInfo[0].children.label === label) {
          oneYearInfo[0].children.value = value;

          // 设置下面的人员类别二级菜单
          let cate = [];
          state.form._basic.forEach(item => {

            if(item.label === '单位性质') {
              switch (item.value) {
                case '机关':
                  
                  cate = jobCategoryJiGuan;
                  break;
                case '社会团体':
        
                  cate = jobCategorySocial;
                  break;
                case '事业单位':
        
                  cate = jobCategoryCareer;
                  break;
                default:
        
                  cate =  jobCategoryQiYe;
                  break;
              }
            }
          })

          cate.forEach(eachCategory => {
            if (eachCategory.value === oneYearInfo[0].children.value) {
              // 这里把人员类别的位置写死了
              // 如果调整了单位人才情况汇总需要调整这里
              oneYearInfo[0].children.children.forEach((everyCategoryObj, everyCategoryIndex) => {
                if( everyCategoryObj.prop === eachCategory.value) {
                  oneYearInfo[0].children.children[everyCategoryIndex];
                  debugger;
                  oneYearInfo[0].children.children[everyCategoryIndex].children[4].data = eachCategory.children;
                }
              });
            }
          });

          correct = true;
        }

        // 对象的三级结构
        if (!correct) {
          // 找到第三级对应的对象
          oneYearInfo[0].children.children.forEach((subItem, _index) => {
            if (subItem.prop === oneYearInfo[0].children.value) {
              if (index && !propIndex) {
                oneYearInfo[0].children.children[_index].children[index].value = value;
                debugger;
              } else if (index && propIndex) {
                oneYearInfo[0].children.children[_index].children[index].children[propIndex].value = value;
              }
            }
          });
        }
      }
    },
    setSummeryOut(state, { value, year, index, propIndex, label }) {
      // 判断赋值是否完成
      let correct = false;

      if (year) {
        let oneYearInfo = state.form._summary_wai.find(value => (value.year === year)).info

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
        if (summaryInfo[0].children.label === label) {
          oneYearInfo[0].children.value = value;

          // 设置下面的人员类别二级菜单
          let cate = [];
          state.form._basic.forEach(item => {

            if(item.label === '单位性质') {
              switch (item.value) {
                case '机关':
                  
                  cate = jobCategoryJiGuan;
                  break;
                case '社会团体':
        
                  cate = jobCategorySocial;
                  break;
                case '事业单位':
        
                  cate = jobCategoryCareer;
                  break;
                default:
        
                  cate =  jobCategoryQiYe;
                  break;
              }
            }
          })

          cate.forEach(eachCategory => {
            if (eachCategory.value === oneYearInfo[0].children.value) {
              // 这里把人员类别的位置写死了
              // 如果调整了单位人才情况汇总需要调整这里
              oneYearInfo[0].children.children.forEach((everyCategoryObj, everyCategoryIndex) => {
                if( everyCategoryObj.prop === eachCategory.value) {
                  oneYearInfo[0].children.children[everyCategoryIndex];
                  debugger;
                  oneYearInfo[0].children.children[everyCategoryIndex].children[4].data = eachCategory.children;
                }
              });
            }
          });

          correct = true;
        }

        // 对象的三级结构
        if (!correct) {
          // 找到第三级对应的对象
          oneYearInfo[0].children.children.forEach((subItem, _index) => {
            if (subItem.prop === oneYearInfo[0].children.value) {
              if (index && !propIndex) {
                oneYearInfo[0].children.children[_index].children[index].value = value;
                debugger;
              } else if (index && propIndex) {
                oneYearInfo[0].children.children[_index].children[index].children[propIndex].value = value;
              }
            }
          });
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
      return getStationCategory(state);
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
