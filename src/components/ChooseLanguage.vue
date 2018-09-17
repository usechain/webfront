<template>
    <!-- 无NavBar页面语言切换组件 -->
    <div class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-text="language==='en'?'English':'中文'"></a>
      <div @click="chooseLanguage" class="dropdown-menu" aria-labelledby="navbarDropdown">
        <div class="dropdown-item" v-for="(item,index) in lanList" name="language" :data-value="item.value" :key="index" v-text="item.tab"></div>
      </div>
    </div>
</template>

<script>
import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "../assets/js/lang";

Vue.use(VueI18n);

var i18n = new VueI18n({
  locale: localStorage.local || "en",
  messages 
});
export default {
  name: "ChooseLanguage",
  i18n,
  data() {
    return {
      language: localStorage.local || "en",
      lanList: [{ tab: "中文", value: "ch" }, { tab: "English", value: "en" }]
    };
  },
  methods: {
    chooseLanguage(event) {
      const chosen = event.target.dataset.value;
      chosen && localStorage.setItem("local", chosen);
      this.language = chosen;
      this.$i18n.locale = chosen;
      this.$emit("chooseLanguage", chosen);
    }
  }
};
</script>

<style scoped>
.dropdown{
    float: right;
}
.dropdown-menu{
  background: none;
  text-align: right;
  padding: 0;
  margin: 0;
  min-width: auto;
}
.dropdown .dropdown-item{
  background: #fff;
}
.dropdown-item:hover{
    background: none;
    color: #3685e9;
}
</style>
