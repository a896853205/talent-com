<template>
  <div>
    <Menu mode="horizontal" :theme="theme1" active-name="addUser" @on-select="select">
      <MenuItem name="addUser">
        <Icon type="ios-paper" />分配账号
      </MenuItem>
      <MenuItem name="submitStatus">
        <Icon type="ios-paper" />查看下级部门
      </MenuItem>
      <MenuItem name="adminChangePassword">
        <Icon type="ios-paper" />修改我的密码
      </MenuItem>
      <div class="user">
        <div class="submit">
          <Button class="button" type="info" @click="faqDownload">账号分配系统使用说明</Button>
        </div>
        <div>欢迎登录，{{showCompanyName}}</div>
        <div class="logout">
          <span @click="logout">退出登录</span>
        </div>
      </div>
    </Menu>
    <router-view></router-view>
  </div>
</template>
<style scoped>
.submit {
  margin-right: 20px;
}
.user {
  display: flex;
  position: absolute;
  right: 30px;
  top: 0;
}
.logout {
  color: #8cd1ff;
  cursor: pointer;
  margin: 0 20px;
}
</style>

<script>
import url from "@/service.config.js";
export default {
  data() {
    return {
      theme1: "light"
    };
  },
  computed: {
    showCompanyName() {
      return this.$store.getters.getCompanyName1;
    },
    adminUserId() {
      return this.$store.getters.getAdminUserId;
    }
  },
  methods: {
    faqDownload() {
      window.open(url.download + "/" + "账号分配系统使用说明", "_self");
    },
    select(name) {
      this.$router.push(name);
    },
    logout() {
      this.$router.push("/adminLogin");
    }
  },
  created() {
    this.$router.push("/admin/addUser");
    if (this.adminUserId === "") {
      this.$router.push("/adminLogin");
    }
  }
};
</script>