<template>
    <div class="container pb-5 word_break">
        <div class="h4  py-1 mt-3 text-primary text_center">
            <div class="py-2 text_title">购买PUST操作说明书</div>
         </div>
        <div class="pt-3">
            <div class="text-danger py-1">
                注意：您的钱包地址不能是交易所钱包，不可以充值除eth之外的资产。PUST支持imtoken 1.0版和PC版的钱包                
            </div>
        </div>
        <div class="h4 pt-3"><span>·</span> 使用 Imtoken 认购 PUST</div>

        <p class="pt-4 py-2 text-primary">ETH 转账，点击 ETH</p>
        <div class="img_div"><img src="../assets/images/buy1.png" alt=""></div>

        <p class="pt-4 py-2 text-primary">进入如下页面，点转账</p>
        <div class="img_div"><img src="../assets/images/buy2.png" alt=""></div>

        <p class="pt-4 py-2 text-primary">进入转账页面：</p>
        <div class="img_div"><img src="../assets/images/buy3.png" alt=""></div>
        
        <p class="pt-4 py-2 text-primary">如上图所示，填入</p>
        <div class="text-secondary">
            <p>PUST 的合约地址：
                <span class="text_black text_bold">0xe8561c5a1e52e9ea12b17bd9168c230af9be766d</span>
                </p>
            <p>ETH数量：</p>
            <p>gwei：建议不要低于 5 Gwei</p>
            <p>gas：不能低于250000</p>
        </div>
        
        <p class="pt-4 py-2 text-primary">等待矿工打包即可</p>
    
        <div class="h4 pt-3"><span>·</span> 使用 Myetherwallet和Nano S或TREZOR 认购 PUST</div>
        <p class="pt-4 py-2">打开：<a target="_blank" href="https://www.myetherwallet.com/#send-transaction"> https://www.myetherwallet.com/#send-transaction</a></p>
        <div class="img_div"><img src="../assets/images/buy4.png" alt=""></div>

        <p class="pt-4 py-2 text-primary">UnLock Wallet</p>
        <div class="img_div"><img src="../assets/images/buy5.png" alt=""></div>

        <p class="pt-4 py-2 text-primary">Send ETH</p>
        <div class="img_div"><img src="../assets/images/buy6.png" alt=""></div>

        <div class="text-secondary">
            <p class="pt-4 py-2">如上图所示</p>
            <p>To Address填写PUST 的合约地址：</p>
            <p class="text_black text_bold">0xe8561c5a1e52e9ea12b17bd9168c230af9be766d</p>
            <p>ETH数量：</p>
            <p>gas：如没有计算，不能低于250000</p>
        </div>
        <p class="pt-4 py-2 text-primary">等待打包成功。</p>

        <div class="h4 pt-3"><span>·</span> 查询自己认购的 PUST</div>
        <p class="pt-4 py-2 text-primary">目前在 Imtoken2.0、Kcash 钱包是查不到 PUST 的，可以在etherscan查询。</p>
        <p>把如下URL的钱包地址替换为您自己的钱包地址。</p>
        <p>下面所示的钱包地址是0xF55E0Ca70E4Ad360A2aE12F8b2C2634ac67FB22e，替换为您自己的地址进行查询。</p>
        <p><a target="_blank" href="https://etherscan.io/address/0xF55E0Ca70E4Ad360A2aE12F8b2C2634ac67FB22e#tokentxns">https://etherscan.io/address/0xF55E0Ca70E4Ad360A2aE12F8b2C2634ac67FB22e#tokentxns</a></p>
         
    </div>
</template>

<style scoped>
img{
    max-width: 100%;
}
.text_title{
    font-weight: normal;
}
@media screen and (max-width:992px) {
    .img_div{
       text-align: center;
    }
}
</style>
