<template>
	<div class="box">
		<el-tabs tab-position="left">
			<el-tab-pane v-for="(value, key) in sumOut" :key="key" :label="value.year">
				<p class="title">单位人才流动汇总表-流出人才-{{value.year}}年</p>
				<FlowOut 
					:year='value.year'
					:sumOut='value.info'
					commitFunction='setFlowOut' />
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
	import FlowOut from '../components/FlowOut.vue';

	export default {
		components: {
			FlowOut,
		},
		data() {},
		computed: {
			sumOut () {
				return this.$store.state.form._sum_out;
			}
		}
	}
</script>
