<template>
	<div>
		<div class="box">
			<div v-if="$store.state.unitType != '事业单位' && $store.state.unitType != '机关' && $store.state.unitType != '社会团体'"
			 class="box-item">
				<Card class="card" :bordered="false">
					<p slot="title">当年年度产值（万元）</p>
					<div class="item-box">
						<InputNumberWithLabel v-model="form['当年年度产值（万元）']" :initValue="initObj['当年年度产值（万元）']"></InputNumberWithLabel>
					</div>
				</Card>
			</div>
			<div class="box-item">
				<Card class="card" :bordered="false">
					<p slot="title">职工人数</p>
					<div class="item-box">
						<InputNumberWithLabel v-model="form['职工人数']" :initValue="initObj['职工人数']"></InputNumberWithLabel>
					</div>
				</Card>
			</div>

			<div class="box-item">
				<Card class="card" :bordered="false">
					<p slot="title">性别结构</p>
					<div class="input-box">
						<InputNumberWithLabel label="男" v-model="form['性别结构']['男']" :initValue="initObj['性别结构']['男']"></InputNumberWithLabel>
						<InputNumberWithLabel label="女" v-model="form['性别结构']['女']" :initValue="initObj['性别结构']['女']"></InputNumberWithLabel>
					</div>
				</Card>
			</div>
			<div class="box-item">
				<Card class="card" :bordered="false">
					<p slot="title">年龄结构</p>
					<div class="input-box">
						<InputNumberWithLabel label="25岁以下" v-model="form['年龄结构']['25岁以下']" :initValue="initObj['年龄结构']['25岁以下']"></InputNumberWithLabel>
						<InputNumberWithLabel label="26-35岁" v-model="form['年龄结构']['26-35岁']" :initValue="initObj['年龄结构']['26-35岁']"></InputNumberWithLabel>
						<InputNumberWithLabel label="36-45岁" v-model="form['年龄结构']['36-45岁']" :initValue="initObj['年龄结构']['36-45岁']"></InputNumberWithLabel>
						<InputNumberWithLabel label="46-55岁" v-model="form['年龄结构']['46-55岁']" :initValue="initObj['年龄结构']['46-55岁']"></InputNumberWithLabel>
						<InputNumberWithLabel label="56岁以上" v-model="form['年龄结构']['56岁以上']" :initValue="initObj['年龄结构']['56岁以上']"></InputNumberWithLabel>
					</div>
				</Card>
			</div>
			<div class="box-item">
				<Card class="card" :bordered="false">
					<p slot="title">学历结构</p>
					<div class="input-box">
						<InputNumberWithLabel label="博士研究生" v-model="form['学历结构']['博士研究生']" :initValue="initObj['学历结构']['博士研究生']"></InputNumberWithLabel>
						<InputNumberWithLabel label="硕士研究生" v-model="form['学历结构']['硕士研究生']" :initValue="initObj['学历结构']['硕士研究生']"></InputNumberWithLabel>
						<InputNumberWithLabel label="本科" v-model="form['学历结构']['本科']" :initValue="initObj['学历结构']['本科']"></InputNumberWithLabel>
						<InputNumberWithLabel label="大专" v-model="form['学历结构']['大专']" :initValue="initObj['学历结构']['大专']"></InputNumberWithLabel>
						<InputNumberWithLabel label="大专以下" v-model="form['学历结构']['大专以下']" :initValue="initObj['学历结构']['大专以下']"></InputNumberWithLabel>
					</div>
				</Card>
			</div>
			<div class="box-item">
				<Card class="card" :bordered="false">
					<p slot="title">薪酬（元/月）</p>
					<div class="input-box xinchou">
						<div class="xinchou-label">
							<InputNumberWithLabel label="三千以下" v-model="form['薪酬（元/月）']['三千以下']" :initValue="initObj['薪酬（元/月）']['三千以下']"></InputNumberWithLabel>
						</div>
						<div class="xinchou-label">
							<InputNumberWithLabel label="三千至四千" v-model="form['薪酬（元/月）']['三千至四千']" :initValue="initObj['薪酬（元/月）']['三千至四千']"></InputNumberWithLabel>

						</div>
						<div class="xinchou-label">
							<InputNumberWithLabel label="四千至五千" v-model="form['薪酬（元/月）']['四千至五千']" :initValue="initObj['薪酬（元/月）']['四千至五千']"></InputNumberWithLabel>

						</div>
						<div class="xinchou-label">
							<InputNumberWithLabel label="五千至六千" v-model="form['薪酬（元/月）']['五千至六千']" :initValue="initObj['薪酬（元/月）']['五千至六千']"></InputNumberWithLabel>

						</div>
						<div class="xinchou-label">
							<InputNumberWithLabel label="六千至八千" v-model="form['薪酬（元/月）']['六千至八千']" :initValue="initObj['薪酬（元/月）']['六千至八千']"></InputNumberWithLabel>

						</div>
						<div class="xinchou-label">
							<InputNumberWithLabel label="八千至一万" v-model="form['薪酬（元/月）']['八千至一万']" :initValue="initObj['薪酬（元/月）']['八千至一万']"></InputNumberWithLabel>

						</div>
						<div class="xinchou-label">
							<InputNumberWithLabel label="一万至一万二" v-model="form['薪酬（元/月）']['一万至一万二']" :initValue="initObj['薪酬（元/月）']['一万至一万二']"></InputNumberWithLabel>

						</div>
						<div class="xinchou-label">
							<InputNumberWithLabel label="一万二至一万五" v-model="form['薪酬（元/月）']['一万二至一万五']" :initValue="initObj['薪酬（元/月）']['一万二至一万五']"></InputNumberWithLabel>

						</div>
						<div class="xinchou-label">
							<InputNumberWithLabel label="一万五至两万" v-model="form['薪酬（元/月）']['一万五至两万']" :initValue="initObj['薪酬（元/月）']['一万五至两万']"></InputNumberWithLabel>

						</div>
						<div class="xinchou-label">
							<InputNumberWithLabel label="两万以上" v-model="form['薪酬（元/月）']['两万以上']" :initValue="initObj['薪酬（元/月）']['两万以上']"></InputNumberWithLabel>

						</div>
					</div>
				</Card>
			</div>
		</div>
		<GangWeiLeiBie v-model="form['人员类别']" :initValue="initObj['人员类别']"></GangWeiLeiBie>
	</div>
