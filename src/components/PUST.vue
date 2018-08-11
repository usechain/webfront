<template>
    <div class="container pb-5 ">
        <div class="h3 py-4 mt-4 font_normal">
            UST价格下降保障合约</div>
        <div class="add_height">
            UST价格下降保障合约
            <div class="text-danger">
                注意：用户的钱包地址不能是交易所钱包，不可以充值除eth之外的资产。PUST支持imtoken 1.0版和PC版的钱包。                
            </div>
        </div>
        <div class="py-4">
            <p class="h6">规则：</p>
            <p>每一个PUST有权在北京时间2018.12.31日24时前，用100000UST换回1 ETH.</p>
            <p>1PUST起始价位0.5 ETH，每个周期40个区块。每一次购买本周期会延长10个区块。周期内最先确认的和最后确认的购买者奖励大于等于20%的最小整数个PUST。下一个周期，价格按曲线下降。</p>
            <p>本次共放出2000 PUST供购买。</p>
        </div>
        <div>
            <p>当前价格 ：1 PUST= 
                <span class="text-primary">{{price}}</span>
                ETH</p>
            <p>计算器：<small class="text-danger" v-show="error_input">请输入正确格式</small></p>
            <p class="row compute_wrap py-2">
                <span class="col-1"></span>
                <input type="text" class="form-control col-3" v-model="pustnum"/>
                <span class="col-2 equal">PUST =</span>
                <input type="text" class="form-control col-4 back_white" disabled v-model="ethnum"/>
                <span class="col-2">ETH</span>
            </p>
            
            <p>剩余不足1 PUST的会退回到打币钱包地址。</p>
        </div>
        <div class="py-3">
            <div class="h6">打币合约地址：0x44433a29280b9Bec267b6d22b59BD32251652553</div>
            <div class="h6 py-3 qrcode_address">
                <img src="../assets/images/pustqr.png" alt="">
            </div>
            <div class="h6">购买流程示意图</div>
        </div>
        
        <div>
            <img src="../assets/images/pust.png" alt="" class="w-100">
        </div>
        <div class="h6 py-3">
            <a href="https://usechain.net/usechain_pust.pdf"  target="_blank" class="text_underline">详细规则说明(pdf文档)</a>
        </div>
        <div class="h6">添加我们微信进群交流，注明PUST</div>
        <div class="py-3">
            <img src="../assets/images/qrcode_pust.png" alt="" class="qrcode">
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return{
            blockNumber:'',//当前区块链id=>  0x5d7ed9=6127321
            epochLast:'',//最后购买周期
            lastEpochBlock:'',//最后一次购买的区块链id
            initEpoch:40,//固定值
            // epochNow:'',
            priceval:'',
            pustnum:'',
            error_input:false
        }
    },
    computed: {
        price:function(){
            // console.log('blockNumber:',this.blockNumber);                    
            // console.log('epochLast:',this.epochLast);
            // console.log('lastEpochBlock:',this.lastEpochBlock);
            var epochNow=this.epochLast+(this.blockNumber-this.lastEpochBlock)/this.initEpoch + 1
            var price=0.4*0.9995**epochNow+0.1*0.99993**epochNow;
            this.priceval=price;
            return price;
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
        },
        isNumber(val) {
            var regPos = /^\d+(\.\d+)?$/; //非负浮点数
            var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
            if(regPos.test(val) || regNeg.test(val)) {
                return true;
            } else {
                return false;
            }
        }
    },
    created(){
        this.recomputed()
    },
    mounted(){
        var _this=this;
        setInterval(function(){
            _this.recomputed();
        },15000)
    }
}
</script>


<style scoped>
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
</style>

