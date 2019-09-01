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
        <div class>欢迎登录，{{companyName}}</div>
        <div class="logout">
          <span @click="logout">退出登录</span>
        </div>
      </div>
    </Menu>
    <router-view></router-view>
  </div>
</template>
<style scoped>
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
export default {
  data() {
    return {
      theme1: "light",
      companyName: "哈尔滨理工大学"
    };
  },
  methods: {
    select(name) {
      console.log(name);
      this.$router.push(name);
    },
    logout() {
      this.$router.push("/");
    }
  },
  created() {
    this.$router.push("/admin/addUser");
  }
};
</script>