</template>
<style scoped>
	.xinchou {
		display: flex;
		flex-wrap: wrap;
	}

	.xinchou-label {}

	.box {
		display: flex;
		flex-wrap: wrap;
		margin: 10px 100px 5px 100px;
	}

	.box-item {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		margin: 0 20px 10px 0;
	}

	.input-box {
		display: flex;
	}

	.card {
		box-sizing: border-box;
	}
</style>
<script>
	import InputNumberWithLabel from '../components/InputNumberWithLabel.vue';
	import GangWeiLeiBie from '../components/GangWeiLeiBie.vue';
	export default {
		components: {
			InputNumberWithLabel,
			GangWeiLeiBie,
		},
		props: {
			initObj: Object
		},
		created() {
			console.log('init?', this.$props.initObj)
		},
		data() {
			return {
				form: {
					'职工人数': null,
					'上一年度产值（万元）': null,
					'研发经费投入（万元）': null,
					'新产品销售收入（万元）': null,
					'专利申请授权数': null,
					'性别结构': {
						'男': null,
						'女': null
					},
					'年龄结构': {
						'25岁以下': null,
						'26-35岁': null,
						'36-45岁': null,
						'46-55岁': null,
						'56岁以上': null
					},
					'学历结构': {
						"博士研究生": null,
						"硕士研究生": null,
						"本科": null,
						"大专": null,
						"大专以下": null
					},
					"薪酬（元/月）": {
						"三千以下": null,
						"三千至四千": null,
						"四千至五千": null,
						"五千至六千": null,
						"六千至八千": null,
						"八千至一万": null,
						"一万至一万二": null,
						"一万二至一万五": null,
						"一万五至两万": null,
						"两万以上": null
					},
					'人员类别': []
				},
			}
		},
		watch: {
			form: {
				handler(val, oldval) {
					this.$emit('input', this.$data.form)
				},
				deep: true
			}
		}
	}
</script>
