<template>
    <div class="container">
        <div class="addUser-box">
            <div class="box-item">
                <div class="title">单位名称：</div>
                <div>
                    <Input v-model="cdata['单位名称']" placeholder="请输入想要生成账户的单位名称" style="width: 300px"/>
                </div>
            </div>
            <div class="box-item">
                <div class="title">单位性质：</div>
                <div>
                    <Select v-model="cdata['单位性质']" style="width:200px">
                        <Option v-for="item in danWeiXingZhi" :value="item.value" :key="item.value">{{ item.label }}
                        </Option>
                    </Select>
                </div>
            </div>
            <div class="box-item">
                <div class="title">权限设置：</div>
                <div>
                    <Select v-model="cdata['权限']" style="width:200px">
                        <Option v-for="item in qunxian" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </div>
            </div>
            <div class="box-item">
                <Button type="primary" @click="generateAccount">生成用户名和密码</Button>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .container {
        padding: 30px;
    }

    .box-item {
        display: flex;
        padding: 10px 0;
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: bolder;
        margin-right: 10px;
    }
</style>

<script>
    import category from '@/assets/data/category.js'

    export default {
        data() {
            return {
                cdata: {
                    '单位名称': null,
                    '单位性质':null,
                    '权限':null,
                },
                danWeiXingZhi: [],
                qunxian: [],
            }
        },
        methods: {
            generateAccount() {
                this.$message({
                    message: '生成成功',
                    type: 'success'
                });
            },
            genRandom(length) {
                return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
            },
        },
        created() {
            let danWeiXingZhi = category.danWeiXingZhi;
            let qunxian = category.qunxian;
            this.$data.danWeiXingZhi = danWeiXingZhi
            this.$data.qunxian = qunxian
        }
    }
</script>