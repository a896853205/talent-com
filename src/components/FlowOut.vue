<template>
  <div class="box">
    <div class="box-item" v-for='(value, key) in noSpecialSumOut' :key='key'>
			<Card class="card" :bordered="false">
				<p slot="title">{{ key }}</p>
				<div class="item-box" v-if="value.type">
					<InputNumberWithLabel v-model="value.value" :initValue="value.value" />
				</div>
				<div class="input-box" v-else>
					<InputNumberWithLabel 
						v-for='(subValue, subKey) in value' 
						:label='subKey'
						:v-model='subValue.value'
						:initValue="subValue.value"
						:key="subKey" />
				</div>
			</Card>
		</div>
    <div className='box-item'>
			<GangWeiLeiBie v-model="sumOut['人员类别'].value" :initValue="sumOut['人员类别'].value" />
		</div>
  </div>

</template>
<style scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 100px 5px 100px;
}

.box-item {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 20px 10px 0;
}

.input-box {
  display: flex;
}

.card {
  height: 125px;
  box-sizing: border-box;
}
</style>
<script>
import InputNumberWithLabel from "../components/InputNumberWithLabel.vue";
import GangWeiLeiBie from "../components/GangWeiLeiBie.vue";

export default {
  props: ["year"],
  components: {
    InputNumberWithLabel,
    GangWeiLeiBie
  },
  data() {
    return {};
  },
  computed: {
    sumOut () {
      return this.$store.state.form._sum_out.find(value => (value.year === this.year)).info;
    },

    noSpecialSumOut () {
      let sumOut = this.$store.state.form._sum_out.find(value => (value.year === this.year)).info;
      let noSpecialSumOut = {};

      for (let key in sumOut) {
        if (!sumOut[key].special) {
          noSpecialSumOut[key] = sumOut[key];
        }
      }

      return noSpecialSumOut;
    }
  }
};
</script>
