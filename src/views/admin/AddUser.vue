<template>
  <div class="addUser">
    <Row type="flex" align="center" class-name="row">
      <i-col span="2" class-name="label">单位名称：</i-col>
      <i-col span="6" class-name="labelInput">
        <Input v-model="companyName" placeholder="请输入单位名称" />
      </i-col>
    </Row>
    <Row type="flex" align="center" class-name="row">
      <i-col span="2" class-name="label">用户权限：</i-col>
      <i-col span="6" class-name="labelInput">
        <CheckboxGroup v-model="authority">
          <Checkbox size="large" label="分配用户权限" :disabled="isThird"></Checkbox>
          <Checkbox size="large" label="填报权限"></Checkbox>
        </CheckboxGroup>
      </i-col>
    </Row>
    <Row type="flex" align="center" class-name="row">
      <i-col span="8" class-name="label">
        <Button type="primary" long @click="addUserHandle" :loading='btnLoading'>生成用户名和密码</Button>
      </i-col>
    </Row>
  </div>
</template>

<style scoped>
.row {
  margin-bottom: 10px;
}
.addUser {
  padding: 100px;
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
      companyName: "",
      authority: [],
      isThird: false,
      btnLoading: false,
    };
  },
  created() {
    let third = this.userCode.substr(8, 4);
    let forth = this.userCode.substr(12, 4);
    if (third !== '0000' && forth === '0000') {
      this.isThird = true;
    }
  },
  computed: {
    adminUserId() {
      return this.$store.getters.getAdminUserId;
    },
    userCode () {
      return this.$store.getters.getUserCode;
    }
  },
  methods: {
    addUserHandle() {
      let _this = this;
      this.$data.btnLoading = true;

      if (
        this.companyName === "" ||
        this.companyName === null ||
        this.authority.length === 0
      ) {
        this.$Message.error("单位名称和权限不得为空！");
        this.$data.btnLoading = false;
        return;
      }
      axios({
        url: url.adminRegister,
        method: "post",
        data: {
          userId: this.adminUserId,
          companyName: this.companyName,
          userRole: this.authority
        }
      })
        .then(res => {
          _this.$data.btnLoading = false;
          switch (res.data.status) {
            case 0:
              this.$Message.error(res.data.msg);
              break;
            case 1:
              this.$Message.success(res.data.msg);
              this.companyName = "";
              this.authority = [];
          }
        })
        .catch(err => {
          _this.$data.btnLoading = false;
          console.log(err);
        });
    }
  }
};
</script>