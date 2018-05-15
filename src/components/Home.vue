<template>
  <div class="home">
    <div class="d_jump"></div>
    <nav class="navbar navbar-expand-lg px-0 py-1 py-md-0 z-index-10 w-100" 
      :class="{'navbar_border position-fixed':navBarFixed}">
      <div class="container">
        <div class="navbar-brand pr-5 pl-4" @click="jump(0)">
          <router-link to="/">
            <img class="p-md-1" src="../assets/images/logo.png"/>
          </router-link>
        </div>
        <button class="navbar-toggler menu_btn mr-4" type="button" id="close1"
          @click.self="clickMenuBtn" 
           data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="nav_menu position-relative" :class="{change_mode:navMenuShow}" @click.self="clickMenuBtn"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent"
          @click.self="closeNavModal">
          <div class="wrapper">
            <div class="text-center d-lg-flex flex-wrap w-100 py-4 py-md-0">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item p-1 py-md-2 mx-2 text-capitalize" :class="{'active':index===navItemActive}" v-for="(item,index) in navList" :key="index"
                @mouseenter="mouseEnterItem(index)" @mouseleave="mouseLeaveItem(index)" @click="jump(index+1)">
                  <a class="nav-link text-secondary" v-text='$t("message."+item)'></a>
                </li>
                <li class="nav-item dropdown px-2 py-md-2">
                  <a class="nav-link dropdown-toggle text-secondary" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-text="languageName==='en'?'English':'中文'"></a>
                  <div @click="chooseLanguage" class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <div class="dropdown-item" v-for="(item,index) in lanList" name="languageName" :data-value="item.value" :key="index" v-text="item.tab"></div>
                  </div>
                </li>
              </ul>
              <!-- <form class="form-inline my-2 my-lg-0 btn_hover">
                <div class="my-2 mx-auto my-sm-0 position-relative">
                  <div class="has_shadow" v-if="hasShadow"></div>            
                  <div class="btn btn-outline-primary rounded-adjust p-0" @mouseenter="shadowShow" @mouseleave="shadowHidden">
                    <router-link class="hover_white w-100 h-100 d-block px-4 py-2" to="/login" v-text='$t("message.login")'></router-link>
                  </div>
                </div>
              </form> -->
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="section_init">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-4 col-12 pt-5 pt-md-0">
            <h2 class="text-secondary py-3 wow bounceInDown" v-text='$t("message.usechain")'></h2>
            <p class="h4 p-4 px-md-0 text-secondary long_text wow slideInDown" v-html='$t("message.description")'></p>
              <div :class='{"pl-3":(languageName === "en" ? false : true)}'>
                <div class="advantage wow slideInRight nowrap" :class="'advantage'+item"
                  v-for="item in 3" :key="item" :data-wow-delay="'.'+item+'s'">
                  <img class="ml-5 ml-md-3 ml-lg-5" :src='"../assets/images/advantage"+item+".png"'/>
                  <span v-html='$t("message.advantage"+item)'></span>
                </div>
              </div>
              <div class="form-inline mt-4 mb-2 btn_hover wow flash"  data-wow-delay='1s'>
                <a class="d-block m-auto" target="_blank" :href='$t("message.whitepaperlink")'>
                  <div class="mx-auto my-sm-0 position-relative">
                    <div class="has_shadow" v-if="hasShadow"></div>            
                    <div class="btn btn-outline-primary rounded-adjust p-0" @mouseenter="shadowShow(1)" @mouseleave="shadowHidden(1)">
                      <div class="hover_white w-100 h-100 d-block px-4 py-2" v-text='$t("message.whitepaper")'></div>
                    </div>
                  </div>
                </a>
              </div> 
              <div class="form-inline mt-4 mb-2 btn_hover wow flash"  data-wow-delay='1s'>
                <a class="d-block m-auto" target="_blank" :href='$t("message.whitepaperlink2")'>
                  <div class="mx-auto my-sm-0 position-relative">
                    <div class="has_shadow" v-if="hasShadow2"></div>            
                    <div class="btn btn-outline-primary rounded-adjust p-0" @mouseenter="shadowShow(2)" @mouseleave="shadowHidden(2)">
                      <div class="hover_white w-100 h-100 d-block px-4 py-2" v-text='$t("message.whitepaper2")'></div>
                    </div>
                  </div>
                </a>
              </div> 
          </div>
          <div class="col-md-8 col-12">
            <div class="hover_wrapper wow bounceInDown" @mouseenter="mouseEnterAnimate">
              <ul class="hover_animate position-relative">
                  <li v-for="item in 8" :class='"pic_banner_hover"+item' :key="item" :style='"z-index:"+(10-item)'>
                    <img :src='"../assets/images/banner_img"+item+".png"'/></li>
                  <li class="hover_box" style="z-index:3"></li>
                  <li class="pic_banner_modal" style="z-index:1">
                    <img src="../assets/images/banner_img0.png"/>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="d_jump pb-5" id="nav1"></div>  
      <div class="h4 text-center wow flipInY pt-4 text-secondary" v-text='$t("message.featureTitle")'></div>
      <Feature :languageName="languageName"></Feature>
    </div>
    <div class="section_work text-center">
      <div class="container">
        <div class="h4 text-center wow bounceIn pt-5 text-secondary solution_title" v-text='$t("message.solutionsTitle")'></div>        
        <div class="row pt-5 d-flex align-items-center">
          <div class="col-xs-12 col-md-6 text-left mb-5">
            <div class="h4 mobile_h4 text-secondary wow fadeInLeft" v-text='$t("message.work_title")'></div>
            <p class="py-4 my-md-4 text-secondary wow fadeInLeft" data-wow-delay='.2s' v-text='$t("message.work_introductin")'></p>
            <div class="d-flex flex-wrap wow fadeInLeft" data-wow-delay='.3s'>
              <div class="solution_text text-primary w-100 " v-for="item in 3" :key="item">
                <img :src='"../assets/images/solution"+item+".png"' class="solution_img"/>
                <span v-text='$t("message.work"+item)'></span>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-6" @mouseenter="mouseEnterAnimate">
            <div class="hover_wrapper">
              <ul class="hover_animate position-relative wow zoomInLeft">
                  <li v-for="item in 4" :key="item" 
                      :class='"mwork"+item' :style='item===2?"z-index:4":"z-index:"+3'>
                  <img :src='"../assets/images/mwork"+item+(languageName==="en"?"_en":"_en")+".png"'/></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d_jump pb-5" id="nav2"></div>    
    <div class="h4 py-4 text-center wow flipInY text-secondary" v-text='$t("message.tokenTitle")'></div>
    <div class="section_token">
      <div class="container text-center">
        <div class="row d-flex align-items-center">
          <div class="col-12 col-md-7 py-4 position-relative echart_wrapper">
            <div id="echart_ch" style="width:100%;height:100%"></div>
          </div>
          <div class="col-12 col-md-5 py-4 pad_bottom">
            <p class="text-white wow bounceInRight text-left" data-wow-delay='.1s' 
            v-html='$t("message.tokenDescription")'></p>
          </div>
        </div>          
      </div>     
    </div>
      
    <div class="d_jump" id="nav3"></div>             
    <div class="container pt-5">
      <div class="h4 text-center wow flipInY text-secondary pt-4" v-text='$t("message.mapTitle")'></div>
      <div class="pt-5 section_map">
        <div class="wrapper position-relative">
          <ul class="position-relative">
            <li class="row" v-for="(item,index) in 9" :key="index" 
                :class="[{'active':mapItemActive===index},{'past':mapItemActive>index}]">
              <div class="col" v-if="index%2!==0 && device==='pc'"></div>                            
              <div class="col has_block wow position-relative" :data-wow-delay="'.'+index+'s'"
              :class='{"text-right bounceInLeft":(index%2===0 && device==="pc"),"bounceInRight":index%2===1}'>
                <div class="wrap">
                  <div class="time" v-html='$t("message.map"+(index+1)+".time")'></div>
                  <div class="event" v-html='$t("message.map"+(index+1)+".event")'></div>
                </div>
              </div>
              <div class="col" v-if="index%2===0 && device==='pc'"></div>              
            </li>
          </ul>
        </div>                
      </div>
    </div>
    <div class="d_jump pb-4" id="nav4"></div>    
    <div class="pt-5">
      <div class="h4 text-center wow flipInY text-secondary" v-text='$t("message.teamTitle")'></div>
      <div class="section_team py-5">
          <ul class="clear wow fadeInUp container">
            <li class="text-center col-lg-3 col-md-4 col-6 pt-4 transformLi" v-for="(item,index) in teamList" :key="index">
                <div class="slide slide_front">
                  <div class="img_wrap position-relative">
                    <img :src='"../assets/images/staff"+(index+1)+".png"' class="cursor_pointer" 
                    @click="clickMemberImg"/>
                    <a class="badgeIn position-absolute" :href='$t("message."+item+".linkin")'
                    v-if='$t("message."+item+".linkin")!=="#"'>in</a>
                  </div>
                  <div class="h5 pt-3" v-text='$t("message."+item+".name")'></div>
                  <div class="h6 pt-1 text-secondary" v-text='$t("message."+item+".staff")'></div>
                  <div class="text-primary cursor_pointer text-capitalize readmore" 
                    @click="showMemberBack">read more</div>
                  <div class="front_modal" @click="showMemberFront"></div>
                </div>
                <div class="slide slide_back">
                  <div class="wrapper">
                   <p class="text-secondary" v-html='$t("message."+item+".description")'></p>
                   </div>
                </div>
                <div class="slide_left"></div>
                <div class="slide_right"></div>
            </li>
          </ul>
      </div>
    </div>
    
    <div class="section section_advisor">
      <div class="h4 text-center wow flipInY text-secondary pt-4" v-text='$t("message.advisorTitle")'></div>
        <div class="container section_team pt-5">
          <ul class="clear wow fadeInUp">
            <li class="text-center col-lg-3 col-md-4 col-6 pt-4 transformLi" v-for="(item,index) in advisorList" :key="index">
                <div class="slide slide_front">
                  <div class="img_wrap position-relative">
                    <img :src='"../assets/images/investors"+(index+1)+".png"' class="cursor_pointer" 
                    @click="clickMemberImg"/>
                    <a class="badgeIn position-absolute" :href='$t("message."+item+".linkin")'
                    v-if='$t("message."+item+".linkin")!=="#"'>in</a>
                  </div>
                  <div class="h5 pt-3" v-text='$t("message."+item+".name")'></div>
                  <div class="h6 pt-1 text-secondary" v-text='$t("message."+item+".staff")'></div>
                  <div class="text-primary cursor_pointer text-capitalize readmore" 
                    @click="showMemberBack">read more</div>
                  <div class="front_modal" @click="showMemberFront"></div>
                </div>
                <div class="slide slide_back">
                  <div class="wrapper">
                    <p class="text-secondary" v-html='$t("message."+item+".description")'></p>
                  </div>
                </div>
                <div class="slide_left"></div>
                <div class="slide_right"></div>
            </li>
          </ul>
        </div>
    </div>

    <!-- <div class="section_partner py-5">
      <div class="h4 text-center wow flipInY text-white pt-4" v-text='$t("message.partnerTitle")'></div>
      <div class="container py-5">
         <div class="wow zoomIn text-center row p-4 p-md-0">
          <div class="col-6 col-md-4 d-flex align-items-center" v-for="item in partnerList" :key="item">
            <img class="w-75 px-md-2 px-lg-5 py-4" :src='"../assets/images/"+item+".png"'/>
          </div>
        </div>
      </div>      
    </div> -->

    <div class="container pt-5 mt-md-5">
      <!-- <div class="h4 text-center wow flipInY text-secondary" v-text='$t("message.videoTitle")'></div>
      <div class="section section_video wow fadeIn">
        <img src="../assets/images/video.jpg" class="w-100"/>
      </div> -->

      <div class="h4 text-center text-secondary" v-text='$t("message.mediaTitle")'></div>
      <div class="section section_media justify-content-center">
        <div class="text-center row p-4 p-md-0">
          <div class="col-6 col-sm-4 col-lg-3" v-for="(item,index) in mediaList" :key="index">
            <a :href="item.href" target="_blank" class="d-block w-100 h-100 cursor_pointer">
              <img class="w-100 px-md-4 py-1 py-lg-4 wow flipInX" :data-wow-delay="'.'+index+'s'" :src='"../assets/images/"+item.img+".png"'/>
            </a>
          </div>
        </div>
      </div>  
    </div>
    <Bottom :languageName="languageName"></Bottom>   
    <div class="fix_bottom position-fixed">
      <a href="https://t.me/usechaingroup" class="d-block w-100">
        <img src="../assets/images/plane.png" class="w-100"/>
      </a> 
    </div> 

    <!-- Modal -->
    <div class="modalOpacity modalOpacityNav" v-show="navMenuShow" @click="closeNavModal"></div>    
    <div class="modalOpacity" v-show="modalShow" @click="closeModal"></div>
  </div>
