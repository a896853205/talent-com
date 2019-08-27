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
                <th>下载</th>
                <th>单耗</th>
            </tr>
            </thead>
            <tr>
                <td>109</td>
                <td>13</td>
                <td>1.34</td>
                <td>213</td>
            </tr>
            <tr>
                <td>109</td>
                <td>13</td>
                <td>1.34</td>
                <td>213</td>
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