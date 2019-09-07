<template>
  <div class="container">
    <h1 class="title-b">问卷填报系统</h1>
    <div class="box">
      <div class="account">
        <div class="account-label">用户名：</div>
        <div class="account-input">
          <Input
            v-model="accounts.a"
            type="text"
            @input="changea"
            maxlength="4"
            style="width: 49px"
            ref="inputa"
          />-
          <Input
            v-model="accounts.b"
            type="text"
            @input="changeb"
            maxlength="4"
            style="width: 49px"
            ref="inputb"
          />-
          <Input
            v-model="accounts.c"
            type="text"
            @input="changec"
            maxlength="4"
            style="width: 49px"
            ref="inputc"
          />-
          <Input
            v-model="accounts.d"
            type="text"
            @input="changed"
            maxlength="4"
            style="width: 49px"
            ref="inputd"
          />
        </div>
      </div>
      <div class="account">
        <div class="account-label">密 &nbsp;&nbsp; 码：</div>
        <div class="account-input">
          <Input v-model="password" type="password" placeholder="请输入密码" style="width: 230px" />
        </div>
      </div>
      <div class="button">
        <Button type="primary" shape="circle" @click="login" long>登录</Button>
      </div>
      <!-- <div class="forget">
        <router-link to="/changePassword">忘记密码？</router-link>
      </div>-->
    </div>
  </div>
</template>
<style scoped>
.title-b {
  text-align: center;
  margin-top: 30px;
}
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
      account: "",
      accounts: {
        a: "",
        b: "",
        c: "",
        d: ""
      },
      password: ""
    };
  },
  methods: {
    changea() {
      if (this.accounts.a.length === 4) {
        this.$refs.inputb.focus();
      }
    },
    changeb() {
      if (this.accounts.b.length === 4) {
        this.$refs.inputc.focus();
      }
    },
    changec() {
      if (this.accounts.c.length === 4) {
        this.$refs.inputd.focus();
      }
    },
    changed() {},
    login() {
      if (this.$data.account.length < 6) {
        this.$message.error("用户名长度最小为6位！");
        return;
      }
      if (this.$data.password.length < 6) {
        this.$message.error("密码长度最小为6位！");
        return;
      }
      axios({
        url: url.login,
        method: "post",
        data: {
          user_name: this.$data.account,
          user_password: this.$data.password
        }
      })
        .then(res => {
          if (!res.data.userId) {
            this.$message.error("用户名或密码输入错误！或者您没有此权限");
          } else {
            this.$store.commit("setUserId", res.data.userId);
            // this.$store.commit('setForm', res.data.returnForm);

            localStorage.setItem("userId", res.data.userId);

            this.$message({
              message: "登录成功！",
              type: "success",
              duration: 1000
            });

            this.$router.push("/form/companyInfo");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  watch: {
    accounts: {
      handler: function() {
        this.account = "";
        for (let item in this.accounts) {
          this.account += this.accounts[item];
        }
        console.log(this.account);
      },
      deep: true
    }
  }
};
</script>