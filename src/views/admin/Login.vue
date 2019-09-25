<template>
  <div class="container">
    <h1 class="title-b">账户分配系统</h1>
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
        <Button type="primary" shape="circle" @click="login" long :loading='btnLoading'>登录</Button>
      </div>
    </div>
  </div>
</template>

<script>
import url from "@/service.config.js";
import axios from "axios";

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
      password: "",
      btnLoading: false,
    };
  },
  methods: {
    login() {
      let _this = this;
      this.$data.btnLoading = true;

      axios({
        url: url.adminLogin,
        method: "post",
        data: {
          userName: this.$data.account,
          userPassword: this.$data.password
        }
      })
        .then(res => {
          _this.$data.btnLoading = false;
          switch (res.data.status) {
            case 0:
              this.$Message.error(res.data.msg);
              break;
            case 1:
              this.$store.commit("adminUserId", res.data.data._id);
              this.$store.commit("setUserCode", res.data.data._user_code);
              this.$store.commit("setCompanyName", res.data.data._company_name);
              this.$router.push("/admin/addUser");
          }
        })
        .catch(err => {
          _this.$data.btnLoading = false;
          console.log(err);
        });
    },
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
    changed() {}
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
<style scoped>
.title-b {
  text-align: center;
  margin-top: 30px;
}
.account {
  display: flex;
  margin: 20px auto;
  width: 800px;
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