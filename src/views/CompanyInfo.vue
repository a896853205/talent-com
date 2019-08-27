<template>
	<div>
		<CompanyInfo v-model="basic" :initObj="initObj"></CompanyInfo>
	</div>
</template>
<style scoped>
	.button-box {
		text-align: right;
		padding-right: 100px;
	}

	.button {
		width: 100px;
	}
</style>
<script>
	import CompanyInfo from '../components/CompanyInfo.vue';
	export default {
		components: {
			CompanyInfo,
		},
		data: () => ({
			basic: {},
			initObj: {
				'单位名称': null,
				'统一社会信用代码': null,
				'所属地域': null,
				'所属行业': null,
				'行业分类': null,
				'单位性质': null,
				'填报人': null,
				'联系电话': null,
				'QQ': null,
				'微信': null,
				'电子邮箱': null
			}
		}),
		methods: {
			saveHandle() {
				
				this.$message({
					message: '保存成功',
					type: 'success'
				});
			}
		},
		created() {
			this.$data.initObj = this.$store.state.form._basic
		},
		mounted() {
			
		},
		watch: {
			basic: {
				handler(val, oldval) {
					this.$store.state.form._basic = this.$data.basic
				},
				deep: true
			}
		}

	}
</script>
