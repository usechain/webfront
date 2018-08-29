<template>
    <div class="container">
        <div class="clearfix">
            <ChooseLanguage @chooseLanguage="chooseLanguage"></ChooseLanguage>
        </div>
        <div class=" pb-5 pust_wrap">        
            <div class="h4  py-1 text-primary text_center">
                <div class="text_title py-2" v-text='$t("pustPage.title")'></div> 
            </div>

            <div class="text-center sm_left">
                <div class="row py-3 d-inline-block">
                    <select name="" class="select_pust mr-5" v-model="select_epoch">
                        <option :value="item.value" v-for="(item,index) in epochList" :key="'pust'+index">{{item.option}}</option>
                    </select>
                    <span class="word_break"><span v-text='$t("pustPage.contract")'></span>：{{selected.address}}</span>
                </div>
            </div>
            
            <div class="border p-2 py-3 border-secondary rounded">
                <div class="clearfix">
                    <div class="float-left" v-text='$t("pustPage.buy")'></div>
                    <router-link :to='"/buy_pust/"+selected.value' class="text-danger float-right" v-text='$t("pustPage.purchaseguide")'></router-link>
                </div>
                <p class="pt-2"><span v-text='$t("pustPage.blocknum")'></span><span v-text="blockNumber"></span></p>
                <p><span v-text='$t("pustPage.epochnow")'></span><span v-text="epochNow"></span></p>
                <p><span v-text='$t("pustPage.remain")'></span>：<span v-text="remainPUST"></span></p>
                <p><span class="text-primary" v-text='$t("pustPage.price")'></span> ：
                    <span class="nowrap pr-3">1 PUST= <i>{{price}}</i><i v-html="selected.unit"></i> </span>
                
                    <span class="nowrap" id="fnTimeCountDown" :data-end="dataend">
                        <span class="mini" v-html="pms.mini">00</span>:
                        <span class="sec" v-html="pms.sec">00</span>:
                        <span class="hm" v-html="pms.hm">000</span>
                    </span>

                    <span class="text-primary pl-3">{{lastEpochTime}}</span>
                </p>

                <p>
                    <span v-text='$t("pustPage.calculator")'></span>
                    <small class="text-danger" v-show="error_input" v-text='$t("pustPage.inputcue")'></small></p>
                <div class="row compute_wrap py-2" v-if="select_epoch!=='4'">
                    <span class="col-1"></span>
                    <input type="text" class="form-control col-3" v-model="pustnum"/>
                    <span class="col-2 equal">PUST =</span>
                    <input type="text" class="form-control col-3 back_white" disabled v-model="ethnum"/>
                    <span class="col-2">ETH</span>
                    <span class="col-1"></span>
                </div>

                <div  v-if="select_epoch==='4'">
                    <div class="d-none d-md-block">
                        <div class="row compute_wrap py-2">
                            <span class="col-1"></span>                 
                            <input type="text" class="form-control col-2" v-model="pustnum"/>
                            <span class="col-1 equal text-small">PUST=</span>
                            <input type="text" class="form-control col-3 back_white" disabled v-model="ethnum"/>
                            <span class="col-1 equal text-small">Gwei=</span>
                            <input type="text" class="form-control col-3 back_white" disabled v-model="gweinum"/>
                            <span class="col-1 equal text-small">ETH</span>
                        </div>
                    </div>
                    <div class="d-md-none">               
                        <div class="compute_wrap py-2">
                            <div class="row">
                                <span class="col-1"></span>                 
                                <input type="text" class="form-control col-8" v-model="pustnum"/>
                                <span class="col-2">PUST</span>  
                            </div>
                            
                            <div class="row py-1">
                                <span class="col-1">=</span>
                                <input type="text" class="form-control col-8 back_white" disabled v-model="ethnum"/>
                                <span class="col-2">Gwei</span>   
                            </div>

                            <div class="row">
                                <span class="col-1">=</span>
                                <input type="text" class="form-control col-8 back_white" disabled v-model="gweinum"/>
                                <span class="col-2">ETH</span>
                            </div>
                        </div> 
                    </div>
                </div>

                <p class="text-secondary text-small" v-html="selected.cue_calculator"></p>
                <p class="text-danger pt-2">
                    <span v-html='$t("pustPage.notice")'></span>
                    <span v-html="selected.notice"></span>                
                </p>
            </div>
        
            <div class="py-5 text-center border-bottom">
                <div class="h6" v-text='$t("pustPage.address")'></div>
                <div class="py-2 text-primary word_break" v-html="selected.address"></div>
                <div class="h6 py-1 qrcode_address">
                    <img src="../assets/images/pustqr1.png" alt="" v-if="select_epoch==='1'">
                    <img src="../assets/images/pustqr2.png" alt="" v-if="select_epoch==='2'">
                    <img src="../assets/images/pustqr3.png" alt="" v-if="select_epoch==='3'">
                    <img src="../assets/images/pustqr4.png" alt="" v-if="select_epoch==='4'">
                </div>
                <div class="text-danger py-2" v-text='$t("pustPage.diff")'></div>
            </div>     
                <div class="text-secondary">
                    <div class="clearfix pt-5">
                        <p class="h6 text-primary float-left" v-text='$t("pustPage.rule")'></p>
                        <router-link :to='"/usechain_pust/"+selected.value' class="text-danger float-right" v-text='$t("pustPage.rulesinterpretations")'></router-link>            
                    </div>
                    <div v-if="select_epoch!=='4'">
                        <p  v-html="selected.ruleTime"></p>
                        <p class="py-3" v-html="selected.rulePrice"></p>
                    </div>
                    <div v-else>
                        <p>1、PUST 与 UST 兑换关系为 1:1；</p>
                        <p>2、购买 PUST 时起始价格为：2000Gwei，价格每周期逐渐下降，直到售完为止；</p>
                        <p>3、行权时，用户输入 PUST 数量，扣除相应 UST 数量，兑换 ETH 关系：1 UST + 1 PUST =  7000 Gwei ETH；</p>
                        <p>4、行权截止时间北京时间2018年9月30日24时；</p>
                        <p class="pb-3">5、每个周期40个区块。每一次购买本周期会延长10个区块。</p>
                    </div>
                    <p v-html="selected.totalPust"></p>
                </div>
                <div class="h6 text-primary pt-5" v-text='$t("pustPage.purchasescheme")'></div>        
            <div :class="{'d-none':language==='en'}">
                <img src="../assets/images/pust3.png" alt="" class="w-100" v-if="select_epoch==='3'">
                <img src="../assets/images/pust4.png" alt="" class="w-100" v-else-if="select_epoch==='4'"> 
                <img src="../assets/images/pust.png" alt="" class="w-100" v-else>                       
            </div>
            <div :class="{'d-none':language==='ch'}">
                <img src="../assets/images/pust3_en.png" alt="" class="w-100" v-if="select_epoch==='3'">
                <!-- <img src="../assets/images/pust4.png" alt="" class="w-100" v-else-if="select_epoch==='4'">  -->
                <img src="../assets/images/pust_en.png" alt="" class="w-100" v-else>                       
            </div>
            <p class="text-secondary py-3" v-html="selected.pustText"></p>
            
            <div class="h6 text-secondary py-2"></div>
            <div class="py-3 row text-center">
                <div class="col-6">
                    <img src="../assets/images/qrcode_pust.png" alt="" class="qrcode">                
                </div>
                <div class="col-6 d-flex align-items-center" v-html='$t("pustPage.wechat")'></div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import VueI18n from "vue-i18n";
