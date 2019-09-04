// const SERVERURL = "https://api.im-here.cn/";
const SERVERURL = "http://localhost:3000/";

const URL = {
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

};

export default URL;