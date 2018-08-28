<template>
    <div class="container pb-5">
        <div class="py-1 mt-5 text_center text-secondary">
            <div class="h4 py-2 text_title text-primary">UST降价保障PUST购买说明</div>
            <!-- <a href="https://usechain.net/usechain_pust.pdf" target="_blank" class="text-danger pr-5">详细规则说明文档(pdf)</a> -->
            <p>2018年8月10日</p>
            <p>Usechain 团队</p>
        </div>
         <div class="h4 pt-3"><span>1</span> 概述</div>
         <div class="text-secondary text_ident">
            <p class="py-2">为了保障认购UST的用户的权益，我们推出一款UST保值合约产品PUST。用户如果购买PUST，在北京时间合约规定时间之前，每1个PUST有权以规定的UST，换回规定的ETH。不同的合约可能不一样。如果UST币值下降，则可以用PUST合约挽回损失。相当于为币值买了一份保险。如果UST币值上涨，则可以获取UST币值上涨的收益。
            </p>
            <p>我们对购买PUST的用户，可能有一定的奖励机制。详见下述章节《奖励方式》。</p>
            <p>PUST的购买值，采用荷兰拍卖的方式，价格不断下降。但如果不早购买，可能会被用户一次全部买走。降价方式见《折扣方式》。</p>
            <p>购买方式见后续章节《购买方式》。</p>
            <p>行权方式见后续章节《行权方式》。</p>
            <p>下图描述了PUST购买周期示意。</p>
         </div>
         <div class="p-3">
             <img src="../assets/images/pust3.png" class="pic75" alt="" v-if="routePustqr==='3'">             
             <img src="../assets/images/pust4.png" class="pic75" alt="" v-else-if="routePustqr==='4'||routePustqr==='0'">
             <img src="../assets/images/pust.png" class="pic75" alt="" v-else>
         </div>
         <p class="text-secondary">一个周期内，最先和最后一位购买者将获得奖励。第一笔和最后一笔交易量为X PUST，则可以获得X +奖金。
            奖金为<span v-html="epochNow.pustText"></span>的PUST</p>

        <div class="h5 pt-4"><span>1.1</span> 总量</div>
        <p class="text-secondary">本次发行总量为{{epochNow.totalPust}}，卖完或到最后行权时间终止。</p>

        <div class="h5 pt-4"><span>1.2</span> 最终行权时间</div>
        <p class="text-secondary">北京时间(东八区) {{epochNow.time}}24点。</p>
        <p class="text-secondary">必须在最终行权时间之前行权。</p>

        <div class="h5 pt-4"><span>1.3</span> 1个PUST权利</div>
        <p class="text-secondary" v-html="epochNow.right"></p>

        <div class="h5 pt-4"><span>1.4</span> 购买PUST智能合约地址</div>
        <p class="text-secondary pb-2" v-html="epochNow.address"></p>
        <div class="pustqr">
            <img src="../assets/images/pustqr1.png" alt="" v-if="routePustqr==='1'">
            <img src="../assets/images/pustqr2.png" alt="" v-if="routePustqr==='2'">
            <img src="../assets/images/pustqr3.png" alt="" v-if="routePustqr==='3'">
            <img src="../assets/images/pustqr4.png" alt="" v-if="routePustqr==='4'||routePustqr==='0'">
        </div>

        <div class="h5 pt-5"><span>1.5</span> 名词解释</div>
        
        <div class="h6 pt-3"><span>1.5.1</span> PUST</div>
        <p class="text-secondary">是用户购买UST降价合约的凭证<span v-if="routePustqr!=='3'">，按整数单位购买</span> 。可以购买一个和多个PUST。
        1个PUST代表在合约到期之前，有权以合约规定的UST换回规定数量ETH的权利。<br/>
        合约可能规定最低购买值。<br/>
        每一期PUST由于合约不同，其符号，意义和价值都不完全一样。只能在当期合约兑换。
        </p>

        <div class="h6 pt-3"><span>1.5.2</span> 周期</div>
        <p class="text-secondary">PUST的购买是分周期的。每个周期缺省40个区块，约10分钟。这个周期内，每增加一笔购买，周期长度添加10个区块，约2.5分钟。</p>
        
        <div class="h4 pt-5"><span>2</span> 奖励方式</div>

        <!-- <p class="text-secondary pt-2">每一个周期内，最先和最后购买者，将获得20%的奖励<span v-html="epochNow.num2"></span>。
            最后购买者的奖励会在下一个周期中计算。<span v-if="routePustqr!=='3'">由于采用整数奖励，所以奖励会以阶梯方式增长。</span></p>
        <p class="text-secondary py-1">如果奖励数目超过了剩余供应，超出的部分不奖励。</p> -->
        <p class="text-secondary pt-2">不同期的合约，可能有奖励。奖励的方式不一样。请关注当期合约说明文档是否有奖励以及奖励规则。</p>
        <div class="pt-2"><img src="../assets/images/reward.png" class="pic50" alt="" v-if="epochNow.rewardimg"></div>

        <div class="h4 pt-5"><span>3</span> 折扣方式</div>
        <p class="text-secondary py-2">PUST的价格，按如下示意的拟合曲线，每个周期下降。该曲线每期合约可能不同。</p>
        <div>
            <img src="../assets/images/pustusechain4.png" class="pic50" alt="" v-if="routePustqr==='4'||routePustqr==='0'"/>
            <img src="../assets/images/pustusechain.png" class="pic50" alt="" v-else/>
        </div>    
        <p class="text-secondary">横轴为周期计数，纵轴为1个PUST价格。不包含奖励。</p>

        <div class="h5 pt-5"><span>3.1</span> 折扣表</div>
        <p class="text-secondary py-2">这是理想的折扣数字表，每周期40个区块。用户购买会导致周期长度发生变化。</p>
        <p class="text-secondary text-small pb-1">下面的折扣表只是一个示例供参考，每期折扣曲线不一样，折扣表也不一样。</p>
        
        <table class="table table-sm table-striped text-center text-small text-secondary">
            <thead>
                <tr>
                <th scope="col">天数</th>
                <th scope="col">周期数</th>
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

         <div class="h4 pt-4"><span>4</span> 购买方式</div>
        <div class="text-secondary">
            <p class="text-danger py-2">用户的钱包地址不能是交易所钱包，不可以充值除eth之外的资产。</p>
            <p>用户在PUST还没有被卖完以及行权最后时间到来之前进行购买。</p>
            <p>购买方式和买普通的以太坊通证一样。</p>
            <p>购买地址见 <span class="text_black">1.4购买PUST智能合约地址。</span></p>
            <p>用户往PUST智能合约地址转ETH，智能合约往用户钱包地址返回相应数量的PUST。如果有奖励则奖励的PUST也会发送到用户钱包。每个周期，价格会不一样。价格不断下降。</p>
            <p v-html="epochNow.way"></p>
        </div>
         
         <div class="h4 pt-5"><span>5</span> 行权方式</div>
         <p class="text-secondary">行权请参考专门的行权教程。行权过程大致分为两部分：</p>

         <div class="h5 pt-4"><span>5.1</span> 在UST合约授权</div>
         <p class="text-secondary">在 UST 合约 中授权 期权合约转移UST的数量，为用户下一步行权做准备。</p>
         <p class="text-secondary">在UST合约授权后，在期权合约才能行权。</p>
         
         <div class="h5 pt-4"><span>5.2</span> 用PUST合约行权</div>
         <p class="text-secondary py-2">行权时，
            <span class="text-danger"> 要求用户持有 UST 的地址 和 持有PUST的地址要一样</span>
            ，如果持有UST的地址里面没有 PUST，需要转入此地址相应的 PUST
            行权时，需要用 PUST 和 UST 兑换 ETH：</p>
        <div class="text-secondary text_ident">
            <p>1、如果当前行权的时间超过合约规定的最终行权时间，则行权失败。</p>
            <p>2、如果用户 PUST 的数量不足，则行权失败。</p>
            <p>3、判断 PUST 对应的 UST 数量，这部分数量不能超过上面第一步授权的数量。</p>
            <p>4、尝试 期权合约调用UST合约转 UST 给指定Usechain账户，失败时状态回退，不会转出UST。</p>
            <p>5、转出UST后，计算 PUST 对应的 ETH 数量，同时减少用户的 PUST 余额。</p>
            <p>6、尝试从期权合约往用户地址转出相应的 ETH 数量， 失败时状态回退，不会转出ETH。</p>
            <p>7、行权转出ETH 成功后，整个流程结束。</p>
        </div>
    </div>
</template>

<script>
import pustEpoch from '../assets/js/config';

export default {
    name: "PustUsechain",    
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
        }
    },
    created(){
        var pustqr=this.$route.params.pustqr|| '0';
        this.routePustqr=pustqr;
        var pustqrNum=parseInt(pustqr);
        var pustqrNow=pustEpoch.length-pustqrNum;

        if(pustqr==='0'){
            this.epochNow=pustEpoch[0];
        }else{
            this.epochNow=pustEpoch[pustqrNow];
        }
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
.text_ident{
    text-indent: 2rem;
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

