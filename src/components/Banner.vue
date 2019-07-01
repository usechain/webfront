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
                {title:'曹辉宁喊话腾讯阿里：要迎头赶上区块链浪潮，抢占海外市场',href:'https://www.aicoin.net.cn/article/75788.html',imgsrc:require("../assets/images/news/news90628.png")},
                {title:'Libra面世，曹辉宁与HBUS傅圣芳怎么看？| 教授有约',href:'https://mp.weixin.qq.com/s/jQ6VZDDufM1Pm7uv_rflOQ',imgsrc:require("../assets/images/news/news90624.png")},
                {title:'Usechain发布主网（Beta）正式上线公告 这些功能值得关注',href:'https://www.jinse.com/blockchain/391337.html',imgsrc:require("../assets/images/news/news90618.png")},
                {title:'抢先体验！Usechain3分钟涨跌游戏「时时猜」玩出新花样',href:'https://www.jinse.com/blockchain/388357.html',imgsrc:require("../assets/images/news/news906132.png")},
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
