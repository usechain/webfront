<template>
     <div class="container pb-5 text-secondary">
        <div class="clearfix text-primary" style="opacity:0;">
            <ChooseLanguage @chooseLanguage="chooseLanguage"></ChooseLanguage>
        </div>
        <div class="py-1 text-primary text_center">
            <div class="h4 py-2 text_title has_border">CUSE 行权合约</div>
         </div>
        <div class="pt-3"><span class="text_black text_bold">* CUSE ERC20 地址：</span>0x6081dEd2d0a57fC4b63765B182D8773E72327fE2</div>
        <div><span class="text_black text_bold">* CUSE 行权合约地址：</span>0x85a18c688991e6181ebf5d53be90555527b1327f</div>
        <div class="py-3">CUSE 合约是 USE 的期权，拥有 CUSE 的用户可以在行权的时间内，以一定的行权价格，使用 ETH 兑换相应的 USE。</div>
        <div class="text_black text_bold">行权的价格如表：</div>
        <div class="px-5 py-2 mx-5">
            <table class="table table-sm table-striped text-center text-small text-secondary">
                <thead>
                    <tr>
                    <th scope="col" v-text='$t("cusePage.date")'></th>
                    <th scope="col">价格</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in tableList" :key="index">
                        <td v-html="item.date"></td>
                        <td v-html="item.price"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="text_black text_bold">CUSE 获得的方法：</div>
        <div class="text_ident">
            <p>1：官方的奖励分发</p>
            <p>2：在 OAX 交易所购买</p>
            <p>3：用户之间的Transfer</p>
        </div>
        <div class="text_black text_bold pt-3">CUSE 的行权方法：</div>
        <div class="text_ident">
            <p>1：Myetherwallet</p>
            <p>2：Chrome插件：Metamask + 官网网页 js 行权页面</p>
        </div>
        <div class="pt-3 text_black">CUSE 行权具体方法： </div>
        <div class="text-primary">使用 Myetherwallet 行权：</div>
        <div class="pt-3 text_black">行权分为三步骤：</div>
        <div class="text_ident">
            <p>* 步骤1：导出 Imtoken / 其他钱包 地址的 keystore 到 Chrome 插件 Metamask中，硬件钱包不需要导出Keystore</p>
            <p>* 步骤2：执行 CUSE 合约，授权  CUSE行权合约</p>
            <p>* 步骤3: 转一定数量的ETH，以行权价格兑换 USE</p>
        </div>
        <div class="text-primary pt-3">步骤一、导出Keystore </div>
        <div class="text_black">导出 Keystore 的教程：</div>
        <div><a href="http://note.youdao.com/noteshare?id=5d9203f1425af81f4b99aa727c2e7c97&sub=F3297678D6AC4F05B54246C686E2C9E5" target="_blank">http://note.youdao.com/noteshare?id=5d9203f1425af81f4b99aa727c2e7c97&sub=F3297678D6AC4F05B54246C686E2C9E5</a></div>
        <div class="text_black text_bold py-1">如果使用硬件钱包，则不需要导出 keystore。<br/>解锁账户时选择 ledger wallet 或 Trezor.</div>
        <div class="pt-3 text_black"> Metamask 导入 Keystore 的教程：</div>
        <div><img src="../assets/images/cuse1.png" alt="" srcset=""></div>
        <div class="py-3">直接载入上一步骤导出的 Keystore，输入密码解锁导入。  如果导出的是 私钥，则选择 Private Key，不用输入密码。</div>
        <div><img src="../assets/images/cuse2.png" alt="" srcset=""></div>
        <div class="text-primary pt-3">步骤二、Myetherwallet 授权 CUSE 行权合约</div>
        <div class="text_black text_bold pt-3">步骤1：</div>
        <div>打开：<a href="https://www.myetherwallet.com/#contracts" target="_blank">https://www.myetherwallet.com/#contracts</a></div>
        <div><img src="../assets/images/cuse3.png" alt="" srcset=""></div>
        <div>👆接上， CUSE 合约接口：</div>
        <div><a href="https://etherscan.io/address/0x6081dEd2d0a57fC4b63765B182D8773E72327fE2#code" target="_blank">https://etherscan.io/address/0x6081dEd2d0a57fC4b63765B182D8773E72327fE2#code</a></div>
        <div><img src="../assets/images/cuse4.png" alt="" srcset=""></div>
        <div class="text_black text_bold">步骤2：授权 CUSE 行权合约</div>
        <div>👇  Access 后，选择approve，手动授权 CUSE 的行权合约能转移用户的 CUSE</div>
        <div><img src="../assets/images/cuse5.png" alt="" srcset=""></div>
        <div>👇 选择解锁的钱包</div>
        <div><img src="../assets/images/cuse6.png" alt="" srcset=""></div>
        <div>👇 生成交易</div>
        <div><img src="../assets/images/cuse7.png" alt="" srcset=""></div>
        <div><img src="../assets/images/cuse8.png" alt="" srcset=""></div>
        <div>👇 Metamask 发送交易</div>
        <div><img src="../assets/images/cuse9.png" alt="" srcset=""></div>
        <div class="text_black text_bold pt-4 pb-1">步骤3：发送 ETH 兑换 USE</div>
        <div>使用  拥有 CUSE 的地址，在 步骤 2 中授权后，向 CUSE 行权合约中转入一定数量的 ETH，就可以按照当时的行权价格，兑换相应数量的 USE。</div>
        <div class="text-primary py-1">方法：直接使用 Metamask 或硬件钱包 向 CUSE 行权合约转 ETH。</div>
        <div>from: 用户地址</div>
        <div>to:  CUSE 行权合约地址：0x85a18c688991e6181ebf5d53be90555527b1327f</div>
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

