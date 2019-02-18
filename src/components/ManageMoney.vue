<template>
     <div class="container py-5 text-secondary">
        <div class="py-1 text-primary text_center">
            <div class="h4 py-2 text_title has_border">Usechain理财产品U理财介绍与常见问题</div>
         </div>
        <div class="pt-3">
            <span class="text_black text_bold">U理财</span>
            是Usechain app中提供的数字资产理财产品，用户可以存入Usechain Token来获得回报，存入越多，存入时间越久，获得回报越高哦</div>
        <div class="text-primary text_bold pt-3">1、U理财是什么？</div>
        <div class="text_ident">
            <p>答：Usechain app中提供的数字资产理财产品。</p>
        </div>

        <div class="text-primary text_bold pt-3">2、如何购买U理财？</div>
        <div class="text_ident">
            <p>答：进入Usechain app找到 U理财，自主选择进行购买。</p>
        </div>

        <div class="text-primary text_bold pt-3">3、是否有多种理财产品可供选择？如果有差别是什么？</div>
        <div class="text_ident">
            <p>答：目前有两种，分别是USE理财和USESHARE理财。</p>
            <p class="pt-1">USESHARE是Usechain的分红权token，USESHARE投资周期为一年，分红没有上限。一个CUSE和一个USE可以换到一个USESHARE，这个权利到2019年年底截止。USESHARE在可以获得分红的基础上还可以进行理财产品的购买获取更多收益。</p>
        </div>

        <div class="text-primary text_bold pt-3">4、理财产品的周期设置和投资回报？</div>
        <div class="text_ident">
            <p>USE分为3个月、6个月和12个月的理财产品。3个月的理财产品每年3，6，9，12月底分红。6个月的理财产品每年6，12月底分红，12月的理财产品每年12月底分红。每个季度公司利润和生态游戏中产生的USEPOWER 5%会打入3月理财产品池作为分红基础。每个投资者按照投资币*投资天数按比例参与分红。参与分红者的投资天数必须超过产品投资期限。分红的上限是投资币*投资天数/365。6月，12月产品每个投资周期各分到利润的10%和20%。分红机制和3月类似。也就是说，3月底，三月产品理财池分到5%，六月底，三月，六月产品池各分到5%，10%。九月底，三月产品分到5%。年底，各3，6，12各分到5，10，20%。剩余的分给USESHARE理财产品池。</p>
            <p class="pt-1"><span class="text_black text_bold">通俗描述：</span>Usechain理财产品，是根据持有理财产品的份额、时间的占比，享受分红收益；产品分为多个期限，不同的期限对应不同的分红时点、不同的分红池。</p>
            <p class="pt-1"><span class="text_black text_bold">收益计算：</span>投资收益 = 投资份额*投资天数 / Σ（投资份额*投资天数） * 当期分红池总金额</p>
            <p class="pt-1">其中：</p>
            <p class="pt-1"><span class="text_black text_bold">投资份额：</span>指购买产品的数额</p>
            <p class="pt-1"><span class="text_black text_bold">投资天数：</span>指购买日至产品截止日期为止的天数</p>
            <p class="pt-1"><span class="text_black text_bold">投资份额*投资天数 / Σ（投资份额*投资天数）：</span>指个人“投资额*投资天数”所占当期产品，所有参与者“投资额*投资天数”总额的权重比例</p>
            <p class="pt-1"><span class="text_black text_bold">当期分红池总金额：</span>分红池金额，来源于Usechain生态游戏PowerBall沉淀奖池中的USEPOWER（可购买PowerBall彩票的代币），理财产品分为多个不同期限，如3个月、6个月、9个月、12个月，不同期限对应的不同的截止日期、不同的分红池，示例如下:</p>
            <div class="px-sm-5 py-2 mx-sm-5">
                <table class="table table-sm table-striped text-center text-small text-secondary">
                    <thead>
                        <tr>
                        <th scope="col" >期限</th>
                        <th scope="col" >到期日期</th>
                        <th scope="col" >可分配分红池金额占PowerBall沉淀奖池比例</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in tableList" :key="index">
                            <td v-html="item.period"></td>
                            <td v-html="item.date"></td>
                            <td v-html="item.percent"></td>
                        </tr>
                    </tbody>
                </table>
                <div class="text-small">分红池金额的确定，以产品到期日期当日沉淀奖池中的USEPOWER数额为基础值。</div>            
            </div>
            <p class="pt-1"><span class="text_black text_bold">产品购买、收益规则限制：</span></p>
            <p class="pt-1">1.购买限制：</p>
            <p>(1) 仅支持投资USE、USESHARE</p>
            <p>(2) 购买理财产品时，产品期限为最短的可购买期限，当购买时间距离产品到期日期天数少于产品期限，则无法购买，只能购买到期日期更远的产品。</p>
            <p class="pt-1">示例：</p>
            <p>产品1：期限3个月， 到期日期2019-06-30</p>
            <p>产品2：期限3个月， 到期日期2019-09-30</p>
            <p class="pt-1">购买日期为 2019-04-01，距离产品1到期日期（2019-06-30）少于3个月，因此无法购买产品1，只能购买产品2</p>
            <p class="pt-1">2.收益限制：</p>
            <p>(1) 收益回报代币为 USEPOWER（可购买PowerBall彩票的代币）</p>
            <p>(2) 购买产品获得的收益金额值最高不超过 投资金额*投资天数/365</p>
            <p class="pt-1">示例：</p>
            <p>购买产品，期限6个月，投资金额1,000,000 USE，实际投资天数为200天，当期最终分红池金额为50,000,000 USEPOWER，则最高收益金额为 1,000,000 * 200/365 = 547,945 USEPOWER</p>
            <p class="pt-1">(3) 已购买产品，产品到期结束后，计算并发放理财收益；如果在产品到期日前提取已投资金额，则视为放弃投资收益，收益为0</p>
            <p class="pt-1">理财产品收益示例：</p>
            <p>产品1：期限3个月，到期日期2019-06-30，可分配分红比例5%</p>
            <p class="pt-1">投资人A：购买日期 2019-03-23，金额 1,000,000 USE，持有至到期（100天）</p>
            <p>投资人B：购买日期 2019-03-23，金额 500,000 USE，持有至到期（100天）</p>
            <p>投资人C：购买日期 2019-02-01，金额 1,000,000 USE，持有至到期（150天）</p>
            <p>投资人D：购买日期 2019-02-01，金额 1,000,000 USE，2019-06-15取出（135天）</p>
            <p class="pt-1">2019-06-30 到期当日，PowerBall沉淀奖池中USEPOWER总金额200,000,000 USEPOWER</p>
            <p class="pt-1">所有投资总权益：1000000*100 + 500000*100 + 1000000*150 = 300000000</p>
            <p class="pt-1">可分配分红池：20000000*5% = 1000000</p>
            <p class="pt-1">投资人A收益：(1000000*100/300000000)* 10000000 = 333300 USEPOWER</p>
            <p>投资人B收益：(500000*100/300000000)* 10000000 = 166700 USEPOWER</p>
            <p>投资人C收益：(1000000*150/300000000)* 10000000 = 500000 USEPOWER</p>
            <p>投资人D收益：到期日前取出，收益为0</p>
        </div>

        <div class="text-primary text_bold pt-3">5、如何计算理财收益？其中各基数是如何设计获取的？</div>
        <div class="text_ident">
            <p>答：理财产品中的分红池会每个季度更新。</p>
        </div>

        <div class="text-primary text_bold pt-3">6、购买理财产品后是否可以随时退出？ 是否可以分批退出？</div>
            <p class="text_ident">答：●可以随时退出，中途退出即停止计算收益，过往收益作废。</p>
            <p class="text_ident2">●可以分批退出，如同时购买不同时常理财产品，优先退出投资期限更短的理财产品。理财收益按照最后剩余本金计算全部周期收益。</p>

        <div class="text-primary text_bold pt-3">7、理财产品到期后本金和收益如何提取？是否有限制？提取到账时间是否有时间差？</div>
        <div class="text_ident">
            <p>答：收益在结算期完成后即时到达usecain app账户。本周期理财到期，自动投注下一周期。可随时退出，退出后不参与分红。例如参与3/31分红的币必须3/31全天在账上，同时自动转入下一期投资，投资起始时间为3/31。其他分红时间以此类推。</p>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

export default {
    name: "ManageMoney",   
    data(){
        return{
            tableList:[
                {period:'3个月',date:'2019-06-30',percent:'5%'},
                {period:'6个月',date:'2019-09-30',percent:'10%'},
                {period:'12个月',date:'2020-02-28',percent:'20%'},
            ]     
        }
    },
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

