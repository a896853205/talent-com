<template>
  <div class="container">
    <div class="box">
      <div class="account">
        <div class="account-label">旧密码：</div>
        <div class="account-input">
          <Input v-model="oldPassword" type="password" placeholder="请输入旧密码" style="width: 230px" />
        </div>
      </div>
      <div class="account">
        <div class="account-label">新密码：</div>
        <div class="account-input">
          <Input v-model="newPassword" type="password" placeholder="请输入旧密码" style="width: 230px" />
        </div>
      </div>
      <div class="account">
        <div class="account-label">重复新密码：</div>
        <div class="account-input">
          <Input v-model="rePassword" type="password" placeholder="请输入旧密码" style="width: 230px" />
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
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.box {
  width: 670px;
  height: 350px;
  margin: 100px auto;
}
</style>
<script>
import url from "@/service.config.js";
import axios from "axios";
import util from "@/utils.js";

export default {
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      rePassword: ""
    };
  },
  computed: {
    userId() {
      return this.$store.getters.getUserId;
    }
  },
  methods: {
    buttonHandle() {
      console.log(this.userId);
      let _this = this;
      if (this.newPassword.length < 6) {
        this.$Message.error("新密码最短为6位！");
        return;
      }
      if (this.newPassword !== this.rePassword) {
        this.$Message.error("新密码要与确认密码一致！");
        return;
      }
      axios({
        url: url.alterPassword,
        method: "post",
        data: {
          userId: _this.userId,
          oldPassword: _this.oldPassword,
          newPassword: _this.newPassword
        }
      })
        .then(res => {
          switch (res.data.status) {
            case 0:
              this.$Message.error(res.data.msg);
              break;
            case 1:
              this.$Modal.success({
                title: "密码修改成功",
                okText: "去登录",
                onOk: () => {
                  this.$router.push("/login");
                }
              });
              break;
          }
        })
        .catch(err => {
          console.log(err);
        });
      // this.modal1 = true;
      // if (this.$data.password1.length < 6) {
      // 	this.$message.error('新密码长度最小为6位！');
      // 	return
      // }
      // if (this.$data.password1 !== this.$data.password2) {
      // 	this.$message.error('请两次输入一样的密码！');
      // 	return
      // }
      // axios({
      // 	url: url.changePass,
      // 	method: 'get',
      // 	params: {
      // 		user_name: this.$data.account,
      // 		user_id_card: this.$data.idNum,
      // 		user_new_pass: this.$data.password1
      // 	}
      // }).then(res => {
      // 	console.log(res.data)
      // 	switch (res.data) {
      // 		case 1:
      // 			this.$cookies.remove('user_data');
      // 			let title = '密码修改成功';
      // 			this.$Modal.success({
      // 				title: title,
      // 				okText: '去登录',
      // 				onOk: () => {
      // 					this.$router.push('/login');
      // 				}
      // 			})
      // 			break
      // 		default:
      // 			this.$message.error('用户名或身份证号输入错误！');
      // 	}
      // 	/*

      // 	*/
      // }).catch(err => {
      // 	console.log(err);
      // });
    }
  }
};
</script>
