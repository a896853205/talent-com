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
				value1: [],
				value2: 0,
				vb: true,
			}
		},
		mounted() {

			if (JSON.stringify(this.$props.initObj) !== "{}" && this.$props.initObj !== null) {
				
				if (this.$props.initObj.cas === null || this.$props.initObj.cas === undefined) {
					this.$data.value1 = []
				} else {
					this.$data.value1 = this.$props.initObj.cas
				}

				if (!this.$props.initObj.num) {
					this.$data.value2 = 0;
				} else {
					this.$data.value2 = this.$props.initObj.num
				}
			}

			this.emit(this);
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
				let obj = {
					cas: _this.$data.value1,
					num: _this.$data.value2
				}
				debugger;
				_this.$emit('cascader', { obj, key: _this.label, index: _this.index })
			}
		}
	}
</script>

<style>
</style>
