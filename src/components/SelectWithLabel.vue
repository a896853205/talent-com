<template>
	<Form label-position="top" style="text-align: left;">
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
			initValue: String
		},
		data() {
			return {
				model1: ''
			}
		},
		mounted() {
			this.$data.model1 = this.$props.initValue
			this.emit()
		},
		methods: {
			emit() {
				if (this.$data.model1 === undefined) {
					this.$data.model1 = null
				} else {
					this.$emit('input', this.$data.model1)
				}
			}
		}
	}
</script>

<style>
</style>
