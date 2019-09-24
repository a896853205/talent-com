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
    <el-row>
      <el-col :span='24'>
        <el-tabs tab-position="left" :value="activeYear" @tab-click="handleClick">
          <el-tab-pane v-for="(value, key) in FlowInInner" :key="key" :label="value.year" :name="value.year">
            <div v-if="activeYear === value.year">
              <p class="title">单位人才流动汇总表-<span class="special">流入人才</span>-事业单位-<span class="special">编制内</span>-{{value.year}}年</p>
              <FlowIn
                :getSumInObjCombin="getSumInObjCombin(value.year)"
                :sumInInput="SumInInput(value.year)"
                :twoLevelStationCategory="twoLevelSumInStationCategory(value.year)"
                :year="value.year"
                :sumIn="value.info"
                commitFunction="setFlowInInner"
              />
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
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
    FlowInInner() {
      return this.$store.state.form._sum_in_nei;
    },

    getSumInObjCombin() {
      return year => {
        return this.$store.getters.getSumInNeiObjCombin(year);
      };
    },

    SumInInput() {
      return year => {
        return this.$store.getters.getSumInNeiInput(year);
      };
    },

    twoLevelSumInStationCategory() {
      return year => {
        return this.$store.getters.twoLevelSumInNeiStationCategory(year);
      };
    }
  }
};
</script>