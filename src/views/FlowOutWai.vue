<template>
	<div class="box">
		<el-tabs tab-position="left">
			<el-tab-pane v-for="(value, key) in flowOutOutter" :key="key" :label="value.year">
				<p class="title">单位人才流动汇总表-流出人才-事业单位-编制外-{{ value.year }}年</p>
				<FlowOut 
					:year='value.year'
					commitFunction='setFlowOutOutter'
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
	import FlowOut from '../components/FlowOut.vue'

	export default {
		components: {
			FlowOut,
		},
		data() {},
		computed: {
			flowOutOutter () {
				return this.$store.state.form._sum_out_wai;
			}
		}
	}
</script>