</template>

<script>
import Vue from "vue";
import VueI18n from "vue-i18n";
import echarts from "echarts";
import messages from "../assets/js/lang";
import NavBar from "./NavBar";
import Feature from "./Feature";
import Bottom from "./Bottom";
import $ from "jquery";
import "../assets/css/navbar.css";

Vue.use(VueI18n);

var i18n = new VueI18n({
  locale: localStorage.local || "en",
  messages // set locale messages
});

export default {
  name: "Home",
  components: {
    NavBar,
    Feature,
    Bottom
  },
  data() {
    return {
      device: "mobile",
      teamList: [
        "caohuining",
        "sunbaohong",
        "zhangshengli",
        "zhangfeng",
        "xuzhiwen",
        "zhouhaihan",
        "zhaolin",
        "shenhui"
      ],
      advisorList: [
        "luliang",
        "caoyin",
        "weishangjin",
        "maqian",
        "yanfangjun",
        "zhushengqing"
      ],
      partnerList: [
        "partner1",
        "partner1",
        "partner1",
        "partner2",
        "partner2",
        "partner2"
      ],
      mapItemActive: 5,
      languageName: localStorage.local || "en",
      lanList: [{ tab: "中文", value: "ch" }, { tab: "English", value: "en" }],
      navList: ["nav1", "nav2", "nav3", "nav4"],
      navDefaultActive: 0,
      navItemActive: 0,
      navMenuShow: false,
      navBarFixed: false,
      hasShadow: false,
      hasShadow2: false,
      modalShow: false,

      mediaList: [
        {
          img: "yahoo",
          href:
            "https://finance.yahoo.com/news/usechain-become-worlds-first-ever-130000976.html"
        },
        {
          img: "market",
          href:
            " https://www.marketwatch.com/story/usechain-to-become-worlds-first-ever-self-sovereign-identity-blockchain-2018-04-29"
        },
        {
          img: "seeking",
          href:
            "https://seekingalpha.com/pr/17144745-usechain-become-worlds-first-ever-self-sovereign-identity-blockchain"
        },
        {
          img: "business",
          href:
            "https://www.bizjournals.com/albany/prnewswire/press_releases/Georgia/2018/04/29/CN80203?ana=prnews"
        },
        {
          img: "newswire",
          href:
            "https://www.prnewswire.com/news-releases/usechain-to-become-worlds-first-ever-self-sovereign-identity-blockchain-300638531.html"
        },
        {
          img: "insider",
          href:
            "http://markets.businessinsider.com/news/stocks/usechain-to-become-world-s-first-ever-self-sovereign-identity-blockchain-1023213662"
        },
        {
          img: "asiaone",
          href:
            "http://www.asiaone.com/business/usechain-to-become-worlds-firstever-selfsovereign-identity-blockchain"
        },
        {
          img: "yonhapnews",
          href:
            "http://www.yonhapnews.co.kr/international/2018/05/04/0611000000AKR20180504044500009.HTML"
        },
        {
          img: "naver",
          href:
            "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=104&oid=001&aid=0010063928"
        },
        {
          img: "daum",
          href:
            "http://v.media.daum.net/v/20180503115338874"
        },
        {
          img: "asahi",
          href:
            "http://www.asahi.com/and_M/information/pressrelease/Ckprw201805073644.html"
        },
        {
          img: "jcast",
          href:
            "https://www.j-cast.com/other/a05_prwire/2018/05/07327861.html"
        },
        {
          img: "afpbb",
          href:
            "http://www.afpbb.com/articles/-/3173692?cx_position=7"
        },
        {
          img: "yam",
          href:
            "http://n.yam.com/Article/20180503949762"
        },
        {
          img: "taable",
          href:
            "http://note.taable.com/post/259d51/www.prnasia.com/story/archive/2282132_XG82132_2"
        },
        {
          img: "sohu",
          href:
            "http://www.sohu.com/a/230273943_251755"
        },
        {
          img: "ifeng",
          href:
            "http://wemedia.ifeng.com/58992663/wemedia.shtml"
        },
        {
          img: "qifeng",
          href:
            "https://mp.weixin.qq.com/s/uH-ZPK8C3dnbhgnqs3YJUg"
        },
        {
          img: "niushi",
          href:
            "https://mp.weixin.qq.com/s/cGQK-yz_Y82Phs3wkDchow"
        },
        {
          img: "sina",
          href:
            "http://t.cj.sina.com.cn/articles/view/6395920475/17d3a005b0010062o9"
        },
        {
          img: "jinse",
          href:
            "https://www.jinse.com/blockchain/189488.html"
        }
      ],
    };
  },
  i18n,
  methods: {
    chooseLanguage(event) {
      const chosen = event.target.dataset.value;
      if (chosen) {
        localStorage.setItem("local", chosen);
      } else {
        return false;
      }
      this.languageName = chosen;
      this.$i18n.locale = chosen;

      document.title =
        this.$t("message.usechaintitle") + "-" + this.$t("message.description");

      $("#echart_ch").remove();
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
            lineStyle: { color: "#fff" }
          },
          label: {
            show: this.device === "pc" ? true : false,
            textStyle: { color: "#fff" }
          }
        }
      ]
    };
      myChart.setOption(option);
    },
    clickMenuBtn(event) {
      this.navMenuShow = !this.navMenuShow;
    },
    shadowShow(index) {
      if(index===1){
        this.hasShadow = true;
      }else{
        this.hasShadow2 = true;        
      }
    },
    shadowHidden(index) {
      if(index===1){
        this.hasShadow = false;
      }else{
        this.hasShadow2 = false;        
      }
    },
    closeModal() {
      this.modalShow = false;
      $(".transformLi").css("transform", "rotateY(0)");
      $(".front_modal").hide();
    },
    closeNavModal() {
      $("#close1")
        .attr("aria-expanded", false)
        .addClass("collapsed");
      $("#navbarSupportedContent").removeClass("show");
      this.navMenuShow = false;
    },
    mouseEnterItem(index) {
      this.navItemActive = index;
    },
    mouseLeaveItem(index) {
      this.navItemActive = this.navDefaultActive;
    },
    mouseEnterAnimate(event) {
      var oUl = event.target.getElementsByTagName("ul")[0];
      var l = oUl.offsetWidth / 2;
      var t = oUl.offsetHeight / 2;
      var aLi = oUl.getElementsByTagName("li");
      oUl.onmousemove = function(ev) {
        var oEv = ev || event,
          iL = oEv.clientX,
          iT = oEv.clientY;

        for (var i = 0; i < aLi.length; i++) {
          aLi[i].style.marginLeft = (iL - l) / 100 * aLi[i].style.zIndex + "px";
          aLi[i].style.marginTop = (iT - t) / 70 * aLi[i].style.zIndex + "px";
        }
      };
    },
    clickMemberImg(event) {
      event.target.parentNode.parentNode.parentNode.style.transform =
        "rotateY(180deg)";
      event.target.parentNode.parentNode.parentNode.style.zIndex =
        "999999999999";
      this.modalShow = true;
      $(".front_modal").show();
    },
    showMemberBack(event) {
      event.target.parentNode.parentNode.style.transform = "rotateY(180deg)";
      event.target.parentNode.parentNode.style.zIndex = "999999999999";
      this.modalShow = true;
      $(".front_modal").show();
    },
    showMemberFront(event) {
      $(".transformLi").css("transform", "rotateY(0)");
      this.modalShow = false;
      $(".front_modal").hide();
    },
    jump(index) {
      //选中高亮
      if (index !== 0) {
        this.navDefaultActive = index - 1;
      } else {
        this.navDefaultActive = index;
        $("#close1")
          .attr("aria-expanded", false)
          .addClass("collapsed");
        $("#navbarSupportedContent").removeClass("show");
        this.navMenuShow = false;
      }
      // 用 class="d_jump" 添加锚点
      let jump = document.querySelectorAll(".d_jump");
      let total = jump[index].offsetTop;
      let distance =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      // 平滑滚动，时长500ms，每10ms一跳，共50跳
      let step = total / 50;
      if (total > distance) {
        smoothDown();
      } else {
        let newTotal = distance - total;
        step = newTotal / 50;
        smoothUp();
      }
      function smoothDown() {
        if (distance < total) {
          distance += step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          window.pageYOffset = distance;
          setTimeout(smoothDown, 10);
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
          window.pageYOffset = total;
        }
      }
      function smoothUp() {
        if (distance > total) {
          distance -= step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          window.pageYOffset = distance;
          setTimeout(smoothUp, 10);
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
          window.pageYOffset = total;
        }
      }
    }
  },
  created() {
    this.$i18n.locale = localStorage.local || "en";
    document.title =
      this.$t("message.usechaintitle") + "-" + this.$t("message.description");
    var w = document.documentElement.scrollWidth || document.body.scrollWidth;
    this.device = w < 576 ? "mobile" : "pc";
  },
  mounted() {
    $(".front_modal").hide();
    var _this = this;
    window.onscroll = function() {
      var scrollHeight =
        document.documentElement.scrollTop || document.body.scrollTop;
      _this.navBarFixed = scrollHeight < 200 ? false : true;
      $(".transformLi").css("z-index", "");
    };

    function advantageAnimate() {
      for (var i = 1; i < 4; i++) {
        var j = 0;
        var arr = [1, 2, 3];
        setTimeout(function() {
          $(".advantage").removeClass("active");
          var item = arr[j++];
          $(".advantage" + item).addClass("active");
        }, i * 600);
      }
    }

    setTimeout(function() {
      advantageAnimate();
      setInterval(function() {
        advantageAnimate();
      }, 5000);
    }, 2000);

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
            lineStyle: { color: "#fff" }
          },
          label: {
            show: this.device === "pc" ? true : false,
            textStyle: { color: "#fff" }
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

    var scrollTo = location.href.split("hrefto=")[1]; //获取地址栏中跳转位置提示
    let anchorElement = document.getElementById(scrollTo);
    if (scrollTo && anchorElement) {
      anchorElement.scrollIntoView();
    }
  }
};
</script>

