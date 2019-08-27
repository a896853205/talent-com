<template>
    <div>
        <Menu mode="horizontal" :theme="theme1" active-name="addUser" @on-select="select">
            <MenuItem name="addUser">
                <Icon type="ios-paper"/>
                分配账号
            </MenuItem>
            <MenuItem name="mangerUser">
                <Icon type="ios-paper"/>
                查看已分配账号
            </MenuItem>
            <MenuItem name="submitStatus">
                <Icon type="ios-paper"/>
                查看已分配账号的问卷的提交状态
            </MenuItem>

        </Menu>
        <router-view></router-view>
    </div>
</template>
<style scoped>

</style>

<script>
    export default {
        data(){
            return {
                theme1: 'light'
            }
        },
        methods: {
            select(name){
                console.log(name)
                this.$router.push(name);
            }
        },
        created(){
            this.$router.push('/admin/addUser')
        },
    }
</script>