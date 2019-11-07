<template>
  <div class="node_wrap">
    <nav-bar @chooseLanguage="chooseLanguage" navActive="node"></nav-bar>
    <div class="banner">
      <img src="../assets/images/node/banner.png" />
    </div>
    <div class="container px-sm-5">
      <p class="content_text">
        恭喜以下投资机构和社区合伙人成为Usechain超级生态节点-预备节点；
        <br />超级生态节点是Usechain发展路线图的重要组成之一，充分发挥覆盖全球100个国家的数十万社区成员力量，组建超级生态节点联盟。预备计划是组建超级生态节点联盟的前置项目，所有参与预备计划的节点称为预备节点，预备节点将在未来的超级生态节点竞选中获得优先权益。预备节点共设有21个席位，采取先到先得方式，超额申请将被退回。
        <br />Usechain主网计划将于2019年底正式上线并实现价值流通。超级生态节点是主网正常运转的重要保证，因此超级生态节点需要具备足够的能力和影响力，来被所有生态参与者认可与信任。
      </p>
        <div class="node_title">恭喜以下社区和集团成功加入超级节点-预备节点</div>      
      <ul class="row text_center c_wrap">
        <li class="col-4 col-md-2 px-3 px-md-4" v-for="(item,index) in teamList" :key="index">
          <img :src='"../assets/images/node/"+item.img+".png"'/>
          <p v-html="item.name"></p>
        </li>
      </ul>
    </div>
    <div class="profit_wrap">
      <div class="container">
        <div class="node_title">成为Usechain超级节点-预备节点可享受六大权益</div>
        <ul class="row">
          <li class="col-12 col-md-4">
            <div class="wrapper">
              <img src="../assets/images/node/p_lixishouyi.png" />
              <h6>利息收益</h6>      
              <p>超级生态预备节点将享受锁仓数量年化30%利息收益，到期还本付息，1年后有一周时间可申请赎回，赎回则自动退出超级生态预备节点序列。</p>
            </div>
          </li>
          <li class="col-12 col-md-4">
            <div class="wrapper">
            <img src="../assets/images/node/p_lixifenhong.png" />
            <h6>利润分红</h6>      
            <p>Usechain基金会作为金牛交易所TaurusEX的战略投资人，拥有15%的利润分红权，如上币费、手续费、增值服务费等，Usechain基金会将把100%的利润分红根据锁仓USE权重分配给所有超级生态预备节点，每年分红一次，首次分红将于2020年8月8日进行。</p>
            </div>
          </li>
          <li class="col-12 col-md-4">
            <div class="wrapper">
            <img src="../assets/images/node/p_tuijianshangshi.png" />
            <h6>推荐上币</h6>      
            <p>作为超级生态预备节点期间，每月均可获得一次金牛交易所TaurusEX上币推荐权，经金牛研究院审核通过后可直接上币，享受上币费最优折扣，最低0元免费上币。</p>
            </div>
          </li>
          <li class="col-12 col-md-4">
            <div class="wrapper">
            <img src="../assets/images/node/p_xingyunjianglin.png" />
            <h6>幸运降临</h6>      
            <p>超级生态预备节点每锁仓1000万USE，期间每日将获得金牛交易所TaurusEX 1个平台币TC申购黄金签，每个黄金签将可申购500枚TC，TC申购价每日上涨，买到即赚到。</p>
            </div>
          </li>
          <li class="col-12 col-md-4">
            <div class="wrapper">
            <img src="../assets/images/node/p_suocangjingxiang.png" />
            <h6>锁仓镜像</h6>      
            <p>超级生态预备节点可将锁仓的USE按一定比例镜像为TC锁仓参与金牛交易所TaurusEX合伙人计划，获得更多交易所合伙人收益。</p>
            </div>
          </li>
          <li class="col-12 col-md-4">
            <div class="wrapper">
            <img src="../assets/images/node/p_wakuangshouyi.png" />
            <h6>挖矿收益</h6>      
            <p>Usechain主网正式上线后，成功转换为超级生态节点的预备节点将获得公链的挖矿收益。。</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="company_wrap">
      <div class="container">
        <div class="node_title">合作伙伴</div>
         <div class="justify-content-center section">
          <div class="text-center row p-4 p-md-0">
            <div class="col-6 col-sm-4 col-lg-3" v-for="(item,index) in partnerList" :key="index">
              <img :src='"../assets/images/node/"+item+".png"' class="w-100 px-md-4 py-1 py-lg-4 wow flipInX" :data-wow-delay="'.'+index+'s'"/>
            </div>
          </div>
        </div>  
      </div>
    </div>
    <Bottom :languageName="languageName"></Bottom>
    <Telegram />
  </div>