<style scoped>
.section_init {
  background: url(../assets/images/section_init_bj.png) no-repeat left bottom;
  background-size: 12rem;
  padding-bottom: 2rem;
  position: relative;
}
.section_init h2 {
  margin-top: 3rem;
}
.section_init::after {
  position: absolute;
  content: "";
  width: 6rem;
  height: 6rem;
  right: 0;
  top: 3rem;
  background: url(../assets/images/banner_img9.png) no-repeat right top;
  background-size: contain;
}
.section_init .hover_wrapper {
  margin-top: -1.6rem;
  height: 88vmin;  
}
.pad_bottom p {
  margin-left: -1rem;
}
@media screen and (max-width: 576px) {
  .section_init {
    background: none;
    padding-bottom: 0;
  }
  .section_init::after {
    background: none;
  }
  .section_init .hover_wrapper {
    margin-top: 2rem;
  }
  .section_init h2 {
    margin-top: 1rem;
  }
  .pad_bottom {
    padding-top: 0 !important;
  }
  .pad_bottom p {
    margin-left: 0;
  }
}

.long_text {
  font-size: 1rem;
  line-height: 2.4rem;
}
.hover_animate img {
  width: 100%;
  height: auto;
}
.section_work {
  background: #f6f6f6;
}
.solution_text {
  line-height: 2rem;
  padding: 1rem 0;
}
@media screen and (max-width: 576px) {
  .solution_text {
    padding: 0.4rem 0;
  }
  .mobile_h4 {
    font-size: 1.3rem;
  }
}
.solution_img {
  width: 2rem;
  margin-right: 1rem;
}
.hover_wrapper ul {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.hover_wrapper ul li {
  position: absolute;
  height: auto;
}
.pic_banner_hover1 {
  width: 13%;
  left: 43%;
  top: 9%;
}
.pic_banner_hover2 {
  width: 80%;
  left: 12%;
  top: 22%;
}
.pic_banner_hover3 {
  width: 60%;
  left: 36%;
  top: 28%;
}
.pic_banner_hover4 {
  width: 48%;
  left: 36%;
  top: 34%;
}
.pic_banner_hover5 {
  width: 66%;
  left: 14%;
  top: 44%;
}
.pic_banner_hover6 {
  width: 52%;
  left: 0;
  top: 0%;
}
.pic_banner_hover7 {
  width: 80%;
  left: 16%;
  top: 62%;
}
.pic_banner_hover8 {
  width: 19%;
  left: 78%;
  top: 50%;
}
.pic_banner_modal {
  top: 28%;
  width: 80%;
  left: 12%;
}
.img_wrap {
  width: 8rem;
  height: 8rem;
  margin: 0 auto;
  margin-top: 1rem;
}
.img_wrap img {
  width: 100%;
  height: 100%;
}
.img_wrap .badgeIn {
  background-color: #6c757d;
  color: #4280d1;
  background: #fff;
  box-shadow: 0 0 6px #bbb;
  border-radius: 50%;
  right: 1rem;
  vertical-align: bottom;
  width: 1.4rem;
  height: 1.4rem;
  text-align: center;
  line-height: inherit;
  bottom: 0;
  z-index: 2;
}
.section_token {
  background: #3081e9;
}
.section_token .container {
  background: url(../assets/images/distribution_bj.png) no-repeat center center;
  background-size: 100% auto;
}
.section_token img {
  max-width: 50vmin;
}
.section_team {
  background-size: 100% auto;
}
.section_advisor .section_team {
  background: none;
}
.section_advisor {
  background: #f6f6f6;
}
.section_partner {
  background: #5da8ea;
}
.section_map {
  text-shadow: 10px 7px 1px #e2e2e2;
}
.section_map .wrapper::before {
  content: "";
  position: absolute;
  left: 50%;
  top: -10px;
  z-index: 4;
  width: 8px;
  height: 8px;
  margin-left: -4px;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #ededed;
}
.section_map .wrapper::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  z-index: 2;
  width: 4px;
  height: 100%;
  background: #ddd;
  margin-left: -2px;
}
.section_map ul {
  padding-bottom: 3rem;
}
.section_map ul::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 1rem;
  z-index: 4;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: calc(1rem - 2px);
  box-shadow: 0 0 0 3px #eee;
}
.section_map ul::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 1rem;
  z-index: 2;
  width: 4px;
  height: 100%;
  margin-top: 10px;
  margin-left: 1rem;
  background: #eee;
}

