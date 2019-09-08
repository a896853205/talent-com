<template>
  <div class="container">
    <div 
      v-for="(item, propIndex) in need"
      :key="propIndex">
      <Card :bordered="false">
        <div class="del-box">
          <p class="del-box-title" slot="title">{{ title }} {{ propIndex + 1 }}</p>
          <div class="del-btn">
            <Button
              type="error"
              v-if="item.id > 0"
              style="margin-right: 10px"
              shape="circle"
              @click="delHandle(item.id)"
            >删除</Button>
          </div>
        </div>
        <Row :gutter='16'>
          <i-col
            span='4'
            v-for="(item, index) in item.info"
            :key='"" + propIndex + index'>
            <SelectWithLabel
              v-if="item.type === 'select'"
              :label="item.label"
              :initValue="item.value"
              @select="changeEvent"
              :list="item.list"
              :index="index"
              :propIndex='propIndex'
            />
            <CascaderWithLabel
              v-if="item.type === 'cascader'"
              :label='item.label'
							:initValue='item.value'
							@cascader='changeEvent'
							:data="item.data"
							:index='index'
							:propIndex='propIndex'
            />
            <InputWithLabel
              v-if="item.type === 'input'"
              :label='item.label'
							:initValue='item.value'
							@input='changeEvent'
							:index='index'
							:propIndex='propIndex'
            />
            <InputNumberWithLabel
              v-if="item.type === 'number'"
              :label='item.label'
							:initValue='item.value'
							@input-number='changeEvent'
							:index='index'
							:propIndex='propIndex'
            />
            <CascaderWithLabel
              v-if="item.type === 'cascaderSpecial'"
              :initValue="item.value"
							:label='item.label'
              :data="stationCategory"
              @cascader="changeEvent"
              :index="index"
              :propIndex='propIndex'
            />
          </i-col>
        </Row>
      </Card>
    </div>
    <div class="add">
      <Button class="add-btn" type="info" @click="addHandle">添加</Button>
    </div>
  </div>
</template>
<style scoped>
.del-box {
  display: flex;
}

.del-box-title {
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 14px;
  color: #17233d;
  font-weight: 700;
  padding-left: 15px;
}

.del-btn {
  display: flex;
  align-items: center;
  margin-left: 30px;
}

.container {
  padding: 30px 50px 20px 50px;
}

.abox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.item {
  width: 200px;
  margin-right: 10px;
}

.add {
  text-align: center;
  margin-top: 10px;
}

.add-btn {
  width: 100px;
}
</style>
<script>
import InputWithLabel from "../components/InputWithLabel.vue";
import InputNumberWithLabel from "../components/InputNumberWithLabel.vue";
import SelectWithLabel from "../components/SelectWithLabel.vue";
import CascaderWithLabel from "../components/CascaderWithLabel.vue";
import { personInfo } from "../store/init/form";

import { objectHelper } from '../util/object-helper';
  
export default {
  components: {
    InputWithLabel,
    SelectWithLabel,
    CascaderWithLabel,
    InputNumberWithLabel
  },
  props: ["title", "commitFunction", "need"],
  methods: {
    addHandle() {
      var num = this.$data.num++;

      this.$data.needArr.push({
        id: num,
        info: objectHelper.deepCopy(personInfo)
      });

      this.$options.methods.needArrCommit(this);
    },
    delHandle(index) {
      var cur_index = this.$data.needArr.findIndex(item => {
        return item.id === index;
      });

      this.$data.needArr.splice(cur_index, 1);

      this.$options.methods.needArrCommit(this);
    },

    changeEvent({ value, propIndex, index }) {
      this.$data.needArr[propIndex].info[index].value = value;
      this.$options.methods.needArrCommit(this);
    },

    needArrCommit(_this) {
      _this.$store.commit(_this.commitFunction, _this.$data.needArr);
    }
  },

  data() {
    return {
      num: 1,
      needArr: []
    };
  },

  beforeMount() {
    // this.$data.needArr = this.need;
    // this.$data.num = this.$data.needArr[this.$data.needArr.length - 1].id + 1;
  },

  computed: {
    stationCategory() {
      return this.$store.getters.stationCategory;
    }
  },

  watch: {
    need: {
      handler: function(val, oldval) {
        this.$data.needArr = val;
    		this.$data.num = this.$data.needArr[this.$data.needArr.length - 1].id + 1;
      },
      immediate: true,
      deep: true
    }
  }
};
</script>
