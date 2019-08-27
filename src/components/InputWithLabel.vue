<template>
	<Form label-position="top" style="text-align: left;">
		<Form-item :label="label">
			<Input v-model="value" @on-change="emit"></Input>
		</Form-item>
	</Form>
</template>

<script>
	export default {
		name: 'InputWithLabel',
		props: {
			label: String,
			initValue: String
		},
		data() {
			return {
				value: ''
			}
		},
		mounted() {
			this.$data.value = this.$props.initValue
			this.emit()
		},
		methods: {
			emit() {
				if (this.$data.value === undefined || this.$data.value === '') {
					this.$data.value = null
				}
				this.$emit('input', this.$data.value)
			}
		}
	}
</script>

<style>
</style>
