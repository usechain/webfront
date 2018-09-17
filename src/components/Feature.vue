<template>
  <div class="section section_feature text-center section_bottom">
    <!-- 仅PC展示效果 -->
    <div class="d-none d-lg-block">
      <div class="row">
        <div class="col-3" v-for="(item,index) in featureList" :key="index">
          <div class="wrapper text-center active">
            <div class="num" v-text='"0"+item'></div>
            <div class="img_wrap">
                <img :src='"../assets/images/feature"+item+".png"'/>                
            </div>
            <p v-text='$t("message.feature"+item)'></p>
          </div>
        </div>
      </div>
    </div>
    <!-- 除PC，滑动切换 -->
    <div class="d-lg-none">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) in featureList" :key="index">
            <div class="wrapper text-center active">
              <div class="num" v-text='"0"+item'></div>
              <div class="img_wrap">
                  <img :src='"../assets/images/feature"+item+".png"'/>                
              </div>
              <p v-text='$t("message.feature"+item)'></p>
            </div>
        </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</div>  
</template>

<script>
import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "../assets/js/lang";

Vue.use(VueI18n);

var i18n = new VueI18n({
  locale: localStorage.local || "en",
  messages // set locale messages
});

export default {
  name: "Feature",
  props: ["languageName"],
  i18n,
  data() {
    return {
      featureList: [1, 2, 3, 4],
      swiperOption: {
        slidesPerView: 4,
        
        breakpoints: {//当宽度小于等于
          576: { slidesPerView: 1, },
          768: { slidesPerView: 2, },
          992: { slidesPerView: 3, }
        },
        slideToClickedSlide: true,
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
      }
    };
  },
  watch: {
    languageName: function(val) {
      this.$i18n.locale = val;
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style scoped>
.section_feature {
  overflow: hidden;
}
.section_feature .active.wrapper {
  width: 100%;  
}
.swiper-container-horizontal > .swiper-pagination-bullets{
  width: 100%;
}
@media screen and (max-width: 992px) {
  .swiper-container-horizontal > .swiper-pagination-bullets{
    width: 100%;
    bottom:3rem;
  }
}
@media screen and (max-width: 769px) {
  .swiper-container-horizontal > .swiper-pagination-bullets{
    width: 50%;
    bottom: 3rem;
  }
}
@media screen and (max-width: 576px) {
  .section_feature .wrapper {
    width: 70%;
    margin: 0 auto;
    padding: 3rem 0 1rem;
  }
  .section_feature .active.wrapper {
    box-shadow: 10px 16px 20px 10px #ececec;
    padding: 1rem 0 3rem;
    width: 84%;
    border-radius: 2rem;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets{
    width: 100%;
    bottom: 8rem;
  }
  .section_bottom{
    padding-bottom: 0;
  }
}
.section_feature div.active .num {
  font-size: 1.6rem;
  line-height: 6rem;
}
.section_feature .num {
  color: #c6c6c6;
  font-size: 1.4rem;
  line-height: 2rem;
}
.section_feature .img_wrap {
  height: 10rem;
  line-height: 10rem;
}
.section_feature .img_wrap img {
  width: 34%;
  height: auto;
  vertical-align: middle;
}
.section_feature p {
  color: #494949;
  line-height: 1.6rem;
  padding: 2rem 0;
}
.section_feature .wrapper:hover img {
  animation: featureImg 0.4s ease;
}
.section_feature .wrapper:hover .num {
  animation: featureP 0.4s ease;
}
.section_feature .wrapper:hover p {
  animation: featureP 0.4s ease;
}
@keyframes featureImg {
  50% {
    transform: scale(1.1);
  }
}
@keyframes featureP {
  50% {
    opacity: 0.8;
  }
}
.swiper-slide{
  margin-bottom: 6rem
}
</style>

