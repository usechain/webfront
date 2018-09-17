<template>
    <div class="fix_bottom position-fixed">
      <a class="d-block tabimg">
        <img src="../assets/images/plane.png" class="planeimg"/>
      </a> 
      <transition name="fade">
        <div v-show="tabShow" id="tabContent">
            <a class="telegramTab" :href="item.link" target="_blank" v-for="(item,index) in telegramList" :key="index" v-html="item.tab"></a>
        </div>
      </transition>
    </div> 
</template>

<script>
import $ from 'jquery';

export default {
    data(){
        return{
            telegramList:[
                {tab:'中文',link:'https://t.me/usechain2'},
                {tab:'English',link:'https://t.me/usechaingroup'},
                {tab:'Channel',link:'https://t.me/usechain'},
            ],
            tabShow:false
        }
    },
    mounted(){
        var _this=this;
        $(document).click(function(e){
            _this.tabShow=e.target.className==='planeimg'?true:false;
        });
    }
}
</script>

<style>
.fix_bottom {
    right: 1rem;
    bottom: 1rem;
    z-index: 99;
    width: 8rem;
    height: 6rem;
}
.tabimg{
    width: 3rem;
    height: 3rem;
    margin-top: 1.4rem;
    float: right;
    cursor: pointer;
}
.tabimg img{
    width: 100%;
    height: 100%;
}
#tabContent{
    width: 5rem;
    float: left;
}
.telegramTab{
    font-size: .9rem;
    background: #3082ec;
    color: #fff;
    text-align: center;
    display: block;
    width: 4.6rem;
    height: 1.8rem;   
    line-height: 1.8rem; 
    margin-bottom: .2rem;
    border-radius: .4rem;
}
.telegramTab:hover{
    color: #fff;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

