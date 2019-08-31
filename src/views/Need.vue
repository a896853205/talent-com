<template>
  <div class="box">
    <div class="need">
      <Need></Need>
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
  }
};
</script>