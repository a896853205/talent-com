export const flowInVerify = _sum_in => {
  // 进行Array的处理
  _sum_in = Array.from(_sum_in);
  // 返回的对象
  let verifyMsg = {
    verify: true,
    msg: '',
    label: '',
  },
  haveDataYearIndexArr = [];

  // 查一下哪一年有数据把index输入到
  _sum_in.forEach((item, index) => {
    if (item.info[0].value > 0) {
      haveDataYearIndexArr.push(index);
    }
  });

  if (_sum_in[_sum_in.length - 1].info[0].value === 0) {
    verifyMsg.verify = false;
    verifyMsg.msg = '必须填写2018年信息';

    return verifyMsg;
  }
  // 判断如果每一年都没有填写
  // if (haveDataYearIndexArr.length === 0) {
  //   verifyMsg.verify = false;
  //   verifyMsg.msg = '至少需要添加一年的信息';

  //   return verifyMsg;
  // }

  for (let index of haveDataYearIndexArr) {

    // 先求每个年份的所有类别的人数和
    let yearSum = 0;
    for (let eachClass of _sum_in[index].info[0].children.inputChildren) {
      yearSum += eachClass.value;
    }

    // 看二级加和等不等于一级
    if (_sum_in[index].info[0].value !== yearSum) {
      verifyMsg.verify = false;
      verifyMsg.msg = `${_sum_in[index].year}年的流入人数填写错误`;
      
      return verifyMsg;
    }

    // 看三级加和等不等于二级
    for (let eachClassStructure of _sum_in[index].info[0].children.children) {
      let classObj = _sum_in[index].info[0].children.inputChildren.find(value => {
        
        return (value.prop === eachClassStructure.prop);
      });

      for (let eachStructureObj of eachClassStructure.children) {
        // 判断岗位级别的特殊情况
        if (eachStructureObj.label === '岗位级别') {

          let structureNum = 0;

          for (let selectSpecial of eachStructureObj.value) {
            if (selectSpecial.num && selectSpecial.cas.length === 0) {
              verifyMsg.verify = false;
              verifyMsg.msg = `${_sum_in[index].year}年的 ${classObj.label} 类别中的 ${eachStructureObj.label} 填写错误`;

              return verifyMsg;
            }
            if (selectSpecial.num) {
              structureNum += selectSpecial.num;
            }
            debugger;
          }

          if (classObj.value !== structureNum) {
            verifyMsg.verify = false;
            verifyMsg.msg = `${_sum_in[index].year}年的 ${classObj.label} 类别中的 ${eachStructureObj.label} 填写错误`;

            return verifyMsg;
          }

        } else {
          let eachStructureArr = eachStructureObj.children,
            structureNum = 0;

          eachStructureArr.forEach(structure => {
            structureNum += structure.value;
          })

          if (classObj.value !== structureNum) {
            verifyMsg.verify = false;
            verifyMsg.msg = `${_sum_in[index].year}年的 ${classObj.label} 类别中的 ${eachStructureObj.label} 填写错误`;
            
            return verifyMsg;
          }
        }
      }
    }
  }

  return verifyMsg;
}