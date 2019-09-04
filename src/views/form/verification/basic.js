export const basicVerify = _basic => {
  // 进行Array的处理
  _basic = Array.from(_basic);
  // 返回的对象
  let verifyMsg = {
    verify: true,
    msg: '',
    label: '',
  };

  for (let basicItem of _basic) {

    // 判断select和cascader类型必须选择
    if (basicItem.type === 'select' ||
      basicItem.type === 'cascader') {
      if (basicItem.value === null ||
        basicItem.value === undefined ||
        basicItem.value === '' ||
        basicItem.value.length === 0) {
        verifyMsg.verify = false;
        verifyMsg.msg = '未选择';
        verifyMsg.label = basicItem.label;
        return verifyMsg;
      }
    }

    if (basicItem.type === 'input') {
      if (basicItem.must) {
        if (basicItem.value === null ||
          basicItem.value === undefined ||
          basicItem.value === '') {
          verifyMsg.verify = false;
          verifyMsg.msg = '未填写';
          verifyMsg.label = basicItem.label;
          return verifyMsg;
        }
      }

      if (basicItem.value && basicItem.regExp) {
        if (!eval(basicItem.regExp).test(basicItem.value)) {
          verifyMsg.verify = false;
          verifyMsg.msg = '填写有误';
          verifyMsg.label = basicItem.label;
          return verifyMsg;
        }
      }
    }
  }

  return verifyMsg;
}