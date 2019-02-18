<template>
    <div id="banner">
        <div class="shutter">
            <div class="shutter-img">
                <a v-for="(item,index) in bannerList" :key="index" target="_blank"
                    :data-shutter-title="item.title" :href="item.href" >
                    <img :src='item.imgsrc' :alt="item.title">
                </a>
            </div>
            <ul class="shutter-btn">
                <li class="prev"></li>
                <li class="next"></li>
            </ul>
            <div class="shutter-desc">
                <p>{{bannerList[0].title}}</p>
                <router-link to="/news">更多新闻>></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import 'jquery';
import 'velocity-animate/velocity.js';
import 'velocity-animate/velocity.ui.js';
import '../assets/js/shutter.js';

export default {
    props:['languageName'], 
    data(){
        return{
            bannerList:[
                {title:'Usechain曹辉宁谈币的底线：不能实用的加密货币99%都会死掉 | 区块链大师课',href:'https://www.jinse.com/bitcoin/284189.html',imgsrc:require("../assets/images/news1204.jpg")},
                {title:'科创板与STO会带来什么机遇？| 区块链三人行专访长江商学院曹辉宁',href:'https://www.jinse.com/bitcoin/284409.html',imgsrc:require("../assets/images/news12042.jpg")},
                {title:'2018最后一个月的市场行情：主流币更主流 山寨币更山寨',href:'http://8btc.com/thread-258646-1-1.html',imgsrc:require("../assets/images/news1210.jpg")},
                {title:'USE/USDT上线KuCoin',href:'https://i.bishijie.com/detail/193706',imgsrc:require("../assets/images/news1219.jpg")},
                {title:'数字货币打赏小费：纽约中餐厅感恩节开启USE支付通道区块链+商业银行全剖析 | 曹辉宁教授X胡捷教授直播文字实录（上）',href:'https://www.odaily.com/post/5135653',imgsrc:require("../assets/images/news90116.jpg")},
            ]}
    },
    mounted(){
        var bannerW=$('#banner').width();
        var bannerH = parseInt(bannerW*9/20);
        
        $('.shutter').shutter({
            shutterW:'100%', // 容器宽度
            shutterH: bannerH, // 容器高度
            isAutoPlay: false, // 是否自动播放
            playInterval: 4000, // 自动播放时间
            curDisplay: 0, // 当前显示页
            fullPage: false // 是否全屏展示
        });
    }
}
</script>

<style scoped>
.shutter {
	overflow:hidden;
	width:100%;
	height:100%;
	position:relative;
	margin:0 auto;
}
.shutter-img {
	z-index:1
}
.shutter-img,.shutter-img a {
	position:absolute;
	left:0;
	top:0;
	width:100%;
	height:100%;
}
.shutter-img a>img {
	width:100%;
	height:100%
}
.shutter-img .created {
	overflow:hidden;
	position:absolute;
	z-index:20
}
.shutter-btn {
    opacity: 0;
}
.shutter:hover .shutter-btn{
    opacity: 1;
}
.shutter-btn li {
	position:absolute;
	z-index:2;
	top:50%;
	width:49px;
	height:49px;
	margin-top:-25px;
	cursor:pointer
}
.shutter-btn li.prev {
	left:20px;
	background:url(../assets/images/shutter_prevBtn.png) no-repeat 0 -49px
}
.shutter-btn li.next {
	right:20px;
	background:url(../assets/images/shutter_nextBtn.png) no-repeat 0 -49px
}
.shutter-desc {
    padding: 0 10px;
	position:absolute;
	z-index:2;
	left:0;
	bottom:0;
	width:100%;
	height:36px;
    line-height: 36px;
    background:url(../assets/images/shutter_shadow.png) repeat;
}
.shutter-desc p{
    font-size: 15px;
    color: #fff;
    float: left;
    width: calc(100% - 80px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.shutter-desc a{
    color: #fff;
    font-size: 13px;
    float: right;
    display: block;
    width: 80px;
    text-align: right;
}
</style>
