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
                        <div class="text-small text-secondary pt-1 pt-md-3" v-html="'发布时间：'+item.time"></div>
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
        newsList:
        [
            {"imgsrc":require("../assets/images/news0914.jpeg"),"time":"9月14日","title":"USE登陆Kucoin 同步开启全球征程","from":"Usechain微信公众号","href":"https://mp.weixin.qq.com/s/Lyk-55cSo5V_Ae7rHjuUWg"},            
            {"imgsrc":require("../assets/images/news0911.jpg"),"time":"9月11日","title":"Usechain交锋美国CNBC名嘴，解析让杀手级应用落地的区块链体系","from":"火星财经","href":"http://www.huoxing24.com/newsdetail/20180911170526001978.html"},
            {"imgsrc":require("../assets/images/news0907.jpg"),"time":"9月7日","title":"13岁读大学、如今50多岁的金融学教授欲借区块链颠覆华尔街","from":"火星财经","href":"http://www.huoxing24.com/newsdetail/20180907153015513905.html"},
            {"imgsrc":require("../assets/images/news0830.jpg"),"time":"8月30日","title":"Usechain曹辉宁：区块链社区真正的践行者","from":"锌媒体","href":"http://www.xinmeti.com/internet/99792.html"},
            {"imgsrc":require("../assets/images/news08302.jpg"),"time":"8月30日","title":"时代广场惊现粉丝打Call Usechain：区块链社区精神真正的践行者","from":"中国财经新闻网","href":"http://www.prcfe.com/finance/2018/0830/305620.html"},
            {"imgsrc":require("../assets/images/news0828.jpg"),"time":"8月28日","title":"曹辉宁：“区块链+”并不适用所有场景","from":"金色财经","href":"https://www.jinse.com/bitcoin/233789.html"},
            {"imgsrc":require("../assets/images/news0827.jpg"),"time":"8月27日","title":"Usechain创始人曹辉宁：USDT对市场是一个灾难，希望用金融衍生品开拓数字货币世界","from":"36氪","href":"https://36kr.com/p/5150074.html"},
            {"imgsrc":require("../assets/images/news0819.jpg"),"time":"8月19日","title":"长江商学院教授曹辉宁生日演讲：区块链代表了道路、自由和生命","from":"火星财经","href":"http://www.huoxing24.com/newsdetail/20180819200947288830.html"},
            {"imgsrc":require("../assets/images/news0729.jpg"),"time":"7月29日","title":"曹辉宁：无币区块链生命力很弱，通证经济才是法门","from":"石榴区块链","href":"https://mp.weixin.qq.com/s?__biz=MzUzMzg4ODIzMA==&mid=2247484007&idx=1&sn=86191d30fa631359e71597546dc3f39b&chksm=fa9c6feecdebe6f8af639eeb879fbaf3d049bc8a5371c95aebce34e8c936b1e270721aa53bcf&mpshare=1&scene=1&srcid=0729srP2afhKMvKVxGtY7qBi#rd"},
            {"imgsrc":require("../assets/images/news0720.jpg"),"time":"7月20日","title":"长江商学院金融学教授曹辉宁：无通证区块链是一潭死水","from":"猎云网","href":"https://www.lieyunwang.com/archives/445476"},
            {"imgsrc":require("../assets/images/news0719.jpg"),"time":"7月19日","title":"Usechain：全球首个身份镜像区块链系统 | ONETOP评级","from":"ONETOP评级","href":"https://mp.weixin.qq.com/s/zzVeDp7_f421OJ30-5VBFg"},
            {"imgsrc":require("../assets/images/news0218.png"),"time":"7月18日","title":"【链得得吐槽大会】Usechain，曹辉宁和他的教授朋友们","from":"链得得","href":"http://www.chaindd.com/3094431.html"},
            {"imgsrc":require("../assets/images/news0712.jpg"),"time":"7月12日","title":"星物种|建立链上华尔街，Usechain想利用区块链为用户构造“镜像身份”","from":"36氪","href":"https://36kr.com/p/5142771.html"},
            {"imgsrc":require("../assets/images/news0626.png"),"time":"6月26日","title":"Usechain：数字货币不再是“黑户”的温床","from":"深链财经","href":"http://www.shenliancaijing.com/portal/activity/activedetail.html?id=652"},
            {"imgsrc":require("../assets/images/news0621.jpg"),"time":"6月21日","title":"曹辉宁：我为什么说EOS的唯一意义就是圈钱？","from":"火星财经","href":"http://www.huoxing24.com/newsdetail/2018062115190583873.html"},
            {"imgsrc":require("../assets/images/news0620.png"),"time":"6月20日","title":"听起来很可怕的 51％攻击，RPOW 是如何避免的？","from":"链闻社","href":"https://www.chainnews.com/articles/751721268491.htm"},
            {"imgsrc":require("../assets/images/news0613.png"),"time":"6月13日","title":"曹辉宁获任中国区块链应用研究中心常务理事：打造链上华尔街","from":"金色财经","href":"https://www.jinse.com/blockchain/202563.html"},
            {"imgsrc":require("../assets/images/news0606.png"),"time":"6月6日","title":"重聚：Usechain创始人曹辉宁与诺奖得主萨金特的加密货币之旅","from":"金色财经","href":"https://www.jinse.com/blockchain/200225.html"},
            {"imgsrc":require("../assets/images/news06062.png"),"time":"6月6日","title":"曹辉宁教授：多中心化能够取代中心化吗？","from":"金色财经","href":"https://www.jinse.com/blockchain/200178.html"},
            {"imgsrc":require("../assets/images/news0604.jpg"),"time":"6月4日","title":"【专访-曹辉宁教授】Usechain：RPOW如何避免51%算力攻击","from":"新观链","href":"https://mp.weixin.qq.com/s/uYllEgf9F9w3ByA2QzV95w"},
            {"imgsrc":require("../assets/images/news0602.jpg"),"time":"6月2日","title":"曹辉宁：货币的本质是价值传递媒介","from":"比推","href":"http://www.bitpush.news/archives/81764"},
            {"imgsrc":require("../assets/images/news0523.jpg"),"time":"5月23日","title":"Usechain创始人曹辉宁：分布式记账带来信任，通证带来激励","from":"火星财经","href":"http://www.huoxing24.com/newsdetail/2018052321242582892.html"},
            {"imgsrc":require("../assets/images/news0218.png"),"time":"5月21日","title":"Usechain创始人曹辉宁：在合法合规前提下引领区块链3.0时代到来","from":"金色财经","href":"https://www.jinse.com/blockchain/194335.html"},
            {"imgsrc":require("../assets/images/news0518.jpg"),"time":"5月18日","title":"Usechain 引爆东京、香港：7 天收到 100 个国家投资申请","from":"链闻社","href":"https://www.chainnews.com/articles/851589469103.htm"},
            {"imgsrc":require("../assets/images/news05182.jpg"),"time":"5月18日","title":"Usechain 曹辉宁专访：为何加密世界需要实名制公链？","from":"链闻社","href":"https://www.chainnews.com/articles/252708833093.htm"},
            {"imgsrc":require("../assets/images/news0513.png"),"time":"5月13日","title":"曹辉宁：为什么说EOS超级节点选举是一场闹剧？","from":"金色财经","href":"https://www.jinse.com/blockchain/192647.html"},
            {"imgsrc":require("../assets/images/news0505.png"),"time":"5月5日","title":"链问ChainQA百人百问第九期：Usechain专场","from":"链问ChainQA","href":"https://www.jinse.com/blockchain/216219.html"},
            {"imgsrc":require("../assets/images/news0502.jpg"),"time":"5月3日","title":"构建身份区块链 全球首个自我主权身份区块链Usechain启动","from":"搜狐网","href":"http://www.sohu.com/a/230273943_251755"},
            {"imgsrc":require("../assets/images/news0502.jpg"),"time":"5月2日","title":"优仕链曹辉宁：区块链要实现大规模应用，实名链是唯一路径","from":"起风财经","href":"https://mp.weixin.qq.com/s/C0kAtCBzIdAR87A2L5biMw"},
            {"imgsrc":require("../assets/images/news0430.jpg"),"time":"4月30日","title":"Usechain将成为全球首个自我主权身份区块链生态","from":"牛市财经","href":"https://mp.weixin.qq.com/s/cGQK-yz_Y82Phs3wkDchow"},
            {"imgsrc":require("../assets/images/news0330.jpg"),"time":"3月30日","title":"曹辉宁：区块链技术未来发展有可能取代华尔街","from":"亚太第一卫视","href":"http://www.sohu.com/a/226823801_661926"},
            {"imgsrc":require("../assets/images/news0222.jpg"),"time":"2月23日","title":"曹辉宁：ICO应像电影一样，分级监管","from":"碳链价值","href":"https://mp.weixin.qq.com/s/P64612MSjunC-qv7zgXHAw"},
            {"imgsrc":require("../assets/images/news0222.jpg"),"time":"2月22日","title":"长江商学院金融系主任曹辉宁：区块链对人类社会影响超过互联网","from":"火星财经","href":"http://www.huoxing24.com/newsdetail/2018022215062648962.html"},
            {"imgsrc":require("../assets/images/news0218.png"),"time":"2月18日","title":"长江金融系主任曹辉宁教授谈区块链与货币","from":"金色财经","href":"https://www.jinse.com/blockchain/150556.html"},
            {"imgsrc":require("../assets/images/news0119.png"),"time":"1月19日","title":"现在人们能适应互联网，20年后同样能适应区块链 | 中国国际电视台采访","from":"CGTN","href":"https://mp.weixin.qq.com/s/CZ3KnhP7fH2dyKv7FHWj8g"},
        ]
    };
  },
  i18n,
  created() {
    this.$i18n.locale = localStorage.local || "en";
  },
  methods: {
    chooseLanguage(lang) {
      this.$i18n.locale = lang;
      this.langChosen = lang;
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

