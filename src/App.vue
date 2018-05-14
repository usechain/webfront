<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './assets/css/style.css'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

export default {
  name: 'App'
}
</script>

<style>
body,li,ul,ol,dt,dl,dd,input,p{margin:0;padding:0;}
div h1,div h2,div h3,div h4,div h5,div h6{margin:0;padding:0;}
#app{font-family:"冬青黑",arial,"微软雅黑","宋体";}
ol,ul{list-style:none;}
input,img{border:none;}
a{text-decoration:none;}
i{font-style:normal;}
</style>
