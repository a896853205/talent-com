import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
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
        form: {
            _from_user: null,
            _confirmed: false,
            _basic: {
                '单位名称': null,
                '统一社会信用代码': null,
                '所属地域': null,
                '所属行业': null,
                '行业分类': null,
                '单位性质': null,
                '填报人': null,
                '联系电话': null,
                'QQ': null,
                '微信': null,
                '电子邮箱': null
            },
            _summary: [{
                "year": "2009",
                "info": {
                    "职工人数": null,
                    "上一年度产值（万元）": null,
                    "研发经费投入（万元）": null,
                    "新产品销售收入（万元）": null,
                    "专利申请授权数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "薪酬（月）": {
                        "3000元以下": null,
                        "3000-4000": null,
                        "4000-5000": null,
                        "5000-6000": null,
                        "6000-8000": null,
                        "8000-10000": null,
                        "10000-12000": null,
                        "12000-15000": null,
                        "15000-20000": null,
                        "20000元以上": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": null,
                        "num": null
                    }]
                }
            }, {
                "year": "2010",
                "info": {
                    "职工人数": null,
                    "上一年度产值（万元）": null,
                    "研发经费投入（万元）": null,
                    "新产品销售收入（万元）": null,
                    "专利申请授权数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "薪酬（月）": {
                        "3000元以下": null,
                        "3000-4000": null,
                        "4000-5000": null,
                        "5000-6000": null,
                        "6000-8000": null,
                        "8000-10000": null,
                        "10000-12000": null,
                        "12000-15000": null,
                        "15000-20000": null,
                        "20000元以上": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": null,
                        "num": null
                    }]
                }
            }, {
                "year": "2011",
                "info": {
                    "职工人数": null,
                    "上一年度产值（万元）": null,
                    "研发经费投入（万元）": null,
                    "新产品销售收入（万元）": null,
                    "专利申请授权数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "薪酬（月）": {
                        "3000元以下": null,
                        "3000-4000": null,
                        "4000-5000": null,
                        "5000-6000": null,
                        "6000-8000": null,
                        "8000-10000": null,
                        "10000-12000": null,
                        "12000-15000": null,
                        "15000-20000": null,
                        "20000元以上": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": null,
                        "num": null
                    }]
                }
            }, {
                "year": "2012",
                "info": {
                    "职工人数": null,
                    "上一年度产值（万元）": null,
                    "研发经费投入（万元）": null,
                    "新产品销售收入（万元）": null,
                    "专利申请授权数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "薪酬（月）": {
                        "3000元以下": null,
                        "3000-4000": null,
                        "4000-5000": null,
                        "5000-6000": null,
                        "6000-8000": null,
                        "8000-10000": null,
                        "10000-12000": null,
                        "12000-15000": null,
                        "15000-20000": null,
                        "20000元以上": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": null,
                        "num": null
                    }]
                }
            }, {
                "year": "2013",
                "info": {
                    "职工人数": null,
                    "上一年度产值（万元）": null,
                    "研发经费投入（万元）": null,
                    "新产品销售收入（万元）": null,
                    "专利申请授权数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "薪酬（月）": {
                        "3000元以下": null,
                        "3000-4000": null,
                        "4000-5000": null,
                        "5000-6000": null,
                        "6000-8000": null,
                        "8000-10000": null,
                        "10000-12000": null,
                        "12000-15000": null,
                        "15000-20000": null,
                        "20000元以上": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": null,
                        "num": null
                    }]
                }
            }, {
                "year": "2014",
                "info": {
                    "职工人数": null,
                    "上一年度产值（万元）": null,
                    "研发经费投入（万元）": null,
                    "新产品销售收入（万元）": null,
                    "专利申请授权数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "薪酬（月）": {
                        "3000元以下": null,
                        "3000-4000": null,
                        "4000-5000": null,
                        "5000-6000": null,
                        "6000-8000": null,
                        "8000-10000": null,
                        "10000-12000": null,
                        "12000-15000": null,
                        "15000-20000": null,
                        "20000元以上": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": null,
                        "num": null
                    }]
                }
            }, {
                "year": "2015",
                "info": {
                    "职工人数": null,
                    "上一年度产值（万元）": null,
                    "研发经费投入（万元）": null,
                    "新产品销售收入（万元）": null,
                    "专利申请授权数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "薪酬（月）": {
                        "3000元以下": null,
                        "3000-4000": null,
                        "4000-5000": null,
                        "5000-6000": null,
                        "6000-8000": null,
                        "8000-10000": null,
                        "10000-12000": null,
                        "12000-15000": null,
                        "15000-20000": null,
                        "20000元以上": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": null,
                        "num": null
                    }]
                }
            }, {
                "year": "2016",
                "info": {
                    "职工人数": null,
                    "上一年度产值（万元）": null,
                    "研发经费投入（万元）": null,
                    "新产品销售收入（万元）": null,
                    "专利申请授权数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "薪酬（月）": {
                        "3000元以下": null,
                        "3000-4000": null,
                        "4000-5000": null,
                        "5000-6000": null,
                        "6000-8000": null,
                        "8000-10000": null,
                        "10000-12000": null,
                        "12000-15000": null,
                        "15000-20000": null,
                        "20000元以上": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": null,
                        "num": null
                    }]
                }
            }, {
                "year": "2017",
                "info": {
                    "职工人数": null,
                    "上一年度产值（万元）": null,
                    "研发经费投入（万元）": null,
                    "新产品销售收入（万元）": null,
                    "专利申请授权数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "薪酬（月）": {
                        "3000元以下": null,
                        "3000-4000": null,
                        "4000-5000": null,
                        "5000-6000": null,
                        "6000-8000": null,
                        "8000-10000": null,
                        "10000-12000": null,
                        "12000-15000": null,
                        "15000-20000": null,
                        "20000元以上": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": null,
                        "num": null
                    }]
                }
            }, {
                "year": "2018",
                "info": {
                    "职工人数": null,
                    "上一年度产值（万元）": null,
                    "研发经费投入（万元）": null,
                    "新产品销售收入（万元）": null,
                    "专利申请授权数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "薪酬（月）": {
                        "3000元以下": null,
                        "3000-4000": null,
                        "4000-5000": null,
                        "5000-6000": null,
                        "6000-8000": null,
                        "8000-10000": null,
                        "10000-12000": null,
                        "12000-15000": null,
                        "15000-20000": null,
                        "20000元以上": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": null,
                        "num": null
                    }]
                }
            }],
            _sum_in: [{
                "year": "2009",
                "info": {
                    "流入人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }, {
                "year": "2010",
                "info": {
                    "流入人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }, {
                "year": "2011",
                "info": {
                    "流入人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }, {
                "year": "2012",
                "info": {
                    "流入人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }, {
                "year": "2013",
                "info": {
                    "流入人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }, {
                "year": "2014",
                "info": {
                    "流入人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }, {
                "year": "2015",
                "info": {
                    "流入人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }, {
                "year": "2016",
                "info": {
                    "流入人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }, {
                "year": "2017",
                "info": {
                    "流入人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }, {
                "year": "2018",
                "info": {
                    "流入人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }],
            _sum_out: [{
                "year": "2009",
                "info": {
                    "流出人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }, {
                "year": "2010",
                "info": {
                    "流出人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }, {
                "year": "2011",
                "info": {
                    "流出人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }, {
                "year": "2012",
                "info": {
                    "流出人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }, {
                "year": "2013",
                "info": {
                    "流出人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }, {
                "year": "2014",
                "info": {
                    "流出人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }, {
                "year": "2015",
                "info": {
                    "流出人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }, {
                "year": "2016",
                "info": {
                    "流出人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }, {
                "year": "2017",
                "info": {
                    "流出人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }, {
                "year": "2018",
                "info": {
                    "流出人数": null,
                    "性别结构": {
                        "男": null,
                        "女": null
                    },
                    "年龄结构": {
                        "30岁以下": null,
                        "31-41": null,
                        "41-50": null,
                        "51-60": null,
                        "61岁以上": null
                    },
                    "学历结构": {
                        "博士研究生": null,
                        "硕士研究生": null,
                        "本科": null,
                        "大专": null,
                        "大专以下": null
                    },
                    "获得荣誉": {
                        "国家级": null,
                        "省部级": null,
                        "厅局级": null,
                        "其它": null,
                        "无": null
                    },
                    "岗位类别": [{
                        "cas": [],
                        "num": null
                    }]
                }
            }],
            _out_status: [],
            _need: []
        },
        vueElementLoading: false,
    },
    mutations: {},
    actions: {}
})
