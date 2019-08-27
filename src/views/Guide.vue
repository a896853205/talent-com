<template>
    <div class="container">
        <h1 class="margin-bottom2 margin-top title">全省人才普查和流失情况专项工作</h1>
        <h2 class="margin-bottom left">一、工作意义</h2>
        <p class="margin-bottom left suojin font-size line-height">
            为落实6月18日省政府第三十二次常务会议精神，做好全省人才普查和流失情况调研工作，深化细化龙江人才政策，提升政策精准性和有效性，黑龙江省人民政府委托黑龙江省人力资源和社会保障厅开展“全省人才普查和流失情况专项工作”，本次填报工作是专项工作重要组成部分。</p>
        <p class="margin-bottom left suojin font-size line-height">
            单位数据填报对于全面掌握我省产业人才存量规模、结构、分布、需求具有重要的基础性意义，对于科学评价我省已有人才政策具有重要的现实意义，对于找出我省人才工作存在的问题和提出精准有效的人才政策具有重要的指导意义。望各单位高度重视本次填报工作，提高我省人才工作质量，提升人才政策实施效果。</p>
        <h2 class="margin-bottom left">二、工作目标</h2>
        <p class="margin-bottom left suojin font-size line-height">专项工作将结合单位填报数据和个人填报数据信息，实现以下三个目标：</p>
        <p class="margin-bottom left suojin font-size line-height">
            1、建立“黑龙江省人才信息库”，对我省人才特征进行精准刻画，便于单位掌握我省相关产业人才基本情况。</p>
        <p class="margin-bottom left suojin font-size line-height">2、编制“黑龙江省产业行业急需紧缺人才目录”，为单位提供需求展示平台，提高人才供给精准度。</p>
        <p class="margin-bottom left suojin font-size line-height">
            3、建立“黑龙江省人才流动信息管理系统”，实现我省人才存量、结构、分布、需求智能化管理，提高人才政策制定的时效性和精准性。</p>
        <h2 class="margin-bottom left">三、数据安全</h2>
        <p class="margin-bottom left suojin font-size line-height">
            本次填报数据仅作“全省人才普查和流失情况专项工作”数据分析使用，确保数据安全，不做其他任何用途使用，特此声明。</p>
        <p class="margin-bottom font-size right padding-rignt line-height">黑龙江省人力资源和社会保障厅</p>
        <p class="margin-bottom font-size right line-height">黑龙江省人口经济与人才发展战略研究中心</p>
        <div class="buttons">
            <div class="buttons-left">
                <Button type="info" @click="loginHandle">登录</Button>
            </div>
            <div class="buttons-right">
                <Button type="warning" @click="registerHandle">注册</Button>
            </div>
        </div>
    </div>
</template>
<script>
	import url from '@/service.config.js';
	import axios from 'axios';
	import util from '@/utils.js'
	
    export default {
        data() {
            return {}
        },
		created() {
			if (util.getCookies(this) != null) {
				this.$router.push('/loading');
			}
		},
        methods: {
            loginHandle() {
                this.$router.push('/login')
            },
            registerHandle() {
                this.$router.push('/register')
            }
        }
    }
</script>
<style scoped>
    .title {
        text-align: center;
    }

    .buttons {
        display: flex;
        margin-top: 30px;
    }

    .buttons-left {
        flex: 1;
        text-align: right;
        padding-right: 20px;
    }

    .buttons-right {
        flex: 1;
        text-align: left;
        padding-left: 30px;
    }

    .container {
        padding: 20px 350px 50px;
    }

    .margin-bottom {
        margin-bottom: 15px;
    }

    .margin-bottom2 {
        margin-bottom: 30px;
    }

    .left {
        text-align: left;
    }

    .suojin {
        text-indent: 2rem;
    }

    .margin-top {
        margin-top: 25px;
    }

    .font-size {
        font-size: 16px;
    }

    .right {
        text-align: right;
    }

    .padding-rignt {
        padding-right: 30px;
    }

    .line-height {
        line-height: 20px;
    }

</style>
