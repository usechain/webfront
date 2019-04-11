<template>
     <div class="container py-5 text-secondary">
        <div class="py-1 text-primary text_center">
            <div class="h4 py-2 text_title has_border">猜涨跌游戏教程</div>
         </div>
        <div class="text_bold text_black pt-3">1、下载Usechain APP：
            <a href="https://usechain.cn/wallet_app/" class="text-primary">https://usechain.cn/wallet_app/</a>
            邀请码 fb5h打开APP，通过APP首页头部banner猜涨跌专属位置进入猜涨跌</div>
        <div class="py-3"><img src="../assets/images/guessrule1.png" alt="" srcset=""></div>
        <div class="text_bold pt-3 text_black">2、进入猜涨跌后，通过上方导航栏可以切换USE/USEPOWER 专场。USE专场下注、奖励均为USE；USEPOWER专场下注、奖励均为USEPOWER。</div>
        <div class="py-3"><img src="../assets/images/guessrule2.png" alt="" srcset=""></div>

        <div class="text_bold pt-3 text_black">3、点击“买涨”或“买跌”进行下注，并且选择“是否续投”决定收益资产是否在下一期自动投注。</div>
        <div class="py-3"><img src="../assets/images/guessrule3.png" alt="" srcset=""></div>

        <div class="text_bold pt-3 text_black">4、根据要求输入下注金额和app交易密码，确定即下注成功。</div>
        <div class="py-3"><img src="../assets/images/guessrule4.png" alt="" srcset=""></div>

        <div class="text_bold pt-3 text_black">5、如想退出竞猜，可在每天15:30-24:00点间手动退出，操作完成后资产自动转入app账户内。</div>
        <div class="py-3"><img src="../assets/images/guessrule5.png" alt="" srcset=""></div>

        <div class="text_ident mt-3">
            <div class="h4 text-primary text_center py-3">猜涨跌玩法说明</div>
        </div>

        <div class="text-primary text_bold pt-3">一、概述</div>
        <div class="text_ident">
            <p class="pt-1">Usechain 猜涨跌是以上证指数为标的，竞猜指数收盘涨跌的游戏；胜出方会根据投注时的价格、投注的金额占比不同，瓜分奖池所有奖金。</p>
        </div>

        <div class="text-primary text_bold pt-3">二、玩法</div>
        <div class="text_ident">
            <p class="pt-1">T日上证指数涨跌的竞猜时间为T-1日15:20至T日14:57，T日15:20后至T+1日14:57前竞猜T+1日大盘涨跌，以此类推（T为交易日，周末及国家法定节假日不开盘）;</p>
            <p class="pt-1">T日的15:20至24:00，已经投注的金额，可以选择退出竞猜;</p>
            <p class="pt-1">T日的15:00至15:20，为竞猜开奖结算时间，根据上证指数收盘结果（T日15:00）、投注价格、投注金额，计算并分配奖金；此时间内结算完毕后，可选择退出竞猜（赎回奖金）;</p>
            <p class="pt-1">T日的15:20至24:00，为可退出时间段，如购买时选择自动续投，此时间段可主动退出竞猜。</p>
        </div>

        <div class="text-primary text_bold pt-3">三、购买</div>
        <div class="text_ident">
            <p class="pt-1">上证指数猜涨跌目前可使用以下代币参与竞猜：</p>
            <p class="text_ident am-margin-bottom-0">1. 最低 100 USE</p>
            <p class="text_ident">2. 最低 100 USEPOWER</p>
            <p class="py-1">游戏中设定了看涨价格、看跌价格，此价格会根据投注金额变化实时计算；此价格代表了竞猜不同结果的投注比例，看涨价格越高代表看涨投注越多，相反看跌价格越高代表开跌投注越多;</p>
            <p>竞猜当日的14:50至15:20，为竞猜开奖结算时间，无法投注;</p>
            <p class="py-1">投注时，可选择是否自动续投，如选择不自动续投，T日结算完毕后，将会把奖金自动发放至投注账号钱包；如选择自动续投，T日的15:20至24:00，为可退出时间段，此时间段可主动退出竞猜，如已获得奖金但未退出竞猜，剩余奖金将自动进入下一期竞猜，并且竞猜选择与本期相同;</p>
            <p>购买成功后，将扣除1%投注金额作为手续费；如结算退出竞猜，赎回投注和奖金，将收取1%结算金额作为手续费。</p>
        </div>

        <div class="text-primary text_bold pt-3">四、开奖</div>
        <div class="text_ident">
            <p class="pt-1">在当前交易日收盘后的14:50至15:20，竞猜结果揭晓。</p>
            <p class="py-1">猜涨跌是赢对手盘的资金，竞猜胜出方按照投入的股份，分竞猜失败方池子的资金。</p>
            <p>一般的股份计算，是按胜出方池子中，每个人投的钱占的比，分配输方池子的全部资金。</p>
            <p class="py-1">但这样带来不公平之处，就是后猜的人，有更多的信息，更高的概率赢。所以规则上，我们进行了修改。后投入的人进入时，先投入的人会按算法进行价格计算，得到一定补偿，导致先投入的人先分配收益。每一次有新的人加入，都会导致预计收益的立即变化。</p>
            <p class="pt-2">
                <span class="text_bold text_black">公式：</span>
                资金=股份*价格</p>
            <p class="py-1">总资金=多方资金+空方资金=总股份 (在多空双方池子里分配)</p>
            <p>多方价格=多方资金/总资金</p>
            <p class="py-1">空方价格=空方资金/总资金</p>
            <p>某已购者的新资金=此前股份*新价格(此时由于价格上升，导致已购者资金增值)</p>
            <p class="py-1">某已购者的新股份=(某已购者的新资金/本方资金)*总资金</p>
            <p>新进入者的资金不变，股份为他的(新进资金/本方资金)*总资金</p>
            <p class="py-1">得奖瓜分奖池为参与投注代币对应奖池，如投注为USE则得奖瓜分USE奖池，如投注为USEPOWER则得奖瓜分USEPOWER奖池，既投什么代币瓜分什么代币。</p>
        </div>

    </div>
</template>

<script>
import Vue from "vue";

export default {
    name: "GuessRule",   
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
tbody td{
    white-space: nowrap;
}
</style>

