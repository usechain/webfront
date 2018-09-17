<template>
    <div class="container pb-5">
        <!-- 语言切换 -->
        <div class="clearfix">
            <ChooseLanguage @chooseLanguage="chooseLanguage"></ChooseLanguage>
        </div>
        <div class="text-secondary pust_wrap">      
            <!-- title -->
            <div class="h4  py-1 text-primary text_center">
                <div class="text_title py-2" v-text='$t("exchange.title")'></div> 
            </div>      
            <div v-html='$t("exchange.dear")' class="pt-4 text_black"></div>
            <div v-html='$t("exchange.hello")' class="py-3"></div>
            <div v-html='$t("exchange.hitbtc")'></div>
            <div v-html='$t("exchange.arrangement")' class="py-3"></div>
            <div v-html='$t("exchange.more")' class="text_black"></div>
            <div>Telegram：<a href="https://t.me/usechaingroup" target="_blank"> https://t.me/usechaingroup</a></div>
            <div>Email：<a href="vip@usechain.net" target="_blank"> vip@usechain.net</a></div>
            <div v-html='$t("announcement.team")' class="pb-3 text_black text-right"></div>            
            <div v-html='$t("exchange.intro")' class="pt-5 text-small"></div>
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
    name: "Exchange",  
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
.text_title{
    border-top: 1px solid #3685e9;
    border-bottom: 1px solid #3685e9;
    display: inline-block;
    font-weight:normal;
}
.text-secondary a {
    color: #3685e9;
}
</style>

