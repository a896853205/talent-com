export const summaryVerify = _summary => {
  // 进行Array的处理
  _summary = Array.from(_summary);
  // 返回的对象
  let verifyMsg = {
    verify: true,
    msg: '',
    label: '',
  },
  haveDataYearIndexArr = [];

  // 查一下哪一年有数据把index输入到
  _summary.forEach((item, index) => {
    if (item.value > 0) {
      haveDataYearIndexArr.push(index);
    }
  })

  // 判断如果每一年都没有填写
  if (haveDataYearIndexArr.length === 0) {
    verifyMsg.verify = false;
    verifyMsg.msg = '至少需要添加一年的信息';
    return verifyMsg;
  }

  for (let index of haveDataYearIndexArr) {
    
    // 先求每个年份的所有类别的人数和
    
    // if (_summary[index].info.value ! === ) {

    // }
  }
}