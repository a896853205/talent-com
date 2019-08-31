<template>
	<div class="box">
		<el-tabs tab-position="left">
			<el-tab-pane 
				v-for="(value, key) in summaryOutter"
				:key="key"
				:label="value.year">
				<p class="title">单位人才情况汇总表-存量信息-事业单位-编制外-{{value.year}}年</p>
				<TalentStatus
					:year='value.year'
					commitFunction='setSummeryOut'
				/>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>
<style scoped>
	.box {
		margin-top: 20px;
	}

	.title {
		text-align: center;
		font-size: 16px;
		font-weight: bolder;
	}
</style>
<script>
	import TalentStatus from '../components/TalentStatus.vue'

	export default {
		components: {
			TalentStatus,
		},
		data() {
			return {}
		},
		computed: {
			summaryOutter () {
				return this.$store.state.form._summary_wai
			}
		}
	}
</script>
