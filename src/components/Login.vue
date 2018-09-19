<template>
  <div class="">
      <nav-bar @chooseLanguage="chooseLanguage"></nav-bar>
      <div v-text='$t("message.login")'></div>
      <div class="">{{ $route.params.id }}</div>
  </div>
</template>

<script>
import Vue from "vue";
import VueI18n from "vue-i18n";
import NavBar from "./NavBar";
import messages from "../assets/js/lang";

Vue.use(VueI18n);

var i18n = new VueI18n({
  locale: localStorage.local || "en",
  messages // set locale messages
});

export default {
  name:'login',
   components: {
    NavBar,
  },
  i18n,
  methods:{
    chooseLanguage(lang) {
      this.$i18n.locale = lang;
    },
  }
}
</script>

