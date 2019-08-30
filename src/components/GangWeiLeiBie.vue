<template>
	<div class="cbox">
		<div class="box-item">
			<Card class="card" :bordered="false">
				<div class="add-box">
					<p slot="title" class="add-box-title">人员类别</p>
					<div class="add">
						<i-button type="info" @click="addHandle">添加</i-button>
					</div>
				</div>
				<div class="input-box">
					<div class="input-box-cascader" v-for="item in form" :key="item.id" :name="item['人员类别']">
						<CascaderWithInputWithLabel :initObj="item['人员类别']" style="width:300px;margin-right: 30px"
						 v-model="item['人员类别']" :data="gangWeiLeiBie"></CascaderWithInputWithLabel>
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
	import { jobCategory } from '../assets/category';
	export default {
		props: {
			initValue: Array
		},
		data() {
			return {
				form: [{
					id: 0,
					'人员类别': {}
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
				let num = this.$data.num++
				this.$data.form.push({
					id: num,
					'人员类别': {}
				})
			},
			delHandle(index) {
                console.log('del', index);
				var cur_index = this.$data.form.findIndex(item => {
					return item.id === index
				})
				this.$data.form.splice(cur_index, 1)
			}
		},
		created() {
			this.gangWeiLeiBie = jobCategory;
			for (let i = 0; i < this.$props.initValue.length; i++) {
				this.$data.form[i]['人员类别'] = this.$props.initValue[i]
				if (i < this.$props.initValue.length - 1) {
					this.addHandle()
				}
			}
		},
		updated() {

		},
		watch: {
			form: {
				handler(val, oldval) {
					let emitArray = []
					for (var item of this.$data.form) {
						emitArray.push(item['人员类别'])
					}
					this.$emit('input', emitArray)
				},
				deep: true
			}
		}
	}
</script>
