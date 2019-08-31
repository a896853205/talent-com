<template>
  <div class="container">
    <div v-for="(item, index) in need" :key="item.id">
      <Card :bordered="false">
        <div class="del-box">
          <p class="del-box-title" slot="title">{{ title }} {{index+1}}</p>
          <div class="del-btn">
            <i-button
              type="error"
              v-if="item.id>0"
              style="margin-right: 10px"
              shape="circle"
              @click="delHandle(item.id)"
            >删除</i-button>
          </div>
        </div>
        <div class="abox">
          <div
            class="item"
            v-for="(value, key) in item.info"
            :key="key"
            :class="{'none': (value.special)}"
          >
            <SelectWithLabel
              v-if="value.type === 'select'"
              :label="key"
              :initValue="value.value"
              @select="changeEvent"
              :list="value.list"
              :index="index"
            />
            <CascaderWithLabel
              v-if="value.type === 'cascader'"
              :label="key"
              :initValue="value.value"
              @cascader='changeEvent'
              :data="value.data"
              :index="index"
            />
            <InputWithLabel
              v-if="value.type === 'input'"
              :label="key"
              :initValue="value.value"
              @input='changeEvent'
              :index="index"
            />
            <InputNumberWithLabel
              v-if="value.type === 'number'"
              :label="key"
              :initValue="value.value"
              @input-number="changeEvent"
              :index="index"
            />
            <CascaderWithLabel
              v-if="value.type === 'cascaderSpecial'"
              :initObj="value.value"
              :label="key"
              :data="stationCategory"
              @cascader="getCascaderData"
              :index="index"
            />
          </div>
        </div>
      </Card>
    </div>
    <div class="add">
      <i-button class="add-btn" type="info" @click="addHandle">添加</i-button>
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
        info: personInfo
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

    changeEvent({ value, key, index }) {
      this.$data.needArr[index].info[key].value = value;
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
    this.$data.needArr = this.need;
    this.$data.num = this.$data.needArr[this.$data.needArr.length - 1].id + 1;
  },

  computed: {
    stationCategory() {
      return this.$store.getters.stationCategory;
    }
  }
};
</script>
