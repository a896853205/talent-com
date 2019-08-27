<template>
	<div>

		<div class="box">
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
					<p slot="title">上一年度产值（万元）</p>
					<div class="item-box">
						<InputNumberWithLabel v-model="form['上一年度产值（万元）']" :initValue="initObj['上一年度产值（万元）']"></InputNumberWithLabel>
					</div>
				</Card>
			</div>
			<div class="box-item">
				<Card class="card" :bordered="false">
					<p slot="title">研发经费投入（万元）</p>
					<div class="item-box">
						<InputNumberWithLabel v-model="form['研发经费投入（万元）']" :initValue="initObj['研发经费投入（万元）']"></InputNumberWithLabel>
					</div>
				</Card>
			</div>
			<div class="box-item">
				<Card class="card" :bordered="false">
					<p slot="title">新产品销售收入（万元）</p>
					<div class="item-box">
						<InputNumberWithLabel v-model="form['新产品销售收入（万元）']" :initValue="initObj['新产品销售收入（万元）']"></InputNumberWithLabel>
					</div>
				</Card>
			</div>
			<div class="box-item">
				<Card class="card" :bordered="false">
					<p slot="title">专利申请授权数</p>
					<div class="item-box">
						<InputNumberWithLabel v-model="form['专利申请授权数']" :initValue="initObj['专利申请授权数']"></InputNumberWithLabel>
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
						<InputNumberWithLabel label="30岁以下" v-model="form['年龄结构']['30岁以下']" :initValue="initObj['年龄结构']['30岁以下']"></InputNumberWithLabel>
						<InputNumberWithLabel label="31-41" v-model="form['年龄结构']['31-41']" :initValue="initObj['年龄结构']['31-41']"></InputNumberWithLabel>
						<InputNumberWithLabel label="41-50" v-model="form['年龄结构']['41-50']" :initValue="initObj['年龄结构']['41-50']"></InputNumberWithLabel>
						<InputNumberWithLabel label="51-60" v-model="form['年龄结构']['51-60']" :initValue="initObj['年龄结构']['51-60']"></InputNumberWithLabel>
						<InputNumberWithLabel label="61岁以上" v-model="form['年龄结构']['61岁以上']" :initValue="initObj['年龄结构']['61岁以上']"></InputNumberWithLabel>
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
					<p slot="title">薪酬（月）</p>
					<div class="input-box xinchou">
						<div class="xinchou-label">
							<InputNumberWithLabel label="3000元以下" v-model="form['薪酬（月）']['3000元以下']" :initValue="initObj['薪酬（月）']['3000元以下']"></InputNumberWithLabel>
						</div>
						<div class="xinchou-label">
							<InputNumberWithLabel label="3000-4000" v-model="form['薪酬（月）']['3000-4000']" :initValue="initObj['薪酬（月）']['3000-4000']"></InputNumberWithLabel>

						</div>
						<div class="xinchou-label">
							<InputNumberWithLabel label="4000-5000" v-model="form['薪酬（月）']['4000-5000']" :initValue="initObj['薪酬（月）']['4000-5000']"></InputNumberWithLabel>

						</div>
						<div class="xinchou-label">
							<InputNumberWithLabel label="5000-6000" v-model="form['薪酬（月）']['5000-6000']" :initValue="initObj['薪酬（月）']['5000-6000']"></InputNumberWithLabel>

						</div>
						<div class="xinchou-label">
							<InputNumberWithLabel label="6000-8000" v-model="form['薪酬（月）']['6000-8000']" :initValue="initObj['薪酬（月）']['6000-8000']"></InputNumberWithLabel>

						</div>
						<div class="xinchou-label">
							<InputNumberWithLabel label="8000-10000" v-model="form['薪酬（月）']['8000-10000']" :initValue="initObj['薪酬（月）']['8000-10000']"></InputNumberWithLabel>

						</div>
						<div class="xinchou-label">
							<InputNumberWithLabel label="10000-12000" v-model="form['薪酬（月）']['10000-12000']" :initValue="initObj['薪酬（月）']['10000-12000']"></InputNumberWithLabel>

						</div>
						<div class="xinchou-label">
							<InputNumberWithLabel label="12000-15000" v-model="form['薪酬（月）']['12000-15000']" :initValue="initObj['薪酬（月）']['12000-15000']"></InputNumberWithLabel>

						</div>
						<div class="xinchou-label">
							<InputNumberWithLabel label="15000-20000" v-model="form['薪酬（月）']['15000-20000']" :initValue="initObj['薪酬（月）']['15000-20000']"></InputNumberWithLabel>

						</div>
						<div class="xinchou-label">
							<InputNumberWithLabel label="20000元以上" v-model="form['薪酬（月）']['20000元以上']" :initValue="initObj['薪酬（月）']['20000元以上']"></InputNumberWithLabel>

						</div>
					</div>
				</Card>
			</div>
			<div class="box-item">
				<Card class="card" :bordered="false">
					<p slot="title">获得荣誉</p>
					<div class="input-box">
						<InputNumberWithLabel label="国家级" v-model="form['获得荣誉']['国家级']" :initValue="initObj['获得荣誉']['国家级']"></InputNumberWithLabel>
						<InputNumberWithLabel label="省部级" v-model="form['获得荣誉']['省部级']" :initValue="initObj['获得荣誉']['省部级']"></InputNumberWithLabel>
						<InputNumberWithLabel label="厅局级" v-model="form['获得荣誉']['厅局级']" :initValue="initObj['获得荣誉']['厅局级']"></InputNumberWithLabel>
						<InputNumberWithLabel label="其它" v-model="form['获得荣誉']['其它']" :initValue="initObj['获得荣誉']['其它']"></InputNumberWithLabel>
						<InputNumberWithLabel label="无" v-model="form['获得荣誉']['无']" :initValue="initObj['获得荣誉']['无']"></InputNumberWithLabel>
					</div>
				</Card>
			</div>
		</div>
		<GangWeiLeiBie v-model="form['岗位类别']" :initValue="initObj['岗位类别']"></GangWeiLeiBie>
	</div>
</template>
<style scoped>
	.xinchou {
		display: flex;
		flex-wrap: wrap;
	}
	.xinchou-label {

	}

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
		created() {},
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
						'30岁以下': null,
						'31-41': null,
						'41-50': null,
						'51-60': null,
						'61岁以上': null
					},
					'学历结构': {
						"博士研究生": null,
						"硕士研究生": null,
						"本科": null,
						"大专": null,
						"大专以下": null
					},
					'薪酬（月）': {
						"3000元以下": null,
						"3000-4000": null,
						"4000-5000": null,
						"5000-6000": null,
						"6000-8000": null,
						"8000-10000": null,
						"10000-12000": null,
						"12000-15000": null,
						"15000-20000": null,
						"20000元以上": null
					},
					'获得荣誉': {
						"国家级": null,
						"省部级": null,
						"厅局级": null,
						"其它": null,
						"无": null
					},
					'岗位类别': []
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
