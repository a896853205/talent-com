<template>
  <div class="box">
    <Row type="flex" align="center" class-name="row">
      <i-col span="4" class-name="hintMsg">已分配用户：60个</i-col>
      <i-col span="4" class-name="hintMsg">以提交的有：58个</i-col>
      <i-col span="4" class-name="hintMsg">未提交的有：2个</i-col>
      <i-col span="4" class-name="hintMsg">
        <Button type="warning">向上级部门提交</Button>
      </i-col>
    </Row>
    <Row>
      <Table :columns="columns" :data="userData"></Table>
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
export default {
  data() {
    return {
      columns: [
        {
          title: "单位名称",
          key: "companyName"
        },
        {
          title: "用户名",
          key: "userName"
        },
        {
          title: "密码",
          key: "password"
        },
        {
          title: "问卷提交状态",
          key: "submitStatus"
        },
        {
          title: "下载表格",
          key: "downloadExcel",
          render: (h, params) => {
            return h(
              "Button",
              {
                props: {
                  type: "info",
                  size: "small"
                },
                style: {
                  marginLeft: "10px"
                },
                on: {
                  click: () => {
                    this.downloadExcel(params.row.userName);
                  }
                }
              },
              "下载表格"
            );
          }

        },
        {
          title: "下属部门提交状态",
          key: "childrenSubmitStatus"
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
                    this.remove(params.index);
                  }
                }
              },
              "删除"
            );
          }
        }
      ],
      userData: [
        {
          companyName: "哈尔滨理工大学",
          userName: "0001-0000-0000-0000",
          password: "123456",
          submitStatus: "未提交",
          downloadExcel: "",
          childrenSubmitStatus: ""
        },
        {
          companyName: "哈尔滨理工大学",
          userName: "0001-0000-0000-0000",
          password: "123456",
          submitStatus: "已提交，2019-09-01",
          downloadExcel: "下载",
          childrenSubmitStatus: "24/50,2019-09-01"
        },
        {
          companyName: "哈尔滨理工大学",
          userName: "0001-0000-0000-0000",
          password: "123456",
          submitStatus: "已提交，2019-09-01",
          downloadExcel: "下载",
          childrenSubmitStatus: "24/50,2019-09-01"
        },
        {
          companyName: "哈尔滨理工大学",
          userName: "0001-0000-0000-0000",
          password: "123456",
          submitStatus: "已提交，2019-09-01",
          downloadExcel: "下载",
          childrenSubmitStatus: "未提交"
        }
      ]
    };
  },
  components: {},
  methods: {
    remove(index) {
      this.userData.splice(index, 1);
    },

    downloadExcel(ExcelName){
        console.log(ExcelName)
    }
  }
};
</script>