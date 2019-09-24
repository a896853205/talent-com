<template>
  <div class="box">
    <Row>
      <i-col span='4'>
        <Alert type="warning" show-icon>
          提示
          <template slot="desc">在此处切换年份</template>
        </Alert>
      </i-col>
    </Row>

    <el-tabs tab-position="left" :value="activeYear" @tab-click="handleClick">
      <el-tab-pane v-for="(value, key) in sumIn" :key="key" :label="value.year" :name="value.year">
        <div v-if="activeYear === value.year">
          <p class="title">单位人才流动汇总表-<span class="special">流入人才</span>-{{value.year}}年</p>
          <FlowIn
            :getSumInObjCombin="getSumInObjCombin(value.year)"
            :sumInInput="SumInInput(value.year)"
            :twoLevelStationCategory="twoLevelSumInStationCategory(value.year)"
            :year="value.year"
            :sumIn="value.info"
            commitFunction="setFlowIn"
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
import FlowIn from "../components/FlowIn.vue";

export default {
  components: {
    FlowIn
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