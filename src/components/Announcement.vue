<template>
    <div class="container pb-5">
        <!-- 切换语言 -->
        <div class="clearfix">
            <ChooseLanguage @chooseLanguage="chooseLanguage"></ChooseLanguage>
        </div>
        <div class="text-secondary pust_wrap">  
            <!-- title    -->
            <div class="h4  py-1 text-primary text_center">
                <div class="text_title has_border py-2" v-text='$t("announcement.title")'></div> 
            </div>
            <div v-html='$t("announcement.dear")' class="pt-4 text_black"></div>
            <div v-html='$t("announcement.thanks")' class="py-3"></div>
            <div v-html='$t("announcement.forexample")' class="text_indent2 pb-3"></div>
            <div v-html='$t("announcement.detail")'></div>
            <div v-html='$t("announcement.future")' class="py-3"></div>
            <div v-html='$t("announcement.spirit")'></div>
            <div v-html='$t("announcement.team")' class="pt-3 text_black text-right"></div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "../assets/js/lang";
import ChooseLanguage from './ChooseLanguage';

Vue.use(VueI18n);

var i18n = new VueI18n({
  locale: localStorage.local || "en",
  messages 
});

export default {
    name: "Announcement",  
    components: {
        ChooseLanguage,
    },  
    i18n,
    created(){
        this.$i18n.locale=localStorage.local || "en";
    },
    methods:{
        chooseLanguage(lang){
            this.$i18n.locale = lang;
        },
    }
}
</script>

<style scoped>
.text-secondary a {
    color: #3685e9;
}
</style>

