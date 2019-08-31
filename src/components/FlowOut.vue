<template>
  <div class="box">
    <div class="box-item" v-for='(value, key) in noSpecialSumOut' :key='key'>
			<Card class="card" :bordered="false" v-if="value.type === 'number' || !value.type">
				<p slot="title">{{ key }}</p>
				<div class="item-box" v-if="value.type === 'number'">
					<InputNumberWithLabel 
            :label='key'
            @input-number='changeEvent'
            :initValue="value.value" />
				</div>
				<div class="input-box" v-else-if="!value.type">
					<InputNumberWithLabel 
						v-for='(subValue, subKey) in value' 
						:label='subKey'
						:initValue="subValue.value"
            :propKey='key'
						:key="subKey"
            @input-number='changeEvent' />
				</div>
			</Card>
		</div>
    <div className='box-item'>
			<GangWeiLeiBie
        label='人员类别'
        :initValue="sumOut['人员类别'].value"
        @station='changeEvent'
         />
		</div>
    <div className='box-item'>
      <Card class="card" :bordered="false">
        <MultiSelectWithLabel 
          label='离职原因（多选）'
          :initValue="sumOut['离职原因（多选）'].value"
          @checkBox='changeEvent'
          :list="sumOut['离职原因（多选）'].list"
        />
      </Card>
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
import MultiSelectWithLabel from '../components/until/MultiSelectWithLabel';

import { 
  jobCategoryJiGuan, 
  jobCategoryQiYe,
  jobCategorySocial,
  jobCategoryCareer
} from '../assets/category';

export default {
  props: ["year", 'commitFunction', 'sumOut'],
  components: {
    InputNumberWithLabel,
    GangWeiLeiBie,
    MultiSelectWithLabel
  },
  data() {
    return {};
  },
  computed: {
    noSpecialSumOut () {
      let noSpecialSumOut = {};

      for (let key in this.sumOut) {
        if (!this.sumOut[key].special) {
          noSpecialSumOut[key] = this.sumOut[key];
        }
      }

      console.log('noSpecialSumOut', noSpecialSumOut);
      return noSpecialSumOut;
    },

    gangWeiLeiBie() {
      switch (this.$store.state.form._basic['单位性质'].value) {
        case '机关':
          return jobCategoryJiGuan;
        case '社会团体':
          return jobCategorySocial;
        case '事业单位':
          return jobCategoryCareer;
        default:
          return jobCategoryQiYe;
      }
    }
  },
  methods: {
    changeEvent ({ value, subKey, key }) {
      this.$store.commit(this.commitFunction, { value, key, year: this.year, subKey });
    },
  }
};
</script>
