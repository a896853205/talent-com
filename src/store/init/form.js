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
  "男": { value: 0, type: 'number' },
  "女": { value: 0, type: 'number' }
}

const info_age = {
  "25岁以下": { value: 0, type: 'number' },
  "26-35岁": { value: 0, type: 'number' },
  "36-45岁": { value: 0, type: 'number' },
  "46-55岁": { value: 0, type: 'number' },
  "56岁以上": { value: 0, type: 'number' }
}

const info_degree = {
  "博士研究生": { value: 0, type: 'number' },
  "硕士研究生": { value: 0, type: 'number' },
  "本科": { value: 0, type: 'number' },
  "大专": { value: 0, type: 'number' },
  "大专以下": { value: 0, type: 'number' }
}

const info_salary = {
  "3000以下": { value: 0, type: 'number' },
  "3000-4000": { value: 0, type: 'number' },
  "4000-5000": { value: 0, type: 'number' },
  "5000-6000": { value: 0, type: 'number' },
  "6000-8000": { value: 0, type: 'number' },
  "8000-10000": { value: 0, type: 'number' },
  "10000-12000": { value: 0, type: 'number' },
  "12000-15000": { value: 0, type: 'number' },
  "15000-20000": { value: 0, type: 'number' },
  "20000以上": { value: 0, type: 'number' }
}

const info_people = [{
  "cas": [],
  "num": 0
}]

const summary_info = {
  "职工人数": { value: 0, type: 'number' },
  "性别结构": info_gender,
  "年龄结构": info_age,
  "学历结构": info_degree,
  "薪酬（元/月）": info_salary,
  "人员类别": { value: info_people, special: true },
  "当年年度产值（万元）": { value: 0, type: 'number', special: true }
}

export const summaryInfo = [{
  label: '职工人数',
  value: 0,
  type: 'number',
  children: {
    label: '人员类别',
    value: undefined,
    type: 'selectInput',
    list: [],
    // 存所有下面的input框的数组
    children: [],
    inputChildren: [],
  }
}, {
  label: '当年年度产值（万元）',
  value: 0,
  type: 'number',
}]


const sum_in_info = {
  "流入人数": { value: 0, type: 'number' },
  "性别结构": info_gender,
  "年龄结构": info_age,
  "学历结构": info_degree,
  "薪酬（元/月）": info_salary,
  "人员类别": { value: info_people, special: true },
}

const sum_out_info = {
  "流出人数": { value: 0, type: 'number' },
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
  "年龄": { value: 0, type: 'number' },
  '性别': { value: undefined, type: 'select', list: xingBie },
  "人员类别": { value: [], type: 'cascaderSpecial' },
  "离职时间": { value: undefined, type: 'date' },
  "从业年限（年）": { value: 0, type: 'number' },
  "流入地": { value: undefined, type: 'input' },
  '离职原因（多选）': { value: [], type: 'checkBox', list: liZhiYuanYin }
}

export const personInfo = {
  "需求岗位": { value: undefined, type: 'input' },
  "年龄结构": { value: undefined, type: 'select', list: nianLingJieGou },
  '学历结构': { value: undefined, type: 'select', list: xueLiJieGou },
  '专业': { value: undefined, type: 'cascader', data: major},
  "工作经验（年）": { value: 0, type: 'number' },
  "职业资格证书": { value: undefined, type: 'input' },
  "人员类别": { value: [], type: 'cascaderSpecial' },
  '薪酬（元/月）': { value: undefined, type: 'select', list: xinChou },
  "需求数量（人）": { value: 0, type: 'number' },
}

export const form_inserting = {
  _id: undefined,
  _from_user: null,
  _confirmed: false,
  _basic: [{
    label: '所属地域',
    value: null,
    type: 'select',
    list: suoShuDiYu
  }, {
    label: '所属行业',
    value: null,
    type: 'cascader',
    data: industryCategory
  }, {
    label: '单位名称（全称）',
    value: undefined,
    type: 'input'
  }, {
    label: '统一社会信用代码/组织机构代码',
    value: undefined,
    type: 'input'
  }, {
    label: '单位性质',
    value: null,
    type: 'select',
    list: danWeiXingZhi
  }, {
    label: '联系人',
    value: undefined,
    type: 'input'
  }, {
    label: '联系电话',
    value: undefined,
    type: 'input'
  }, {
    label: 'QQ号',
    value: undefined,
    type: 'input'
  }, {
    label: '微信号',
    value: undefined,
    type: 'input'
  }, {
    label: '电子邮箱',
    value: undefined,
    type: 'input'
  }],
  _summary: initEveryYear(2009, 2018, summaryInfo),
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