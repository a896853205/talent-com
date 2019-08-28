<template>
  <div class="about">
    <h1>This is an about page</h1>
	<Button type="info" @click="test">信息按钮</Button>
  </div>
</template>
<script>
    export default {
        methods:{
            test(){
                let num = this.genID(4);
                console.log(num)
            },
            genID(length){
                return Number(Math.random().toString().substr(3,length) + Date.now()).toString(36);
            },
        }
    }
</script>
