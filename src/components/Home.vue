<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg px-0 py-1 py-md-0 z-index-10 w-100 scrollspy-nav" 
      data-am-scrollspynav="{offsetTop: 45}" data-am-sticky :class="{'navbar_border position-fixed':navBarFixed}">
      <div class="container">
        <!-- logo -->
        <div class="navbar-brand pr-3 pl-3">
          <a data-am-smooth-scroll href="javascript:;" id="homelogo"><img class="p-md-1" src="../assets/images/logo.png"/></a>
        </div>
        <!-- 菜单icon -->
        <button class="navbar-toggler menu_btn mr-4" type="button" id="close1" @click.self="clickMenuBtn" 
          data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="nav_menu position-relative" :class="{change_mode:navMenuShow}" @click.self="clickMenuBtn"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" @click.self="closeNavModal">
          <div class="wrapper">
            <div class="text-center d-lg-flex flex-wrap w-100">
              <ul class="navbar-nav mr-auto">
                <!-- <li class="nav-item  mx-2 text-capitalize"><a :href='$t("message.mooneturl")' target="_blank" class="nav-link text-secondary" v-text='$t("message.nav_test")'></a></li>                 -->
                <!-- navList -->
                <li class="nav-item mx-2 text-capitalize" v-for="(item,index) in navList" :key="index">
                  <!-- <a class="nav-link text-secondary" :class="{'am-active':index===navItemActive}" -->
                  <a class="nav-link text-secondary"
                  :id='"hrefto"+(index+1)' :href='"#nav"+(index+1)' v-text='$t("message."+item)'></a>                  
                </li>
                <!-- 代币销售 -->
                <!-- <li class="nav-item  mx-2 text-capitalize"><router-link to="/token" class="nav-link text-secondary" v-text='$t("message.nav7")'></router-link></li> -->
                <!-- 白皮书 -->
                <li class="nav-item dropdown px-2">
                  <a class="nav-link dropdown-toggle text-secondary" href="javascript:;" id="whitepaperDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-text='$t("message.whitepaper")'></a>
                  <div class="dropdown-menu" aria-labelledby="whitepaperDropdown">
                    <a class="dropdown-item" v-for="(item,index) in whitepaperList" :key="index" v-text="item.tab" target="_blank" :href="item.link"></a>
                  </div>
                </li>
                <!-- 博客 -->
                <li class="nav-item  mx-2 text-capitalize"><a href="https://medium.com/@usechain" target="_blank" class="nav-link text-secondary" v-text='$t("message.nav6")'></a></li>
                <!-- 语言切换 -->
                <li class="nav-item dropdown px-2">
                  <a class="nav-link dropdown-toggle text-secondary" href="javascript:;" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-text="languageName==='en'?'English':'中文'"></a>
                  <div @click="chooseLanguage" class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <div class="dropdown-item" v-for="(item,index) in lanList" name="languageName" :data-value="item.value" :key="index" v-text="item.tab"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="section_init">
      <div class="container">
        <div class="row text-center">
          <div class="col-12 col-md-4 pt-5 pt-md-0">
            <!-- 首屏简介 -->
            <h2 class="text-secondary py-3 pt-md-5 wow bounceInDown" v-text='$t("message.usechain")'></h2>
            <p class="h4 p-4 px-md-0 text-secondary long_text wow slideInDown" v-html='$t("message.description")'></p>
            <!-- 三个优势 -->
            <!-- <div :class='{"pl-3":(languageName === "en" ? false : true)}'>
              <div class="advantage wow slideInRight nowrap" :class="'advantage'+item"
                v-for="item in 3" :key="item" :data-wow-delay="'.'+item+'s'">
                <img class="ml-5 ml-md-3 ml-lg-5" :src='"../assets/images/advantage"+item+".png"'/>
                <span v-html='$t("message.advantage"+item)'></span>
              </div>
            </div> -->
              <!-- 倒计时板 -->
              <div class="border border-primary rounded p-4 text-center">
                <p class="text-primary pb-3 mb-0" v-html='$t("message.starttime")'></p>
                <div class="pt-3 pb-4 border-top"  id="dateShow1">
                  <p class="text-primary h4" v-html='$t("message.welcome")'></p>
                  <!-- <div class="row data-show-box text-primary">
                      <span class="date-tiem-span d h2 num">00</span>
                      <span class="h3 dot">:</span>
                      <span class="date-tiem-span h h2 num">00</span>
                      <span class="h3 dot">:</span>
                      <span class="date-tiem-span m h2 num">00</span>
                      <span class="h3 dot">:</span>
                      <span class="date-s-span s h2 num">00</span>
                  </div>
                  <div class="row text-small text-secondary">
                    <span class="num" v-html='$t("message.timed")'></span>
                    <span class="dot"></span>
                    <span class="num" v-html='$t("message.timeh")'></span>
                    <span class="dot"></span>                    
                    <span class="num" v-html='$t("message.timem")'></span>
                    <span class="dot"></span>                    
                    <span class="num" v-html='$t("message.times")'></span>
                  </div> -->
                </div>
                <a :href='$t("message.mooneturl")' target="_blank" class="btn btn-primary w-100" v-html='$t("message.moonet")'></a>
              </div>

          </div>
          <!-- 首屏动效 -->
          <div class="col-12 col-md-8 pl-0 pr-0 pt-3">
            <div class="hover_wrapper wow bounceInDown" @mouseenter="mouseEnterAnimate">
              <ul class="hover_animate position-relative">
                  <li v-for="item in 8" :class='"pic_banner_hover"+item' :key="item" :style='"z-index:"+(10-item)'>
                    <img :src='"../assets/images/banner_img"+item+".png"'/></li>
                  <li class="pic_banner_modal" style="z-index:1">
                    <div class="hover_box"></div>    
                    <img src="../assets/images/banner_img0.png"/>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 新闻板块 -->
    <div class="pt-5" id="nav1">
      <div class="h4 pb-5 text-center text-secondary" v-text='$t("message.videoTitle")'></div>
      <div class="container">
         <!-- 评级 -->
        <div class="justify-content-center">
          <div class="m-auto" :style="{'width': device==='pc'?'80%':'100%'}">
            <Banner :videoHeight="videoHeight" :languageName="languageName"></Banner>
            
            <div class="wow flipInX my-1 section_rate">
              <img src="https://icobench.com/rated/usechain?shape=horizontal&size=m"/>
              <img src="../assets/images/TrackICO.png"/>
              <img src="../assets/images/ICOMarks.png"/>
              <img src="../assets/images/icosmasher.png"/>
            </div>
          </div>
        </div>
        <!-- 视频 -->
        <div class="pb-5 section_video" v-show="languageName!=='en'">
          <iframe :width='videoWidth' :height="videoHeight" src='https://player.youku.com/embed/XMzc2MTE5OTc1Mg==' frameborder='0' allowfullscreen></iframe>
        </div>
        <div class="pb-5 section_video" v-show="languageName==='en'">
          <iframe :width="videoWidth" :height="videoHeight" src="https://www.youtube.com/embed/2KJXgSglaWY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <!-- 产品特点 -->
    <div class="container">
      <div class="pb-5" id="nav2"></div>  
      <div class="h4 text-center wow flipInY text-secondary" v-text='$t("message.featureTitle")'></div>
      <Feature :languageName="languageName"></Feature>
    </div>
    <!-- 解决方案 -->
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
                  <li v-for="item in 4" :key="item" :class='"mwork"+item' :style='item===2?"z-index:4":"z-index:"+3'>
                  <img :src='"../assets/images/mwork"+item+(languageName==="en"?"_en":"_en")+".png"'/></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 路线图 -->
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
    <!-- 核心团队 -->
    <div class="pt-5 mt-5 section_advisor" id="nav4">
      <div class="h4 text-center wow flipInY text-secondary" v-text='$t("message.teamTitle")'></div>
      <div class="section_team py-5">
          <ul class="clear wow fadeInUp container">
            <li class="text-center col-lg-3 col-md-4 col-6 pt-4 transformLi" v-for="(item,index) in teamList" :key="index">
                <div class="slide slide_front">
                  <div class="img_wrap position-relative">
                    <img :src='"../assets/images/staff"+(index+1)+".png"' class="cursor_pointer" @click="clickMemberImg"/>
                    <a class="badgeIn position-absolute" :href='$t("message."+item+".linkin")' v-if='$t("message."+item+".linkin")!=="#"'>in</a>
                  </div>
                  <div class="h5 pt-3" v-text='$t("message."+item+".name")'></div>
                  <div class="h6 pt-1 text-secondary" v-text='$t("message."+item+".staff")'></div>
                  <div class="text-primary cursor_pointer text-capitalize readmore" @click="showMemberBack">read more</div>
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
    <!-- 顾问团队 -->
    <div class="section">
      <div class="h4 text-center wow flipInY text-secondary pt-4" v-text='$t("message.advisorTitle")'></div>
        <div class="container section_team pt-5">
          <ul class="clear wow fadeInUp">
            <li class="text-center col-lg-3 col-md-4 col-6 pt-4 transformLi" v-for="item in advisorList" :key="'investors'+item">
                <div class="slide slide_front">
                  <div class="img_wrap position-relative">
                    <img :src='"../assets/images/"+item+".png"' class="cursor_pointer" @click="clickMemberImg"/>
                    <a class="badgeIn position-absolute" :href='$t("message."+item+".linkin")' v-if='$t("message."+item+".linkin")!=="#"'>in</a>
                  </div>
                  <div class="h5 pt-3" v-text='$t("message."+item+".name")'></div>
                  <div class="h6 pt-1 text-secondary" v-text='$t("message."+item+".staff")'></div>
                  <div class="text-primary cursor_pointer text-capitalize readmore" @click="showMemberBack">read more</div>
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
    <!-- 合作伙伴 -->
    <div class="section_partner py-5"  id="nav5">
      <div class="container">
        <div class="h4 text-center wow flipInY text-secondary pt-4" v-text='$t("message.partnerTitle")'></div>
        <div class="justify-content-center section">
          <div class="text-center row p-4 p-md-0">
            <div class="col-6 col-sm-4 col-lg-3" v-for="(item,index) in partnerList" :key="index">
              <img class="w-100 px-md-4 py-1 py-lg-4 wow flipInX" :data-wow-delay="'.'+index+'s'" :src='"../assets/images/"+item+".png"'/>
            </div>
          </div>
        </div>    
      </div>    
    </div>
    <!-- 媒体报道 -->
    <div class="container pt-5">
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
    <Telegram/>
   
    <!-- Modal -->
    <div class="modalOpacity modalOpacityNav" v-show="navMenuShow" @click="closeNavModal"></div>    
    <div class="modalOpacity" v-show="modalShow" @click="closeModal"></div>
  </div>
