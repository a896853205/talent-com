<template>
    <div class="container">
        <div class="chang-box">
            <div class="item">
                <div class="label">
                    老密码：
                </div>
                <div class="input">
                    <Input v-model="cdata['老密码']"  placeholder="请输入老密码" style="width: 300px"/>
                </div>
            </div>
            <div class="item">
                <div class="label">
                    新密码：
                </div>
                <div class="input">
                    <Input v-model="cdata['新密码']" placeholder="请输入新密码" style="width: 300px"/>
                </div>
            </div>
            <div class="item">
                <div class="label">
                    确认密码：
                </div>
                <div class="input">
                    <Input v-model="cdata['确认密码']" placeholder="请再输一次新密码" style="width: 300px"/>
                </div>
            </div>
            <div class="item">
                <div class="btn">
                    <Button type="primary" @click="change">修改</Button>
                </div>
            </div>

        </div>
    </div>
</template>
<style scoped>
    .container {
        padding: 30px;
    }
    .item {
        display: flex;
        margin-bottom: 10px;
    }
    .label {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: bolder;
        width: 120px;
    }
    .btn {
        margin-left: 15px;
    }
</style>

<script>

    export default {
        data() {
            return {
                cdata: {},
            }
        },
        methods: {
            change(){
                this.$message({
                    message: '修改成功',
                    type: 'success'
                });
            }
        },
        created(){

        }
    }
</script>