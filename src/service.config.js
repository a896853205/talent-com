// const SERVERURL = "https://api.im-here.cn/";
const SERVERURL = "http://localhost:3000/";
// const SERVERURL = "http://localhost:1234/";

const PORT = {
  admin: 'admin'
}

const URL = {
  // 问卷填报路由
  checkLogin: SERVERURL + 'checkLogin',
  saveUser: SERVERURL + 'saveUser',
  getCompanyInfo: SERVERURL + 'getCompanyInfo',
  test: SERVERURL + 'test',
  post: SERVERURL + 'test2',
  save: SERVERURL + 'companyFormSave',
  reg: SERVERURL + 'register',
  login: SERVERURL + 'login',
  getForm: SERVERURL + 'companyFormGet',
  submit: SERVERURL + 'companyFormSubmit',
  changePass: SERVERURL + 'changePassWord',
  createTable: SERVERURL + 'createTable',
  download: SERVERURL + 'download',
  adminLogin: SERVERURL + 'adminLogin',
  generateExcel: SERVERURL + 'generateExcel',
  
  // 权限分配路由
  adminLogin: `${SERVERURL}${PORT.admin}/login`,
  adminRegister: `${SERVERURL}${PORT.admin}/register`,
  manageInfo: `${SERVERURL}${PORT.admin}/manageInfo`,
  submitManage: `${SERVERURL}${PORT.admin}/submitManage`,
  alterPassword: `${SERVERURL}${PORT.admin}/alterPassword`
};



export default URL;