<template>
    <div class="box">
        <div class="need">
            <NeedWai></NeedWai>
        </div>
    </div>
</template>
<style scoped>
    .box {

    }
    .need {
        margin: 0 auto;
        max-width: 1250px;
    }
</style>
<script>
    import NeedWai from '../components/NeedWai.vue'
    export default {
        components:{
            NeedWai,
        },
		created() {
			this.$store.state.loading = false;
		}
    }
</script>