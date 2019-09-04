<template>
  <div>
    <el-container
      class="mask"
      v-show="loading"
      v-loading="loading"
      element-loading-text="数据加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(228, 231, 237, 0.8)"
    ></el-container>
    <Menu
      v-if="unit === '事业单位'"
      mode="horizontal"
      :theme="theme1"
      active-name="companyInfo"
      class="menu"
      @on-select="select"
    >
      <MenuItem name="companyInfo">
        <Icon type="ios-paper" />单位基本信息
      </MenuItem>
      <Submenu name="talentStatusNei">
        <template slot="title">
          <Icon type="ios-people" />单位人才情况汇总
        </template>
        <MenuItem name="talentStatusNei">单位人才情况汇总-事业单位-编制内</MenuItem>
        <MenuItem name="talentStatusWai">单位人才情况汇总-事业单位-编制外</MenuItem>
      </Submenu>
      <Submenu name="flowInNei">
        <template slot="title">
          <Icon type="ios-stats" />单位人才流动汇总
        </template>
        <MenuGroup title="流入情况">
          <MenuItem name="flowInNei">流入情况统计-事业单位-编制内</MenuItem>
          <MenuItem name="flowInWai">流入情况统计-事业单位-编制外</MenuItem>
        </MenuGroup>
        <MenuGroup title="流出情况">
          <MenuItem name="flowOutNei">流出情况统计-事业单位-编制内</MenuItem>
          <MenuItem name="flowOutWai">流出情况统计-事业单位-编制外</MenuItem>
        </MenuGroup>
        <MenuGroup title="流出人才信息统计">
          <MenuItem name="flowTalentInfoNei">流出人才信息统计-事业单位-体制内</MenuItem>
          <MenuItem name="flowTalentInfoWai">流出人才信息统计-事业单位-体制外</MenuItem>
        </MenuGroup>
      </Submenu>
      <Submenu name="needNei">
        <template slot="title">
          <Icon type="ios-paper" />单位人才需求调查
        </template>
        <MenuItem name="needNei">单位人才需求调查-事业单位-体制内</MenuItem>
        <MenuItem name="needWai">单位人才需求调查-事业单位-体制外</MenuItem>
      </Submenu>
      <div class="user">
        <div class="submit">
          <Button class="button" type="primary" @click="saveHandle">暂存</Button>
        </div>
        <div class="submit">
          <Button type="success" @click="submitHandle" :loading="btnLoading">提交问卷</Button>
        </div>
        <div class="submit">
          <Button type="warning" icon="md-arrow-down" @click="exportExcel">导出表格</Button>
        </div>
        <div class="user-name">欢迎，{{companyName}}</div>
        <div class="logout">
          <span @click="logout">退出登录</span>
        </div>
      </div>
    </Menu>
    <Menu
      v-else
      mode="horizontal"
      :theme="theme1"
      active-name="companyInfo"
      class="menu"
      @on-select="select"
    >
      <MenuItem name="companyInfo">
        <Icon type="ios-paper" />单位基本信息
      </MenuItem>
      <MenuItem name="talentStatus">
        <Icon type="ios-people" />单位人才情况汇总
      </MenuItem>
      <Submenu name="flowIn">
        <template slot="title">
          <Icon type="ios-stats" />单位人才流动汇总
        </template>
        <MenuItem name="flowIn">流入情况统计</MenuItem>
        <MenuItem name="flowOut">流出情况统计</MenuItem>
        <MenuItem name="flowTalentInfo">流出人才信息统计</MenuItem>
      </Submenu>
      <MenuItem name="need">
        <Icon type="ios-paper" />单位人才需求调查
      </MenuItem>
      <div class="user">
        <div class="submit">
          <Button class="button" type="primary" @click="saveHandle">暂存</Button>
        </div>
        <div class="submit">
          <Button type="success" @click="submitHandle2" :loading="btnLoading">提交问卷</Button>
        </div>
        <div class="submit">
          <Button type="warning" icon="md-arrow-down" @click="exportExcel">导出表格</Button>
        </div>
        <div class="user-name">欢迎，{{companyName}}</div>
        <div class="logout">
          <span @click="logout">退出登录</span>
        </div>
      </div>
    </Menu>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<style scoped>
