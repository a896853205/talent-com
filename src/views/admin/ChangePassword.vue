<template>
  <div class="changePassword">
    <Row type="flex" align="center" class-name="row">
      <i-col span="2" class-name="label">旧密码：</i-col>
      <i-col span="6" class-name="labelInput">
        <Input v-model="currentPassword" placeholder="请输入当前密码" type="password" />
      </i-col>
    </Row>
    <Row type="flex" align="center" class-name="row">
      <i-col span="2" class-name="label">新密码：</i-col>
      <i-col span="6" class-name="labelInput">
        <Input v-model="newPassword" placeholder="请输入新密码" type="password" />
      </i-col>
    </Row>
    <Row type="flex" align="center" class-name="row">
      <i-col span="2" class-name="label">重复新密码：</i-col>
      <i-col span="6" class-name="labelInput">
        <Input v-model="reNewPassword" placeholder="请再次输入新密码" type="password" />
      </i-col>
    </Row>
    <Row type="flex" align="center" class-name="row">
      <i-col span="8" class-name="label">
        <Button type="primary" long @click="changeHandle">修改</Button>
      </i-col>
    </Row>
  </div>
</template>

<style scoped>
.changePassword {
  padding: 100px;
}
.row {
  margin-bottom: 10px;
}
.label,
.labelInput {
  height: 32px;
  line-height: 32px;
  font-size: 16px;
}
</style>

<script>
import url from "@/service.config.js";
import axios from "axios";

export default {
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      reNewPassword: ""
    };
  },
  computed: {
    adminUserId() {
      return this.$store.getters.getAdminUserId;
    }
  },
  methods: {
    changeHandle() {
      let _this = this;
      if (this.newPassword.length < 6) {
        this.$Message.error("新密码最短为6位！");
        return;
      }
      if (this.newPassword !== this.reNewPassword) {
        this.$Message.error("新密码要与确认密码一致！");
        return;
      }
      axios({
        url: url.alterPassword,
        method: "post",
        data: {
          userId: _this.adminUserId,
          oldPassword: _this.currentPassword,
          newPassword: _this.newPassword
        }
      })
        .then(res => {
          switch (res.data.status) {
            case 0:
              this.$Message.error(res.data.msg);
              break;
            case 1:
              this.$Message.success(res.data.msg);
              break;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>