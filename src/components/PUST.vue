<template>
    <div class="container pb-5 ">
        <div class="h3  py-1 mt-3 text-primary text_center">
            <div class="text_title py-2">UST价格下降保障合约</div>
         </div>
        <div class="add_height pt-3">
            <div class="text-danger py-1">
                注意：用户的钱包地址不能是交易所钱包，不可以充值除eth之外的资产。PUST支持imtoken 1.0版和PC版的钱包。                
            </div>
        </div>
       
        <div class="text-secondary">
            <p><span class="text-primary">当前区块号：</span><span v-text="blockNumber"></span></p>
            <p><span class="text-primary">当前周期数：</span><span v-text="epochNow"></span></p>
            <p><span class="text-primary">剩余PUST数：</span><span v-text="remainPUST"></span></p>
        </div>
        <div>
            <p><span class="text-primary">当前价格</span> ：
                <span class="nowrap pr-3">1 PUST= <i>{{price}}</i>ETH </span>
            
                <span class="nowrap" id="fnTimeCountDown" :data-end="dataend">
                    <span class="mini">00</span>:
                    <span class="sec">00</span>:
                    <span class="hm">000</span>
                </span>

                <!-- <span class="text-primary pl-3">{{lastEpochTime}}</span> -->
            </p>
            <p>
                <span class="text-primary">计算器：</span>
                <small class="text-danger" v-show="error_input">请输入正确格式</small></p>
            <p class="row compute_wrap py-2">
                <span class="col-1"></span>
                <input type="text" class="form-control col-3" v-model="pustnum"/>
                <span class="col-2 equal">PUST =</span>
                <input type="text" class="form-control col-4 back_white" disabled v-model="ethnum"/>
                <span class="col-2">ETH</span>
            </p>
            
            <p class="row"><span class="col-1"></span>
                剩余不足1 PUST的会退回到打币钱包地址。</p>
        </div>
        <div class="pt-3">
            <div class="h6 text-primary word_break">打币合约地址：
                <span class="wallet_address">
                    0x44433a29280b9Bec267b6d22b59BD32251652553
                </span>
            </div>
            <div class="text-primary py-2">打币合约地址二维码</div>
             <div class="h6 py-1 qrcode_address">
                <img src="../assets/images/pustqr.png" alt="">
            </div>
             <div class="h6 pt-2">
                <a href="https://usechain.net/buy_pust.pdf" target="_blank" class="text-danger">购买说明文档(pdf)</a>
            </div>
             <div class="py-3 text-secondary">
                <p class="h6 text-primary">规则：</p>
                <p>每一个PUST有权在北京时间2018.12.31日24时前，用
                    <span class="text-primary">100000UST</span>
                    换回1 ETH.</p>
                <p>1PUST起始价位0.5 ETH，每个周期40个区块。每一次购买本周期会延长10个区块。周期内最先确认的和最后确认的购买者奖励大于等于20%的最小整数个PUST。下一个周期，价格按曲线下降。</p>
                <p>本次共放出2000 PUST供购买。</p>
            </div>
           
            <div class="h6 text-primary pt-2">购买流程示意图</div>
        </div>
        
        <div>
            <img src="../assets/images/pust.png" alt="" class="w-100">
        </div>
        <div class="h6 pt-5 py-2">
            <a href="https://usechain.net/usechain_pust.pdf" target="_blank" class="text-danger">详细规则说明(pdf文档)</a>
        </div>
        <div class="h6 text-secondary py-2">添加我们微信进群交流，注明PUST</div>
        <div class="py-3">
            <img src="../assets/images/qrcode_pust.png" alt="" class="qrcode">
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import axios from "axios";

