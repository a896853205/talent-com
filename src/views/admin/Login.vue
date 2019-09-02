<template>
  <div class="container">
    <h1 class="title-b">账户分配系统</h1>
    <div class="box">
      <div class="account">
        <div class="account-label">用户名：</div>
        <div class="account-input">
          <Input v-model="account" type="text" placeholder="请输入用户名" style="width: 230px" />
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
    </div>
  </div>
</template>
<style scoped>
.title-b {
  text-align: center;
  margin-top: 30px;
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

export default {
  data() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$router.push("/admin/addUser");
    }
  }
};
</script>