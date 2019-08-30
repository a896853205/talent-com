<template>
	<div class="container">
		<div v-for="(item, index) in form1" :key="item.id" :name="item['岗位类别']">
			<Card :bordered="false">
				<div class="del-box">
					<p class="del-box-title" slot="title">单位流失人才信息表 {{index+1}}</p>
					<div class="del-btn">
						<i-button type="error" v-if="item.id>0" style="margin-right: 10px" shape="circle" @click="delHandle(item.id)">删除</i-button>
					</div>
				</div>
				<div class="abox">
					<div class="item">
						<InputWithLabel label="姓名" v-model="item['info']['姓名']" :initValue="item['info']['姓名']"/>
					</div>
					<div class="item">
						<InputWithLabel label="身份证号" v-model="item['info']['身份证号']"  :initValue="item['info']['身份证号']"/>
					</div>
					<div class="item">
						<InputNumberWithLabel label="年龄" v-model="item['info']['年龄']" :initValue="item['info']['年龄']"/>
					</div>
					<div class="item">
						<SelectWithLabel label="性别" v-model="item['info']['性别']" :initValue="item['info']['性别']" :list="xingBie"></SelectWithLabel>
					</div>
					<div class="item">
						<SelectWithLabel label="学历" v-model="item['info']['学历']" :initValue="item['info']['学历']" :list="xueLiJieGou"></SelectWithLabel>
					</div>
					<div class="item">
						<CascaderWithLabel label="岗位类别" v-model="item['info']['岗位类别']" :initValue="item['info']['岗位类别']" :data="jobCategory"></CascaderWithLabel>
					</div>
					<div class="item">
						<InputNumberWithLabel label="从业年限（年）" v-model="item['info']['从业年限（年）']" :initValue="item['info']['从业年限（年）']"/>
					</div>
					<div class="item">
						<InputWithLabel label="流入地域" v-model="item['info']['流入地域']" :initValue="item['info']['流入地域']"/>
					</div>
					<div class="item">
						<SelectWithLabel label="离职原因" v-model="item['info']['离职原因']" :initValue="item['info']['离职原因']" :list="liZhiYuanYin"></SelectWithLabel>
					</div>
					<div class="item"></div>
				</div>
			</Card>
		</div>
		<div class="add">
			<i-button class="add-btn" type="info" @click="addHandle">添加</i-button>
		</div>
	</div>
</template>
<style scoped>
	.del-box {
		display: flex;
	}

	.del-box-title {
		display: flex;
		align-items: center;
		height: 50px;
		font-size: 14px;
		color: #17233d;
		font-weight: 700;
		padding-left: 15px;
	}

	.del-btn {
		display: flex;
		align-items: center;
		margin-left: 30px;
	}

	.container {
		padding: 30px 50px 20px 50px;
	}

	.abox {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.item {
		width: 200px;
		margin-right: 10px;
	}

	.add {
		text-align: center;
		margin-top: 10px;
	}

	.add-btn {
		width: 100px;
	}
</style>
<script>
	import InputWithLabel from '../components/InputWithLabel.vue';
	import InputNumberWithLabel from '../components/InputNumberWithLabel.vue';
	import SelectWithLabel from '../components/SelectWithLabel.vue';
	import CascaderWithLabel from '../components/CascaderWithLabel.vue';
	import { nianLingJieGou, xueLiJieGou, major, jobCategory, xinChou, xingBie, liZhiYuanYin } from '../assets/category';

	export default {
		methods: {
			addHandle() {
				var num = this.$data.num++;
				this.$data.form1.push({
					"id": num,
					"info": {
						"姓名": null,
						"身份证号": null,
						"年龄": null,
						'性别': null,
						'学历': null,
						"岗位类别": null,
						"从业年限（年）": null,
						"流入地域": null,
						'离职原因': null
					}
				})
				console.log(this.$data.form1)
			},
			delHandle(index) {
				var cur_index = this.$data.form1.findIndex(item => {
					return item.id === index
				});
				this.$data.form1.splice(cur_index, 1)
			}
		},
		data() {
			return {
				form1: [{
					"id": 0,
					"info": {
						"姓名": null,
						"身份证号": null,
						"年龄": null,
						'性别': null,
						'学历': null,
						"岗位类别": null,
						"从业年限（年）": null,
						"流入地域": null,
						'离职原因': null
					}
				}],
				form: {},
				gangWeiLeiBie: [],
				num: 1,
				nianLingJieGou: [],
				xueLiJieGou: [],
				major: [],
				jobCategory: [],
				xinChou: [],
				xingBie: [],
				liZhiYuanYin: [],
				initArray: []

			}
		},
		created() {
			this.nianLingJieGou = nianLingJieGou;
			this.xueLiJieGou = xueLiJieGou;
			this.major = major;
			this.jobCategory = jobCategory;
			this.xinChou = xinChou;
			this.xingBie = xingBie;
			this.liZhiYuanYin = liZhiYuanYin;
		},
		components: {
			InputWithLabel,
			SelectWithLabel,
			CascaderWithLabel,
			InputNumberWithLabel,
		},
		beforeMount() {
			this.$data.initArray = this.$store.state.form._out_status
            this.$data.num = this.$data.initArray[this.$data.initArray.length - 1].id + 1
			this.$data.form1 = this.$data.initArray
		},
		watch: {
			form1: {
				handler(val, oldval) {
					this.$store.state.form._out_status = this.$data.form1
				},
				deep: true
			}
		}
	}
</script>
