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
} from '../../assets/category/category';
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

export const sumInInfo = [{
  label: '流入人数',
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
}]

export const sumOutInfo = [{
  label: '流出人数',
  value: 0,
  type: 'number',
  children: {
    label: '人员类别',
    value: undefined,
    type: 'selectInput',
    list: [],
    // 存所有input框的数组
    children: [],
    inputChildren: [],
  }
}]

export const outStatusInfo = [
  {
  label: '姓名',
  value: undefined,
  type: 'input'
}, {
  label: '身份证号',
  value: undefined,
  type: 'input'
}, {
  label: "年龄",
  value: 0,
  type: 'number'
}, {
  label: '性别',
  value: undefined,
  type: 'select',
  list: xingBie
}, {
  label: '人员类别',
  value: [],
  type: 'cascaderSpecial'
}, {
  label: "离职时间",
  value: undefined,
  type: 'date'
}, {
  label: "从业年限（年）",
  value: 0,
  type: 'number'
}, {
  label: "流入地",
  value: undefined,
  type: 'input'
}, {
  label: '离职原因（多选）',
  value: [],
  type: 'checkBox',
  list: liZhiYuanYin
}];

export const personInfo = [
  { 
    label: "需求岗位",
    value: undefined,
    type: 'input' 
  },
  { 
    label: "年龄",
    value: undefined,
    type: 'select',
    list: nianLingJieGou 
  },
  {
    label: '学历',
    value: undefined,
    type: 'select',
    list: xueLiJieGou 
  },
  {
    label: '专业',
    value: undefined,
    type: 'cascader',
    data: major
  },
  {
    label: "工作经验（年）", 
    value: 0, 
    type: 'number'
  },
  {
    label: "职业资格证书",
    value: undefined,
    type: 'input'
  },
  {
    label: "人员类别",
    value: [],
    type: 'cascaderSpecial'
  },
  {
    label: '薪酬（元/月）',
    value: undefined,
    type: 'select',
    list: xinChou
  },
  { 
    label: "需求数量（人）",
    value: 0,
    type: 'number'
  },
]

export const form_inserting = {
  _id: undefined,
  _from_user: undefined,
  _confirmed: false,
  _basic: [
    {
    label: '所属地域',
    value: undefined,
    type: 'select',
    list: suoShuDiYu,
  }, {
    label: '所属行业',
    value: [],
    type: 'cascader',
    data: industryCategory
  }, {
    label: '单位名称（全称）',
    value: undefined,
    type: 'input',
    regExp: /^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$/
  }, {
    label: '统一社会信用代码/组织机构代码',
    value: undefined,
    type: 'input',
    must: true,
  }, {
    label: '单位性质',
    value: null,
    type: 'select',
    list: danWeiXingZhi,
  }, {
    label: '联系人',
    value: undefined,
    type: 'input',
    regExp: /^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$/,
    must: true,
  }, {
    label: '联系电话',
    value: undefined,
    type: 'input',
    regExp: /^[1][0-9][0-9]{9}$/,
    must: true,
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
    type: 'input',
    regExp: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  }],
  _summary: initEveryYear(2009, 2018, summaryInfo),
  _summary_nei: initEveryYear(2009, 2018, summaryInfo),
  _summary_wai: initEveryYear(2009, 2018, summaryInfo),
  _sum_in: initEveryYear(2009, 2018, sumInInfo),
  _sum_in_nei: initEveryYear(2009, 2018, sumInInfo),
  _sum_in_wai: initEveryYear(2009, 2018, sumInInfo),
  _sum_out: initEveryYear(2009, 2018, sumOutInfo),
  _sum_out_nei: initEveryYear(2009, 2018, sumOutInfo),
  _sum_out_wai: initEveryYear(2009, 2018, sumOutInfo),
  _out_status: [{
    "id": 0,
    "info": objectHelper.deepCopy(outStatusInfo)
  }],
  _out_status_nei: [{
    "id": 0,
    "info": objectHelper.deepCopy(outStatusInfo)
  }],
  _out_status_wai: [{
    "id": 0,
    "info": objectHelper.deepCopy(outStatusInfo)
  }],
  _need: [{
    "id": 0,
    "info": objectHelper.deepCopy(personInfo)
  }],
  _need_nei: [{
    "id": 0,
    "info": objectHelper.deepCopy(personInfo)
  }],
  _need_wai: [{
    "id": 0,
    "info": objectHelper.deepCopy(personInfo)
  }]
}