</template>

<script>
import Vue from "vue";
import $ from "jquery";
import VueI18n from "vue-i18n";
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
      partnerList:[
        'yahu','market','lvse','jcast','souhu','hanguo','asia',' niushi','seeking','xinlang','alcoin','xingqiu','huoxing','verdict',' meitongshe','fenghuang','jinse','csdn','zhaori','kr','hanguosige','finanzen','bitcoinst','techsutram'
      ],
      teamList:[
        {img:'c_boya',name:'博雅社区'},
        {img:'c_shujia',name:'数加资本'},
        {img:'c_tanxingzhe',name:'探星者联盟'},
        {img:'c_zhongshun',name:'中舜资本'},
        {img:'c_king',name:'KING'},
        {img:'c_xinghui',name:'星辉社区'},
        {img:'c_ruoxin',name:'若昕－专属节点'},
        {img:'c_qianchouqin',name:'乾酬勤小组'},
        {img:'c_yaoyang',name:'耀阳社区'},
        {img:'c_lingyun',name:'凌云社区'},
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
      this.languageName = lang;
    }
  }
};
</script>

<style scoped>
.node_wrap {
  color: #454e5e;
  font-size: 14px;
}
.node_wrap .banner img {
  width: 100%;
}
.node_wrap .content_text {
  padding-top: 54px;
  line-height: 30px;
}
.node_wrap ul.c_wrap {
  padding-top: 54px;
}
.node_wrap ul.c_wrap p {
  padding-top: 1rem;
  padding-bottom: 2.4rem;
  font-size: 13px;
  white-space: nowrap;
}
.node_wrap ul.c_wrap li img {
  width: 100%;
  box-shadow: 1px 2px 6px 6px rgba(72, 140, 255, 0.1);
  border-radius: 4px;
}
.profit_wrap {
  background: #f3f8ff;
  padding-bottom: 60px;
}
.profit_wrap ul{
  margin-top:60px;
}
.node_title {
  text-align: center;
  color: #393f4b;
  font-size: 20px;
  line-height: 30px;
  padding-top: 80px;
}
.profit_wrap li {
  display: flex;
}
.profit_wrap li .wrapper{
  text-align: center;
   padding: 3.4rem 0;
  background: #fff;
  margin-bottom: 3rem;
}
.profit_wrap li h6{
  line-height: 4rem;
  font-weight: normal;
}
.profit_wrap li img{
  max-width: 20%;
}
.profit_wrap li p{
  text-align: left;
  padding: 0 2rem;
  font-size: 13px;
  line-height: 22px;
}
.company_wrap{
  position: relative;
}
.company_wrap::before{
  position: absolute;
  content:'';
  left: 0;
  z-index: 2;
  top: 20%;
  width: 53px;
  height: 123px;
  background: url(../assets/images/node/bj_cover_left.png);
  background-size: 100% 100%;
}
.company_wrap::after{
  position: absolute;
  content:'';
  right: 0;
  z-index: 2;
  bottom: 10%;
  width: 53px;
  height: 123px;
  background: url(../assets/images/node/bj_cover_right.png);
  background-size: 100% 100%;
}
.company_wrap img{
  /* box-shadow: 0 0 2px 2px rgba(232, 227, 227, 0.2) */
}
.company_wrap .section{
  padding: 2rem 0;
}
</style>

