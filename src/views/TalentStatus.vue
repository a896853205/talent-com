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
    <el-tabs tab-position="left" :value="2018">
      <el-tab-pane
        v-for="(value, key) in summary"
        :key="key"
        :label="value.year"
        :name="value.year"
      >
        <p class="title">
          单位人才情况汇总表-
          <span class="special">存量信息</span>
          -{{value.year}}年
        </p>
        <TalentStatus
          :key="`正常${key}`"
          :getSummaryObjCombin="getSummaryObjCombin(value.year)"
          :summaryInput="summaryInput(value.year)"
          :twoLevelStationCategory="twoLevelStationCategory(value.year)"
          :year="value.year"
          :summary="value.info"
          commitFunction="setSummery"
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
    summary() {
      return this.$store.state.form._summary;
    },

    getSummaryObjCombin() {
      return year => {
        return this.$store.getters.getSummaryObjCombin(year);
      };
    },

    summaryInput() {
      return year => {
        return this.$store.getters.getSummaryInput(year);
      };
    },

    twoLevelStationCategory() {
      return year => {
        return this.$store.getters.twoLevelStationCategory(year);
      };
    }
  }
};
</script>
