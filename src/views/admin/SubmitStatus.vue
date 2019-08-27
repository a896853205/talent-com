<template>
    <div class="container">
        <table width="90%" class="table">
            <caption>
                <h2>用户状态</h2>
            </caption>
            <thead>
            <tr>
                <th>企业名</th>
                <th>提交状态</th>
                <th>下载问卷</th>
                <th>审核</th>
            </tr>
            </thead>
            <tr>
                <td>哈尔滨理工大学</td>
                <td>未提交</td>
                <td><a href="javascript:;">下载Excel</a></td>
                <td><a href="javascript:;">审核通过</a>/<a href="javascript:;">不通过</a></td>
            </tr>
            <tr>
                <td>哈尔滨理工大学</td>
                <td>未提交</td>
                <td><a href="javascript:;">下载Excel</a></td>
                <td><a href="javascript:;">审核通过</a>/<a href="javascript:;">不通过</a></td>
            </tr>
        </table>
    </div>
</template>
<style scoped>
    .container {
        padding: 30px;
    }

    table {
        border-collapse: collapse;
        margin: 0 auto;
        text-align: center;
    }

    table td, table th {
        border: 1px solid #cad9ea;
        color: #666;
        height: 30px;
    }

    table thead th {
        background-color: #CCE8EB;
        width: 100px;
    }

    table tr:nth-child(odd) {
        background: #fff;
    }

    table tr:nth-child(even) {
        background: #F5FAFA;
    }
</style>

<script>
    export default {
        data() {
            return {}
        },
        components: {},
        methods: {}
    }
</script>