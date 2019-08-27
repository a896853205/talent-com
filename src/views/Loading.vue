<template>
	<div>
		<el-container class="mask" v-show="loading" v-loading="loading"
					  element-loading-text="数据加载中"
					  element-loading-spinner="el-icon-loading"
					  element-loading-background="rgba(228, 231, 237, 0.8)">
		</el-container>
	</div>
</template>
<style scoped>
	.mask {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 999;
	}
</style>
<script>
	import url from '@/service.config.js';
	import axios from 'axios';
	import util from '@/utils.js'
    import VueElementLoading from 'vue-element-loading'
	export default {
	    components:{
            VueElementLoading,
		},
		data(){
	      return {
              loading: true
		  }
		},
		created() {
			if (util.getCookies(this) == null) {
				this.$router.push('/')
				return
			}
            this.$store.state.vueElementLoading = true
			this.$store.state.loaded = true
			axios({
				url: url.getForm,
				method: 'get',
				params: {
					user_name: util.getCookies(this).user_name,
					user_password: util.getCookies(this).user_password
				}
			}).then(res => {
				this.$store.state.form = res.data
				this.$router.push('/form/companyInfo')
			}).catch(err => {
				console.log(err);
			});
		},
		mounted(){
            this.$store.state.vueElementLoading = false
		}
	}
</script>
