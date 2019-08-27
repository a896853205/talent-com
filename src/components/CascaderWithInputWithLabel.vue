<template>
	<Form label-position="top" style="text-align: left;">
		<Form-item :label="label">
			<Row>
				<Col span="16">
				<Cascader :transfer="vb" :data="data" v-model="value1" @on-change="emit()" @on-visible-change="emit()" change-on-select></Cascader>
				</Col>
				<Col span="8">
				<Input-number v-model="value2" @on-change="emit()" style="width:95%; margin-bottom: 10px; margin-left: 5%; margin-right: 5px;"></Input-number>
				</Col>
			</Row>
		</Form-item>
	</Form>
</template>

<script>
	export default {
		name: 'CascaderWithInputWithLabel',
		props: {
			label: String,
			data: Array,
			initValue: Array,
			initNum: Number,
			initObj: Object
		},
		data() {
			return {
				model1: '',
				value1: [],
				value2: null,
				vb: true
			}
		},
		mounted() {
			let temp = this.$props.initObj
			if (JSON.stringify(this.$props.initObj) != "{}" && this.$props.initObj !== null) {
				if (this.$props.initObj.cas === null || this.$props.initObj.cas === undefined) {
					this.$data.value1 = []
				} else {
					this.$data.value1 = this.$props.initObj.cas
				}
				this.$data.value2 = this.$props.initObj.num
			}
			this.emit()
		},
		methods: {
			emit() {
				setTimeout(() => {
					var obj = {
						cas: this.$data.value1,
						num: this.$data.value2
					}
					this.$emit('input', obj)
				}, 100)
			}
		}
	}
</script>

<style>
</style>
