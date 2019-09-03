<template>
  <Form label-position="top" style="text-align: left;height: 100%;">
    <Form-item :label="label">
      <Select v-model="model1" @on-change="emit">
        <Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </Form-item>
  </Form>
</template>

<script>
export default {
  name: "SelectWithLabel",
  props: {
    label: String,
    list: Array,
    initValue: String,
    index: Number,
    propIndex: Number
  },
  data() {
    return {
      model1: ""
    };
  },
  methods: {
    emit() {
      this.$emit("select", {
        value: this.$data.model1,
        label: this.label,
        index: this.index,
        propIndex: this.propIndex
      });
    }
  },
  watch: {
    initValue: {
      handler: function(val, oldval) {
        this.$data.model1 = val;
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style>
</style>
