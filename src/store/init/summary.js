import {
  info_gender,
  info_age,
  info_degree,
  info_salary,
  info_people,
} from './basic-info'

export const SUMMARY_ITEM = {
  prop: '',
  children: [{
    label: '性别结构',
    children: info_gender,
  }, {
    label: '年龄结构',
    children: info_age,
  }, {
    label: '学历结构',
    children: info_degree
  }, {
    label: '薪酬（元/月）',
    children: info_salary,
  }, {
    label: '子人员类别',
    value: info_people,
    special: true
  }]
}

export const SUMMARY_PERSON_CATEGORY = {
  label: '当前类别人数',
  value: 0,
  type: 'number',
}