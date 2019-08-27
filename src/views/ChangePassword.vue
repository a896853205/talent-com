<template>
	<div class="container">
		<div class="box">
			<div class="account">
				<div class="account-label">
					用户名：
				</div>
				<div class="account-input">
					<Input v-model="account" type="text" placeholder="请输入用户名" style="width: 230px" />
				</div>
			</div>
			<div class="account">
				<div class="account-label">
					身份证号：
				</div>
				<div class="account-input">
					<Input v-model="idNum" type="text" placeholder="请输入注册时的身份证号" style="width: 230px" />
				</div>
			</div>
			<div class="account">
				<div class="account-label">
					新密码：
				</div>
				<div class="account-input">
					<Input v-model="password1" type="password" placeholder="请输入密码" style="width: 230px" />
				</div>
			</div>
			<div class="account">
				<div class="account-label">
					确认密码：
				</div>
				<div class="account-input">
					<Input v-model="password2" type="password" placeholder="请输入密码" style="width: 230px" />
				</div>
			</div>
			<div class="button">
				<Button type="primary" shape="circle" long @click="buttonHandle">确认</Button>
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
		data() {
			return {
				account: '',
				idNum: '',
				password1: '',
				password2: '',
			}
		},
		methods: {
			buttonHandle() {
				// this.modal1 = true;
				if (this.$data.password1.length < 6) {
					this.$message.error('新密码长度最小为6位！');
					return
				}
				if (this.$data.password1 !== this.$data.password2) {
					this.$message.error('请两次输入一样的密码！');
					return
				}
				axios({
					url: url.changePass,
					method: 'get',
					params: {
						user_name: this.$data.account,
						user_id_card: this.$data.idNum,
						user_new_pass: this.$data.password1
					}
				}).then(res => {
					console.log(res.data)
					switch (res.data) {
						case 1:
							this.$cookies.remove('user_data');
							let title = '密码修改成功';
							this.$Modal.success({
								title: title,
								okText: '去登录',
								onOk: () => {
									this.$router.push('/login');
								}
							})
							break
						default:
							this.$message.error('用户名或身份证号输入错误！');
					}
					/*
					
					*/
				}).catch(err => {
					console.log(err);
				});

			}
		}
	}
</script>
