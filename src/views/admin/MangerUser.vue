<template>
    <div class="container">
        <Table border :columns="tableTitle" :data="tableContent"></Table>
    </div>
</template>
<style scoped>
    .container {
        padding: 30px;
    }
</style>

<script>
    export default {
        data () {
            return {
                tableTitle: [
                    {
                        title: '单位名称',
                        key: '单位名称'
                    },
                    {
                        title: '单位性质',
                        key: '单位性质'
                    },
                    {
                        title: '权限',
                        key: '权限'
                    },
                    {
                        title: '用户名',
                        key: '用户名'
                    },
                    {
                        title: '密码',
                        key: '密码'
                    },
                ],
                tableContent: [
                    {
                        '单位名称': '哈尔滨理工大学',
                        '单位性质': '事业单位',
                        '权限': '1',
                        '用户名': '1234',
                        '密码': 'asfdsfasdf',
                    },
                    {
                        '单位名称': '哈尔滨理工大学',
                        '单位性质': '事业单位',
                        '权限': '1',
                        '用户名': '1234',
                        '密码': 'asfdsfasdf',
                    },

                    {
                        '单位名称': '哈尔滨理工大学',
                        '单位性质': '事业单位',
                        '权限': '1',
                        '用户名': '1234',
                        '密码': 'asfdsfasdf',
                    },

                    {
                        '单位名称': '哈尔滨理工大学',
                        '单位性质': '事业单位',
                        '权限': '1',
                        '用户名': '1234',
                        '密码': 'asfdsfasdf',
                    },


                ]
            }
        }
    }
</script>