import $ from "jquery";
import axios from "axios";
import messages from "../assets/js/lang";
import {pustEpoch,pustEpoch_en} from '../assets/js/config';
import ChooseLanguage from './ChooseLanguage';

Vue.use(VueI18n);

var i18n = new VueI18n({
  locale: localStorage.local || "en",
  messages 
});

export default {
    name: "PUST",  
    components: {
        ChooseLanguage,
    },  
    i18n,
    data(){
        return{
            blockNumber:'',//当前区块链id=>  0x5d7ed9=6127321
            epochLast:'',//最后购买周期
            lastEpochBlock:'',//最后一次购买的区块链id
            initEpoch:40,//固定值
            epochNow:'',
            priceval:'',
            pustnum:'',
            error_input:false,
            dataend:'',
            topTotalSupply:'',
            totalSupply:'',
            lastEpochTime:'',//倒计时
            pms:{
                hm: '',
                sec: '',
                mini: '',
            },
            select_epoch:pustEpoch[0].value,            
            epochList:localStorage.local==='ch'? pustEpoch : pustEpoch_en,
            selected:localStorage.local==='ch'? pustEpoch[0] : pustEpoch_en[0],
            language: localStorage.local || "en",

        }
    },
    watch:{
        epochNow(curVal,oldVal){
            var _this=this;
            var lastblockn=6122158;//最后的区块记为Nz
            if((curVal-_this.epochLast) == 0) {
                lastblockn=_this.lastEpochBlock;
            }else{
                lastblockn=_this.lastEpochBlock + (curVal - _this.epochLast)* 40;
            }

            var date = new Date();
            var dateadd=date.getTime()+(lastblockn-_this.blockNumber)*15*1000;
            this.getFormatDate(new Date(dateadd));
        },
        select_epoch(curVal){      
            var rank=this.epochList.length-parseInt(curVal);
            this.selected=this.epochList[rank];
            this.recomputed();            
        },
    },
    computed: {
        price:function(){
            var diffvalue=(this.blockNumber-this.lastEpochBlock)/this.initEpoch;
            var epoch=this.epochLast+parseInt(diffvalue) + 1;
            var beginepoch=parseInt(this.selected.beginEpoch);
            var price=this.selected.value1*this.selected.value2**(epoch+beginepoch)+this.selected.value3*this.selected.value4**(epoch+beginepoch);
            this.epochNow=epoch;
            this.priceval=price;

            return (this.blockNumber && this.lastEpochBlock)?price:0.5;
        },
        remainPUST:function(){
            return (this.topTotalSupply-this.totalSupply)/parseInt(this.selected.pustRate);
        },
        ethnum:function(){
            var showVal=this.pustnum*this.priceval;
            var isNumber = this.isNumber(showVal);

            if(!isNumber){
                this.error_input=true;
                return ''
            }else {
                this.error_input=false;
                return showVal;
            }
        },
        gweinum:function(){
            var rate=10**9;
            var showVal=this.ethnum/rate;
            
            return this.error_input?'':showVal;
        }
    },
    
    methods:{
        chooseLanguage(lang){
            this.$i18n.locale = lang;
            this.language=lang;
            var value=pustEpoch.length-parseInt(this.select_epoch);
            this.epochList=lang==='ch'? pustEpoch : pustEpoch_en;
            this.selected=lang==='ch'? pustEpoch[value] : pustEpoch_en[value];
           
        },
        recomputed(){
            var _this=this;
            //当前区块链id
            axios.get('https://api.etherscan.io/api?module=proxy&action=eth_blockNumber')
                .then(function(res){
                    _this.blockNumber=parseInt(res.data.result);
            }).catch(function(err){ console.log(err) })

            //最后购买周期
            axios.get('https://api.etherscan.io/api?module=proxy&action=eth_call&to='+_this.selected.address+'&data=0xdc57d553&tag=latest&apikey=8W1ZM4YHDMESNWMS12VBY8CKCVN723V7EM')
                .then(function(res){
                    _this.epochLast=parseInt(res.data.result);
            }).catch(function(err){ console.log(err) })

            //最后一次购买的区块链id
            axios.get('https://api.etherscan.io/api?module=proxy&action=eth_call&to='+_this.selected.address+'&data=0xc2362dd5&tag=latest&apikey=8W1ZM4YHDMESNWMS12VBY8CKCVN723V7EM')
                .then(function(res){
                    _this.lastEpochBlock=parseInt(res.data.result);
            }).catch(function(err){ console.log(err) }) 
            
            //剩余供给PUST数
            axios.get('https://api.etherscan.io/api?module=proxy&action=eth_call&to='+_this.selected.address+'&data=85c09f26&tag=latest&apikey=8W1ZM4YHDMESNWMS12VBY8CKCVN723V7EM')
                .then(function(res){
                    _this.topTotalSupply=parseInt(res.data.result);
            }).catch(function(err){ console.log(err) }) 
            axios.get('https://api.etherscan.io/api?module=proxy&action=eth_call&to='+_this.selected.address+'&data=18160ddd&tag=latest&apikey=8W1ZM4YHDMESNWMS12VBY8CKCVN723V7EM')
                .then(function(res){
                    _this.totalSupply=parseInt(res.data.result);
            }).catch(function(err){ console.log(err) }) 
        },
        isNumber(val) {
            var regPos = /^\d+(\.\d+)?$/; //非负浮点数
            var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
            if(regPos.test(val) || regNeg.test(val)) {
                return true;
            } else {
                return false;
            }
        },
        getFormatDate(date){
            var seperator1 = "/";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            var strhour = date.getHours();
            var strmin = date.getMinutes();
            var strsec = date.getSeconds();

            if (month >= 1 && month <= 9) {month = "0" + month; }
            if (strDate >= 0 && strDate <= 9) {strDate = "0" + strDate;}
            if (strhour >= 0 && strhour <= 9) { strhour = "0" + strhour;}
            if (strmin >= 0 && strmin <= 9) {strmin = "0" + strmin;}
            if (strsec >= 0 && strsec <= 9) {strsec = "0" + strsec;}
            
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                    + " " + strhour + seperator2 + strmin + seperator2 + strsec;
            this.dataend= currentdate;
        },
        zero(n){
            var _n = parseInt(n, 10);//解析字符串,返回整数
                if(_n > 0){
                    if(_n <= 9){_n = "0" + _n}
                    return String(_n);
                }else{
                    return "00";
                }
        },
        haomiao(n){
            if(n < 10)return "00" + n.toString();
            if(n < 100)return "0" + n.toString();
            return n.toString();
        },
        setTime(){
            var _this=this;
            var now = new Date();
            var endDate = new Date( _this.dataend);
            //现在将来秒差值
            var dur = (endDate - now.getTime()) / 1000 , mss = endDate - now.getTime();
            if(mss > 0){
                _this.pms={
                    hm:_this.haomiao(mss % 1000),
                    sec:_this.zero(dur % 60),
                    mini:Math.floor((dur / 60)) > 0? _this.zero(Math.floor((dur / 60)) % 60) : "00",
                }
            }else{
                _this.pms={
                    mini:'00',
                    sec:'00',
                    hm:'000',
                }
            }
        }
    },
    created(){
        this.recomputed();
        var date = new Date();
        var dateadd=date.getTime()+10*60*1000;
        this.getFormatDate(new Date(dateadd));

        this.$i18n.locale = localStorage.local || 'en';
    },
    mounted(){
        var _this=this;
        setInterval(function(){
            _this.recomputed();
        },15000);
        setInterval(function(){
            _this.setTime();
        },1);
    }
}
</script>

<style scoped>
.pust_wrap{
    padding: 0 10rem;
}
.nowrap{
    white-space: nowrap;
}
.select_pust{
    border: none;
    background: none;
}
.text_title{
    border-top: 1px solid #3685e9;
    border-bottom: 1px solid #3685e9;
    display: inline-block;
    font-weight:normal;
}
.font_normal{
    font-weight: normal;
}
.text_underline{
    text-decoration: underline;
}
.qrcode{
    max-width: 12rem;
}
.qrcode_address img{
    width: auto;
    max-width: 10rem;
}
.compute_wrap{
    line-height: 38px;
}
.back_white{
    background: none;
}
.equal{
    padding: 0;
    text-align: center;
    white-space: nowrap;
}
@media screen and (max-width: 992px) {
   .pust_wrap{ padding: 0 5rem;}
}
@media screen and (max-width: 576px) {
   .pust_wrap{ 
       padding: 0 2rem;
        font-size: .9rem;
    }    
    .sm_left{
        text-align: left!important;
    }
    .select_pust{
        border-bottom: 1px solid #000;
        border-radius: 0
    }
}
</style>

