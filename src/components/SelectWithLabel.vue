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
		name: 'SelectWithLabel',
		props: {
			label: String,
			list: Array,
			initValue: String,
			index: Number,
		},
		data() {
			return {
				model1: ''
			}
		},
		mounted() {
			this.$data.model1 = this.$props.initValue
			// this.emit()
		},
		methods: {
			emit() {
				// if (this.$data.model1 === undefined) {
				// 	this.$data.model1 = null
				// } else {
				this.$emit('select', {
					value: this.$data.model1,
					label: this.label,
					index: this.index
				});
			}
		}
	}
</script>

<style>
</style>
