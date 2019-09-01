<template>
  <div class="company-box">
    <Row type="flex" justify="start" align="middle" :gutter="30">
      <i-col span="4" v-for="(item, index) in basic" :key="index">
        <SelectWithLabel
          v-if="item.type === 'select'"
          :label="item.label"
          :initValue="item.value"
          @select="changeEvent"
          :list="item.list"
          :index='index'
        />
        <CascaderWithLabel
          v-if="item.type === 'cascader'"
          :label="item.label"
          :initValue="item.value"
          @cascader="changeEvent"
          :data="item.data"
          :index='index'
        />
        <InputWithLabel
          v-if="item.type === 'input'"
          :label="item.label"
          :initValue="item.value"
          @input="changeEvent"
          :index='index'
        />
      </i-col>
    </Row>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: flex-start;
  /*space-between、space-around*/
  padding: 0 100px;
}

.item {
  width: 300px;
  height: 80px;
  margin-right: 10px;
}
.company-box {
  padding: 30px;
}
</style>
<script>
import InputWithLabel from "../components/InputWithLabel.vue";
import SelectWithLabel from "../components/SelectWithLabel.vue";
import CascaderWithLabel from "../components/CascaderWithLabel.vue";

export default {
  components: {
    InputWithLabel,
    SelectWithLabel,
    CascaderWithLabel
  },
  methods: {
    changeEvent({ value, index, label }) {
      this.$store.commit("setBasic", { value, index, label });
    }
  },
  created() {},
  mounted() {},
  computed: {
    basic: {
      get() {
        return this.$store.state.form._basic;
      }
    }
  }
};
</script>
