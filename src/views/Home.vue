<template>
  <div class="home">
    <button class="setCookie" @click="setCookies">设置cookie</button>
    <button class="deleteCookie" @click="delCookies">清除Cookie</button>
    <button class="deleteCookie" @click="getCookie">获得Cookie</button>
    <Card :bordered="false" style="width:600px;text-align: left;margin:100px;">
      <p slot="title">性别结构</p>
      <InputWithLabel label="姓名" v-model="form[0]" />
      <InputWithLabel label="组织机构代码" v-model="form[1]" />
      <CascaderWithLabel
        label="行业分类"
        v-model="form[2]"
        :data="cascader_data"
        :initValue="cascader_init"
      ></CascaderWithLabel>
      <CascaderWithInputWithLabel
        label="行业分类"
        v-model="form[3]"
        :data="cascader_data"
        :initValue="cascader_init"
      ></CascaderWithInputWithLabel>
      <CascaderWithInputWithLabel
        style="width:300px;margin-right: 30px"
        v-for="item in testdata"
        :key="item.id"
        :name="item.name"
        :data="gangWeiLeiBie"
      ></CascaderWithInputWithLabel>
    </Card>
    <Button type="info" @click="test()">信息按钮</Button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import InputWithLabel from "@/components/InputWithLabel.vue";
import InputNumberWithLabel from "@/components/InputNumberWithLabel.vue";
import SelectWithLabel from "@/components/SelectWithLabel.vue";
import CascaderWithLabel from "@/components/CascaderWithLabel.vue";
import CascaderWithInputWithLabel from "@/components/CascaderWithInputWithLabel.vue";
// import { jobCategory } from "../assets/category";

import url from "@/service.config.js";
import axios from "axios";
import util from "@/utils.js";

export default {
  created() {
    // this.gangWeiLeiBie = jobCategory;
    window.vue = this;
    /*
        //get
        axios({
            url: url.test,
            method: 'get',
            params: {}
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });

        //post
        axios({
            url:url.post,
            method: 'post',
            data: {
                "name":"cheny",
                "age": '23',
                "cc":{"aa": 'bb'}
            }
        }).then(res=>{
            console.log(res.data);
        }).catch(err=>{
            console.log(err);
        })
        */
  },
  methods: {
    test() {
      console.log(this.$data.form);
    },
    setCookies() {
      /*
            let info = {
                "username":'aa',
                "password": '123'
            };
            //设置过期时间
            let expires = 2* 24 * 60 * 60 * 1000;
            var date = new Date(+new Date()+expires);
            this.$cookies.set('cookieTest', info,date);
            */
      util.setCookies("jk", "12345", this);
    },
    delCookies() {
      this.$cookies.remove("user_data");
    },
    getCookie() {
      let cookie = this.$cookies.get("user_data");
      return cookie;
    }
  },
  name: "home",
  components: {
    HelloWorld,
    InputWithLabel,
    SelectWithLabel,
    InputNumberWithLabel,
    CascaderWithLabel,
    CascaderWithInputWithLabel
  },
  data: () => ({
    form: {},
    citys: [
      {
        value: "哈尔滨",
        label: "哈尔滨"
      },
      {
        value: "齐齐哈尔",
        label: "齐齐哈尔"
      }
    ],
    gangWeiLeiBie: [],
    testdata: ["Vanessa", "Lillie", "Olivia"].map((name, id) => ({
      id,
      name
    })),
    testinit: "齐齐哈尔",
    cascader_data: [
      {
        value: "beijing",
        label: "北京",
        children: [
          {
            value: "gugong",
            label: "故宫"
          },
          {
            value: "tiantan",
            label: "天坛"
          },
          {
            value: "wangfujing",
            label: "王府井"
          }
        ]
      },
      {
        value: "jiangsu",
        label: "江苏",
        children: [
          {
            value: "nanjing",
            label: "南京",
            children: [
              {
                value: "fuzimiao",
                label: "夫子庙"
              }
            ]
          },
          {
            value: "suzhou",
            label: "苏州",
            children: [
              {
                value: "zhuozhengyuan",
                label: "拙政园"
              },
              {
                value: "shizilin",
                label: "狮子林"
              }
            ]
          }
        ]
      }
    ],
    cascader_init: ["beijing", "tiantan"]
  })
};
</script>