.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
}

.logout {
  color: #8cd1ff;
  cursor: pointer;
}

.menu {
  position: relative;
}

.user {
  display: flex;
  position: absolute;
  right: 30px;
  top: 0;
}

.submit {
  margin-right: 20px;
}

.user .user-name {
  margin-right: 15px;
}
</style>
<script>
import url from "@/service.config.js";
import axios from "axios";
import util from "@/utils.js";
import { debuglog } from "util";
export default {
  data() {
    return {
      theme1: "light",
      companyName: "哈尔滨理工大学",
      loading: false,
      btnLoading: false
    };
  },
  computed: {
    unit() {
      return this.$store.getters.unit;
    }
  },
  methods: {
    exportExcel() {
      let flag = this.$store.state.form._confirmed;
      if (flag === true) {
        console.log("下载表格");
        let excelName = this.$store.state.form._from_user;
        window.open(url.download + "/" + excelName, "_self");
      } else {
        this.$message.error("请先提交问卷");
      }
    },
    logout() {
      // this.$cookies.remove("user_data");
      localStorage.clear();
      this.$router.push("/");
    },
    select(name) {
      this.$router.push(name);
      // this.$data.loading = true;
      // setTimeout(() => {
      //   this.$router.push(name);
      //   this.$data.loading = false;
      // }, 100);
    },
    saveHandle() {
      if (this.$store.state.form._confirmed) {
        this.$message.error("您已经提交过了，不需要暂存了！");
        return;
      }

      let that = this;
      axios({
        url: url.save,
        method: "post",
        data: {
          form: that.$store.state.form,
          userId: that.$store.state.form._from_user
        }
      })
        .then(res => {
          this.$message({
            message: "已暂存到服务器，请放心退出",
            type: "success",
            duration: 1000
          });
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    submitHandle2() {
      console.log("提交问卷");
      let that = this;
      axios({
        url: url.generateExcel,
        method: "post",
        data: {
          form: that.$store.state.form,
          userId: that.$store.state.form._from_user
        }
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    submitHandle() {
      if (this.$store.state.form._confirmed) {
        this.$message.error("请不要重复提交！");
        return;
      }
      if (this.check()) {
        let that = this;
        this.$confirm("提交后不可修改, 是否提交?", "提交", {
          confirmButtonText: "提交",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.btnLoading = true;
            this.$store.state.form._confirmed = true;
            //上传服务器！！！！！！！！
            axios({
              url: url.save,
              method: "post",
              data: that.$store.state.form
            })
              .then(res => {
                console.log(res.data);
                this.btnLoading = false;
                this.$message({
                  type: "success",
                  message: "提交成功!"
                });
              })
              .catch(err => {
                console.log(err);
              });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消提交"
            });
          });
      }
    },

    check() {
      //基本信息校验
      const jb = "基本信息";
      const rchz = "单位人才情况汇总";
      const lr = "单位人才流动汇总 流入情况统计";
      const lc = "单位人才流动汇总 流出情况统计";
      const lcxx = "单位人才流动汇总 流出人才信息统计";
      const rcxq = "单位人才需求调查";
      const patt_name = /^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$/;
      const patt_id = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      const patt_phone = /^[1][0-9][0-9]{9}$/;
      const patt_email = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      for (var item in this.$store.state.form._basic) {
        if (item == "QQ" || item == "微信" || item == "电子邮箱") {
          continue;
        }
        if (!this.$store.state.form._basic[item]) {
          this.warn(jb, item, "empty");
          return false;
        }
      }
      if (this.$store.state.form._basic["行业分类"].length !== 3) {
        this.warn(jb, "行业分类", "complete");
        return false;
      }
      if (!patt_name.test(this.$store.state.form._basic["填报人"])) {
        this.warn(jb, "填报人", "wrong");
        return false;
      }
      if (!patt_phone.test(this.$store.state.form._basic["联系电话"])) {
        this.warn(jb, "联系电话", "wrong");
        return false;
      }
      if (
        this.$store.state.form._basic["电子邮箱"] !== null &&
        !patt_email.test(this.$store.state.form._basic["电子邮箱"])
      ) {
        this.warn(jb, "电子邮箱", "wrong");
        return false;
      }

      //单位人才情况汇总校验
      if (
        !this.checkEveryYear(
          rchz,
          "职工人数",
          this.$store.state.form._summary
        ) ||
        !this.checkEveryYear(lr, "流入人数", this.$store.state.form._sum_in) ||
        !this.checkEveryYear(lc, "流出人数", this.$store.state.form._sum_out)
      ) {
        return false;
      }
      //流出人才信息统计校验
      var item_out_index = 1;
      for (var item_out of this.$store.state.form._out_status) {
        for (var item_out_s in item_out.info) {
          if (item_out.info[item_out_s] == null) {
            this.warn(lcxx + "第" + item_out_index + "项", item_out_s, "empty");
            return false;
          }
        }

        if (!this.IdentityCodeValid(item_out.info["身份证号"])) {
          this.warn(lcxx + "第" + item_out_index + "项", "身份证号", "wrong");
          return false;
        }

        if (!this.checkJob(item_out.info["岗位类别"])) {
          this.warn(
            lcxx + "第" + item_out_index + "项",
            "岗位类别",
            "complete"
          );
          return false;
        }
        item_out_index++;
      }

      //单位人才需求校验
      var need_index = 1;
      for (var item_need of this.$store.state.form._need) {
        for (var item_need_s in item_need.info) {
          if (
            item_need.info[item_need_s] == null &&
            item_need_s != "职业资格证书"
          ) {
            this.warn(rcxq + "第" + need_index + "项", item_need_s, "empty");
            return false;
          }
          if (!this.checkJob(item_need.info["岗位类别"])) {
            this.warn(rcxq + "第" + need_index + "项", "岗位类别", "complete");
            return false;
          }
          if (item_need.info["专业要求"].length != 3) {
            this.warn(rcxq + "第" + need_index + "项", "专业需求", "complete");
            return;
          }
        }
        need_index++;
      }
      return true;
    },
    checkJob(e) {
      if (e.length == 0) {
        return false;
      }
      switch (e[0]) {
        case "专业技术类":
          if (e.length != 3) {
            return false;
          }
          break;
        case "其他":
          break;
        default:
          if (e.length == 1) {
            return false;
          }
      }
      return true;
    },
    IdentityCodeValid(code) {
      code = code.toUpperCase();
      var city = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江 ",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北 ",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏 ",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外 "
      };
      var tip = "";
      var pass = true;
      if (
        !code ||
        !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(
          code
        )
      ) {
        tip = "身份证号格式错误";
        pass = false;
      } else if (!city[code.substr(0, 2)]) {
        tip = "地址编码错误";
        pass = false;
      } else {
        if (code.length == 18) {
          code = code.split("");
          var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
          var parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
          var sum = 0;
          var ai = 0;
          var wi = 0;
          for (var i = 0; i < 17; i++) {
            ai = code[i];
            wi = factor[i];
            sum += ai * wi;
          }
          var last = parity[sum % 11];
          if (parity[sum % 11] != code[17]) {
            tip = "校验位错误";
            pass = false;
          }
        }
      }
      return pass;
    },
    checkEveryYear(title, sumname, e) {
      //单位人才情况汇总校验
      const null_sex = '{"男":null,"女":null}';
      const null_age =
        '{"30岁以下":null,"31-41":null,"41-50":null,"51-60":null,"61岁以上":null}';
      const null_degree =
        '{"博士研究生":null,"硕士研究生":null,"本科":null,"大专":null,"大专以下":null}';
      const null_salary =
        '{"3000元以下":null,"3000-4000":null,"4000-5000":null,"5000-6000":null,"6000-8000":null,"8000-10000":null,"10000-12000":null,"12000-15000":null,"15000-20000":null,"20000元以上":null}';
      const null_award =
        '{"国家级":null,"省部级":null,"厅局级":null,"其它":null,"无":null}';
      const null_job = '[{"cas":[],"num":null}]';
      var n_count = 0;
      for (var summary_item of e) {
        const rchz_y = title + summary_item.year + "年";
        var flag = true;
        for (var info_item in summary_item.info) {
          var tempstr = JSON.stringify(summary_item.info[info_item]);
          if (
            tempstr != "null" &&
            tempstr != null_sex &&
            tempstr != null_age &&
            tempstr != null_degree &&
            tempstr != null_salary &&
            tempstr != null_award &&
            tempstr != null_job
          ) {
            flag = false;
            console.log(rchz_y, tempstr);
          }
        }
        if (flag) {
          n_count++;
          continue;
        }
        //判断填空是否为空
        for (var info_item in summary_item.info) {
          var tempstr = JSON.stringify(summary_item.info[info_item]);
          if (
            tempstr == "null" ||
            tempstr == null_sex ||
            tempstr == null_age ||
            tempstr == null_degree ||
            tempstr == null_salary ||
            tempstr == null_award ||
            tempstr == null_job
          ) {
            this.warn(rchz_y, info_item, "empty");
            return false;
          }
          if (!util.isNumber(summary_item.info[info_item])) {
            var cur_count = 0;
            if (info_item == "岗位类别") {
              var job_count = 1;
              for (var num_cur of summary_item.info[info_item]) {
                cur_count += num_cur.num;
                if (!this.checkJob(num_cur.cas)) {
                  this.warn(
                    rchz_y + "岗位类别",
                    "第" + job_count + "项",
                    "complete"
                  );
                  return false;
                }
                job_count++;
              }
            } else {
              for (var num_cur in summary_item.info[info_item]) {
                cur_count += summary_item.info[info_item][num_cur];
              }
            }
            if (cur_count != summary_item.info[sumname]) {
              this.warn(rchz_y, info_item, "wrong");
              return false;
            }
          }
        }
      }
      if (n_count == 10) {
        this.$message.error("请填写 " + title);
        return false;
      }
      return true;
    },
    warn(first, second, type) {
      if (type == "complete") {
        this.$message.error("请将 " + first + " 中的 " + second + " 选择完整");
      }
      if (type == "empty") {
        this.$message.error("请填写 " + first + " 中的 " + second);
      }
      if (type == "wrong") {
        this.$message.error(first + " 中的 " + second + " 填写有误");
      }
    }
  },
  created() {
    console.log("created");
    if (!this.$store.state.form._from_user) {
      this.$store.commit("setUserId", localStorage.getItem("userId"));
    }

    let userId = this.$store.state.form._from_user;
    let _this = this;

    axios({
      url: url.getForm,
      method: "get",
      params: {
        userId
      }
    }).then(res => {
      let { form } = res.data;

      _this.$store.commit("setForm", form);
    });
    // if (util.getCookies(this) === null) {
    //   this.$router.push("/");
    //   return;
    // }
    // if (!this.$store.state.loaded) {
    //   this.$router.push("/loading");
    // }
    // if (this.$store.state.form._basic["单位名称"] === null) {
    //   this.$data.companyName = util.getCookies(this).user_name;
    // } else {
    //   this.$data.companyName = this.$store.state.form._basic["单位名称"];
    // }
  }
};
</script>
