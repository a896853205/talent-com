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
          :list="oneLevelStationCategory"
        />
      </i-col>
      <i-col
        span="4"
        v-if="SumOutInput">
        <InputNumberWithLabel
          :label="SumOutInput.label"
          @input-number="changeEvent"
          :initValue="SumOutInput.value" />
      </i-col>
      <i-col span="8">
        <Alert type="error">
          注意
          <span slot="desc">
            请点击“人员类别”右侧箭头，每选择一种人员类别，对应的性别结构、年龄结构、学历结构、薪酬结构、岗位级别均为当前人员类别的人数。例如：选定专业技术人员10人，则性别结构填写男6人，女4人；岗位级别：工程技术人员-正高级2人，工程技术人员-中级3人，会计人员-中级5人。
            <Icon type="help-circled" size="14"></Icon>
          </span>
        </Alert>
      </i-col>
    </Row>

    <Divider />

    <Row
      v-for="(item, index) in getSumOutObjCombin"
      :key="(sumOut[0].children.value + index)"
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
            :cateData="twoLevelSumOutStationCategory"
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
      <div v-else-if="item.type === 'input'">
        <i-col span=4>
          <InputWithLabel 
            :label='item.label'
            :initValue="item.value"
            @input='changeEvent'
            :index="index"
          />
        </i-col>
      </div>
    </Row>
    <Row>
      <i-col span="8">
        <Alert type="error">
          注意
          <span slot="desc">
            请填报人员注意，每填写一种人员类别及其详细结构数据后，请返回上方第二行“人员类别”选项，继续填写下一种人员类别及其详细结构数据，直到涵盖本单位全部人员类别为止，再继续填报下一年数据。
            <Icon type="help-circled" size="14"></Icon>
          </span>
        </Alert>
      </i-col>
    </Row>
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
import InputWithLabel from '../components/InputWithLabel';

export default {
  props: [
    "year",
    'commitFunction',
    'sumOut',
    'getSumOutObjCombin',
    'SumOutInput',
    'twoLevelSumOutStationCategory'
    ],
  components: {
    InputNumberWithLabel,
    GangWeiLeiBie,
    MultiSelectWithLabel,
    SelectWithLabel,
    InputWithLabel
  },
  computed: {
    oneLevelStationCategory() {
      return this.$store.getters.oneLevelStationCategory;
    },
  },
  methods: {
    changeEvent ({ value, index, propIndex, label }) {

      // debugger;
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
