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
    <el-tabs tab-position="left">
      <el-tab-pane v-for="(value, key) in sumOutInner" :key="key" :label="value.year">
        <p class="title">单位人才流动汇总表-流出人才-事业单位-编制内-{{value.year}}年</p>
        <FlowOut
          :getSumOutObjCombin="getSumOutObjCombin(value.year)"
          :SumOutInput="SumOutInput(value.year)"
          :twoLevelSumOutStationCategory="twoLevelSumOutStationCategory(value.year)"
          :year="value.year"
          :sumOut="value.info"
          commitFunction="setFlowOutInner"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style scoped>
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
import FlowOut from "../components/FlowOut.vue";

export default {
  components: {
    FlowOut
  },
  data() {},
  computed: {
    sumOutInner() {
      return this.$store.state.form._sum_out_nei;
    },

    getSumOutObjCombin() {
      return year => {
        return this.$store.getters.getSumOutNeiObjCombin(year);
      };
    },

    SumOutInput() {
      return year => {
        return this.$store.getters.getSumOutNeiInput(year);
      };
    },

    twoLevelSumOutStationCategory() {
      return year => {
        return this.$store.getters.twoLevelSumOutNeiStationCategory(year);
      };
    }
  }
};
</script>
