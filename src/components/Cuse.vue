<template>
     <div class="container pb-5 text-secondary">
        <div class="clearfix text-primary">
            <ChooseLanguage @chooseLanguage="chooseLanguage"></ChooseLanguage>
        </div>
        <div class="py-1 text-primary text_center">
            <div class="h4 py-2 text_title has_border" v-text='$t("cusePage.title")'></div>
         </div>
        <div class="pt-3">
            <span class="text_black text_bold" v-text='$t("cusePage.addressERC")'></span>
            0x6081dEd2d0a57fC4b63765B182D8773E72327fE2</div>
        <div>
            <span class="text_black text_bold" v-text='$t("cusePage.addressContract")'></span>
            0x85a18c688991e6181ebf5d53be90555527b1327f</div>
        <div class="pt-3" v-text='$t("cusePage.cuse")'></div>
        <div class="py-3 text_black text-primary text-small" style="font-style:italic" v-text='$t("cusePage.note")'></div>
        <div class="text_black text_bold" v-text='$t("cusePage.table")'></div>
        <div class="px-5 py-2 mx-5">
            <table class="table table-sm table-striped text-center text-small text-secondary">
                <thead>
                    <tr>
                    <th scope="col" v-text='$t("cusePage.date")'></th>
                    <th scope="col" v-text='$t("cusePage.price")'></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in tableList" :key="index">
                        <td v-html="item.date"></td>
                        <td v-html="item.price"></td>
                    </tr>
                </tbody>
            </table>
            <div class="text-small"  v-text='$t("cusePage.future")'></div>            
        </div>
        <div class="text_black text_bold"  v-text='$t("cusePage.howget")'></div>
        <div class="text_ident">
            <p v-text='$t("cusePage.get1")'></p>
            <p v-text='$t("cusePage.get2")'></p>
            <p v-text='$t("cusePage.get3")'></p>
        </div>
        <div class="text_black text_bold pt-3"  v-text='$t("cusePage.howuse")'></div>
        <div class="text_ident">
            <p v-text='$t("cusePage.use1")'></p>
            <p v-text='$t("cusePage.use2")'></p>
        </div>
        <div class="pt-3 text_black" v-text='$t("cusePage.detail")'></div>
        <div class="text-primary"  v-text='$t("cusePage.useMyetherwallet")'></div>
        <div class="pt-3 text_black" v-text='$t("cusePage.threeSteps")'></div>
        <div class="text_ident">
            <p v-text='$t("cusePage.step1")'></p>
            <p v-text='$t("cusePage.step2")'></p>
            <p v-text='$t("cusePage.step3")'></p>
        </div>
        <div class="text-primary pt-3" v-text='$t("cusePage.s1")'> </div>
        <div class="text_black" v-text='$t("cusePage.export")'></div>
        <div><a href="http://note.youdao.com/noteshare?id=5d9203f1425af81f4b99aa727c2e7c97&sub=F3297678D6AC4F05B54246C686E2C9E5" target="_blank">http://note.youdao.com/noteshare?id=5d9203f1425af81f4b99aa727c2e7c97&sub=F3297678D6AC4F05B54246C686E2C9E5</a></div>
        <div class="text_black text_bold py-1" v-html='$t("cusePage.if")'></div>
        <div class="pt-3 text_black" v-text='$t("cusePage.keystoreMetamask")'></div>
        <div><img src="../assets/images/cuse1.png" alt="" srcset=""></div>
        <div class="py-3" v-text='$t("cusePage.load")'></div>
        <div><img src="../assets/images/cuse2.png" alt="" srcset=""></div>
        <div class="text-primary pt-3" v-text='$t("cusePage.s2")'></div>
        <div class="text_black text_bold pt-3" v-text='$t("cusePage.s21")'></div>
        <div><span v-text='$t("cusePage.open")'></span><a href="https://www.myetherwallet.com/#contracts" target="_blank">https://www.myetherwallet.com/#contracts</a></div>
        <div><img src="../assets/images/cuse3.png" alt="" srcset=""></div>
        <div v-html='$t("cusePage.api")'></div>
        <div><a href="https://etherscan.io/address/0x6081dEd2d0a57fC4b63765B182D8773E72327fE2#code" target="_blank">https://etherscan.io/address/0x6081dEd2d0a57fC4b63765B182D8773E72327fE2#code</a></div>
        <div><img src="../assets/images/cuse4.png" alt="" srcset=""></div>
        <div class="text_black text_bold" v-text='$t("cusePage.s22")'></div>
        <div v-html='$t("cusePage.after")'></div>
        <div><img src="../assets/images/cuse5.png" alt="" srcset=""></div>
        <div v-html='$t("cusePage.choose")'></div>
        <div><img src="../assets/images/cuse6.png" alt="" srcset=""></div>
        <div v-html='$t("cusePage.transaction")'></div>
        <div><img src="../assets/images/cuse7.png" alt="" srcset=""></div>
        <div><img src="../assets/images/cuse8.png" alt="" srcset=""></div>
        <div v-html='$t("cusePage.send")'></div>
        <div><img src="../assets/images/cuse9.png" alt="" srcset=""></div>
        <div class="text_black text_bold pt-4 pb-1" v-text='$t("cusePage.s23")'></div>
        <div v-text='$t("cusePage.transfer")'></div>
        <div class="text-primary py-1" v-text='$t("cusePage.method")'></div>
        <div v-text='$t("cusePage.from")'></div>
        <div v-text='$t("cusePage.to")'></div>
        <div><img src="../assets/images/cuse10.png" alt="" srcset=""></div>
        <div><img src="../assets/images/cuse11.png" alt="" srcset=""></div>
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
    name: "Cuse",   
    components: {
        ChooseLanguage,
    },  
    i18n, 
    data(){
        return{
            language: localStorage.local || "en",      
            tableList:[
                {date:'2018.9',price:'7, 000 Gwei'},
                {date:'2018.10',price:'7, 000 Gwei'},
                {date:'2018.11',price:'10, 000 Gwei'},
                {date:'2018.12',price:'13, 333 Gwei'},
                // {date:'2019.1',price:'14, 000 Gwei'},
                // {date:'2019.2',price:'14, 000 Gwei'},
                // {date:'2019.3',price:'14, 000 Gwei'},
            ]     
        }
    },
    created(){
        this.$i18n.locale = localStorage.local || 'en';
    },
    methods:{
        chooseLanguage(lang){
            this.$i18n.locale = lang;
            this.language=lang;
        },
    }
}
</script>

<style scoped>
div a{
    word-break: break-all;
}
img{
    max-width: 100%;
}
.text_ident p{
    margin-bottom: 0;
}
@media screen and (max-width: 576px) {
    .text-secondary{
        font-size: .9rem;
    }   
}
</style>