@media screen and (max-width: 576px) {
  .section_map .wrapper::before {
    left: 0%;
    margin-left: -4px;
    box-shadow: 0 0 0 3px #ededed;
  }
  .section_map .wrapper::after {
    left: 0%;
    background: #ddd;
    margin-left: -2px;
  }
  .section_map ul::before {
    left: 0%;
    margin-left: calc(1rem - 2px);
    box-shadow: 0 0 0 3px #eee;
  }
  .section_map ul::after {
    left: 0%;
    margin-left: 1rem;
    background: #eee;
  }
  .section_map li {
    padding-left: 15px;
    padding-top: 1.6rem;
  }
}

.section_map li .wrap {
  padding: 0 0.7rem;
  color: #555;
}
.section_map li .wrap.active {
  color: #4280d0;
}
.section_map li .time {
  font-size: 1.4rem;
}
.section_map li.active .wrap .time {
  color: #666;
}
.section_map li.past .time {
  color: #b4b4b4;
}
.section_map li .wrap {
  word-break: break-word;
}
.section_map li .has_block::after {
  position: absolute;
  content: "";
  z-index: 3;
  top: 10px;
  left: -2px;
  background: #91bcf2;
  width: 8px;
  height: 4px;
}
.section_map li .has_block.text-right::after {
  background: #91bcf2;
  right: -2px;
  left: auto;
}
.section_work .hover_wrapper {
  margin: 0 auto;
  width: 500px;
  height: 700px;
}
.mwork1 {
  width: 70%;
  padding-left: 6%;
  padding-top: 3%;
}
.mwork2 {
  width: 86%;
  padding-top: 59%;
  padding-left: 27%;
}
.mwork3 {
  width: 91%;
  padding-top: 64%;
  padding-left: 53%;
}
.mwork4 {
  width: 31%;
  top: 76%;
  left: 53%;
}
@media screen and (max-width: 576px) {
  .section_work .hover_wrapper {
    width: 80%;
    height: 94vmin;
    margin-bottom: 2rem;
  }
  .mwork2 {
    padding-top: 65%;
    padding-left: 30%;
  }
  .mwork3 {
    width: 95%;
    padding-top: 67%;
    padding-left: 56%;
  }
  .mwork4 {
    top: 85%;
    left: 56%;
  }
}
.clear:after {
  content: "";
  clear: both;
  display: block;
  overflow: hidden;
  height: 0px;
}
.section_team > ul > li {
  height: 20rem;
  float: left;
  position: relative;
  transform-style: preserve-3d;
  transition: all 1s;
  padding: 1rem 0;
}
.slide_front {
  background: #fff;
  width: 100%;
  height: 20rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50%;
  margin-top: -10rem;
  transform: translateZ(1px);
  border-radius: 1rem;
}
.front_modal {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
}
.slide_back {
  width: 98%;
  font-size: 0.9rem;
  line-height: 1.3rem;
  position: absolute;
  top: 51%;
  left: 51%;
  margin-left: -50%;
  margin-top: calc(-10rem - 1px);
  transform: translateZ(-1px);
  border-radius: 1rem;
  height: calc(20rem - 3px);
  background: #f6f6f6;
}
.slide_back .wrapper {
  margin: 1.5rem 0.5rem;
  height: 17rem;
  overflow: auto;
}
.slide_back p {
  transform: rotateY(180deg);
  padding: 0 0.6rem;
}
.readmore {
  font-size: 0.9rem;
}
.slide_back .wrapper::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.slide_back .wrapper::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background-color: #666;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
}
.slide_back .wrapper::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}
.section_advisor .slide_front {
  background: #f6f6f6;
}
.section_advisor .slide_back {
  background: #fff;
}
.slide_left {
  width: 2px;
  height: 20rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -1px;
  margin-top: -10rem;
  transform: rotateY(-90deg) translateZ(1px);
}
.slide_right {
  width: 2px;
  height: 20rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -1px;
  margin-top: -10rem;
  transform: rotateY(90deg) translateZ(1px);
}
.fix_bottom {
  right: 1rem;
  bottom: 2rem;
  z-index: 99;
  width: 3rem;
}
.echart_wrapper {
  width: 23rem;
  height: 23rem;
}
.modalOpacity {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0);
  z-index: 10000000;
}
.modalOpacityNav {
  z-index: 20;
  background: rgba(0, 0, 0, 0);
}
.advantage {
  color: #666;
  text-align: left;
  line-height: 3rem;
}
.advantage img {
  width: 1.8rem;
  /* margin-left: 4rem; */
  margin-right: 1rem;
}
.advantage.active img {
  animation: advantageImg 0.4s ease;
}
@keyframes advantageImg {
  10% {
    width: 1.6rem;
    margin-right: 1.2rem;
  }
  50% {
    width: 2rem;
    margin-right: 0.8rem;
  }
}
.hover_box,
.hover_box::before,
.hover_box::after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.hover_box {
  width: 200px;
  height: 460px !important;
  left: 33%;
  top: 24%;
  color: #007bff;
  border: 1px solid rgba(0, 123, 255, 0.5);
  border-width: 0 0 1px 1px;
  transform: rotateX(-58deg) rotateY(-14deg) rotateZ(-56deg);
  z-index: 12;
}
@media screen and (max-width: 576px) {
  .hover_box {
    transform: rotateX(-58deg) rotateY(-14deg) rotateZ(-56deg) scale(.5);
    top: -11vmin;
    left: 16vmin;
    display: none;
  }
}

.hover_box::before,
.hover_box::after {
  content: "";
  z-index: -1;
  margin: -5%;
  box-shadow: inset 1px -2px 0 1px;
  animation: clipMe 6s ease-out infinite;
}

.hover_box::before {
  /* animation-delay: -2s; */
  animation: clipBefore 6s ease-out infinite;
}

.hover_box:hover::after,
.hover_box:hover::before {
  background-color: rgba(168, 204, 252, 0.1);
}

@keyframes clipMe {
  0%,
  100% {
    clip: rect(60px, 4px, 520px, 0px);
  }
  30% {
    clip: rect(480px, 4px, 520px, 0px);
  }
}
@keyframes clipBefore {
  0%,
  100% {
    clip: rect(476px, 160px, 520px, 0px);
  }
  30% {
    clip: rect(476px, 4px, 520px, 0px);
  }
}
</style>
