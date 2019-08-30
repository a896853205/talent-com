<template>
	<div class="box">
		<div class="item" v-for='(value, key) in basic' :key='key'>
			<SelectWithLabel v-if='value.type === "select"' :label='key' :initValue='value.value' :v-model='value.value' :list="value.list" />
			<CascaderWithLabel v-if='value.type === "cascader"' :label='key' :initValue='value.value' :v-model="value.value" :data="value.data" />
			<InputWithLabel v-if='value.type === "input"' :label='key' :initValue='value.value' :v-model='value.value' />
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
		methods: {},
		created() {},
		mounted() {},
		computed: {
			basic () {
				return this.$store.state.form._basic;
			}
		}
	}
</script>
