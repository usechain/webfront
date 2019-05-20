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
                {title:'为什么各大交易所都要抢着做公链？ | 曹辉宁与他的教授朋友们 第6期（下）',href:'https://www.huoxing24.com/newsdetail/20190507145206428457',imgsrc:require("../assets/images/news/news90507.png")},
                {title:'Usechain NBA 猜胜负上线 区块链+体育竞猜解决万亿市场痛点',href:'https://www.jinse.com/blockchain/356173.html',imgsrc:require("../assets/images/news/news90426.png")},
                {title:'Usechain创始人曹辉宁出任三亚国际科技创新中心总负责人',href:'https://www.jinse.com/blockchain/352402.html',imgsrc:require("../assets/images/news/news0422.png")},
                {title:'初夏虎说他跟V神吵架了 | 曹辉宁与他的教授朋友们 第5期（下）',href:'https://www.jinse.com/blockchain/362332.html',imgsrc:require("../assets/images/news/news04222.png")},
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