</template>

<script>
import Vue from "vue";
import VueI18n from "vue-i18n";
import $ from "jquery";
import messages from "../assets/js/lang";
import Feature from "./Feature";
import Banner from "./Banner";
import Bottom from "./Bottom";
import Telegram from "./Telegram";
import "../assets/css/navbar.css";
import "../assets/js/amazeui.min.js";
import "../assets/js/leftTime.min.js";


Vue.use(VueI18n);

var i18n = new VueI18n({
  locale: localStorage.local || "en",
  messages 
});

export default {
  name: "Home",
  components: {
    Feature,
    Bottom,
    Banner,
    Telegram
  },
  data() {
    return {
      device: "mobile",
      teamList: [
        "caohuining",
        "sunbaohong",
        "zhangfeng",
        "xuzhiwen",
        "zhouhaihan",
        "zhaolin","songgengnan","zhangliang"
      ],
      advisorList: [
        "luliang",
        "caoyin",
        "weishangjin",
        "maqian",
        "yanfangjun",
        "zhushengqing","caofeng"
      ],
      partnerList:[
        'xiongan','keyin','fancheng','jrr','newdo','milestone','dcc','yingxin','dfg','jike','jikeziben','naba','junmu','capital'
      ],
      mapItemActive: 5,
      languageName: localStorage.local || "en",
      lanList: [{ tab: "中文", value: "ch" }, { tab: "English", value: "en" }],
      whitepaperList:[
        { tab: "Project Whitepaper EN", link: "/usechain_en.pdf" },
        // { tab: "项目白皮书 中文", link: "/usechain_cn.pdf" },
        // { tab: "프로젝트 백서  한국", link: "/usechain_kr.pdf" },
        { tab: "Technical Whitepaper EN", link: "/usechain_tech_en.pdf" },
        // { tab: "技术白皮书  中文", link: "/usechain_tech_cn.pdf" },
        // { tab: "기술 백서  한국", link: "/usechain_tech_kr.pdf" },
      ],
      navList: ["nav1", "nav2", "nav3","nav4","nav5"],
      // navItemActive: 0,
      navMenuShow: false,
      navBarFixed: false,
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
          img: "newswire",
          href:
            "https://www.prnewswire.com/news-releases/usechain-to-become-worlds-first-ever-self-sovereign-identity-blockchain-300638531.html"
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
        },
        {
          img: "hanguo",
          href:
            "http://news.hankyung.com/article/201810295722a"
        },
        {
          img: "ein",
          href:
            "https://www.einpresswire.com/article/466283621/usechain-at-2018-korea-blockchain-expo-to-start-the-3go-program?r=paadAviktRxzidD_Qu"
        },
        {
          img: "meitong",
          href:
            "https://www.prnasia.com/story/227948-1.shtml"
        },
        {
          img: "csdn",
          href:
            "https://blog.csdn.net/qadnmcrfxcn6c6h6661/article/details/83663169"
        },
        {
          img: "ke",
          href:
            "https://36kr.com/p/5150074.html"
        },
        {
          img: "huoxing",
          href:
            "https://www.huoxing24.com/newsdetail/20181122110900813373"
        },
        {
          img: "xingqiu",
          href:
            "https://www.odaily.com/post/5136158"
        },
        {
          img: "alcoin",
          href:
            "https://www.aicoin.net.cn/article/64199.html"
        },
        {
          img: "finanzennet",
          href:
            "https://www.finanzen.net/nachricht/aktien/usechain-mainnet-goes-live-to-build-a-wall-street-on-chain-7316459"
        },
        {
          img: "bitcoinist",
          href:
            "https://bitcoinist.com/randomized-proof-of-work-privacy-and-its-own-lightning-network-usechain-makes-bold-promises/"
        },
        {
          img: "techsutram",
          href:
            "https://www.techsutram.com/2019/03/usechain-alpha-mainnet-is-live.html?m=1"
        },
        {
          img: "verdict",
          href:
            "https://www.verdict.co.uk/usechain-blockchain/"
        }
      ],
      videoWidth:'',
      videoHeight:'',
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
    },
    clickMenuBtn(event) {
      this.navMenuShow = !this.navMenuShow;
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
    timestampToTime(timestamp) {
        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '/';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '/';
        var D = (date.getDate()+1 < 10 ? '0'+(date.getDate()) : date.getDate()) + ' ';
        var h = (date.getHours()+1 < 10 ? '0'+(date.getHours()) : date.getHours()) + ':';
        var m = (date.getMinutes()+1 < 10 ? '0'+(date.getMinutes()) : date.getMinutes()) + ':';
        var s = (date.getSeconds()+1 < 10 ? '0'+(date.getSeconds()) : date.getSeconds());
        return Y+M+D+h+m+s;
    }
  },
  created() {
    this.$i18n.locale = localStorage.local || "en";
    document.title =
      this.$t("message.usechaintitle") + "-" + this.$t("message.description");
    var w = document.documentElement.scrollWidth || document.body.scrollWidth;
    this.device = w < 576 ? "mobile" : "pc";
   
    // var videow= w <576 ? "100%" : "722";
    // var videow= "100%";
    // this.videoWidth =videow;
    // this.videoHeight = parseInt(videow*9/16);
    
  },
  mounted() {
    // var unix=this.timestampToTime(1554033600);
    // console.log('转化为',unix);

    // $.leftTime(unix,function(d){
    //   if(d.status){
    //     var $dateShow1=$("#dateShow1");
    //     $dateShow1.find(".d").html(d.d);
    //     $dateShow1.find(".h").html(d.h);
    //     $dateShow1.find(".m").html(d.m);
    //     $dateShow1.find(".s").html(d.s);
    //   }
    // });
    
    var videow=$('.container').width();
    
    this.videoWidth = this.device === "pc" ? "80%" : "100%";    
    this.videoHeight = parseInt(videow*9/16);
    // console.log('宽',videow,this.videoHeight)

    $(".front_modal").hide();
    
    var _this = this;
    window.onscroll = function() {
      var scrollHeight =
        document.documentElement.scrollTop || document.body.scrollTop;
      _this.navBarFixed = scrollHeight < 200 ? false : true;
      $(".transformLi").css("z-index", "");

      $('.am-active').parent('li').addClass('active');
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

   
    var scrollTo=this.$route.params.nav;
    if(scrollTo){
      window.location.href="/#"+scrollTo;
    }else{
      $('#homelogo').trigger('click');
    }
  }
};
</script>

