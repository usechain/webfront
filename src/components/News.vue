<template>
    <div>
        <nav-bar @chooseLanguage="chooseLanguage" navActive="news"></nav-bar>
        <div class="container px-sm-5">
            <!-- 面包屑导航 -->
            <div class="sub_title">
                新闻资讯<span>News</span>
            </div>
            <ul class="pb-5 mb-5">
                <li v-for="(item,index) in newsList" :key="index" class="clearfix">
                    <div class="news_pic">
                        <a :href="item.href" target="_blank">
                            <img :src="item.imgsrc" :alt="item.title">
                        </a>
                    </div>
                    <!-- 移动端展示效果 -->
                    <div class="text_box d-block d-sm-none pl-3">
                        <a :href="item.href" class="text_black news_title" target="_blank"> {{item.title}}</a>
                        <div class="text-small text-secondary pt-1 pt-md-3">
                            <span  v-html="item.time"></span>
                            <span class="pl-3" v-html="item.from"></span>
                        </div>
                    </div>
                    <!-- PC端展示效果 -->
                    <div class="text_box d-none d-sm-block pl-4">
                        <a :href="item.href" class="text_black news_title" target="_blank">
                            <span class="text-primary text-small">【{{item.from}}】</span> {{item.title}}
                        </a>
                        <div class="text-small text-secondary pt-1 pt-md-2" v-html="'发布时间：'+item.time"></div>
                    </div>
                    
                </li>
            </ul>
        </div>
        <Bottom :languageName="languageName"></Bottom> 
        <Telegram/>  
    </div>
</template>

<script>
import Vue from "vue";
import $ from "jquery";
import VueI18n from "vue-i18n";
// import axios from "axios";
import NavBar from "./NavBar";
import Telegram from "./Telegram";
import Bottom from "./Bottom";
import messages from "../assets/js/lang";

Vue.use(VueI18n);

var i18n = new VueI18n({
  locale: localStorage.local || "en",
  messages // set locale messages
});

