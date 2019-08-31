<template>
  <div class="container">
    <div v-for="(item, index) in need" :key="item.id">
      <Card :bordered="false">
        <div class="del-box">
          <p class="del-box-title" slot="title">单位人才需求调查表 {{index+1}}</p>
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
					<div class="item" v-for='(value, key) in item.info' :key='key' :class='{"none": (value.special)}'>
						<SelectWithLabel v-if='value.type === "select"' :label='key' :initValue='value.value' :v-model='value.value' :list="value.list" />
						<CascaderWithLabel v-if='value.type === "cascader"' :label='key' :initValue='value.value' :v-model="value.value" :data="value.data" />
						<InputWithLabel v-if='value.type === "input"' :label='key' :initValue='value.value' :v-model='value.value' />
						<InputNumberWithLabel v-if='value.type === "number"' :label='key' :initValue='value.value' :v-model='value.value' />
            <CascaderWithLabel
							v-if='value.type === "cascaderSpecial"'
							:initObj="value.value"
							:label='key'
							:data="stationCategory"
							@cascader='getCascaderData'
							:index='index' />
          </div>
				</div>
        <!-- <div class="abox">
          <div class="item">
            <InputWithLabel
              label="需求岗位"
              v-model="item['info']['需求岗位']"
              :initValue="item['info']['需求岗位']"
            />
          </div>
          <div class="item">
            <InputNumberWithLabel
              label="需求数量（人）"
              v-model="item['info']['需求数量（人）']"
              :initValue="item['info']['需求数量（人）']"
            />
          </div>
          <div class="item">
            <SelectWithLabel
              label="年龄结构"
              :list="nianLingJieGou"
              v-model="item['info']['年龄结构']"
              :initValue="item['info']['年龄结构']"
            />
          </div>
          <div class="item">
            <SelectWithLabel
              label="学历结构"
              :list="xueLiJieGou"
              v-model="item['info']['学历结构']"
              :initValue="item['info']['学历结构']"
            ></SelectWithLabel>
          </div>
          <div class="item">
            <CascaderWithLabel
              label="专业要求"
              :data="major"
              v-model="item['info']['专业要求']"
              :initValue="item['info']['专业要求']"
            ></CascaderWithLabel>
          </div>
          <div class="item">
            <InputNumberWithLabel
              label="工作经验（年）"
              v-model="item['info']['工作经验（年）']"
              :initValue="item['info']['工作经验（年）']"
            />
          </div>
          <div class="item">
            <InputWithLabel
              label="职业资格证书"
              v-model="item['info']['职业资格证书']"
              :initValue="item['info']['职业资格证书']"
            />
          </div>
          <div class="item">
            <CascaderWithLabel
              label="岗位类别"
              :data="jobCategory"
              v-model="item['info']['岗位类别']"
              :initValue="item['info']['岗位类别']"
            ></CascaderWithLabel>
          </div>
          <div class="item">
            <CascaderWithLabel
              label="薪酬"
              :data="xinChou"
              v-model="item['info']['薪酬']"
              :initValue="item['info']['薪酬']"
            />
          </div>
          <div class="item"></div>
        </div> -->
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
import { personInfo } from '../store/init/form';
  
export default {
  components: {
    InputWithLabel,
    SelectWithLabel,
    CascaderWithLabel,
    InputNumberWithLabel
  },
  methods: {
    addHandle() {
      var num = this.$data.num++;
      this.need.push({
        id: num,
        info: personInfo
      });
    },
    delHandle(index) {
      var cur_index = this.need.findIndex(item => {
        return item.id === index;
      });
      this.need.splice(cur_index, 1);
    }
  },
  data() {
    return {
      num: 1,
    }
  },
  beforeMount() {
    let needArr = this.$store.state.form._need;
    this.$data.num = needArr[needArr.length - 1].id + 1;
  },
  computed: {
    need() {
      return this.$store.state.form._need;
    },
    stationCategory() {
      return this.$store.getters.stationCategory;
    }
  }
};
</script>
