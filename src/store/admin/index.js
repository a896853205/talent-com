export default {
  // 权限管理的数据存在这里
  state: {
    adminUserId: '',
    userCode: ''
  },
  // 操作vuex的函数放在这里
  mutations: {
    // 设置管理权限模块的userid
    adminUserId (state, adminUserId) {
      state.adminUserId = adminUserId;
    },
    // 设置userCode
    setUserCode (state, userCode) {
      state.userCode = userCode;
    }
  },
  // 获取vuex中的数据放在这里
  getters: {
    getAdminUserId: state => {
      return state.adminUserId;
    }
  }
}