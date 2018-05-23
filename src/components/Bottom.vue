<template>
  <div class="bottom_wrapper py-5 wow slideInUp">
      <div class="container text-secondary">
        <div class="d-flex justify-content-center py-4">
            <div class="px-3" v-for="(item,index) in imgList" :key="index">
                <a :href="item.href" class="d-block socialCon"><img class="rounded-circle" :src='"../assets/images/"+item.img+".png"'/></a>
            </div>
        </div>
        <div v-text='$t("message.copyright")' class="text-center text_small">Copyrig</div>
        <div class="d-flex justify-content-center py-4 text_small text-center">
            <div class="px-3 px-md-5"><router-link to="/clausedetail0" v-text="$t('message.userteams')">Terms of User</router-link></div>
            <div class="px-3 px-md-5"><router-link to="/clausedetail1" v-text="$t('message.privacy')">Privacy Policy</router-link></div>
            <div class="px-3 px-md-5"><router-link to="/clausedetail2" v-text="$t('message.tokenagreement')">Token Purchase Agreement</router-link></div>
        </div> 
        <a v-if="urlinfo" href="http://www.miitbeian.gov.cn" target="_blank" class="d-block text-center text_small">粤ICP备18037402号-1</a>
      </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from '../assets/js/lang';

Vue.use(VueI18n);

var i18n = new VueI18n({
  locale:  localStorage.local || "en",
  messages // set locale messages
});

export default {
  name: "Bottom",
  props:['languageName'],  
  i18n,
  data(){
      return{
          imgList:[
              {href:'https://twitter.com/usechain',img:'twitter'},
              {href:'https://www.facebook.com/UsechainFoundation/',img:'facebook'},
              {href:'https://t.me/usechaingroup',img:'Telegram'},
              {href:'https://medium.com/@usechain/',img:'medium'},
          ],
          urlinfo:false
      }
  },
  watch: {
    languageName: function (val) {
      this.$i18n.locale = val;   
    },
  },
  created(){
    var url=location.host.split('usechain.')[1];
    if(url==='cn' || url==='net.cn' || url==='com.cn' || url==='org.cn'){
        this.urlinfo=true;
        console.log('已备案')
    }else{
        console.log('非备案')
    }
  }
};
</script>

<style scoped>
.bottom_wrapper{
    background: #f5f5f5;
}
.bottom_wrapper p{
    font-size: .6rem;
    line-height: 1.2rem;
}
.bottom_wrapper img{
    width: 2.2rem;
}
.text_small{
    font-size: .8rem;
}
.socialCon:hover{
	animation: socialConRotate .4s ease;
}
@keyframes socialConRotate{
	0%{transform: rotate(0deg)}
	50%{transform: rotate(-20deg)}
	100%{transform: rotate(0deg)}
}
</style>
