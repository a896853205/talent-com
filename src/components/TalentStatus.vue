<template>
	<div class="box">
		
		<div class="box-item" v-for='(value, key) in noSpecialSummary' :key='key'>
			<Card class="card" :bordered="false">
				<p slot="title">{{ key }}</p>
				<div class="item-box" v-if="value.type">
					<InputNumberWithLabel 
					:label='key' 
					@input-number='inputNumber' 
					:initValue="value.value" />
				</div>
				<div class="input-box" v-else>
					<InputNumberWithLabel 
						v-for='(subValue, subKey) in value' 
						:label='subKey'
						:initValue="subValue.value"
						:propKey='key'
						:key="subKey"
						@input-number='subInputNumber'
						/>
				</div>
			</Card>
		</div>

		<div v-if="(unitType !== '事业单位') && (unitType !== '机关') && (unitType !== '社会团体')"
			class="box-item">
			<Card class="card" :bordered="false">
				<p slot="title">当年年度产值（万元）</p>
				<div class="item-box">
					<InputNumberWithLabel
						label='当年年度产值（万元）'
						:initValue="summary['当年年度产值（万元）'].value"
						@input-number='inputNumber' />
				</div>
			</Card>
		</div>
		
		<div className='box-item'>
			<GangWeiLeiBie
				label='人员类别'
				:initValue="summary['人员类别'].value"
				@station='stationEvent'/>
		</div>
	</div>
</template>
<style scoped>
	.xinchou {
		display: flex;
		flex-wrap: wrap;
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
		props: ['year'],
		components: {
			InputNumberWithLabel,
			GangWeiLeiBie,
		},
		methods: {
			inputNumber (value, key) {
				this.$store.commit('setSummery', { value, key, year: this.year });
			},
			subInputNumber (value, subKey, key) {
				this.$store.commit('setSummery', { value, key, year: this.year, subKey });
			},
			stationEvent (value, key) {
				this.$store.commit('setSummery', { value, key, year: this.year });
			}
		},
		computed: {
			noSpecialSummary () {
				let summary = this.$store.state.form._summary.find(value => (value.year === this.year)).info;
				let noSpecialSummary = {};

				for (let key in summary) {
					if (!summary[key].special) {
						noSpecialSummary[key] = summary[key];
					}
				}

				return noSpecialSummary;
			},

			summary () {
				return this.$store.state.form._summary.find(value => (value.year === this.year)).info;
			},

			unitType () {
				return this.$store.state.form._basic['单位性质'].value;
			}
		}
	}
</script>
