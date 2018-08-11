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
        <div class="py-3">
            <div class="h6">打币合约地址：0x12343xxx...</div>
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
</style>

