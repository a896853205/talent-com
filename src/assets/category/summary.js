import {
  info_gender,
  info_age,
  info_degree,
  info_salary,
  info_people,
} from './summary-info'
// 机关处理一级菜单
export const OFFICE_ONE_LEVEL = [
  {
    "label": "管理人员",
    "value": "管理人员"
  },
  {
    "label": "专业技术人员",
    "value": "专业技术人员"
  },
  {
    "label": "技能人员",
    "value": "技能人员"
  },
  {
    "label": "农村实用人员",
    "value": "农村实用人员"
  },
  {
    "label": "其他",
    "value": "其他"
  }
];

// 企业一级菜单
export const ENTERPRISE_ONE_LEVEL = [
  {
    "label": "企业经营管理人员",
    "value": "企业经营管理人员"
  },
  {
    "label": "专业技术人员",
    "value": "专业技术人员"
  },
  {
    "label": "技能人员",
    "value": "技能人员"
  },
  {
    "label": "农村实用人员",
    "value": "农村实用人员"
  },
  {
    "label": "其他",
    "value": "其他"
  }
];

// 社会团体一级菜单
export const SOCIETY_ONE_LEVEL = [
  {
    "label": "管理人员",
    "value": "管理人员"
  },
  {
    "label": "专业技术人员",
    "value": "专业技术人员"
  },
  {
    "label": "技能人员",
    "value": "技能人员"
  },
  {
    "label": "农村实用人员",
    "value": "农村实用人员"
  },
  {
    "label": "其他",
    "value": "其他"
  }
];

// 事业单位
export const JOB_ONE_LEVEL = [
  {
    "label": "管理人员",
    "value": "管理人员"
  },
  {
    "label": "专业技术人员",
    "value": "专业技术人员"
  },
  {
    "label": "技能人员",
    "value": "技能人员"
  },
  {
    "label": "农村实用人员",
    "value": "农村实用人员"
  },
  {
    "label": "其他",
    "value": "其他"
  }
]

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