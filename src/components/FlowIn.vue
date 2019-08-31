<template>
	<div class="box">
		<div class="box-item" v-for='(value, key) in noSpecialSumIn' :key='key'>
			<Card class="card" :bordered="false">
				<p slot="title">{{ key }}</p>
				<div class="item-box" v-if="value.type">
					<InputNumberWithLabel
						:label='key'
						@input-number='changeEvent' 
						:initValue="value.value" />
				</div>
				<div class="input-box" v-else>
					<InputNumberWithLabel 
						v-for='(subValue, subKey) in value' 
						:label='subKey'
						:initValue="subValue.value"
						:propKey='key'
						:key="subKey"
						@input-number='changeEvent' />
				</div>
			</Card>
		</div>

		<div className='box-item'>
			<GangWeiLeiBie 
				label='人员类别'
				:initValue="sumIn['人员类别'].value"
				@station='changeEvent' />
		</div>
	</div>
</template>
<style scoped>
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
		height: 125px;
		box-sizing: border-box;
	}
</style>
<script>
	import InputNumberWithLabel from '../components/InputNumberWithLabel.vue';
	import GangWeiLeiBie from '../components/GangWeiLeiBie.vue';

	export default {
		props: ['year', 'commitFunction'],
		components: {
			InputNumberWithLabel,
			GangWeiLeiBie,
		},
		data() {
			return {}
		},
		computed: {
			sumIn () {
				return this.$store.state.form._sum_in.find(value => (value.year === this.year)).info;
			},

			noSpecialSumIn () {
				let sumIn = this.$store.state.form._sum_in.find(value => (value.year === this.year)).info;
				let noSpecialSumIn = {};

				for (let key in sumIn) {
					if (!sumIn[key].special) {
						noSpecialSumIn[key] = sumIn[key];
					}
				}

				return noSpecialSumIn;
			}
		},
		methods: {
			changeEvent ({ value, subKey, key }) {
				this.$store.commit(this.commitFunction, { value, key, year: this.year, subKey });
			}
		}
	}
</script>
