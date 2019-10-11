import { major, nianLingJieGou, xueLiJieGou, xinChou } from '../assets/category/category';
// 人才需求调查注入
const needInject = needArr => {
  for (let i = 0; i < needArr.length; i++) {
    let needItem = needArr[i].info;
    // 年龄
    needItem[1].list = nianLingJieGou;
    // 性别
    needItem[2].list = xueLiJieGou;
    // 专业信息
    needItem[3].data = major;
    // 薪酬
    needItem[7].list = xinChou;
  }
};

// 将data元数据进行注入
export default form => {
  // 对form各个部分进行处理

  // 人才需求调查的注入
  needInject(form._need);
  needInject(form._need_nei);
  needInject(form._need_wai);

  return form;
};
