<template>
  <div class="">
    <nav-bar @chooseLanguage="chooseLanguage" navActive="token"></nav-bar>
        <div class="d_jump pb-5"></div>    
        <!-- 代币分配方案 -->
        <div class="h4 py-4 text-center wow flipInY text-secondary" v-text='$t("message.tokenTitle")'></div>
        <div class="container text-center">
            <div class="row d-flex align-items-center">
              <div class="col-12 col-md-7 py-4 position-relative echart_wrapper">
                    <div id="echart_ch" style="width:100%;height:100%"></div>
                </div>
                <div class="col-12 col-md-5 py-4 pad_bottom">
                    <p class="text-secondary wow bounceInRight text-left" data-wow-delay='.1s' 
                    v-html='$t("message.tokenDescription")'></p>
                </div>
            </div>          
        </div>     
        <!-- 代币销售计划 -->
        <div class="section section_plan">
            <div class="h4 py-4 text-center wow flipInY text-white" v-text='$t("message.planTitle")'></div>
            <div class="container text-center">
            <table class="table table-bordered text-white">
                <thead>
                    <tr>
                      <td v-text='$t("message.time1")'>基石</td>
                      <td v-text='$t("message.time2")'>私募</td>
                      <td v-text='$t("message.time3")'>公募</td>
                    </tr>
                </thead>
                <!-- 表格主体内容 -->
                <tbody>
                    <tr>
                      <td v-text='$t("message.done")'></td>
                      <td v-text='$t("message.done")'></td>
                      <td v-text='$t("message.done")'></td>
                    </tr>
                    <tr>
                      <td>1BTC = 2,000,000USE</td>
                      <td>1BTC = 1,700,000USE</td>
                      <td>1ETH = 75,000USE</td>
                    </tr>
                    <tr>
                      <td colspan="2"  v-text='$t("message.plan")'>登陆交易所前解锁25%，之后每两个月解锁25%，6个月内全部解锁</td>
                      <td  v-text='$t("message.nolockup")'></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        <!-- 私募登记 -->
        <!-- <div class="section mb-5 text-center">
            <div class="h4 py-4 wow flipInY text-secondary" v-text='$t("message.subTitle")'></div>
            <div class="container">
                <div class="row" v-show="!subscribe">
                    <div class="col-2" id="email_input" :class="{'focus':input_focus}">Email:</div>
                    <div class="col-6 col-sm-7">
                      <input type="text" class="form-control input_foucs" v-model="email_input" @focus="handleFocus" @blur="handleBlur">
                    </div>
                    <div class="col-3 px-0 text-left"><button type="button" class="btn btn-primary" @click="handleSubscribe"
                     v-text='$t("message.subscribe")'>订阅</button></div>
                </div>
                <div v-show="subscribe" class="text-primary" v-text='$t("message.subsuccess")'></div>
                <div v-show="error_cue" class="text-danger text-small" v-text='$t("message.suberror")'></div>
                <div v-show="email_error" class="text-danger text-small" v-text='$t("message.emailerror")'></div>
            </div>
        </div>   -->
        <Bottom :languageName="languageName"></Bottom>         
        <Telegram/>  
    </div>
</template>

<script>
import Vue from "vue";
import $ from "jquery";
import VueI18n from "vue-i18n";
import echarts from "echarts";
import axios from "axios";
import NavBar from "./NavBar";
import Telegram from "./Telegram";
import Bottom from "./Bottom";
import messages from "../assets/js/lang";

Vue.use(VueI18n);

var i18n = new VueI18n({
  locale: localStorage.local || "en",
  messages // set locale messages
});

