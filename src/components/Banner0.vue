<template>
    <div id="banner">
        <div class="shutter"  v-show="languageName==='ch'">
            <div class="shutter-img">
                <router-link to="/exchange">
                    <img src="../assets/images/banner1.jpg" alt="#">
                </router-link>
                <router-link to="/announcement">
                    <img src="../assets/images/banner2.jpg" alt="#">
                </router-link>
            </div>
            <ul class="shutter-btn">
                <li class="prev"></li>
                <li class="next"></li>
            </ul>
        </div>
        <div class="shutter" v-show="languageName==='en'">
            <div class="shutter-img">
                <router-link to="/exchange">
                    <img src="../assets/images/banner1_en.jpg" alt="#">
                </router-link>
                <router-link to="/announcement">
                    <img src="../assets/images/banner2_en.jpg" alt="#">
                </router-link>
            </div>
            <ul class="shutter-btn">
                <li class="prev"></li>
                <li class="next"></li>
            </ul>
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

    mounted(){
        var bannerW=$('#banner').width();
        var bannerH = parseInt(bannerW*9/20);
        
        $('.shutter').shutter({
            shutterW:'100%', // 容器宽度
            shutterH: bannerH, // 容器高度
            isAutoPlay: true, // 是否自动播放
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
</style>
