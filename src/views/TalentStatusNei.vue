<template>
  <div class="box">
    <Row>
      <i-col span="4">
        <Alert type="warning" show-icon>
          提示
          <template slot="desc">在此处切换年份</template>
        </Alert>
      </i-col>
    </Row>
    <el-tabs tab-position="left" :value='2018'>
      <el-tab-pane v-for="(value, key) in summaryInner" :key="key" :label="value.year" :name="value.year">
        <p class="title">单位人才情况汇总表-<span class="special">存量信息</span>-事业单位-<span class="special">编制内</span>-{{ value.year }}年</p>
        <TalentStatus
          :key="`编制内${key}`"
          :getSummaryObjCombin="getSummaryNeiObjCombin(value.year)"
          :summaryInput="summaryInput(value.year)"
          :twoLevelStationCategory="twoLevelSummaryNeiStationCategory(value.year)"
          :year="value.year"
          :summary="value.info"
          commitFunction="setSummeryIn"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style scoped>
.special {
  color: #ed4014;
  font-weight: bold;
  font-size: 24px;
}
.box {
  margin-top: 20px;
}

.title {
  text-align: center;
  font-size: 16px;
  font-weight: bolder;
}
</style>
<script>
import TalentStatus from "../components/TalentStatus.vue";

export default {
  components: {
    TalentStatus
  },
  computed: {
    summaryInner() {
      console.log("nei", this.$store.state.form._summary_nei);
      return this.$store.state.form._summary_nei;
    },

    getSummaryNeiObjCombin() {
      return year => {
        return this.$store.getters.getSummaryNeiObjCombin(year);
      };
    },

    summaryInput() {
      return year => {
        return this.$store.getters.getSummaryNeiInput(year);
      };
    },

    twoLevelSummaryNeiStationCategory() {
      return year => {
        return this.$store.getters.twoLevelSummaryNeiStationCategory(year);
      };
    }
  }
};
</script>