export default {
  name: "token",
  components: {
    NavBar,Telegram,Bottom
  },
 
  i18n,
  data() {
    return {
         device: "mobile",
         email_input:null,
         subscribe:null,
         error_cue:null,
         emailCorrect:false,
         email_error:false,
         input_focus:false,
         languageName: localStorage.local || "en",
    };
  },
  created(){
    this.$i18n.locale=localStorage.local || "en";

    var w = document.documentElement.scrollWidth || document.body.scrollWidth;
    this.device = w < 576 ? "mobile" : "pc";
  },
  methods: {
    chooseLanguage(lang) {
      this.$i18n.locale = lang;
      this.languageName = lang;

      $("#echart_ch").remove();//切换语言时重绘图表
      $(".echart_wrapper").append(
        '<div id="echart_ch" style="width:100%;height:100%"></div>'
      );
      var myChart = echarts.init(document.getElementById("echart_ch"));
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{b} : {d}%",
          position: ["20%", "0%"]
        },
        legend: { show: false },
        series: [
          {
            type: "pie",
            radius: "70%",
            center: ["50%", "50%"],
            data: [
              {
                value: 90,
                name: this.$t("message.token1"),
                itemStyle: {
                  color: "#51849b"
                }
              },
              {
                value: 10,
                name: this.$t("message.token2"),
                itemStyle: {
                  color: "#99d3df"
                }
              },
              {
                value: 40,
                name: this.$t("message.token3"),
                itemStyle: {
                  color: "#d3e3ea"
                }
              },
              {
                value: 30,
                name: this.$t("message.token4"),
                itemStyle: {
                  color: "#0c4d68"
                }
              },
              {
                value: 30,
                name: this.$t("message.token5"),
                itemStyle: {
                  color: "#2fcbe7"
                }
              }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
                borderWidth: 0
              },
              borderWidth: 1,
              borderColor: "#fff"
            },
            labelLine: {
              lineStyle: { color: "#666" }
            },
            label: {
              show: this.device === "pc" ? true : false,
              textStyle: { color: "#666" }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    isEmail(email){
      var emailReg = /^([a-zA-Z0-9]+[-|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,4}$/;
      if (emailReg.test(email)) {
        this.emailCorrect=true;
      } else {
        this.emailCorrect=false;
      }
    },
    handleFocus(){
      this.input_focus=true;
    },
    handleBlur(){
      this.input_focus=false;      
    },
    handleSubscribe(){
        var url='https://kb.usechain.net'; 
        var _this=this;

        _this.isEmail(_this.email_input);
        
        console.log('邮箱',_this.emailCorrect);
        if(_this.emailCorrect){
            axios.post(url+'/informationbook/privatefund?email='+_this.email_input)
              .then(function(res){
                  console.log('返回',res.data.status);
                  if(res.data.status===0){
                      _this.subscribe='订阅成功';
                      _this.error_cue='';
                      _this.email_error=false;
                      // _this.subscribe='$t("message.subscribe")'
                  }else{
                      _this.subscribe=null;
                      _this.error_cue=res.data.msg;
                      _this.email_error=false;
                  }
          }).catch(function(err){ console.log(err) })
        }else{
          _this.email_error=true;
          _this.error_cue='';
        }
    }
  },
 mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart_ch"));

    // 使用刚指定的配置项和数据显示图表。
    // 指定图表的配置项和数据
    var option = {
      tooltip: {
        trigger: "item",
        formatter: "{b} : {d}%",
        position: ["20%", "0%"]
      },
      legend: { show: false },
      series: [
        {
          type: "pie",
          radius: "70%",
          center: ["50%", "50%"],
          data: [
            {
              value: 90,
              name: this.$t("message.token1"),
              itemStyle: {
                color: "#51849b"
              }
            },
            {
              value: 10,
              name: this.$t("message.token2"),
              itemStyle: {
                color: "#99d3df"
              }
            },
            {
              value: 40,
              name: this.$t("message.token3"),
              itemStyle: {
                color: "#d3e3ea"
              }
            },
            {
              value: 30,
              name: this.$t("message.token4"),
              itemStyle: {
                color: "#0c4d68"
              }
            },
            {
              value: 30,
              name: this.$t("message.token5"),
              itemStyle: {
                color: "#2fcbe7"
              }
            }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
              borderWidth: 0
            },
            borderWidth: 1,
            borderColor: "#fff"
          },
          labelLine: {
            lineStyle: { color: "#666" }
          },
          label: {
            show: this.device === "pc" ? true : false,
            textStyle: { color: "#666" }
          }
        }
      ]
    };
    myChart.setOption(option);

    var app = {};
    app.currentIndex = -1;

    setInterval(function() {
      var dataLen = option.series[0].data.length;
      // 取消之前高亮的图形
      myChart.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        dataIndex: app.currentIndex
      });
      app.currentIndex = (app.currentIndex + 1) % dataLen;
      // 高亮当前图形
      myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: app.currentIndex
      });
      // 显示 tooltip
      myChart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: app.currentIndex
      });
    }, 2000);

    var scrollTo=this.$route.params.nav;
    if(scrollTo){
      window.location.href="/#"+scrollTo;
    }else{
      $('#homelogo').trigger('click');
    }
  }
};
</script>

<style>
.echart_wrapper {
  width: 23rem;
  height: 23rem;
}
.section_plan {
  background: #3081e9;
}
.text-small{
  line-height: 2rem;
}
#email_input{
    padding: .5rem 0;
    text-align: right;
}
#email_input.focus{
  color: #3685e9;
}
.input_foucs:focus{
  border-style:solid;  
  border-color: #3685e9;  
  box-shadow: 0 0 5px #3685e9;
}
  @media screen and (max-width: 768px) {
   .table th, .table td{
       padding: .75rem .3rem;
       font-size: .8rem;
   }
  }
</style>

