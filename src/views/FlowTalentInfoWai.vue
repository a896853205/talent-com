<template>
    <div class="box">
        <div class="need">
            <FlowTalentInfoWai></FlowTalentInfoWai>
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
    import FlowTalentInfoWai from '../components/FlowTalentInfoWai.vue'
    export default {
        components:{
            FlowTalentInfoWai,
        },
		created() {
			this.$store.state.loading = false;
		}
    }
</script>