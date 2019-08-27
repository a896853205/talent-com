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
                查看账户提交状态
            </MenuItem>
            <MenuItem name="adminChangePassword">
                <Icon type="ios-paper"/>
                修改密码
            </MenuItem>
            <div class="user">
                <div class="">欢迎登录，{{companyName}}</div>
                <div class="logout">
                    <span @click="logout">退出登录</span>
                </div>
            </div>
        </Menu>
        <router-view></router-view>
    </div>
</template>
<style scoped>
    .user {
        display: flex;
        position: absolute;
        right: 30px;
        top: 0;
    }
    .logout {
        color: #8CD1FF;
        cursor: pointer;
        margin: 0 20px;
    }



</style>

<script>
    export default {
        data(){
            return {
                theme1: 'light',
                companyName: '哈尔滨理工大学'
            }
        },
        methods: {
            select(name){
                console.log(name)
                this.$router.push(name);
            },
            logout(){
                this.$router.push('/')
            }
        },
        created(){
            this.$router.push('/admin/addUser')
        },
    }
</script>