<template>
  <div class="box">
    <el-tabs tab-position="left">
      <el-tab-pane v-for="(value, key) in FlowInOutter" :key="key" :label="value.year">
        <p class="title">单位人才流动汇总表-流入人才-事业单位-编制外-{{value.year}}年</p>
        <FlowIn 
          :getSumInObjCombin="getSumInObjCombin(value.year)"
          :sumInInput="SumInInput(value.year)"
          :twoLevelStationCategory="twoLevelSumInStationCategory(value.year)"
          :year="value.year" :sumIn="value.info" commitFunction="setFlowInOutter" />
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
import FlowIn from "../components/FlowIn.vue";

export default {
  components: {
    FlowIn
  },
  data() {
    return {};
  },
  computed: {
    FlowInOutter() {
      return this.$store.state.form._sum_in_wai;
    },

    getSumInObjCombin() {
      return year => {
        return this.$store.getters.getSumInWaiObjCombin(year);
      };
    },

    SumInInput() {
      return year => {
        return this.$store.getters.getSumInWaiInput(year);
      };
    },

    twoLevelSumInStationCategory() {
      return year => {
        return this.$store.getters.twoLevelSumInWaiStationCategory(year);
      };
    }
  }
};
</script>