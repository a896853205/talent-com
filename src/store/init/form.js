import { objectHelper } from '../../util/object-helper';
import {
  suoShuDiYu,
  industryCategory,
  danWeiXingZhi,
  xingBie,
  nianLingJieGou,
  xueLiJieGou,
  xinChou,
  major,
  liZhiYuanYin
} from '../../assets/category';
function initEveryYear(begin, end, data) {
  let dataArr = [];
  for (let i = begin; i <= end; i++) {
    dataArr.push({
      "year": i,
      "info": objectHelper.deepCopy(data)
    });
  }
  return dataArr;
}

const info_gender = {
  "男": { value: undefined, type: 'number' },
  "女": { value: undefined, type: 'number' }
}

const info_age = {
  "25岁以下": { value: undefined, type: 'number' },
  "26-35岁": { value: undefined, type: 'number' },
  "36-45岁": { value: undefined, type: 'number' },
  "46-55岁": { value: undefined, type: 'number' },
  "56岁以上": { value: undefined, type: 'number' }
}

const info_degree = {
  "博士研究生": { value: undefined, type: 'number' },
  "硕士研究生": { value: undefined, type: 'number' },
  "本科": { value: undefined, type: 'number' },
  "大专": { value: undefined, type: 'number' },
  "大专以下": { value: undefined, type: 'number' }
}

const info_salary = {
  "3000以下": { value: undefined, type: 'number' },
  "3000-4000": { value: undefined, type: 'number' },
  "4000-5000": { value: undefined, type: 'number' },
  "5000-6000": { value: undefined, type: 'number' },
  "6000-8000": { value: undefined, type: 'number' },
  "8000-10000": { value: undefined, type: 'number' },
  "10000-12000": { value: undefined, type: 'number' },
  "12000-15000": { value: undefined, type: 'number' },
  "15000-20000": { value: undefined, type: 'number' },
  "20000以上": { value: undefined, type: 'number' }
}

const info_people = [{
  "cas": [],
  "num": undefined
}]

const summary_info = {
  "职工人数": { value: undefined, type: 'number' },
  "性别结构": info_gender,
  "年龄结构": info_age,
  "学历结构": info_degree,
  "薪酬（元/月）": info_salary,
  "人员类别": { value: info_people, special: true },
  "当年年度产值（万元）": { value: undefined, type: 'number', special: true }
}

const sum_in_info = {
  "流入人数": { value: undefined, type: 'number' },
  "性别结构": info_gender,
  "年龄结构": info_age,
  "学历结构": info_degree,
  "薪酬（元/月）": info_salary,
  "人员类别": { value: info_people, special: true },
}

const sum_out_info = {
  "流出人数": { value: undefined, type: 'number' },
  "性别结构": info_gender,
  "年龄结构": info_age,
  "学历结构": info_degree,
  "薪酬（元/月）": info_salary,
  "人员类别": { value: info_people, special: true },
  "离职原因（多选）": { value: [], type: 'checkBox', list: liZhiYuanYin }
}

export const outStatusInfo = {
  "姓名": { value: undefined, type: 'input' },
  "身份证号": { value: undefined, type: 'input' },
  "年龄": { value: undefined, type: 'number' },
  '性别': { value: undefined, type: 'select', list: xingBie },
  "人员类别": { value: [], type: 'cascaderSpecial' },
  "离职时间": { value: undefined, type: 'date' },
  "从业年限（年）": { value: undefined, type: 'number' },
  "流入地": { value: undefined, type: 'input' },
  '离职原因（多选）': { value: [], type: 'checkBox', list: liZhiYuanYin }
}

export const personInfo = {
  "需求岗位": { value: undefined, type: 'input' },
  "年龄结构": { value: undefined, type: 'select', list: nianLingJieGou },
  '学历结构': { value: undefined, type: 'select', list: xueLiJieGou },
  '专业': { value: undefined, type: 'cascader', data: major},
  "工作经验（年）": { value: undefined, type: 'number' },
  "职业资格证书": { value: undefined, type: 'input' },
  "人员类别": { value: [], type: 'cascaderSpecial' },
  '薪酬（元/月）': { value: undefined, type: 'select', list: xinChou },
  "需求数量（人）": { value: undefined, type: 'number' },
}

export const form_inserting = {
  _id: undefined,
  _from_user: null,
  _confirmed: false,
  _basic: {
    '所属地域': { value: null, type: 'select', list: suoShuDiYu },
    '所属行业': { value: null, type: 'cascader', data: industryCategory },
    '单位名称（全称）': { value: null, type: 'input' },
    '统一社会信用代码/组织机构代码': { value: null, type: 'input' },
    '单位性质': { value: null, type: 'select', list: danWeiXingZhi },
    '联系人': { value: null, type: 'input' },
    '联系电话': { value: null, type: 'input' },
    'QQ号': { value: null, type: 'input' },
    '微信号': { value: null, type: 'input' },
    '电子邮箱': { value: null, type: 'input' }
  },
  _summary: initEveryYear(2009, 2018, summary_info),
  _summary_nei: initEveryYear(2009, 2018, summary_info),
  _summary_wai: initEveryYear(2009, 2018, summary_info),
  _sum_in: initEveryYear(2009, 2018, sum_in_info),
  _sum_in_nei: initEveryYear(2009, 2018, sum_in_info),
  _sum_in_wai: initEveryYear(2009, 2018, sum_in_info),
  _sum_out: initEveryYear(2009, 2018, sum_out_info),
  _sum_out_nei: initEveryYear(2009, 2018, sum_out_info),
  _sum_out_wai: initEveryYear(2009, 2018, sum_out_info),
  _out_status: [{
    "id": 0,
    "info": outStatusInfo
  }],
  _out_status_nei: [{
    "id": 0,
    "info": outStatusInfo
  }],
  _out_status_wai: [{
    "id": 0,
    "info": outStatusInfo
  }],
  _need: [{
    "id": 0,
    "info": personInfo
  }],
  _need_nei: [{
    "id": 0,
    "info": personInfo
  }],
  _need_wai: [{
    "id": 0,
    "info": personInfo
  }]
}