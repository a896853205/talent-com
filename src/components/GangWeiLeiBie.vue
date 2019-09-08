<template>
	<div class="cbox">
		<div class="box-item">
			<div class="add-box">
				<p slot="title" class="add-box-title">{{label}}</p>
				<div class="add">
					<Button type="info" @click="addHandle">添加</Button>
				</div>
			</div>
			<div class="input-box">
				<div class="input-box-cascader"
					v-for="(item, index) in form"
					:key="item.id">
					<CascaderWithInputWithLabel
						:initObj="item.value"
						style="width:300px;margin-right: 30px"
						:data="cateData"
						@cascader='getCascaderData'
						:index='index' />
					<div class="del-btn">
						<Button type="error" style="margin-right: 10px" v-if="item.id>0" shape="circle" @click="delHandle(item.id)">删除</Button>
						<div style="width: 56px;margin-right: 10px" v-else></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.cbox {
		display: flex;
		flex-wrap: wrap;
		overflow: visible!important;
	}

	.box-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		margin: 0 20px 10px 0;
	}

	.input-box {
		display: flex;
		flex-wrap: wrap;
	}

	.card {
		box-sizing: border-box;
	}

	.add-box {
		display: flex;
	}

	.add-box-title {
		display: block;
		font-size: 20px;
		margin-bottom: 10px;
		font-weight: 700;
	}

	.add {
		display: flex;
		align-items: center;
		margin-left: 30px;
	}

	.input-box-cascader {
		display: flex;
	}
</style>
<script>
	import CascaderWithInputWithLabel from '../components/CascaderWithInputWithLabel.vue';
	
	export default {
		props: {
			initValue: Array,
			label: String,
			cateData: Array,
			index: Number,
		},
		data() {
			return {
				form: [],
				gangWeiLeiBie: [],
				num: 1
			}
		},
		components: {
			CascaderWithInputWithLabel,
		},
		methods: {
			addHandle(value) {
				let num = this.$data.num++;

				if (!value) {
					value = {};
				}
				this.$data.form.push({
					id: num,
					value
				})
			},
			delHandle(index) {
				let cur_index = this.$data.form.findIndex(item => {
					return item.id === index;
				})

				this.$data.form.splice(cur_index, 1)
			},
			getCascaderData ({ obj, index }) {
				this.$data.form[index].value = obj;
			}
		},
		created() {
			// // 这里判断四类类别
			// // 机关,社会团体,事业单位,剩下全部
			// switch (this.$store.state.form._basic['单位性质'].value) {
			// 	case '机关':
			// 		this.gangWeiLeiBie = jobCategoryJiGuan;
			// 		break; 
			// 	case '社会团体':
			// 		this.gangWeiLeiBie = jobCategorySocial;
			// 		break;
			// 	case '事业单位':
			// 		this.gangWeiLeiBie = jobCategoryCareer;
			// 		break;
			// 	default:
			// 		this.gangWeiLeiBie = jobCategoryQiYe;
			// }
			this.$data.form = [];

			if (this.initValue) {
				for (let i = 0; i < this.initValue.length; i++) {
					let num = this.$data.num++;
					
					this.$data.form.push({
						id: num,
						value: this.initValue[i]
					})
				}
				// debugger;
				if (!this.initValue.length) {
					this.addHandle();
				}
			} else {
				this.addHandle();
			}
		},
		watch: {
			form: {
				handler(val, oldval) {
					let emitArray = [];

					for (var item of this.$data.form) {
						emitArray.push(item.value)
					}

					this.$emit('station', {
						value: emitArray,
						label: this.label,
						index: this.index,
					});
				},
				deep: true
			}
		}
	}
</script>
