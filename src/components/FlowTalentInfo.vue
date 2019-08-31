<template>
	<div class="container">
		<div v-for="(item, index) in outStatus" :key="item.id">
			<Card :bordered="false">
				<div class="del-box">
					<p class="del-box-title" slot="title">单位流失人才信息表 {{index+1}}</p>
					<div class="del-btn">
						<i-button type="error" v-if="item.id > 0" style="margin-right: 10px" shape="circle" @click="delHandle(item.id)">删除</i-button>
					</div>
				</div>
				<div class="abox">
					<div class="item" v-for='(value, key) in item.info' :key='key' :class='{"none": (value.special)}'>
						<SelectWithLabel v-if='value.type === "select"' :label='key' :initValue='value.value' :v-model='value.value' :list="value.list" />
						<CascaderWithLabel v-if='value.type === "cascader"' :label='key' :initValue='value.value' :v-model="value.value" :data="value.data" />
						<InputWithLabel v-if='value.type === "input"' :label='key' :initValue='value.value' :v-model='value.value' />
						<InputNumberWithLabel v-if='value.type === "number"' :label='key' :initValue='value.value' :v-model='value.value' />
					</div>
					<div className='box-item'>
						<GangWeiLeiBie v-model="item.info['人员类别'].value" :initValue="item.info['人员类别'].value" />
					</div>
				</div>
			</Card>
		</div>
		<div class="add">
			<i-button class="add-btn" type="info" @click="addHandle">添加</i-button>
		</div>
	</div>
</template>
<style scoped>
	.del-box {
		display: flex;
	}

	.del-box-title {
		display: flex;
		align-items: center;
		height: 50px;
		font-size: 14px;
		color: #17233d;
		font-weight: 700;
		padding-left: 15px;
	}

	.del-btn {
		display: flex;
		align-items: center;
		margin-left: 30px;
	}

	.container {
		padding: 30px 50px 20px 50px;
	}

	.abox {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.item {
		width: 200px;
		margin-right: 10px;
	}

	.add {
		text-align: center;
		margin-top: 10px;
	}

	.add-btn {
		width: 100px;
	}
</style>
<script>
	import InputWithLabel from '../components/InputWithLabel.vue';
	import InputNumberWithLabel from '../components/InputNumberWithLabel.vue';
	import SelectWithLabel from '../components/SelectWithLabel.vue';
	import CascaderWithLabel from '../components/CascaderWithLabel.vue';
	import GangWeiLeiBie from '../components/GangWeiLeiBie.vue';
	import { outStatusInfo } from '../store/init/form';

	export default {
		components: {
			InputWithLabel,
			SelectWithLabel,
			CascaderWithLabel,
			InputNumberWithLabel,
			GangWeiLeiBie
		},
		methods: {
			addHandle() {
				let num = this.$data.num++;
				this.outStatus.push({
					id: num,
					info: outStatusInfo,
				});
			},
			delHandle(index) {
				let cur_index = this.outStatus.findIndex(item => {
					return item.id === index
				});
				this.outStatus.splice(cur_index, 1)
			}
		},
		data() {
			return {
				num: 1,
			}
		},

		beforeMount() {
			let outStatusArr = this.$store.state.form._out_status;
      this.$data.num = outStatusArr[outStatusArr.length - 1].id + 1
		},
		computed: {
			outStatus() {
				return this.$store.state.form._out_status;
			}
		}
	}
</script>
