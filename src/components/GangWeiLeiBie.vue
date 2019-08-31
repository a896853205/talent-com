<template>
	<div class="cbox">
		<div class="box-item">
			<Card class="card" :bordered="false">
				<div class="add-box">
					<p slot="title" class="add-box-title">{{label}}</p>
					<div class="add">
						<i-button type="info" @click="addHandle">添加</i-button>
					</div>
				</div>
				<div class="input-box">
					<div class="input-box-cascader" v-for="(item, index) in form" :key="item.id" :name="item['人员类别']">
						<CascaderWithInputWithLabel
							:initObj="item[label]"
							style="width:300px;margin-right: 30px"
							:data="gangWeiLeiBie"
							@cascader='getCascaderData'
							:index='index' />
						<div class="del-btn">
							<i-button type="error" style="margin-right: 10px" v-if="item.id>0" shape="circle" @click="delHandle(item.id)">删除</i-button>
							<div style="width: 56px;margin-right: 10px" v-else></div>
						</div>
					</div>
				</div>
			</Card>
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
		display: flex;
		align-items: center;
		height: 50px;
		font-size: 14px;
		color: #17233d;
		font-weight: 700;
		padding-left: 3px;
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
	import { 
		jobCategoryJiGuan, 
		jobCategoryQiYe,
		jobCategorySocial,
		jobCategoryCareer
	} from '../assets/category';

	export default {
		props: {
			initValue: Array,
			label: String
		},
		data() {
			return {
				form: [{
					id: 0,
					[this.label]: {}
				}],
				gangWeiLeiBie: [],
				num: 1
			}
		},
		components: {
			CascaderWithInputWithLabel,
		},
		methods: {
			addHandle() {
				let num = this.$data.num++;

				this.$data.form.push({
					id: num,
					[this.label]: {}
				})
			},
			delHandle(index) {
				let cur_index = this.$data.form.findIndex(item => {
					return item.id === index;
				})

				this.$data.form.splice(cur_index, 1)
			},
			getCascaderData ({ obj, index }) {
				this.$data.form[index][this.label] = obj;
			}
		},
		created() {
			// 这里判断四类类别
			// 机关,社会团体,事业单位,剩下全部
			switch (this.$store.state.form._basic['单位性质'].value) {
				case '机关':
					this.gangWeiLeiBie = jobCategoryJiGuan;
					break; 
				case '社会团体':
					this.gangWeiLeiBie = jobCategorySocial;
					break;
				case '事业单位':
					this.gangWeiLeiBie = jobCategoryCareer;
					break;
				default:
					this.gangWeiLeiBie = jobCategoryQiYe;
			}
			
			for (let i = 0; i < this.$props.initValue.length; i++) {
				this.$data.form[i][this.label] = this.$props.initValue[i];

				if (i < this.$props.initValue.length - 1) {
					this.addHandle()
				}
			}
		},
		watch: {
			form: {
				handler(val, oldval) {
					let emitArray = [];

					for (var item of this.$data.form) {
						emitArray.push(item[this.label])
					}

					this.$emit('station', {
						value: emitArray,
						key: this.label
					});
				},
				deep: true
			}
		}
	}
</script>
