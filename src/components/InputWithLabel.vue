<template>
	<Form label-position="top" style="text-align: left;">
		<Form-item :label="label">
			<Input v-model="value" @on-change="emit" />
		</Form-item>
	</Form>
</template>

<script>
	export default {
		name: 'InputWithLabel',
		props: {
			label: String,
			initValue: String,
			index: Number,
			propIndex: Number,
		},
		data() {
			return {
				value: ''
			}
		},
		mounted() {
			this.$data.value = this.$props.initValue;
			// this.emit()
		},
		methods: {
			emit() {
				// if (this.$data.value === undefined || this.$data.value === '') {
				// 	this.$data.value = null
				// }
				this.$emit('input', {
					value: this.$data.value,
					label: this.label,
					index: this.index,
					propIndex: this.propIndex,
				});
			}
		}
	}
</script>

<style>
</style>
