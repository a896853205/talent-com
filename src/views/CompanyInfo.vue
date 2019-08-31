<template>
	<div class="box">
		<div class="item" v-for='(value, key) in basic' :key='key'>
			<SelectWithLabel
				v-if='value.type === "select"'
				:label='key' 
				:initValue='value.value'
				@select='changeEvent'
				:list="value.list" />
			<CascaderWithLabel
				v-if='value.type === "cascader"'
				:label='key'
				:initValue='value.value'
				@cascader='changeEvent'
				:data="value.data" />
			<InputWithLabel
				v-if='value.type === "input"'
				:label='key'
				:initValue='value.value'
				@input='changeEvent' />
		</div>
	</div>
</template>
<style scoped>
	.box {
		display: flex;
		flex-wrap: wrap;
		margin-top: 30px;
		justify-content: flex-start;
		/*space-between、space-around*/
		padding: 0 100px;
	}

	.item {
		width: 300px;
		height: 80px;
		margin-right: 10px;
	}
</style>
<script>
	import InputWithLabel from '../components/InputWithLabel.vue';
	import SelectWithLabel from '../components/SelectWithLabel.vue';
	import CascaderWithLabel from '../components/CascaderWithLabel.vue';

	export default {
		components: {
			InputWithLabel,
			SelectWithLabel,
			CascaderWithLabel,
		},
		methods: {
			changeEvent ({ value, key }) {
				this.$store.commit('setBasic', { value, key });
			},
		},
		created() {},
		mounted() {},
		computed: {
			basic: {
				get() {
					return this.$store.state.form._basic;
				}
			}
		}
	}
</script>
