import {
  info_gender,
  info_age,
  info_degree,
  info_salary,
  info_people,
} from './basic-info';
import {
  liZhiYuanYin
} from '../../assets/category/category';

export const SUM_OUT_ITEM = {
  prop: '',
  children: [{
    label: '性别结构',
    children: info_gender,
  }, {
    label: '年龄结构',
    children: info_age
  }, {
    label: '学历结构',
    children: info_degree
  }, {
    label: '薪酬（元/月）',
    children: info_salary,
  }, {
    label: '岗位级别',
    value: info_people,
    special: true,
    type: 'cate'
  }, { 
    label: '离职原因（多选）',
    value: [],
    type: 'checkBox',
    list: liZhiYuanYin
  }]
}

export const SUM_OUT_ITEM_PERSON_CATEGORY = {
  label: '当前类别人数',
  value: 0,
  type: 'number',
}