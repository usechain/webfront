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
                {title:'数字货币打赏小费：纽约中餐厅感恩节开启USE支付通道',href:'https://www.huoxing24.com/newsdetail/20181122110900813373',imgsrc:require("../assets/images/news1122.jpg")},
                {title:'区块链嫁接实体经济Usechain旗下iBlock Labs携众大咖开讲',href:'http://www.huoxing24.com/newsdetail/20181106114347530764.html?from=groupmessage',imgsrc:require("../assets/images/news1106.jpg")},
                {title:'金融合规区块链Usechain亮相2018北京国际金博会',href:'https://blog.csdn.net/qadnmcrfxcn6c6h6661/article/details/83663169',imgsrc:require("../assets/images/news11022.jpg")},
                {title:'金融合规区块链Usechain亮相2018北京国际金博会',href:'https://www.prnasia.com/story/227948-1.shtml',imgsrc:require("../assets/images/news1102.jpg")},
                {title:'Usechain受邀参加韩国区块链世博会，开启3GO战略全球征程',href:'https://www.einpresswire.com/article/466283621/usechain-at-2018-korea-blockchain-expo-to-start-the-3go-program?r=paadAviktRxzidD_Qu',imgsrc:require("../assets/images/news1024.jpg")},
                {title:'STO的未来：Usechain创始人引领群雄论辩火星区块链纽约峰会',href:'http://www.huoxing24.com/newsdetail/20181019232525959840.html',imgsrc:require("../assets/images/news1019.jpg")},
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
