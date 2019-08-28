<template>
    <div class="box">
        <div class="need">
            <NeedNei></NeedNei>
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
    import NeedNei from '../components/NeedNei.vue'
    export default {
        components:{
            NeedNei,
        },
		created() {
			this.$store.state.loading = false;
		}
    }
</script>