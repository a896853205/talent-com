<template>
  <div class="changePassword">
    <Row type="flex" align="center" class-name="row">
      <i-col span="2" class-name="label">旧密码：</i-col>
      <i-col span="6" class-name="labelInput">
        <Input v-model="currentPassword" placeholder="请输入当前密码" />
      </i-col>
    </Row>
    <Row type="flex" align="center" class-name="row">
      <i-col span="2" class-name="label">新密码：</i-col>
      <i-col span="6" class-name="labelInput">
        <Input v-model="newPassword" placeholder="请输入新密码" />
      </i-col>
    </Row>
    <Row type="flex" align="center" class-name="row">
      <i-col span="2" class-name="label">重复新密码：</i-col>
      <i-col span="6" class-name="labelInput">
        <Input v-model="reNewPassword" placeholder="请再次输入新密码" />
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
export default {
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      reNewPassword: ""
    };
  },
  methods: {
    changeHandle() {}
  }
};
</script>