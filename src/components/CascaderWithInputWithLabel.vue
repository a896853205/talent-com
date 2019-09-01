<template>
	<Form label-position="top" style="text-align: left;">
		<Form-item :label="label">
			<Row>
				<i-col span="16">
					<Cascader 
						:transfer="vb"
						:data="data"
						:value="value1"
						@on-change="cascaderEvent"
						 />
				</i-col>
				<i-col span="8" >
					<Input-number
						:value="value2"
						@on-change="inputEvent"
						style="width:95%; margin-bottom: 10px; margin-left: 5%; margin-right: 5px;" />
				</i-col>
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
			initObj: Object,
			index: Number,
		},
		data() {
			return {
				model1: '',
				value1: [],
				value2: null,
				vb: true,
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
			cascaderEvent(value, selectedData) {
				this.$data.value1 = value;
				this.$options.methods.emit(this);
			},
			inputEvent(value) {
				this.$data.value2 = value;
				this.$options.methods.emit(this);
			},
			emit(_this) {
				console.log(_this.$data.value1);
				let obj = {
					cas: _this.$data.value1,
					num: _this.$data.value2
				}
				_this.$emit('cascader', { obj, key: _this.label, index: _this.index })
			}
		}
	}
</script>

<style>
</style>
