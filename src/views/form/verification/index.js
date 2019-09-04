import { basicVerify } from './basic';

export const verify = form => {
  // 返回的结构
  let verifyMsg = {
    verify: true,
    msg: ''
  },
  basicResult = null;

  // 判断基本信息
  basicResult = basicVerify(form._basic);
  if (!basicResult.verify) {
    verifyMsg.msg = `单位基本信息中的 ${basicResult.label} ${basicResult.msg}`;
    verifyMsg.verify = false;
    return verifyMsg;
  }

  // 判断单位性质的分类来进行相应判断
  switch (form._basic[4].value) {
    case '机关':
      // 判断单位人才情况汇总
      break;
    case '社会团体':
      // 判断单位人才情况汇总
      break;
    case '事业单位':
      // 判断单位人才情况汇总编制内
      // 判断单位人才情况汇总编制外
      break;
    default:
      // 判断单位人才情况汇总
  }



  // 最后成功
  return verifyMsg;
}