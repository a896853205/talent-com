// 人才需求调查清除
const needClear = needArr => {
  for (let i = 0; i < needArr.length; i++) {
    let needItem = needArr[i].info;
    // 年龄
    delete needItem[1].list;
    // 性别
    delete needItem[2].list;
    // 专业信息
    delete needItem[3].data;
    // 薪酬
    delete needItem[7].list;
  }
};

// 将data元数据进行注入
export default form => {
  // 对form各个部分进行处理

  // 人才需求调查的注入
  needClear(form._need);
  needClear(form._need_nei);
  needClear(form._need_wai);

  return form;
};
