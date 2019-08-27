<template>
    <div class="container">
        <div class="box">
            <div class="account">
                <div class="account-label">
                    用户名：
                </div>
                <div class="account-input">
                    <Input v-model="account" type="text" placeholder="请输入用户名" style="width: 230px"/>
                </div>
            </div>
            <div class="account">
                <div class="account-label">
                    身份证号：
                </div>
                <div class="account-input">
                    <Input v-model="idNum" type="text" placeholder="请输入身份证号" style="width: 230px"/>
                </div>
            </div>
            <div class="account">
                <div class="account-label">
                    密 &nbsp;&nbsp; 码：
                </div>
                <div class="account-input">
                    <Input v-model="password1" type="password" placeholder="请输入密码" style="width: 230px"/>
                </div>
            </div>
            <div class="account">
                <div class="account-label">
                    确认密码：
                </div>
                <div class="account-input">
                    <Input v-model="password2" type="password" placeholder="确认密码" style="width: 230px"/>
                </div>
            </div>
            <div class="button">
                <Button type="primary" shape="circle" long @click="registerHandle">注册</Button>
            </div>
            <div class="forget">
                <router-link to="/login">已有账号，现在登录？</router-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .forget {
        text-align: right;
        width: 300px;
        margin: 0 auto;
    }
    .account {
        display: flex;
        margin: 20px auto;
        width: 500px;
    }
    .account-label {
        flex: 1;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: flex-end;

    }
    .account-input {
        flex: 2;
    }
    .button {
        width: 300px;
        margin: 75px auto 20px;
    }

    .container {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

    }
    .box {
        width: 670px;
        height: 350px;
        margin: 100px auto;
    }
</style>
<script>
	import url from '@/service.config.js';
	import axios from 'axios';
	import util from '@/utils.js'
	
    export default {
        data(){
            return {
                account: '',
                password1: '',
                password2: '',
                idNum: '',
                modal1: false,
            }
        },
        methods: {
            registerHandle(){
				console.log(this.$data.password1.length)
				const patt_id = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
                // this.modal1 = true;
				if (this.$data.account.length < 6) {
					this.$message.error('用户名长度最小为6位！');
					return
				}
				if (!patt_id.test(this.$data.idNum)) {
					this.$message.error('身份证号不合法！')
					return
				}
				if (this.$data.password1.length < 6) {
					this.$message.error('密码长度最小为6位！');
					return
				}
				if (this.$data.password1 !== this.$data.password2) {
					this.$message.error('请两次输入一样的密码！');
					return
				}
                let title = '注册成功';
				axios({
				    url: url.reg,
				    method: 'get',
				    params: {
						user_name: this.$data.account,
						user_password: this.$data.password1,
						user_id_card: this.$data.idNum
					}
				}).then(res => {
				    console.log(res.data);
					if (res.data === -1) {
						this.$message.error('用户名已存在！');
						return
					}
					if (res.data === -2) {
						this.$message.error('身份证号已存在！');
						return
					}
					this.$Modal.success({
					    title: title,
					    okText: '去登录',
					    onOk: ()=>{
					        this.$router.push('/login');
					    }
					})
				}).catch(err => {
				    console.log(err);
				});
            }
        }
    }
</script>