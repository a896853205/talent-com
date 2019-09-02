<template>
  <div class="sum-out-box">
    <Row :gutter="16">
      <i-col span="4">
        <InputNumberWithLabel
          :label="sumOut[0].label"
          @input-number="changeEvent"
          :initValue="sumOut[0].value"
        />
      </i-col>
    </Row>
    <Row :gutter="16">
      <i-col span="4">
        <SelectWithLabel
          :label="sumOut[0].children.label"
          @select="changeEvent"
          :initValue="sumOut[0].children.value"
          :list="sumOut[0].children.list"
        />
      </i-col>
      <i-col
        span="4"
        v-for="(it, i) in sumOutDetailTotalNum"
        :key="i"
        :class="{ 'none': !(it.prop === sumOut[0].children.value) }"
      >
        <InputNumberWithLabel :label="it.label" @input-number="changeEvent" :initValue="it.value" />
      </i-col>
    </Row>

    <Divider />

    <div
      v-for="(it, i) in sumOutDetail"
      :class="{ 'none': !(it.prop === sumOut[0].children.value)}"
      :key="i"
    >
      <Row
        v-for="(item, index) in it.children"
        :key="index"
        :gutter="16">
        <div v-if="item.children">
          <span class="input-combine-box-title">{{ item.label }}</span>
          <div>
            <i-col
              span="4"
              v-for="(opationItem, opationIndex) in item.children"
              :key="opationIndex"
            >
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
        <!-- 这里判断是类别岗位类型 -->
        <div v-else-if="item.type === 'cate'">
          <i-col>
            <GangWeiLeiBie
              :label="item.label"
              :initValue="item.value"
              :cateData="item.data"
              :index="index"
              @station="changeEvent"
            />
          </i-col>
        </div>
        <!-- 这里判断是多选类型 -->
        <div v-else-if="item.type === 'checkBox'">
          <i-col span=4>
            <MultiSelectWithLabel 
              :label='item.label'
              :initValue="item.value"
              @checkBox='changeEvent'
              :index="index"
              :list="item.list"
            />
          </i-col>
        </div>
      </Row>
    </div>
  </div>

</template>
<style scoped>
.sum-out-box {
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
import GangWeiLeiBie from "../components/GangWeiLeiBie.vue";
import MultiSelectWithLabel from '../components/until/MultiSelectWithLabel';
import SelectWithLabel from "../components/SelectWithLabel";

export default {
  props: ["year", 'commitFunction', 'sumOut'],
  components: {
    InputNumberWithLabel,
    GangWeiLeiBie,
    MultiSelectWithLabel,
    SelectWithLabel
  },
  data() {
    return {};
  },
  computed: {
     // 选出正确的详细信息
    sumOutDetail() {
      return this.sumOut[0].children.children;
    },

    sumOutDetailTotalNum() {
      return this.sumOut[0].children.inputChildren;
    },
  },
  methods: {
    changeEvent ({ value, index, propIndex, label }) {
      this.$store.commit(this.commitFunction, {
        value,
        year: this.year,
        index,
        propIndex,
        label
      });
    },
  }
};
</script>
