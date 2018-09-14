<template>
    <div id="banner">
        <div class="shutter">
            <div class="shutter-img">
                <router-link v-for="(item,index) in bannerList" :key="index"
                    :data-shutter-title="item.title" :to="item.href" >
                    <img :src='item.imgsrc' :alt="item.title">
                </router-link>
            </div>
            <ul class="shutter-btn">
                <li class="prev"></li>
                <li class="next"></li>
            </ul>
            <div class="shutter-desc">
                <p>Usechain交锋美国CNBC名嘴，解析让杀手级应用落地的区块链体系</p>
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
                {title:'Usechain交锋美国CNBC名嘴，解析让杀手级应用落地的区块链体系',href:'http://www.huoxing24.com/newsdetail/20180911170526001978.html',imgsrc:require("../assets/images/news0911.jpg")},
                {title:'13岁读大学、如今50多岁的金融学教授欲借区块链颠覆华尔街',href:'http://www.huoxing24.com/newsdetail/20180907153015513905.html',imgsrc:require("../assets/images/news0907.jpg")},
                {title:'Usechain曹辉宁：区块链社区真正的践行者',href:'http://www.xinmeti.com/internet/99792.html',imgsrc:require("../assets/images/news0830.jpg")},
                {title:'时代广场惊现粉丝打Call Usechain：区块链社区精神真正的践行者',href:'http://www.prcfe.com/finance/2018/0830/305620.html',imgsrc:require("../assets/images/news08302.jpg")},
                {title:'曹辉宁：“区块链+”并不适用所有场景',href:'https://www.jinse.com/bitcoin/233789.html',imgsrc:require("../assets/images/news0828.jpg")},
            ]
        }
    },
    mounted(){
        var bannerW=$('#banner').width();
        var bannerH = parseInt(bannerW*9/20);
        
        $('.shutter').shutter({
            shutterW:'100%', // 容器宽度
            shutterH: bannerH, // 容器高度
            isAutoPlay: false, // 是否自动播放
            playInterval: 4000, // 自动播放时间
            curDisplay: 1, // 当前显示页
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
