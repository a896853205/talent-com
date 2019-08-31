<template>
  <div class="box">
    <div class="need">
      <FlowTalentInfo
        title='单位流失人才信息表-事业单位-体制外'
        commitFunction='setOutStatusOut'
        :outStatus='outStatus' />
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
import FlowTalentInfo from "../components/FlowTalentInfo.vue";

export default {
  components: {
    FlowTalentInfo
  },
  computed: {
    outStatus() {
      return this.$store.state.form._out_status_wai;
    }
  }
};
</script>