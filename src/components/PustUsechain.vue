<template>
    <div class="container pb-5">
        <div class="py-1 mt-5 text_center text-secondary">
            <div class="h4 py-2 text_title text-primary">UST降价保障PUST购买说明</div>
            <p>2018年8月10日</p>
            <p>Usechain 团队</p>
        </div>
         <div class="h4 pt-3"><span>1</span> 概述</div>
         <div class="text-secondary text_ident">
            <p class="py-2">为了保障认购UST的用户的权益，我们推出一款UST保值合约产品PUST。用户如果购买PUST，在北京时间2018年12月31日24点前，每个1个PUST有权以100000 UST，换回1个ETH。如果UST币值下降，则可以用PUST合约挽回损失。相当于为币值买了一份保险。如果UST币值上涨，则可以获取UST币值上涨的收益。
            </p>
            <p>我们对购买PUST的用户，有一定的奖励机制。详见下述章节《奖励方式》。</p>
            <p>PUST的购买值，采用荷兰拍卖的方式，价格不断下降。但如果不早购买，可能会被用户一次全部买走。降价方式见《折扣方式》。</p>
            <p>购买方式见后续章节《购买方式》。</p>
            <p>行权方式见后续章节《行权方式》。</p>
            <p>下图描述了PUST购买流程。</p>
         </div>
         <div><img src="../assets/images/pust.png" class="pic75" alt=""></div>

        <div class="h5 pt-4"><span>1.1</span> 总量</div>
        <p class="text-secondary">本次发行PUST总量 2000枚，卖完或到最后行权时间终止。</p>

        <div class="h5 pt-4"><span>1.2</span> 最终行权时间</div>
        <p class="text-secondary">北京时间(东八区) 2018年12月31日24点。</p>
        <p class="text-secondary">必须在最终行权时间之前行权。</p>

        <div class="h5 pt-4"><span>1.3</span> 1个PUST权利</div>
        <p class="text-secondary">以100000 UST，换回1个ETH。</p>

        <div class="h5 pt-4"><span>1.4</span> 购买PUST智能合约地址</div>
        <p class="text-secondary pb-2">0x44433a29280b9Bec267b6d22b59BD32251652553</p>
        <div class="pustqr"><img src="../assets/images/pustqr.png" alt=""></div>

        <div class="h5 pt-5"><span>1.5</span> 名词解释</div>
        
        <div class="h6 pt-3"><span>1.5.1</span> PUST</div>
        <p class="text-secondary">是用户购买UST降价合约的凭证，按整数单位购买。可以购买一个和多个PUST。</p>
        <p class="text-secondary">1个PUST代表在合约到期之前，有权以100000 UST换回1个ETH的权利。</p>

        <div class="h6 pt-3"><span>1.5.2</span> 周期</div>
        <p class="text-secondary">PUST的购买是分周期的。每个周期缺省40个区块，约10分钟。这个周期内，每增加一笔购买，周期长度添加10个区块，约2.5分钟。</p>
        
        <div class="h4 pt-5"><span>2</span> 奖励方式</div>

        <p class="text-secondary pt-2">每一个周期内，最先和最后购买者，将获得20%的奖励，按大于等于20%的最小整数发放。最后购买者的奖励会在下一个周期中计算。由于采用整数奖励，所以奖励会以阶梯方式增长。</p>
        <p class="text-secondary py-1">如果奖励数目超过了剩余供应，超出的部分不奖励。</p>

        <div class="pt-2"><img src="../assets/images/pustusechain3.png" class="pic50" alt=""></div>

        <div class="h4 pt-5"><span>3</span> 折扣方式</div>
        <p class="text-secondary py-2">PUST的价格，按如下的曲线，每个周期下降。</p>
        <div><img src="../assets/images/pustusechain4.png" class="pic50" alt=""></div>    
        <p class="text-secondary">横轴为周期计数，纵轴为1个PUST价格。不包含奖励。</p>

        <div class="h5 pt-5"><span>3.1</span> 折扣表</div>
        <p class="text-secondary py-2">这是理想的折扣数字表，每周期40个区块。用户购买会导致周期长度发生变化。</p>
        
        <table class="table table-sm table-striped text-center text-small text-secondary">
            <thead>
                <tr>
                <th scope="col">天数</th>
                <th scope="col">周期数</th>
                <th scope="col">PUST价格(ETH)</th>
                </tr>
            </thead>
            <tbody>
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
            <p>用户往PUST智能合约地址转ETH，智能合约往用户钱包地址返回相应数量和奖励的PUST。每个周期，价格会不一样。价格不断下降。</p>
            <p>
                <span class="text_black">如果支付的ETH购买完整数个PUST有多余的部分，余额会退还用户。</span>
                假如1个PUST 0.5ETH，支付了3.2 ETH将获得6个PUST，返回用户0.2ETH，奖励另算。
            </p>
        </div>
         
         <div class="h4 pt-5"><span>5</span> 行权方式</div>
         <p class="text-secondary">行权分为两部分：</p>

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
export default {
    data(){
        return{
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
            ]
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

