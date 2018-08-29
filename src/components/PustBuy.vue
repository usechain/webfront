<template>
    <div class="container pb-5 word_break">
        <div class="clearfix">
            <ChooseLanguage @chooseLanguage="chooseLanguage"></ChooseLanguage>
        </div>
        <div class="py-1 text-primary text_center">
            <div class="h4 py-2 text_title" v-text='$t("pustBuyPage.title")'></div>
            <!-- <a href="https://usechain.net/buy_pust.pdf" target="_blank">pdf版本</a>             -->
         </div>
        <div class="pt-3">
            <div class="text-danger py-1" v-text='$t("pustBuyPage.notice")'></div>
        </div>
        <div class="h4 pt-3"><span>·</span> <span v-text='$t("pustBuyPage.s1")'></span></div>

        <p class="pt-4 py-2 text-primary" v-text='$t("pustBuyPage.s11")'></p>
        <div class="img_div"><img src="../assets/images/buy1.png" alt=""></div>

        <p class="pt-4 py-2 text-primary" v-text='$t("pustBuyPage.s12")'></p>
        <div class="img_div"><img src="../assets/images/buy2.png" alt=""></div>

        <p class="pt-4 py-2 text-primary" v-text='$t("pustBuyPage.s13")'></p>
        <div class="img_div"><img src="../assets/images/buy3.png" alt=""></div>
        
        <p class="pt-4 py-2 text-primary" v-text='$t("pustBuyPage.s14")'></p>
        <div class="text-secondary">
            <p>
                <span v-text='$t("pustBuyPage.address")'></span>
                <span class="text_black text_bold" v-html="epochNow.address"></span>
            </p>
            <p v-text='$t("pustBuyPage.amount")'></p>
            <p v-text='$t("pustBuyPage.gwei")'></p>
            <p v-text='$t("pustBuyPage.gas")'></p>
        </div>
        
        <p class="pt-4 py-2 text-primary" v-text='$t("pustBuyPage.s15")'></p>
    
        <div class="h4 pt-3"><span>·</span> <span v-text='$t("pustBuyPage.s2")'></span></div>
        <p class="pt-4 py-2"><span v-text='$t("pustBuyPage.open")'></span>：<a target="_blank" href="https://www.myetherwallet.com/#send-transaction"> https://www.myetherwallet.com/#send-transaction</a></p>
        <div class="img_div"><img src="../assets/images/buy4.png" alt=""></div>

        <p class="pt-4 py-2 text-primary">UnLock Wallet</p>
        <div class="img_div"><img src="../assets/images/buy5.png" alt=""></div>

        <p class="pt-4 py-2 text-primary">Send ETH</p>
        <div class="img_div"><img src="../assets/images/buy6.png" alt=""></div>

        <div class="text-secondary">
            <p class="pt-4 py-2" v-text='$t("pustBuyPage.s21")'></p>
            <p v-text='$t("pustBuyPage.s22")'></p>
            <p class="text_black text_bold" v-html="epochNow.address"></p>
            <p v-text='$t("pustBuyPage.s23")'></p>
            <p v-text='$t("pustBuyPage.s24")'></p>
        </div>
        <p class="pt-4 py-2 text-primary" v-text='$t("pustBuyPage.s25")'></p>

        <div class="h4 pt-3"><span>·</span> <span v-text='$t("pustBuyPage.s3")'></span></div>
        <p class="pt-4 py-2 text-primary" v-text='$t("pustBuyPage.s31")'></p>
        <p v-text='$t("pustBuyPage.s32")'></p>
        <p v-text='$t("pustBuyPage.s33")'></p>
        <p><a target="_blank" href="https://etherscan.io/address/0xF55E0Ca70E4Ad360A2aE12F8b2C2634ac67FB22e#tokentxns">https://etherscan.io/address/0xF55E0Ca70E4Ad360A2aE12F8b2C2634ac67FB22e#tokentxns</a></p>
         
    </div>
</template>

<script>
import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "../assets/js/lang";
import {pustEpoch,pustEpoch_en} from '../assets/js/config';
import ChooseLanguage from './ChooseLanguage';

Vue.use(VueI18n);

var i18n = new VueI18n({
  locale: localStorage.local || "en",
  messages 
});

export default {
    name: "PustBuy",    
    components: {
        ChooseLanguage,
    },  
    i18n,
    data(){
        return{
            epochNow:'',
        }
    },
    created(){
        var pustqr=this.$route.params.pustqr || '0';
        var pustqrNum=parseInt(pustqr);
        var pustqrNow=pustEpoch.length-pustqrNum;

        if(pustqr==='0'){
            this.epochNow= localStorage.local==='ch' ? pustEpoch[0] : pustEpoch_en[0];
        }else{
            this.epochNow= localStorage.local==='ch' ? pustEpoch[pustqrNow] : pustEpoch_en[pustqrNow];
        }
        
        this.$i18n.locale = localStorage.local || 'en';
    },
    methods:{
        chooseLanguage(lang){
            this.$i18n.locale = lang;  
        },
    }
}
</script>


<style scoped>
img{
    max-width: 100%;
}
.text_title{
    font-weight: normal;
}
@media screen and (max-width:992px) {
    .img_div{
       text-align: center;
    }
}
</style>
