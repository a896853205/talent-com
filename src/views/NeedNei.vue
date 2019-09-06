<template>
  <div class="box">
    <div class="need">
      <Need 
        title='单位人才需求调查表-事业单位-编制内'
        commitFunction='setNeedIn'
        :need='need'
      />
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
import Need from "../components/Need.vue";

export default {
  components: {
    Need
  },
  computed: {
    need() {
      return this.$store.state.form._need_nei;
    }
  }
};
</script>