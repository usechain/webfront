<template>
    <div class="container pb-5">
        <div class="clearfix">
            <ChooseLanguage @chooseLanguage="chooseLanguage"></ChooseLanguage>
        </div>
        <div class="py-1 text_center text-secondary">
            <div class="h4 py-2 text_title text-primary" v-text='$t("pustUsechPage.title")'></div>
            <!-- <a href="https://usechain.net/usechain_pust.pdf" target="_blank" class="text-danger pr-5">详细规则说明文档(pdf)</a> -->
            <p v-text='$t("pustUsechPage.date")'></p>
            <p v-text='$t("pustUsechPage.team")'></p>
        </div>
         <div class="h4 pt-3"><span>1</span> <span v-text='$t("pustUsechPage.abstract")'></span></div>
         <div class="text-secondary text_ident">
            <p class="py-2" v-text='$t("pustUsechPage.abstract1")'></p>
            <p v-text='$t("pustUsechPage.abstract2")'></p>
            <p v-text='$t("pustUsechPage.abstract3")'></p>
            <p v-text='$t("pustUsechPage.abstract4")'></p>
            <p v-text='$t("pustUsechPage.abstract5")'></p>
            <p v-text='$t("pustUsechPage.abstract6")'></p>
         </div>
         <div class="p-3" :class="{'d-none':language==='en'}">
             <img src="../assets/images/pust3.png" class="pic75" alt="" v-if="routePustqr==='3'||routePustqr==='0'">             
             <!-- <img src="../assets/images/pust4.png" class="pic75" alt="" v-else-if="routePustqr==='4'"> -->
             <img src="../assets/images/pust.png" class="pic75" alt="" v-else>
         </div>
         <div class="p-3" :class="{'d-none':language==='ch'}">
             <img src="../assets/images/pust3_en.png" class="pic75" alt="" v-if="routePustqr==='3'||routePustqr==='0'">             
             <!-- <img src="../assets/images/pust4.png" class="pic75" alt="" v-else-if="routePustqr==='4'"> -->
             <img src="../assets/images/pust_en.png" class="pic75" alt="" v-else>
         </div>

         <p class="text-secondary" v-html="epochNow.pustText"></p>

        <div class="h5 pt-4"><span>1.1</span> <span v-text='$t("pustUsechPage.total")'></span></div>
        <p class="text-secondary" v-html="epochNow.s11"></p>

        <div class="h5 pt-4"><span>1.2</span> <span v-text='$t("pustUsechPage.finaltime")'></span></div>
        <p class="text-secondary" v-html="epochNow.s12"></p>

        <div class="h5 pt-4"><span>1.3</span> <span v-text='$t("pustUsechPage.entitle")'></span></div>
        <p class="text-secondary" v-html="epochNow.right"></p>

        <div class="h5 pt-4"><span>1.4</span> <span v-text='$t("pustUsechPage.address")'></span></div>
        <p class="text-secondary pb-2" v-html="epochNow.address"></p>
        <div class="pustqr">
            <img src="../assets/images/pustqr1.png" alt="" v-if="routePustqr==='1'">
            <img src="../assets/images/pustqr2.png" alt="" v-if="routePustqr==='2'">
            <img src="../assets/images/pustqr3.png" alt="" v-if="routePustqr==='3'||routePustqr==='0'">
            <!-- <img src="../assets/images/pustqr4.png" alt="" v-if="routePustqr==='4'"> -->
        </div>

        <div class="h5 pt-5"><span>1.5</span> <span v-text='$t("pustUsechPage.terminologies")'></span></div>
        
        <div class="h6 pt-3"><span>1.5.1</span> PUST</div>
        <p class="text-secondary"><span v-text="epochNow.s1512"></span> 
        <span v-html='$t("pustUsechPage.s1513")'></span></p>

        <div class="h6 pt-3"><span>1.5.2</span> <span v-text='$t("pustUsechPage.epoch")'></span></div>
        <p class="text-secondary" v-text='$t("pustUsechPage.s152")'></p>
        
        <div class="h4 pt-5"><span>2</span> <span v-text='$t("pustUsechPage.bonus")'></span></div>

        <p class="text-secondary pt-2" v-text='$t("pustUsechPage.bonusinfo")'></p>
        <div class="pt-2"><img src="../assets/images/reward.png" class="pic50" alt="" v-if="epochNow.rewardimg"></div>

        <div class="h4 pt-5"><span>3</span> <span v-text='$t("pustUsechPage.discount")'></span></div>
        <p class="text-secondary py-2" v-text='$t("pustUsechPage.discount1")'></p>
        <div>
            <!-- <img src="../assets/images/pustusechain4.png" class="pic50" alt="" v-if="routePustqr==='4'||routePustqr==='0'"/>
            <img src="../assets/images/pustusechain.png" class="pic50" alt="" v-else/> -->
            <img src="../assets/images/pustusechain.png" class="pic50" alt=""/>
        </div>    
        <p class="text-secondary" v-text='$t("pustUsechPage.discount2")'></p>

        <div class="h5 pt-5"><span>3.1</span> <span v-text='$t("pustUsechPage.table")'></span></div>
        <p class="text-secondary py-2" v-text='$t("pustUsechPage.table1")'></p>
        <p class="text-secondary text-small pb-1"  v-text='$t("pustUsechPage.table2")'></p>
        
        <table class="table table-sm table-striped text-center text-small text-secondary">
            <thead>
                <tr>
                <th scope="col" v-text='$t("pustUsechPage.day")'></th>
                <th scope="col" v-text='$t("pustUsechPage.epochs")'></th>
                <th scope="col" v-html="epochNow.tablePrice"></th>
                </tr>
            </thead>
            <tbody v-if="routePustqr==='4'||routePustqr==='0'">
                <tr v-for="(i,index) in tableList4" :key="index">
                    <td v-html="index"></td>
                    <td v-html="i.period"></td>
                    <td v-html="i.price"></td>
                </tr>
            </tbody>
            <tbody v-else>    
                <tr v-for="(i,index) in tableList" :key="index">
                    <td v-html="index+1"></td>
                    <td v-html="i.period"></td>
                    <td v-html="i.price"></td>
                </tr>
            </tbody>
        </table>

         <div class="h4 pt-4"><span>4</span> <span v-text='$t("pustUsechPage.s4t")'></span></div>
        <div class="text-secondary">
            <div v-html='$t("pustUsechPage.s41")'></div>
            <p v-html="epochNow.way"></p>
        </div>
         
         <div class="h4 pt-5"><span>5</span> <span v-text='$t("pustUsechPage.s5t")'></span></div>
         <p class="text-secondary" v-text='$t("pustUsechPage.s51")'></p>

         <div class="h5 pt-4"><span>5.1</span> <span v-text='$t("pustUsechPage.s51t")'></span></div>
         <p class="text-secondary" v-html='$t("pustUsechPage.s511")'></p>
         
         <div class="h5 pt-4"><span>5.2</span> <span v-text='$t("pustUsechPage.s52t")'></span></div>
         <p class="text-secondary py-2" v-html='$t("pustUsechPage.s521")'></p>
        <div class="text-secondary text_ident" v-html='$t("pustUsechPage.s522")'></div>
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
    name: "PustUsechain",   
    components: {
        ChooseLanguage,
    },  
    i18n, 
    data(){
        return{
            tableList4:[
                {period:'1',price:'1998.4075'},
                {period:'145',price:'1783.283862'},
                {period:'289',price:'1594.040484'},
                {period:'433',price:'1427.533017'},
                {period:'577',price:'1280.999447'},
                {period:'721',price:'1152.013609'},
                {period:'865',price:'1038.44434'},
                {period:'1009',price:'938.419612'},
                {period:'1153',price:'850.295016'},
                {period:'1297',price:'772.626081'},
                {period:'1441',price:'704.143967'},
                {period:'1585',price:'643.734104'},
                {period:'1729',price:'590.417432'},
                {period:'1873',price:'543.333924'},
                {period:'2017',price:'501.728109'},
                {period:'2161',price:'464.936362'},
                {period:'2305',price:'432.375731'},
                {period:'2449',price:'403.534131'},
                {period:'2593',price:'377.961721'},
                {period:'2737',price:'355.263342'},
                {period:'2881',price:'335.091863'},
                {period:'3025',price:'317.142341'},
                {period:'3169',price:'301.146893'},
                {period:'3313',price:'286.870188'},
                {period:'3457',price:'274.105489'},
                {period:'3601',price:'262.671178'},
                {period:'3745',price:'252.407699'},
                {period:'3889',price:'243.174876'},
                {period:'4033',price:'234.849557'},
                {period:'4177',price:'227.323545'},
            ],
            tableList:[
                {period:'0',price:'0.5'},
                {period:'144',price:'0.471203'},
                {period:'288',price:'0.444347'},
                {period:'432',price:'0.419298'},
                {period:'576',price:'0.395931'},
                {period:'720',price:'0.37413'},
                {period:'864',price:'0.353787'},
                {period:'1008',price:'0.3348'},
                {period:'1152',price:'0.317077'},
                {period:'1296',price:'0.30053'},
                {period:'1440',price:'0.285077'},
                {period:'1584',price:'0.270644'},
                {period:'1728',price:'0.257159'},
                {period:'1872',price:'0.244559'},
                {period:'2016',price:'0.232781'},
                {period:'2160',price:'0.221769'},
                {period:'2304',price:'0.21147'},
                {period:'2448',price:'0.201836'},
                {period:'2592',price:'0.19282'},
                {period:'2736',price:'0.184381'},
                {period:'2880',price:'0.176479'},
                {period:'3024',price:'0.169076'},
                {period:'3168',price:'0.162139'},
                {period:'3312',price:'0.155635'},
                {period:'3456',price:'0.149536'},
                {period:'3660',price:'0.143814'},
                {period:'3774',price:'0.138442'},
                {period:'3888',price:'0.133397'},
                {period:'4032',price:'0.128657'},
                {period:'4176',price:'0.1242'},
            ],
            epochNow:'',
            routePustqr:'',
            language: localStorage.local || "en",            
        }
    },
    created(){
        var pustqr=this.$route.params.pustqr|| '0';
        this.routePustqr=pustqr;
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
            this.language=lang;
            var value=pustEpoch.length-parseInt(this.routePustqr);
            this.epochNow= lang==='ch'? pustEpoch[value] : pustEpoch_en[value];
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
.pustqr{
    max-width: 10rem;
}
.pic75{
    width: 75%;
}
.pic50{
    width: 50%;
}
@media screen and (max-width:992px) {
    .pic75,.pic50{
        width: 100%;
    }
}
</style>

