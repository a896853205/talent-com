<template>
	<Form label-position="top" style="text-align: left;">
		<Form-item :label="label">
			<Select v-model="model1" multiple @on-change="emit">
				<Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
			</Select>
		</Form-item>
	</Form>
</template>

<script>
	export default {
		name: 'MultiSelectWithLabel',
		props: {
			label: String,
			list: Array,
			initValue: Array,
			index: Number
		},
		data() {
			return {
				model1: []
			}
		},
		mounted() {
			this.$data.model1 = this.$props.initValue
			// this.emit()
		},
		methods: {
			emit() {
				this.$emit('checkBox', { value: this.$data.model1, key: this.label, index: this.index })
			}
		}
	}
</script>

<style>
</style>
