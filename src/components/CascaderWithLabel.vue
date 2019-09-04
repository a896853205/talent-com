<template>
  <Form label-position="top" style="text-align: left;">
    <Form-item :label="label">
      <Cascader 
				:data="data"
				v-model="value1"
				@on-change="emit"
				:change-on-select="false" />
    </Form-item>
  </Form>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: "CascaderWithLabel",
  props: {
    label: String,
    data: Array,
    initValue: Array,
    index: Number,
    propIndex: Number
  },
  data() {
    return {
      value1: []
    };
  },
  methods: {
    emit(value, dat) {
      this.$data.value1 = value;
      
      this.$emit("cascader", {
        value: this.$data.value1,
        label: this.label,
        index: this.index,
        propIndex: this.propIndex
			});
		}
	},
	watch: {
    initValue: {
      handler: function(val, oldval) {
        console.log('casca', val);
				if (val) {
					// 不知道为什么需要异步才能好使
					setTimeout(() => {
						this.$data.value1 = val;
					});
				}
      },
      immediate: true,
      deep: true
		}
  }
};
</script>

<style>
</style>
