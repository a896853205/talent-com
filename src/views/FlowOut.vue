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
    <el-tabs tab-position="left" :value="activeYear" @tab-click="handleClick">
      <el-tab-pane v-for="(value, key) in sumOut" :key="key" :label="value.year" :name="value.year">
        <div v-if="activeYear === value.year">
          <p class="title">单位人才流动汇总表-<span class="special">流出人才</span>-{{value.year}}年</p>
          <FlowOut
            :getSumOutObjCombin="getSumOutObjCombin(value.year)"
            :SumOutInput="SumOutInput(value.year)"
            :twoLevelSumOutStationCategory="twoLevelSumOutStationCategory(value.year)"
            :year="value.year"
            :sumOut="value.info"
            commitFunction="setFlowOut"
          />
        </div>
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
import FlowOut from "../components/FlowOut.vue";

export default {
  components: {
    FlowOut
  },
  data() {
    return {
      activeYear: 2018
    }
  },
  methods: {
    handleClick(tab, e) {
      this.$data.activeYear = tab.name;
    },
  },
  computed: {
    sumOut() {
      return this.$store.state.form._sum_out;
    },

    getSumOutObjCombin() {
      return year => {
        return this.$store.getters.getSumOutObjCombin(year);
      };
    },

    SumOutInput() {
      return year => {
        return this.$store.getters.getSumOutInput(year);
      };
    },

    twoLevelSumOutStationCategory() {
      return year => {
        return this.$store.getters.twoLevelSumOutStationCategory(year);
      };
    }
  }
};
</script>
