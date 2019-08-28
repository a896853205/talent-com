<template>
	<div class="box">
		<el-tabs tab-position="left">
			<el-tab-pane v-for="(item,index) in result" :key="index" :label="item['year']">
				<p class="title">单位人才流动汇总表-流出人才-事业单位-编制内-{{item.year}}年</p>
				<FlowOut v-model="item.info" :initObj="initArray[index]['info']"></FlowOut>
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
	import VueElementLoading from 'vue-element-loading'
	export default {
		components: {
			FlowOut,
		},
		data() {
			return {
				result: [{
						"year": "2009",
						"info": null
					},
					{
						"year": "2010",
						"info": null
					},
					{
						'year': '2011',
						"info": null
					},
					{
						'year': '2012',
						"info": null
					},
					{
						'year': '2013',
						"info": null
					},
					{
						'year': '2014',
						"info": null
					},
					{
						'year': '2015',
						"info": null
					},
					{
						'year': '2016',
						"info": null
					},
					{
						'year': '2017',
						"info": null
					},
					{
						'year': '2018',
						"info": null
					}
				],
				initArray: []
			}
		},
		created() {
			this.$store.state.vueElementLoading = true
			this.$store.state.loading = false;
		},
		mounted() {
			this.$store.state.vueElementLoading = false
		},
		beforeMount() {
			this.$data.initArray = this.$store.state.form._sum_out
		},
		watch: {
			result: {
				handler(val, oldval) {
					this.$store.state.form._sum_out = this.$data.result
				},
				deep: true
			}
		}
	}
</script>
