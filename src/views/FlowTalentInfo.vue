<template>
    <div class="box">
        <div class="need">
            <FlowTalentInfo></FlowTalentInfo>
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
    import FlowTalentInfo from '../components/FlowTalentInfo.vue'
    export default {
        components:{
            FlowTalentInfo,
        },
		created() {
			this.$store.state.loading = false;
		}
    }
</script>