export default {
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
            over:false,//倒计时是否归0
        }
    },
    watch:{
        over(curVal,oldVal){
            // var _this=this;
　　　　　　　if(curVal){
                var date = new Date();
                var dateadd=date.getTime()+150*1000;

                this.getFormatDate(new Date(dateadd));
            }
　　　　　},
        price(curVal,oldVal){
            if(curVal){
                var date = new Date();
                var dateadd=date.getTime()+10*60*1000;
                this.getFormatDate(new Date(dateadd));
            }
        }
    },
    computed: {
        price:function(){
            var diffvalue=(this.blockNumber-this.lastEpochBlock)/this.initEpoch;
            var epoch=this.epochLast+parseInt(diffvalue) + 1;
            var price=0.4*0.9995**epoch+0.1*0.99993**epoch;
            this.epochNow=epoch;
            this.priceval=price;

            return (this.blockNumber && this.lastEpochBlock)?price:0.5;

        },
        remainPUST:function(){
            return this.topTotalSupply-this.totalSupply
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
        }
    },
    
    methods:{
        recomputed(){
            var _this=this;
            //当前区块链id
            axios.get('https://api.etherscan.io/api?module=proxy&action=eth_blockNumber')
                .then(function(res){
                    _this.blockNumber=parseInt(res.data.result);
            }).catch(function(err){ console.log(err) })

            //最后购买周期
            axios.get('https://api.etherscan.io/api?module=proxy&action=eth_call&to=0x44433a29280b9Bec267b6d22b59BD32251652553&data=0xdc57d553&tag=latest&apikey=8W1ZM4YHDMESNWMS12VBY8CKCVN723V7EM')
                .then(function(res){
                    _this.epochLast=parseInt(res.data.result);
            }).catch(function(err){ console.log(err) })

            //最后一次购买的区块链id
            axios.get('https://api.etherscan.io/api?module=proxy&action=eth_call&to=0x44433a29280b9Bec267b6d22b59BD32251652553&data=0xc2362dd5&tag=latest&apikey=8W1ZM4YHDMESNWMS12VBY8CKCVN723V7EM')
                .then(function(res){
                    _this.lastEpochBlock=parseInt(res.data.result);
            }).catch(function(err){ console.log(err) }) 
            
            //剩余供给PUST数
            axios.get('https://api.etherscan.io/api?module=proxy&action=eth_call&to=0x44433a29280b9Bec267b6d22b59BD32251652553&data=85c09f26&tag=latest&apikey=8W1ZM4YHDMESNWMS12VBY8CKCVN723V7EM')
                .then(function(res){
                    _this.topTotalSupply=parseInt(res.data.result);
            }).catch(function(err){ console.log(err) }) 
            axios.get('https://api.etherscan.io/api?module=proxy&action=eth_call&to=0x44433a29280b9Bec267b6d22b59BD32251652553&data=18160ddd&tag=latest&apikey=8W1ZM4YHDMESNWMS12VBY8CKCVN723V7EM')
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
            // var date = new Date();
            var seperator1 = "/";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            var strhour = date.getHours();
            var strmin = date.getMinutes();
            var strsec = date.getSeconds();

            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            if (strhour >= 0 && strhour <= 9) {
                strhour = "0" + strhour;
            }
            if (strmin >= 0 && strmin <= 9) {
                strmin = "0" + strmin;
            }
            if (strsec >= 0 && strsec <= 9) {
                strsec = "0" + strsec;
            }
            
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                    + " " + strhour + seperator2 + strmin
                    + seperator2 + strsec;
            // console.log('当前时间',currentdate)
            // return currentdate;
            this.dataend= currentdate;
        },
        setTime(e){
            var _this=this;
            var o = {
                hm: $(".hm"),
                sec: $(".sec"),
                mini: $(".mini"),
            };
            var f = {
                haomiao: function(n){
                    if(n < 10)return "00" + n.toString();
                    if(n < 100)return "0" + n.toString();
                    return n.toString();
                },
                zero: function(n){
                    var _n = parseInt(n, 10);//解析字符串,返回整数
                    if(_n > 0){
                        if(_n <= 9){
                            _n = "0" + _n
                        }
                        return String(_n);
                    }else{
                        return "00";
                    }
                },
                dv: function(){
                    //d = d || Date.UTC(2050, 0, 1); //如果未定义时间，则我们设定倒计时日期是2050年1月1日
                    var _d = _this.dataend || d;

                    var now = new Date(),
                        endDate = new Date(_d);
                    //现在将来秒差值
                    var dur = (endDate - now.getTime()) / 1000 , mss = endDate - now.getTime() ,pms = {
                        hm:"000",
                        sec: "00",
                        mini: "00",
                    };
                    if(mss > 0){
                        pms.hm = f.haomiao(mss % 1000);
                        pms.sec = f.zero(dur % 60);
                        pms.mini = Math.floor((dur / 60)) > 0? f.zero(Math.floor((dur / 60)) % 60) : "00";
                    }else{
                        pms.mini=pms.sec="00";
                        pms.hm = "000";
                        _this.over=true;
                        return;
                    }
                    return pms;
                },
                ui: function(){
                    if(o.hm){
                        o.hm.html(f.dv().hm);
                    }
                    if(o.sec){
                        o.sec.html(f.dv().sec);
                    }
                    if(o.mini){
                        o.mini.html(f.dv().mini);
                    }
                    setTimeout(f.ui, 1);
                }
            };
            f.ui();
        }
    },
    created(){
        this.recomputed();

        var date = new Date();
        var dateadd=date.getTime()+10*60*1000;
        this.getFormatDate(new Date(dateadd));
    },
    mounted(){
        var _this=this;
        
        setInterval(function(){
            _this.recomputed();
        },15000);

        this.setTime();
    }
}
</script>


<style scoped>
.nowrap{
    white-space: nowrap;
}
p{
    color: #666;
}
.text_center{
    text-align: center;
}
.word_break{
    word-break: break-all;
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
.add_height{
    line-height: 1.6;
    font-weight: bold;
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
.wallet_address{
    font-size: 1.2rem;
}
</style>

