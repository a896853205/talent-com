<template>
	<div>
		<div class="box">
			<div class="item">
				<InputWithLabel label="单位名称:" v-model="form['单位名称']" :initValue="initObj['单位名称']"/>
			</div>
			<div class="item">
				<InputWithLabel label="统一社会信用代码（或组织机构代码）：" :initValue="initObj['统一社会信用代码']" v-model="form['统一社会信用代码']" />
			</div>
			<div class="item">
				<SelectWithLabel label="所属地域：" :initValue="initObj['所属地域']" v-model="form['所属地域']" :list="suoShuDiYu"></SelectWithLabel>
			</div>
			<div class="item">
				<SelectWithLabel label="所属行业：" :initValue="initObj['所属行业']" v-model="form['所属行业']" :list="suoShuHangYe"></SelectWithLabel>
			</div>
			<div class="item">
				<CascaderWithLabel label="行业分类" :initValue="initObj['行业分类']" v-model="form['行业分类']" :data="industryCategory"></CascaderWithLabel>
			</div>
			<div class="item">
				<SelectWithLabel label="单位性质：" :initValue="initObj['单位性质']" v-model="form['单位性质']" :list="danWeiXingZhi"></SelectWithLabel>
			</div>
			<div class="item">
				<InputWithLabel label="填报人:" :initValue="initObj['填报人']" v-model="form['填报人']" />
			</div>
			<div class="item">
				<InputWithLabel label="联系电话:" :initValue="initObj['联系电话']" v-model="form['联系电话']" />
			</div>
			<div class="item">
				<InputWithLabel label="QQ:" :initValue="initObj['QQ']" v-model="form['QQ']" />
			</div>
			<div class="item">
				<InputWithLabel label="微信:" :initValue="initObj['微信']" v-model="form['微信']" />
			</div>
			<div class="item">
				<InputWithLabel label="电子邮箱:" :initValue="initObj['电子邮箱']" v-model="form['电子邮箱']" />
			</div>
			<div class="item">

			</div>
		</div>
	</div>
</template>
<style scoped>
	.box {
		display: flex;
		flex-wrap: wrap;
		margin-top: 30px;
		justify-content: space-around;
		/*space-between、space-around*/
		padding: 0 100px;
	}

	.item {
		width: 300px;
		height: 80px;
		margin-right: 10px;
	}

	.none {
		display: none;
	}
</style>
<script>
	import InputWithLabel from '../components/InputWithLabel.vue';
	import SelectWithLabel from '../components/SelectWithLabel.vue';
	import CascaderWithLabel from '../components/CascaderWithLabel.vue';
	import category from '../assets/data/category';

	export default {
		components: {
			InputWithLabel,
			SelectWithLabel,
			CascaderWithLabel,
		},
		props: {
			initObj: Object
		},
		data() {
			return {
				form: {},
				suoShuDiYu: [],
				suoShuHangYe: [],
				industryCategory: [],
				danWeiXingZhi: [],
			}
		},
		created() {
			this.suoShuDiYu = category.suoShuDiYu;
			this.suoShuHangYe = category.suoShuHangYe;
			this.industryCategory = category.industryCategory;
			this.danWeiXingZhi = category.danWeiXingZhi;
		},
		watch: {
			form: {
				handler(val, oldval) {
					this.emit()
				},
				deep: true
			}
		},
		methods: {
			emit() {
				this.$emit('input', this.$data.form)
			}
		},

	}
</script>
