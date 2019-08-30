<template>
	<div class="box">
		<el-tabs tab-position="left">
			<el-tab-pane v-for="(item, index) in initArray" :key="index" :label="item['year']">
				<p class="title">单位人才情况汇总表-存量信息-事业单位-编制外-{{item.year}}年</p>
				<TalentStatus v-model="item.info" :initObj="initArray[index]['info']"></TalentStatus>
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
			return {
				initArray: []
			}
		},
		beforeMount() {
			this.$data.initArray = this.$store.state.form._summary
		},
		created() {
			
		},
		mounted() {
			
		},
		// watch: {
		// 	result: {
		// 		handler(val, oldval) {
		// 			this.$store.state.form._summary = this.$data.result
		// 		},
		// 		deep: true
		// 	}
		// }
	}
</script>
