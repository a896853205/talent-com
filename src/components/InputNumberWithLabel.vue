<template>
	<Form label-position="top" style="text-align: left;">
		<Form-item :label="label">
			<Input-number v-model="value" style="width:100px; margin-right: 5px" @on-change="emit()"></Input-number>
		</Form-item>
	</Form>
</template>

<script>
	export default {
		name: 'InputNumberWithLabel',
		props: {
			label: String,
			initValue: Number
		},
		data() {
			return {
				value: null
			}
		},
		mounted() {
			this.$data.value = this.$props.initValue
			this.emit()
		},
		methods: {
			emit() {
				if (this.$data.value === undefined || this.$data.value === null){
					this.$data.value = null
				}
				this.$emit('input', this.$data.value)
			}
		}
	}
</script>

<style>
</style>