<style scoped>
.btn_hover{
  display: flex;
  justify-content: space-around;
}
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
.icon-arrow{
  position: relative; 
}
.icon-arrow::before{
    position: absolute;
    bottom: 66px;
    left: 50%;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 9px 10px 9px;
    border-color: transparent transparent #3685e9 transparent;
}
.icon-arrow::after{
    position: absolute;
    bottom: 66px;
    left: calc(50% + 1px );
    content: '';
    width: 0;
    height: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #fff transparent;
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
  width: 48%;
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
.section_team {
  background-size: 100% auto;
}
.section_advisor .section_team {
  background: none;
}
.section_advisor {
  background: #f6f6f6;
}
.section_partner{
  background: #f6f6f6;
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
.section_rate{
  font-size: 0;
  background: url(../assets/images/bg_rate.png) no-repeat;
  background-size: 100% 100%; 
}
.section_rate img{
  display: inline-block;
  width: 25%;
  height: 100%;
  padding: 0 2% 5px;
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
@media screen and (max-width: 992px) {
  .section_work .hover_wrapper {
    width: 100%;
    height:486px;
  }
  .solution_text{
    padding-top: 0;
  }
}
@media screen and (max-width: 768px) {
  .section_work .hover_wrapper {
    width: 80%;
    height:590px;
  }
}
@media screen and (max-width: 576px) {
  .section_work .hover_wrapper {
    height: 98vmin;
    margin-bottom: 2rem;
  }
  .mwork2 {
    width: 90%;
    padding-top: 62%;
    padding-left: 29%;
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
.section_video{
  text-align: center;
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
  color: #3685e9;
  border: 1px solid rgba(0, 123, 255, 0.5);
  border-width: 0 0 1px 1px;
  z-index: 12;
  width: 200px;
  height: 460px !important; 
  left: 27%;
  top: -10%;
  transform: rotateX(-58deg) rotateY(-14deg) rotateZ(-56deg);
}
@media screen and (max-width: 992px) {
  .hover_box {
    left:17%;
    top: -32%;
    transform: rotateX(-58deg) rotateY(-14deg) rotateZ(-56deg) scale(.6);
  }
}
@media screen and (max-width: 768px) {
  .hover_box {
    left:22%;
  }
}
@media screen and (max-width: 500px) {
  .hover_box {
    transform: rotateX(-58deg) rotateY(-14deg) rotateZ(-56deg) scale(.4);    
    left:10%;
    top:-80%;
  }
}
@media screen and (max-width: 440px) {
  .hover_box {
    left:16%;
    top:-60%;
  }
}
@media screen and (max-width: 380px) {
  .hover_box {
    left:11%;
    top:-70%;
  }
}
@media screen and (max-width: 320px) {
  .hover_box {
    left:2%;
    top:-100%;
  }
}
.hover_box::before,
.hover_box::after {
  content: "";
  z-index: -1;
  margin: -5%;
  box-shadow: inset 1px -2px 0 1px;
  clip: rect(60px, 4px, 520px, 0px);
  animation: clipMe 6s ease-out infinite;
}

.hover_box::before {
  animation: clipBefore 6s ease-out infinite;
}

.hover_box:hover::after,
.hover_box:hover::before {
  clip: rect(476px, 160px, 520px, 0px);
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

.btn-outline-secondary:hover{
  background: none;
  border-color: #3685e9;
}
.btn-outline-secondary:hover .hover_white{
  color: #3685e9;
}
.dropdown.show .hover_white{
  color: #3685e9;
}
.dropdown.show .btn-outline-secondary{
  border-color: #3685e9;
}
#dateShow1 .dot{
  width: 9%;
}
#dateShow1 .num{
  width: 18%;
}

</style>
