<template>
	<Form label-position="top" style="text-align: left;">
		<Form-item :label="label">
			<DatePicker 
				type="date"
				placeholder="Select date"
				style="width:100%;"
				v-model="value"
				@on-change='emit'
				format="yyyy/MM/dd"
				 />
		</Form-item>
	</Form>
</template>

<script>
	export default {
		name: 'InputDateWithLabel',
		props: {
			label: String,
			initValue: String,
			index: Number,
		},
		data() {
			return {
				value: ''
			}
		},
		mounted() {
			this.$data.value = this.$props.initValue
			// this.emit()
		},
		methods: {
			emit() {
				// if (this.$data.value === undefined || this.$data.value === '') {
				// 	this.$data.value = null
				// }

				this.$emit('date', { value: this.$data.value, key: this.label, index: this.index })
			}
		}
	}
</script>

<style>
</style>
