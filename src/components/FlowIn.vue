<template>
  <div class="sum-in-box">
    <Row :gutter="16">
      <i-col span="4">
        <InputNumberWithLabel
          :label="sumIn[0].label"
          @input-number="changeEvent"
          :initValue="sumIn[0].value"
        />
      </i-col>
    </Row>
    <Row :gutter="16">
      <i-col span="4">
        <SelectWithLabel
          :label="sumIn[0].children.label"
          @select="changeEvent"
          :initValue="sumIn[0].children.value"
          :list="oneLevelStationCategory"
        />
      </i-col>
      <i-col span="4" v-if="sumInInput">
        <InputNumberWithLabel
          :label="sumInInput.label"
          @input-number="changeEvent"
          :initValue="sumInInput.value"
        />
      </i-col>
    </Row>

    <Divider />

    <Row
      v-for="(item, index) in getSumInObjCombin"
      :key="(sumIn[0].children.value + index)"
      :gutter="16">
      <div v-if="item.children">
        <span class="input-combine-box-title">{{ item.label }}</span>
        <div>
          <i-col
            span="4"
            v-for="(opationItem, opationIndex) in item.children"
            :key="opationIndex">
            <InputNumberWithLabel
              :label="opationItem.label"
              :initValue="opationItem.value"
              :propIndex="index"
              :index="opationIndex"
              @input-number="changeEvent"
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
  </div>
</template>
<style scoped>
.sum-in-box {
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
    "sumIn",
    "getSumInObjCombin",
    "sumInInput",
    "twoLevelStationCategory"
  ],
  components: {
    InputNumberWithLabel,
    GangWeiLeiBie,
    SelectWithLabel
  },
  computed: {
    oneLevelStationCategory() {
      return this.$store.getters.oneLevelStationCategory;
    },
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
  }
};
</script>
