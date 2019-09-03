<template>
  <Form label-position="top" style="text-align: left;">
    <Form-item :label="label">
      <Input-number
        :key="key"
        v-model="value"
        style="width:100%; margin-right: 5px"
        @on-change="emit()"
      ></Input-number>
    </Form-item>
  </Form>
</template>

<script>
export default {
  name: "InputNumberWithLabel",
  props: {
    label: String,
    initValue: Number,
    propKey: String,
    index: Number,
    propIndex: Number,
    key: String
  },
  data() {
    return {
      value: 0
    };
  },
  methods: {
    emit() {
      this.$emit("input-number", {
        value: this.$data.value,
        label: this.label,
        index: this.index,
        propIndex: this.propIndex
      });
    }
  },
  watch: {
    initValue: {
      handler: function(val, oldval) {
        this.$data.value = val;
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style>
</style>
