<template>
  <div class="box">
    <Row type="flex" align="center" class-name="row">
      <i-col span="4" class-name="hintMsg">已分配用户：{{userData.length}}个</i-col>
      <i-col span="4" class-name="hintMsg">已提交的有：{{doSubmit}}个</i-col>
      <i-col span="4" class-name="hintMsg">未提交的有：{{unSubmit}}个</i-col>
      <i-col span="4" class-name="hintMsg">
        <Button type="warning" @click="submit">向上级部门报告</Button>
      </i-col>
    </Row>
    <Row>
      <Table :columns="columns" :data="userData" :loading="tableLoading"></Table>
    </Row>
  </div>
</template>
<style scoped>
.box {
  padding: 30px;
}

.hintMsg {
  height: 30px;
  line-height: 30px;
  font-size: 16px;
}

.row {
  margin-bottom: 15px;
}
</style>

<script>
import url from "@/service.config.js";
import axios from "axios";
export default {
  data() {
    return {
      unSubmit: 0,
      doSubmit: 0,
      columns: [
        {
          title: "单位名称",
          key: "_company_name"
        },
        {
          title: "用户名",
          key: "_user_code",
          render: (h, params) => {
            let name = params.row._user_code;
            let tempName = "";
            for (let index = 1; index <= name.length; index++) {
              tempName += name[index - 1];
              if (index % 4 === 0 && index !== name.length) {
                tempName += "-";
              }
            }
            return h("div", tempName);
          }
        },
        {
          title: "密码",
          key: "_user_password"
        },
        {
          title: "问卷提交状态",
          key: "_confirmed",
          render: (h, params) => {
            if (params.row._confirmed === 0) {
              return h(
                "div",
                {
                  style: {
                    color: "#ed4014"
                  }
                },
                "未提交"
              );
            } else if (params.row._confirmed === 1) {
              return h(
                "div",
                {
                  style: {
                    color: "#19be6b"
                  }
                },
                "已提交"
              );
            } else if (params.row._confirmed === -1) {
              return h(
                "div",
                {
                  style: {
                    color: "#dddddd"
                  }
                },
                "无需填报"
              );
            }
          }
        },
        {
          title: "下载表格",
          key: "downloadExcel",
          render: (h, params) => {
            if (params.row._confirmed === 0 || params.row._confirmed === -1) {
              return h(
                "Button",
                {
                  props: {
                    type: "info",
                    size: "small",
                    disabled: true
                  },
                  style: {
                    marginLeft: "10px"
                  },
                  on: {
                    click: () => {
                      this.downloadExcel(params.row._id);
                    }
                  }
                },
                "下载表格"
              );
            } else if (params.row._confirmed === 1) {
              return h(
                "Button",
                {
                  props: {
                    type: "info",
                    size: "small",
                    loading: this.downloadLoading
                  },
                  style: {
                    marginLeft: "10px"
                  },
                  on: {
                    click: () => {
                      this.downloadExcel(params.row._id);
                    }
                  }
                },
                "下载表格"
              );
            }
          }
        },
        {
          title: "下属部门提交状态",
          key: "_submit_status",
          render: (h, params) => {
            if (params.row._submit_status === -1) {
              return h("div", "无下属");
            } else if (params.row._submit_status === 0) {
              return h(
                "div",
                {
                  style: {
                    color: "#ed4014"
                  }
                },
                "未报告"
              );
            } else if (params.row._submit_status === 1) {
              return h(
                "div",
                {
                  style: {
                    color: "#19be6b"
                  }
                },
                `已报告`
              );
            }
          }
        },
        {
          title: "删除账号",
          key: "delAccount",
          render: (h, params) => {
            return h(
              "Button",
              {
                props: {
                  type: "error",
                  size: "small"
                },
                style: {
                  marginLeft: "10px"
                },
                on: {
                  click: () => {
                    this.$confirm("确定删除此账号?", "确定", {
                      confirmButtonText: "确定",
                      cancelButtonText: "取消",
                      type: "warning"
                    }).then(() => {
                      this.remove(params.index, params.row._id);
                    });
                  }
                }
              },
              "删除"
            );
          }
        }
      ],
      userData: [],
      downloadLoading: false,
      tableLoading: false,
    };
  },
  components: {},
  methods: {
    remove(index, _id) {
      this.userData.splice(index, 1);
      console.log("remove id", _id);
      axios({
        url: url.deleteUser,
        method: "post",
        data: {
          userId: _id
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
    },

    downloadExcel(ExcelName) {
      console.log(ExcelName);
      this.downloadLoading = true;
      let _this = this;
      axios({
        url: url.generateExcel,
        method: "post",
        data: {
          userId: ExcelName
        }
      })
        .then(res => {
          window.open(url.download + "/" + ExcelName, "_self");
          _this.downloadLoading = false;
        })
        .catch(err => {
          _this.downloadLoading = false;
        });
    },
    submit() {
      let _this = this;
      this.$confirm("确定向上级汇报当前下属提交状态?", "确定", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        axios({
          url: url.submitManage,
          method: "post",
          data: {
            userId: _this.adminUserId
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
      });
    }
  },
  computed: {
    adminUserId() {
      return this.$store.getters.getAdminUserId;
    }
  },
  mounted() {
    let _this = this;
    this.$data.tableLoading = true;
    axios({
      url: url.manageInfo,
      method: "post",
      data: {
        userId: _this.adminUserId
      }
    })
      .then(res => {
        _this.$data.tableLoading = false;
        switch (res.data.status) {
          case 0:
            this.$Message.error(res.data.msg);
            break;
          case 1:
            console.log(res.data);
            this.userData = res.data.data;

            for (let item of this.userData) {
              if (item._confirmed === 0) {
                this.unSubmit++;
              } else if (item._confirmed === 1) {
                this.doSubmit++;
              }
            }
            break;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>