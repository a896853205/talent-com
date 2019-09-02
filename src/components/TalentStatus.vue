<template>
	<div class='summary-box'>
		<Row :gutter='16'>
			<i-col span='4'>
				<InputNumberWithLabel 
					:label='summary[0].label'
					@input-number='changeEvent' 
					:initValue="summary[0].value" />
			</i-col>

			<i-col 
				v-if="(unitType !== '事业单位') && (unitType !== '机关') && (unitType !== '社会团体')"
				span='4'>
				<InputNumberWithLabel
					:label='summary[1].label'
					:initValue='summary[1].value'
					@input-number='changeEvent' />
			</i-col>
		</Row>
		<Row :gutter='16'>
			<i-col span='4'>
				<SelectWithLabel 
					:label='summary[0].children.label'
					@select='changeEvent'
					:initValue="summary[0].children.value"
					:list='summary[0].children.list' />
			</i-col>
		</Row>

		<Divider />

		<div
			v-for="(it, i) in summaryDetail"
			:class="{ 'none': !(it.prop === summary[0].children.value) }"
			:key='i'>
			<Row
				v-for="(item, index) in it.children"
				:key="index"
				:gutter='16'
				>
				<div v-if="item.children">
					<span class="input-combine-box-title">{{ item.label }}</span>
					<div>
						<i-col
							span='4'
							v-for='(opationItem, opationIndex) in item.children'
							:key='opationIndex'>
						<InputNumberWithLabel
							:label='opationItem.label'
							:initValue="opationItem.value"
							:propIndex='index'
							:index='opationIndex'
							@input-number='changeEvent'
							/>
						</i-col>
					</div>
				</div>
			</Row>
			
		</div>
		<Row v-if="summary[0].children.children[4]">
			<i-col>
				<GangWeiLeiBie
					label='人员类别'
					:initValue="summary[0].children.children[4].value"
					:cateData='summary[0].children.children[4].data'
					@station='changeEvent'/>
			</i-col>
		</Row>
				
			<!-- 这里放一个select -->
			


			<!-- 这里放一个循环判断显示 -->


			<!-- <Row>
				<i-col span="12">
					<InputNumberWithLabel
						:label='summary.label'
						@input-number='changeEvent' 
						:initValue="summary.value" />
				</i-col>
			</Row>

			<div v-if="(unitType !== '事业单位') && (unitType !== '机关') && (unitType !== '社会团体')"
				class="box-item">
				<p slot="title">当年年度产值（万元）</p>
				<div class="item-box">
					<InputNumberWithLabel
						label='当年年度产值（万元）'
						:initValue="summary['当年年度产值（万元）'].value"
						@input-number='changeEvent' />
				</div>
			</div>
			
			<div className='box-item'>
				
			</div> -->
	</div>
</template>
<style scoped>
	.summary-box {
		overflow: auto;
		overflow-x: hidden;
	}

	.box {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin: 10px 100px;
	}

	.input-box {
		display: flex;
	}
	.input-combine-box-title {
		display: block;
		font-size: 20px;
		margin-bottom: 10px;
		margin-left: 8px;
		font-weight: 700;
	}
</style>
<script>
	import InputNumberWithLabel from '../components/InputNumberWithLabel.vue';
	import SelectWithLabel from '../components/SelectWithLabel';
	import GangWeiLeiBie from '../components/GangWeiLeiBie.vue';
	
	export default {
		props: ['year', 'commitFunction', 'summary'],

		components: {
			InputNumberWithLabel,
			GangWeiLeiBie,
			SelectWithLabel
		},

		data() {
			return {}
		},

		methods: {
			changeEvent ({ value, index, propIndex, label }) {
				console.log(this.summary);
				console.log(value, index, propIndex, label);
				this.$store.commit(this.commitFunction, { value, year: this.year, index, propIndex, label });
			}
		},
		computed: {
			// 选出正确的详细信息
			summaryDetail () {
				return this.summary[0].children.children;
			},

			unitType () {
				return this.$store.getters.unit;
			}
		}
	}
</script>
