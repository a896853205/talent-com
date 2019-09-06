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
          <Checkbox size="large" label="分配用户权限"></Checkbox>
          <Checkbox size="large" label="填报权限"></Checkbox>
        </CheckboxGroup>
      </i-col>
    </Row>
    <Row type="flex" align="center" class-name="row">
      <i-col span="8" class-name="label">
        <Button type="primary" long @click="addUserHandle">生成用户名和密码</Button>
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
export default {
  data() {
    return {
      companyName: "",
      authority: []
    };
  },
  created() {
    console.log('really',this.adminUserId);
  },
  computed: {
    adminUserId () {
      return this.$store.getters.getAdminUserId;
    }
  },
  methods: {
    addUserHandle() {
      console.log('单位名称', this.companyName, '用户权限', this.authority);
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
          switch (res.data.status) {
            case 0:
              this.$Message.error(res.data.msg);
              break;
            case 1:
              this.$store.commit("adminUserId", res.data.data._id);
              this.$store.commit("setUserCode", res.data.data._user_code);
              this.$router.push("/admin/addUser");
          }
        })
        .catch(err => {
          console.log(err);
        });
      this.$Modal.success({
        title: "生成成功"
      });
    },

  }
};
</script>