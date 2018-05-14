<template>
  <nav class="navbar navbar-expand-lg px-0 py-1 py-md-0 z-index-10 w-100" 
    :class="{'navbar_border position-fixed':navBarFixed}">
    <div class="container">
      <router-link class="navbar-brand pr-5 pl-4" to="/">
        <img class="p-md-1" src="../assets/images/logo.png"/>
      </router-link>
      <button class="navbar-toggler menu_btn mr-4" type="button" @click.self="clickMenuBtn"
              data-toggle="collapse" data-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="nav_menu position-relative" :class="{change_mode:navMenuShow}" @click.self="clickMenuBtn"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="wrapper">
          <div class="text-center d-lg-flex flex-wrap w-100 py-4 py-md-0">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item p-1 py-md-2 mx-2 text-capitalize" :class="{'active':index===navItemActive}" v-for="(item,index) in navList" :key="index"
              @mouseenter="mouseEnterItem(index)" @mouseleave="mouseLeaveItem(index)" @click="jump(index)">
                <router-link class="nav-link text-secondary" :to="'/?hrefto='+item" v-text='$t("message."+item)'></router-link>
              </li>
              <li class="nav-item dropdown px-2 py-md-2">
                <a class="nav-link dropdown-toggle text-secondary" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-text="languageName==='en'?'English':'中文'"></a>
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
</template>

<script>
import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "../assets/js/lang";
import '../assets/css/navbar.css';

Vue.use(VueI18n);

var i18n = new VueI18n({
  locale: localStorage.local || "en",
  messages // set locale messages
});

export default {
  name: "NavBar",
  data() {
    return {
      languageName: localStorage.local || "en",
      lanList: [{ tab: "中文", value: "ch" }, { tab: "English", value: "en" }],
      navList: ["nav1", "nav2", "nav3", "nav4"],
      navDefaultActive: 0,
      navItemActive: 0,
      navMenuShow: false,
      navBarFixed: false,
      hasShadow:false
    };
  },
  i18n,  
  created(){
    this.$i18n.locale=localStorage.local || "en";
    document.title =
      this.$t("message.usechaintitle") + "-" + this.$t("message.description");
  },
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
      this.$emit("chooseLanguage", chosen);
      document.title =this.$t("message.usechaintitle")+'-'+this.$t('message.description');
    },
    shadowShow(){
      this.hasShadow=true
    },
    shadowHidden(){
      this.hasShadow=false
    },
    mouseEnterItem(index) {
      this.navItemActive = index;
    },
    mouseLeaveItem(index) {
      this.navItemActive = this.navDefaultActive;
    },
    clickMenuBtn(event) {
      this.navMenuShow = !this.navMenuShow;
    },
    jump(index) {
      //选中高亮
        this.navDefaultActive = index;
    },
  },
  mounted() {
    var _this = this;
    window.onscroll = function() {
      var scrollHeight =
        document.documentElement.scrollTop || document.body.scrollTop;
      _this.navBarFixed = scrollHeight < 200 ? false : true;
    };
  }
};
</script>

