<template>
  <div class="summary-box">
    <Row :gutter="16">
      <i-col span="4">
        <InputNumberWithLabel
          :label="summary[0].label"
          @input-number="changeEvent"
          :initValue="summary[0].value"
        />
      </i-col>
      <i-col v-if="(unitType !== '事业单位') && (unitType !== '机关') && (unitType !== '社会团体')" span="4">
        <InputNumberWithLabel
          :label="summary[1].label"
          :initValue="summary[1].value"
          @input-number="changeEvent"
        />
      </i-col>
    </Row>
    <Row :gutter="16">
      <i-col span="4">
        <SelectWithLabel
          :label="summary[0].children.label"
          @select="changeEvent"
          :initValue="summary[0].children.value"
          :list="oneLevelStationCategory"
        />
      </i-col>
      <i-col span="4" v-if="summaryInput">
        <InputNumberWithLabel
          :label="summaryInput.label"
          @input-number="changeEvent"
          :initValue="summaryInput.value"
        />
      </i-col>
      <i-col span="8">
        <Alert type="error">
          注意
          <span slot="desc">
            填写完当前的人员类别后，还可以切换人员类别菜单，继续填写当年的其他人员类别。
            <Icon type="help-circled" size="14"></Icon>
          </span>
        </Alert>
      </i-col>
    </Row>

    <Divider />

    <!-- <div
			v-for="(it, i) in summaryDetail"
			:class="{ 'none': !(it.prop === summary[0].children.value) }"
    :key='i'>-->
    <Row
      v-for="(item, index) in getSummaryObjCombin"
      :key="(commitFunction + summary[0].children.value + index)"
      :gutter="16"
    >
      <div v-if="item.children">
        <span class="input-combine-box-title">{{ item.label }}</span>
        <div>
          <i-col
            span="4"
            v-for="(opationItem, opationIndex) in item.children"
            :key="(item.label+opationItem.label+opationIndex)"
          >
            <InputNumberWithLabel
              :label="opationItem.label"
              :initValue="opationItem.value"
              :propIndex="index"
              :index="opationIndex"
              @input-number="changeEvent"
              :key="'input' + item.label+index+opationIndex"
            />
          </i-col>
        </div>
      </div>
      <div v-else>
        <i-col>
          <GangWeiLeiBie
            :label="item.label"
            :initValue="item.value"
            :cateData="twoLevelStationCategory"
            :index="index"
            @station="changeEvent"
          />
        </i-col>
      </div>
    </Row>
    <Row>
      <i-col span='8'>
        <Alert type="error">
          注意
          <span slot="desc">
            填写完当前的人员类别后，还可以切换人员类别菜单，继续填写当年的其他人员类别。
            <Icon type="help-circled" size="14"></Icon>
          </span>
        </Alert>
      </i-col>
    </Row>
  </div>
  <!-- </div> -->
</template>
<style scoped>
.summary-box {
  overflow: auto;
  overflow-x: hidden;
  min-height: 100vh;
}

.input-combine-box-title {
  display: block;
  font-size: 20px;
  margin-bottom: 10px;
  margin-left: 8px;
  font-weight: 700;
}
</style>
<script>
import InputNumberWithLabel from "../components/InputNumberWithLabel.vue";
import SelectWithLabel from "../components/SelectWithLabel";
import GangWeiLeiBie from "../components/GangWeiLeiBie.vue";

export default {
  props: [
    "year",
    "commitFunction",
    "summary",
    "getSummaryObjCombin",
    "summaryInput",
    "twoLevelStationCategory"
  ],

  components: {
    InputNumberWithLabel,
    GangWeiLeiBie,
    SelectWithLabel
  },

  data() {
    return {};
  },
  methods: {
    changeEvent({ value, index, propIndex, label }) {
      this.$store.commit(this.commitFunction, {
        value,
        year: this.year,
        index,
        propIndex,
        label
      });
    }
  },
  computed: {
    oneLevelStationCategory() {
      return this.$store.getters.oneLevelStationCategory;
    },

    unitType() {
      return this.$store.getters.unit;
    }
  }
};
</script>
