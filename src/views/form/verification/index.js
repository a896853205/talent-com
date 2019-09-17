import { basicVerify } from './basic';
import { summaryVerify } from './summary';
import { flowInVerify } from './flow-in';
import { flowOutVerify } from './flow-out';
export const verify = form => {
  // 返回的结构
  let verifyMsg = {
    verify: true,
    msg: ''
  },
    basicResult = null,
    summaryResult = null,
    flowInResult = null,
    flowOutResult = null;
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
      summaryResult = summaryVerify(form._summary);

      if (!summaryResult.verify) {
        verifyMsg.msg = `单位人才情况汇总中${summaryResult.msg}`;
        verifyMsg.verify = false;
        return verifyMsg;
      }
      // 判断流入情况统计
      flowInResult = flowInVerify(form._sum_in);

      if (!flowInResult.verify) {
        verifyMsg.msg = `流入情况统计中${flowInResult.msg}`;
        verifyMsg.verify = false;
        return verifyMsg;
      }
      // 判断流出情况统计
      flowOutResult = flowOutVerify(form._sum_out);

      if (!flowOutResult.verify) {
        verifyMsg.msg = `流出情况统计中${flowOutResult.msg}`;
        verifyMsg.verify = false;
        return verifyMsg;
      }

      break;
    case '社会团体及民办非企业单位':
      // 判断单位人才情况汇总
      summaryResult = summaryVerify(form._summary);

      if (!summaryResult.verify) {
        verifyMsg.msg = `单位人才情况汇总中${summaryResult.msg}`;
        verifyMsg.verify = false;
        return verifyMsg;
      }
      // 判断流入情况统计
      flowInResult = flowInVerify(form._sum_in);

      if (!flowInResult.verify) {
        verifyMsg.msg = `流入情况统计中${flowInResult.msg}`;
        verifyMsg.verify = false;
        return verifyMsg;
      }

      // 判断流出情况统计
      flowOutResult = flowOutVerify(form._sum_out);

      if (!flowOutResult.verify) {
        verifyMsg.msg = `流出情况统计中${flowOutResult.msg}`;
        verifyMsg.verify = false;
        return verifyMsg;
      }
      break;
    case '事业单位':
      // 判断单位人才情况汇总编制内
      summaryResult = summaryVerify(form._summary_nei);

      if (!summaryResult.verify) {
        verifyMsg.msg = `单位人才情况汇总-编制内中${summaryResult.msg}`;
        verifyMsg.verify = false;
        return verifyMsg;
      }
      // 判断单位人才情况汇总编制外
      summaryResult = summaryVerify(form._summary_wai, false);

      if (!summaryResult.verify) {
        verifyMsg.msg = `单位人才情况汇总-编制外中${summaryResult.msg}`;
        verifyMsg.verify = false;
        return verifyMsg;
      }
      // 判断流入情况统计编制内
      flowInResult = flowInVerify(form._sum_in_nei);

      if (!flowInResult.verify) {
        verifyMsg.msg = `流入情况统计中-编制内${flowInResult.msg}`;
        verifyMsg.verify = false;
        return verifyMsg;
      }
      // 判断流入情况统计编制内
      flowInResult = flowInVerify(form._sum_in_wai);

      if (!flowInResult.verify) {
        verifyMsg.msg = `流入情况统计中-编制外${flowInResult.msg}`;
        verifyMsg.verify = false;
        return verifyMsg;
      }

      // 判断流出情况统计
      flowOutResult = flowOutVerify(form._sum_out_nei);

      if (!flowOutResult.verify) {
        verifyMsg.msg = `流出情况统计中-编制内${flowOutResult.msg}`;
        verifyMsg.verify = false;
        return verifyMsg;
      }

      // 判断流出情况统计
      flowOutResult = flowOutVerify(form._sum_out_wai);

      if (!flowOutResult.verify) {
        verifyMsg.msg = `流出情况统计中-编制外${flowOutResult.msg}`;
        verifyMsg.verify = false;
        return verifyMsg;
      }
      break;
    default:
      // 判断单位人才情况汇总
      summaryResult = summaryVerify(form._summary);

      if (!summaryResult.verify) {
        verifyMsg.msg = `单位人才情况汇总中${summaryResult.msg}`;
        verifyMsg.verify = false;
        return verifyMsg;
      }

      // 判断流入情况统计
      flowInResult = flowInVerify(form._sum_in);

      if (!flowInResult.verify) {
        verifyMsg.msg = `流入情况统计中${flowInResult.msg}`;
        verifyMsg.verify = false;
        return verifyMsg;
      }

      // 判断流出情况统计
      flowOutResult = flowOutVerify(form._sum_out);

      if (!flowOutResult.verify) {
        verifyMsg.msg = `流出情况统计中${flowOutResult.msg}`;
        verifyMsg.verify = false;
        return verifyMsg;
      }
  }



  // 最后成功
  return verifyMsg;
}