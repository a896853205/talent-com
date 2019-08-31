<template>
    <div class="container">
        <h1 class="margin-bottom2 margin-top title">全省人才调研填表工作有关情况的说明</h1>
        <p class="margin-bottom left suojin font-size line-height">
            为落实6月18日省政府第三十二次常务会议精神，做好全省人才调研工作，全面掌握我省产业人才存量规模、结构、分布、需求等情况，摸清底数、把握规律、科学评价、分类施策，为集聚天下英才而用之创造条件，为推动龙江高质量发展、实现全面振兴全方位振兴提供更有力支持。本次填报工作是人才调研工作重要组成部分，由我厅具体负责此项工作。填报数据仅作为全省人才调研工作数据分析使用，不做其他用途使用，同时确保数据安全。</p>
        <p class="margin-bottom left suojin font-size line-height">特此说明。</p>
        <p class="margin-bottom font-size right padding-rignt line-height">黑龙江省人力资源和社会保障厅</p>
        <p class="margin-bottom font-size right line-height">2019年8月26日</p>
        <div class="buttons">
            <div class="buttons-left">
                <Button type="info" @click="loginHandle">问卷填报系统登录</Button>
            </div>
            <div class="buttons-right">
                <Button type="warning" @click="registerHandle">注册</Button>
            </div>
            <!--<div class="buttons-right">-->
                <!--<Button type="warning" @click="loginHandle2">账户分配系统登录</Button>-->
            <!--</div>-->
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
            loginHandle2() {
                this.$router.push('/adminLogin')
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
