<template>
    <div class="box">
        <div class="need">
            <FlowTalentInfoNei></FlowTalentInfoNei>
        </div>
    </div>
</template>
<style scoped>
    .need {
        margin: 0 auto;
        max-width: 1250px;
    }
</style>
<script>
    import FlowTalentInfoNei from '../components/FlowTalentInfoNei.vue'
    export default {
        components:{
            FlowTalentInfoNei,
        },
		created() {
			this.$store.state.loading = false;
		}
    }
</script>