export default {
  name: "News",
  components: {
    NavBar,
    Telegram,
    Bottom
  },
  data() {
    return {
        languageName: localStorage.local || "en",
        newsList:[
            {"imgsrc":require("../assets/images/news/news90507.png"),"time":"2019年5月7日","title":"为什么各大交易所都要抢着做公链？ | 曹辉宁与他的教授朋友们 第6期（下）","from":"火星财经","href":"https://www.huoxing24.com/newsdetail/20190507145206428457"},            
            {"imgsrc":require("../assets/images/news/news90507.png"),"time":"2019年5月7日","title":"被玩坏的IEO与ICO有何不同？ | 曹辉宁与他的教授朋友们 第6期（中）","from":"火星财经","href":"https://www.huoxing24.com/newsdetail/20190507115644851399"},            
            {"imgsrc":require("../assets/images/news/news90507.png"),"time":"2019年5月6日","title":"为什么SEC总是不批ETF？| 曹辉宁与他的教授朋友们 第6期（上）","from":"火星财经","href":"https://www.huoxing24.com/newsdetail/20190506173124110592"},            
            {"imgsrc":require("../assets/images/news/news90426.png"),"time":"2019年4月26日","title":"Usechain NBA 猜胜负上线 区块链+体育竞猜解决万亿市场痛点","from":"金色财经","href":"https://www.jinse.com/blockchain/356173.html"},            
            {"imgsrc":require("../assets/images/news/news0422.png"),"time":"2019年4月22日","title":"Usechain创始人曹辉宁出任三亚国际科技创新中心总负责人","from":"金色财经","href":"https://www.jinse.com/blockchain/352402.html"},            
            {"imgsrc":require("../assets/images/news/news04222.png"),"time":"2019年4月22日","title":"初夏虎说他跟V神吵架了 | 曹辉宁与他的教授朋友们 第5期（下）","from":"金色财经","href":"https://www.jinse.com/blockchain/362332.html"},            
            {"imgsrc":require("../assets/images/news/news0419.png"),"time":"2019年4月19日","title":"我觉得被抄袭是一种赞美吧 | 曹辉宁与他的教授朋友们 第5期（上）","from":"火星财经","href":"https://www.huoxing24.com/newsdetail/20190506113600946620"},            
            {"imgsrc":require("../assets/images/news/news0604.png"),"time":"2019年4月10日","title":"Usechain：用RPOW共识算法改变传统金融","from":"AIcoin","href":"https://www.aicoin.net.cn/article/68208.html"},            
            {"imgsrc":require("../assets/images/news/news0409.png"),"time":"2019年4月9日","title":"Usechain ：推进全球普惠金融，打造链上华尔街","from":"金色财经","href":"https://www.jinse.com/blockchain/339342.html"},            
            {"imgsrc":require("../assets/images/news/news90401.png"),"time":"2019年4月1日","title":"英国知名科技媒体Verdict全面解析Usechain隐身镜像协议","from":"相关技术报道","href":"https://www.verdict.co.uk/usechain-blockchain/"},            
            {"imgsrc":require("../assets/images/news/news90402.png"),"time":"2019年4月1日","title":"Usechain主网上线 真正做到“1 person 1 vote”去中心化","from":"金色财经","href":"https://www.jinse.com/blockchain/338804.html"},            
            {"imgsrc":require("../assets/images/news/news90402.png"),"time":"2019年4月1日","title":"Usechain主网上线 真正做到“1 person 1 vote”去中心化","from":"美国雅虎财经","href":"https://finance.yahoo.com/news/usechain-mainnet-goes-live-build-120000141.html?guccounter=1"},            
            {"imgsrc":require("../assets/images/news/news90402.png"),"time":"2019年4月1日","title":"Usechain主网上线 真正做到“1 person 1 vote”去中心化","from":"德国金融新闻平台Finanzen.net","href":"https://www.finanzen.net/nachricht/aktien/usechain-mainnet-goes-live-to-build-a-wall-street-on-chain-7316459"},            
            {"imgsrc":require("../assets/images/news/news90402.png"),"time":"2019年4月1日","title":"Usechain主网上线 真正做到“1 person 1 vote”去中心化","from":"美国区块链媒体Bitcoinist","href":"https://bitcoinist.com/randomized-proof-of-work-privacy-and-its-own-lightning-network-usechain-makes-bold-promises/"},            
            {"imgsrc":require("../assets/images/news/news90401.png"),"time":"2019年4月1日","title":"Usechain主网上线 真正做到“1 person 1 vote”去中心化","from":"华尔街知名财经The Street","href":"https://www.thestreet.com/press-releases/usechain-mainnet-goes-live-to-build-a-wall-street-on-chain-14911968"},            
            {"imgsrc":require("../assets/images/news/news903312.png"),"time":"2019年3月31日","title":"捷克媒体Techsutram报道Usechain合规金融理念","from":"相关技术报道","href":"https://www.techsutram.com/2019/03/usechain-alpha-mainnet-is-live.html?m=1"},            
            {"imgsrc":require("../assets/images/news/news90331.png"),"time":"2019年3月31日","title":"韩国经济日报","from":"韩国经济日报","href":"https://www.hankyung.com/article/201903268521g"},            
            {"imgsrc":require("../assets/images/news/news90329.png"),"time":"2019年3月29日","title":"Usechain三项专利，斩获2018最佳区块链技术突破奖","from":"金色财经","href":"https://www.jinse.com/blockchain/338665.html"},            
            {"imgsrc":require("../assets/images/news/news90322.png"),"time":"2019年3月22日","title":"金融第一公链Usechain正式上线创新猜涨跌玩法","from":"火星财经","href":"https://www.huoxing24.com/newsdetail/20190325190941650591"},            
            {"imgsrc":require("../assets/images/news/news90308.png"),"time":"2019年3月8日","title":"前一百大加密币，能活下来的仅个位数","from":"AIcoin","href":"https://www.aicoin.net.cn/article/65180.html"},            
            {"imgsrc":require("../assets/images/news/news90322.png"),"time":"2019年3月1日","title":"中心化彩票黑幕不断？ 金融公链Usechain推出USEPOWER赋能彩票行业","from":"非小号","href":"https://t.bqi.com/news/48161.html"},            
            {"imgsrc":require("../assets/images/news/news90228.png"),"time":"2019年2月28日","title":"曹辉宁：摩根大通发币，华尔街加密趋势如何解读？","from":"金色财经","href":"https://www.jinse.com/blockchain/324227.html"},            
            {"imgsrc":require("../assets/images/news/news90225.png"),"time":"2019年2月25日","title":"摩根币的诞生说明CEO杰米错了吗？","from":"星球日报","href":"https://www.odaily.com/post/5136158"},            
            {"imgsrc":require("../assets/images/news/news90220.png"),"time":"2019年2月20日","title":"Usechain创始人曹辉宁：积分通证化能帮助商家和客户之间做更好的匹配","from":"金色财经","href":"https://www.jinse.com/bitcoin/318396.html"},            
            {"imgsrc":require("../assets/images/news/news90219.png"),"time":"2019年1月19日","title":"Usechain构建线下支付生态 落地深圳为传统行业注入通证新力量","from":"AICoin","href":"https://www.aicoin.net.cn/article/64199.html"},            
            {"imgsrc":require("../assets/images/news/news90201.png"),"time":"2019年2月1日","title":"DApp 生死局 下一站是什么？ | 曹辉宁与他的教授朋友们 第2期（下）","from":"金色财经","href":"https://www.jinse.com/bitcoin/313656.html"},            
            {"imgsrc":require("../assets/images/news/news901312.png"),"time":"2019年1月31日","title":"Blockchain in Korea | Usechain创始人兼CEO曹辉宁：传统金融精英的区块链之路","from":"火星财经","href":"https://www.huoxing24.com/newsdetail/20190131233117403107"},            
            {"imgsrc":require("../assets/images/news/news90131.png"),"time":"2019年1月31日","title":"2019年主流币会有牛市吗？ | 直播2期文字实录（下）","from":"星球日报","href":"https://www.jianshu.com/p/2e4ebd869d70"},
            {"imgsrc":require("../assets/images/news/news90130.png"),"time":"2019年1月30日","title":"通证经济怎么做？不谈宏观谈实操 | 直播2期文字实录（上）","from":"金色财经","href":"https://www.jinse.com/bitcoin/313618.html"}, 
            {"imgsrc":require("../assets/images/news/news90122.png"),"time":"2019年1月22日","title":"通证经济：创新还是换汤不换药？ | 直播文字实录（下）","from":"金色财经","href":"https://www.jinse.com/bitcoin/284189.html"},            
            {"imgsrc":require("../assets/images/news/news90116.png"),"time":"2019年1月16日","title":"区块链+商业银行全剖析 | 曹辉宁教授X胡捷教授直播文字实录（上）","from":"星球日报","href":"https://www.odaily.com/post/5135653"},            
            {"imgsrc":require("../assets/images/news/news1219.png"),"time":"2018年12月19日","title":"USE/USDT上线KuCoin","from":"币世界","href":"https://i.bishijie.com/detail/193706"},            
            {"imgsrc":require("../assets/images/news/news1210.png"),"time":"2018年12月10日","title":"2018最后一个月的市场行情：主流币更主流 山寨币更山寨","from":"巴比特","href":"http://8btc.com/thread-258646-1-1.html"},            
            {"imgsrc":require("../assets/images/news/news12042.png"),"time":"2018年12月4日","title":"科创板与STO会带来什么机遇？| 区块链三人行专访长江商学院曹辉宁","from":"金色财经","href":"https://www.jinse.com/bitcoin/284409.html"},            
            {"imgsrc":require("../assets/images/news/news1204.png"),"time":"2018年12月4日","title":"Usechain曹辉宁谈币的底线：不能实用的加密货币99%都会死掉 | 区块链大师课","from":"金色财经","href":"https://www.jinse.com/bitcoin/284189.html"},            
            {"imgsrc":require("../assets/images/news/news1122.png"),"time":"2018年11月22日","title":"数字货币打赏小费：纽约中餐厅感恩节开启USE支付通道","from":"火星财经","href":"https://www.huoxing24.com/newsdetail/20181122110900813373"},            
            {"imgsrc":require("../assets/images/news/news1106.png"),"time":"2018年11月6日","title":"区块链嫁接实体经济Usechain旗下iBlock Labs携众大咖开讲","from":"火星财经","href":"http://www.huoxing24.com/newsdetail/20181106114347530764.html?from=groupmessage"},            
            {"imgsrc":require("../assets/images/news/news11022.png"),"time":"2018年11月2日","title":"金融合规区块链Usechain亮相2018北京国际金博会","from":"CSDN","href":"https://blog.csdn.net/qadnmcrfxcn6c6h6661/article/details/83663169"},            
            {"imgsrc":require("../assets/images/news/news1102.png"),"time":"2018年11月2日","title":"金融合规区块链Usechain亮相2018北京国际金博会","from":"美通社","href":"https://www.prnasia.com/story/227948-1.shtml"},            
            {"imgsrc":require("../assets/images/news/news10242.png"),"time":"2018年10月24日","title":"Usechain受邀参加韩国区块链世博会，开启3GO战略全球征程","from":"EIN PRESSWIRE","href":"https://www.einpresswire.com/article/466283621/usechain-at-2018-korea-blockchain-expo-to-start-the-3go-program?r=paadAviktRxzidD_Qu"},            
            {"imgsrc":require("../assets/images/news/news1024.png"),"time":"2018年10月24日","title":"Usechain受邀参加韩国区块链世博会，开启3GO战略全球征程","from":"韩国经济日报","href":"http://news.hankyung.com/article/201810295722a"},            
            {"imgsrc":require("../assets/images/news/news1019.png"),"time":"2018年10月19日","title":"STO的未来：Usechain创始人引领群雄论辩火星区块链纽约峰会","from":"火星财经","href":"http://www.huoxing24.com/newsdetail/20181019232525959840.html"},            
            {"imgsrc":require("../assets/images/news/news1011.png"),"time":"2018年10月11日","title":"Usechain测试网上线，开启3Go全球战略计划","from":"腾讯视频","href":"https://url.cn/5ZBLimf?sf=uri"},            
            {"imgsrc":require("../assets/images/news/news1009.png"),"time":"2018年9月14日","title":"Usechain(USE) Testnet Goes Live To Build A Legally Compliant Financial Services Blockchain","from":"YAHOO","href":"https://finance.yahoo.com/news/usechain-testnet-goes-live-build-023000921.html"},            
            {"imgsrc":require("../assets/images/news/news0914.png"),"time":"2018年9月14日","title":"USE登陆Kucoin 同步开启全球征程","from":"Usechain微信公众号","href":"https://mp.weixin.qq.com/s/Lyk-55cSo5V_Ae7rHjuUWg"},            
            {"imgsrc":require("../assets/images/news/news0911.png"),"time":"2018年9月11日","title":"Usechain交锋美国CNBC名嘴，解析让杀手级应用落地的区块链体系","from":"火星财经","href":"http://www.huoxing24.com/newsdetail/20180911170526001978.html"},
            {"imgsrc":require("../assets/images/news/news0907.png"),"time":"2018年9月7日","title":"13岁读大学、如今50多岁的金融学教授欲借区块链颠覆华尔街","from":"火星财经","href":"http://www.huoxing24.com/newsdetail/20180907153015513905.html"},
            {"imgsrc":require("../assets/images/news/news0830.png"),"time":"2018年8月30日","title":"Usechain曹辉宁：区块链社区真正的践行者","from":"锌媒体","href":"http://www.xinmeti.com/internet/99792.html"},
            {"imgsrc":require("../assets/images/news/news08302.png"),"time":"2018年8月30日","title":"时代广场惊现粉丝打Call Usechain：区块链社区精神真正的践行者","from":"中国财经新闻网","href":"http://www.prcfe.com/finance/2018/0830/305620.html"},
            {"imgsrc":require("../assets/images/news/news0828.png"),"time":"2018年8月28日","title":"曹辉宁：“区块链+”并不适用所有场景","from":"金色财经","href":"https://www.jinse.com/bitcoin/233789.html"},
            {"imgsrc":require("../assets/images/news/news0827.png"),"time":"2018年8月27日","title":"Usechain创始人曹辉宁：USDT对市场是一个灾难，希望用金融衍生品开拓数字货币世界","from":"36氪","href":"https://36kr.com/p/5150074.html"},
            {"imgsrc":require("../assets/images/news/news0819.png"),"time":"2018年8月19日","title":"长江商学院教授曹辉宁生日演讲：区块链代表了道路、自由和生命","from":"火星财经","href":"http://www.huoxing24.com/newsdetail/20180819200947288830.html"},
            {"imgsrc":require("../assets/images/news/news0729.png"),"time":"2018年7月29日","title":"曹辉宁：无币区块链生命力很弱，通证经济才是法门","from":"石榴区块链","href":"https://mp.weixin.qq.com/s?__biz=MzUzMzg4ODIzMA==&mid=2247484007&idx=1&sn=86191d30fa631359e71597546dc3f39b&chksm=fa9c6feecdebe6f8af639eeb879fbaf3d049bc8a5371c95aebce34e8c936b1e270721aa53bcf&mpshare=1&scene=1&srcid=0729srP2afhKMvKVxGtY7qBi#rd"},
            {"imgsrc":require("../assets/images/news/news0720.png"),"time":"2018年7月20日","title":"长江商学院金融学教授曹辉宁：无通证区块链是一潭死水","from":"猎云网","href":"https://www.lieyunwang.com/archives/445476"},
            {"imgsrc":require("../assets/images/news/news0719.png"),"time":"2018年7月19日","title":"Usechain：全球首个身份镜像区块链系统 | ONETOP评级","from":"ONETOP评级","href":"https://mp.weixin.qq.com/s/zzVeDp7_f421OJ30-5VBFg"},
            {"imgsrc":require("../assets/images/news/news0218.png"),"time":"2018年7月18日","title":"【链得得吐槽大会】Usechain，曹辉宁和他的教授朋友们","from":"链得得","href":"http://www.chaindd.com/3094431.html"},
            {"imgsrc":require("../assets/images/news/news0712.png"),"time":"2018年7月12日","title":"星物种|建立链上华尔街，Usechain想利用区块链为用户构造“镜像身份”","from":"36氪","href":"https://36kr.com/p/5142771.html"},
            {"imgsrc":require("../assets/images/news/news0626.png"),"time":"2018年6月26日","title":"Usechain：数字货币不再是“黑户”的温床","from":"深链财经","href":"http://www.shenliancaijing.com/portal/activity/activedetail.html?id=652"},
            {"imgsrc":require("../assets/images/news/news0621.png"),"time":"2018年6月21日","title":"曹辉宁：我为什么说EOS的唯一意义就是圈钱？","from":"火星财经","href":"http://www.huoxing24.com/newsdetail/2018062115190583873.html"},
            {"imgsrc":require("../assets/images/news/news0620.png"),"time":"2018年6月20日","title":"听起来很可怕的 51％攻击，RPOW 是如何避免的？","from":"链闻社","href":"https://www.chainnews.com/articles/751721268491.htm"},
            {"imgsrc":require("../assets/images/news/news0613.png"),"time":"2018年6月13日","title":"曹辉宁获任中国区块链应用研究中心常务理事：打造链上华尔街","from":"金色财经","href":"https://www.jinse.com/blockchain/202563.html"},
            {"imgsrc":require("../assets/images/news/news0606.png"),"time":"2018年6月6日","title":"重聚：Usechain创始人曹辉宁与诺奖得主萨金特的加密货币之旅","from":"金色财经","href":"https://www.jinse.com/blockchain/200225.html"},
            {"imgsrc":require("../assets/images/news/news06062.png"),"time":"2018年6月6日","title":"曹辉宁教授：多中心化能够取代中心化吗？","from":"金色财经","href":"https://www.jinse.com/blockchain/200178.html"},
            {"imgsrc":require("../assets/images/news/news0604.png"),"time":"2018年6月4日","title":"【专访-曹辉宁教授】Usechain：RPOW如何避免51%算力攻击","from":"新观链","href":"https://mp.weixin.qq.com/s/uYllEgf9F9w3ByA2QzV95w"},
            {"imgsrc":require("../assets/images/news/news0602.png"),"time":"2018年6月2日","title":"曹辉宁：货币的本质是价值传递媒介","from":"比推","href":"http://www.bitpush.news/archives/81764"},
            {"imgsrc":require("../assets/images/news/news0523.png"),"time":"2018年5月23日","title":"Usechain创始人曹辉宁：分布式记账带来信任，通证带来激励","from":"火星财经","href":"http://www.huoxing24.com/newsdetail/2018052321242582892.html"},
            {"imgsrc":require("../assets/images/news/news0218.png"),"time":"2018年5月21日","title":"Usechain创始人曹辉宁：在合法合规前提下引领区块链3.0时代到来","from":"金色财经","href":"https://www.jinse.com/blockchain/194335.html"},
            {"imgsrc":require("../assets/images/news/news0518.png"),"time":"2018年5月18日","title":"Usechain 引爆东京、香港：7 天收到 100 个国家投资申请","from":"链闻社","href":"https://www.chainnews.com/articles/851589469103.htm"},
            {"imgsrc":require("../assets/images/news/news05182.png"),"time":"2018年5月18日","title":"Usechain 曹辉宁专访：为何加密世界需要实名制公链？","from":"链闻社","href":"https://www.chainnews.com/articles/252708833093.htm"},
            {"imgsrc":require("../assets/images/news/news0513.png"),"time":"2018年5月13日","title":"曹辉宁：为什么说EOS超级节点选举是一场闹剧？","from":"金色财经","href":"https://www.jinse.com/blockchain/192647.html"},
            {"imgsrc":require("../assets/images/news/news0505.png"),"time":"2018年5月5日","title":"链问ChainQA百人百问第九期：Usechain专场","from":"链问ChainQA","href":"https://www.jinse.com/blockchain/216219.html"},
            {"imgsrc":require("../assets/images/news/news0502.png"),"time":"2018年5月3日","title":"构建身份区块链 全球首个自我主权身份区块链Usechain启动","from":"搜狐网","href":"http://www.sohu.com/a/230273943_251755"},
            {"imgsrc":require("../assets/images/news/news0502.png"),"time":"2018年5月2日","title":"优仕链曹辉宁：区块链要实现大规模应用，实名链是唯一路径","from":"起风财经","href":"https://mp.weixin.qq.com/s/C0kAtCBzIdAR87A2L5biMw"},
            {"imgsrc":require("../assets/images/news/news0430.png"),"time":"2018年4月30日","title":"Usechain将成为全球首个自我主权身份区块链生态","from":"牛市财经","href":"https://mp.weixin.qq.com/s/cGQK-yz_Y82Phs3wkDchow"},
            {"imgsrc":require("../assets/images/news/news0330.png"),"time":"2018年3月30日","title":"曹辉宁：区块链技术未来发展有可能取代华尔街","from":"亚太第一卫视","href":"http://www.sohu.com/a/226823801_661926"},
            {"imgsrc":require("../assets/images/news/news0222.png"),"time":"2018年2月23日","title":"曹辉宁：ICO应像电影一样，分级监管","from":"碳链价值","href":"https://mp.weixin.qq.com/s/P64612MSjunC-qv7zgXHAw"},
            {"imgsrc":require("../assets/images/news/news0222.png"),"time":"2018年2月22日","title":"长江商学院金融系主任曹辉宁：区块链对人类社会影响超过互联网","from":"火星财经","href":"http://www.huoxing24.com/newsdetail/2018022215062648962.html"},
            {"imgsrc":require("../assets/images/news/news0218.png"),"time":"2018年2月18日","title":"长江金融系主任曹辉宁教授谈区块链与货币","from":"金色财经","href":"https://www.jinse.com/blockchain/150556.html"},
            {"imgsrc":require("../assets/images/news/news0119.png"),"time":"2018年1月19日","title":"现在人们能适应互联网，20年后同样能适应区块链 | 中国国际电视台采访","from":"CGTN","href":"https://mp.weixin.qq.com/s/CZ3KnhP7fH2dyKv7FHWj8g"},
        ]};
  },
  i18n,
  created() {
    this.$i18n.locale = localStorage.local || "en";
  },
  methods: {
    chooseLanguage(lang) {
      this.$i18n.locale = lang;
      this.languageName = lang;
    }
  }
};
</script>

<style scoped>
ul{
    border-top: 1px solid #d2d2d2;
}
ul li{
    border-bottom: 1px solid #d2d2d2;
    padding: 1rem 0;
}
.news_pic {
    width: 4rem;
    height: 4rem;
    float: left;
}
.news_pic a{
    display: block;
    width: 100%;
    height: 100%;
    background: #000;
    line-height: 4rem;
    text-align: center;
}
.news_pic img{
    max-width: 100%;
    max-height : 100%;
    vertical-align: middle;
    margin-top: -1px;
}
.text_box{
    float: right;
    width: calc(100% - 4rem);
}
</style>

