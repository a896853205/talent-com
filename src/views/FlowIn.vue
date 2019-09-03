<template>
  <div class="box">
    <el-tabs tab-position="left">
      <el-tab-pane v-for="(value, key) in sumIn" :key="key" :label="value.year">
        <p class="title">单位人才流动汇总表-流入人才-{{value.year}}年</p>
        <FlowIn
          :getSumInObjCombin="getSumInObjCombin(value.year)"
          :sumInInput="SumInInput(value.year)"
          :twoLevelStationCategory="twoLevelSumInStationCategory(value.year)"
          :year="value.year"
          :sumIn="value.info"
          commitFunction="setFlowIn"
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
import FlowIn from "../components/FlowIn.vue";

export default {
  components: {
    FlowIn
  },
  computed: {
    sumIn() {
      return this.$store.state.form._sum_in;
    },

    getSumInObjCombin() {
      return year => {
        return this.$store.getters.getSumInObjCombin(year);
      };
    },

    SumInInput() {
      return year => {
        return this.$store.getters.getSumInInput(year);
      };
    },

    twoLevelSumInStationCategory() {
      return year => {
        return this.$store.getters.twoLevelSumInStationCategory(year);
      };
    }
  }
};
</script>