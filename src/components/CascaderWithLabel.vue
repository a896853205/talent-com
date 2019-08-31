<template>
	<Form label-position="top" style="text-align: left;">
		<Form-item :label="label">
			<Cascader :data="data" v-model="value1" @on-visible-change="emit()" change-on-select></Cascader>
		</Form-item>
	</Form>
</template>

<script>
	export default {
		name: 'CascaderWithLabel',
		props: {
			label: String,
			data: Array,
			initValue: Array,
			index: Number
		},
		data() {
			return {
				model1: '',
				value1: []
			}
		},
		mounted() {
			if (this.$props.initValue !== undefined && this.$props.initValue !== null) {
				this.$data.value1 = this.$props.initValue
			}
			// this.emit()
		},
		methods: {
			emit() {
				this.$emit('cascader', {
					value: this.$data.value1,
					key: this.label,
					index: this.index
				});
			}
		}
	}
</script>

<style>
</style>
