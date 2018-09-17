<template>
  <div class="page_reach">
    <div class="back_top">
        <div class="container text-center">
            <div class="h2">Reach Us</div>
            <div class="justify-content-center">
                <div class="text-center row p-4 p-md-2">
                    <div class="col-6 col-sm-4 col-lg-3" v-for="(item,index) in contactList" :key="index">
                        <a :href="item.href" target="_blank" class="d-block w-100 cursor_pointer">
                            <img class="px-md-4 py-1 py-lg-3 wow flipInX" :data-wow-delay="'.'+index+'s'" :src='"../assets/images/"+item.img+".png"'/>
                        </a>
                        <p v-html="item.text" class="text-secondary"></p>
                    </div>
                </div>
            </div> 
            <!-- 客服二维码 -->
            <div class="service position-relative">
                <img src="../assets/images/service.png"/>
                <p class="text-secondary text-small py-3">Customer Service</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactList: [
        {
          img: "reach_logo",
          text:'Website',
          href: "http://www.usechain.net"
        },
        {  
          img: "reach_telegram",
          text:'Telegram',
          href:"https://t.me/usechaingroup"
        },
        {
          img: "reach_twitter",
          text:'Twitter', 
          href:"https://www.twitter.com/usechain"
        },
        {
          img: "reach_facebook",
          text:'Facebook',
          href:"https://www.facebook.com/UsechainFoundation"
        },
        {
          img: "reach_weibo",
          text:'Weibo',
          href:"https://weibo.com/usechain"
        },
        {
          img: "reach_wechat",
          text:'Wechat Publication',
          href:"https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzUzMDY0NDI0Nw==#wechat_redirect"
        },
        {
          img: "reach_bitcointalk",
          text:'Bitcointalk',
          href:"https://bitcointalk.org/index.php?topic=3432061.0"
        },
        {
          img: "reach_reddit",
          text:'Reddit',
          href:"https://www.reddit.com/user/Usechain/"
        },
      ]
    };
  }
};
</script>

<style scoped>
img{
    width: 8rem;
    margin-top: 2rem;
}
.h2{
    color:#4d86c6;
    padding-top: 5rem;
}
.back_top{
    width: 94vw;
    padding: 0 3vw;     
    min-height: 100vh; 
    margin: 0 auto;
}
.service{
    margin-top: 4rem;
    padding-bottom: 3rem;
}
.service img{
    width: 8rem;
    margin-top: 0;
}
p{
    line-height: 1rem;
    white-space: nowrap;
}
.service::after,.service::before{
    content: '';
    width: 6rem;
    height: 1px;
    background: #666;
    position: absolute;
    left: 50%;    
    top: 4rem;
}
.service::after{
    margin-left:-14rem; 
}
.service::before{
    margin-left:8rem; 
}
@media screen and (max-width: 576px) {
    .h2{
        padding-top: 3.4rem;
        font-size: 1.4rem;
    }
    .page_reach{
        background: url(../assets/images/reach_backbot.png) no-repeat bottom left;
        background-size: 80%;
    }
    .back_top{
        background: url(../assets/images/reach_backtop.png) no-repeat top right;  
        background-size: 80%;        
        width: 100vw;
        padding: 0;
    }   
    img{
        width: 3rem;
        margin-top: 0;
    }
    p{
        font-size: .9rem;
        padding-bottom: 1rem;
    }
    .service{
        margin-top: 1rem;
        padding-bottom: 2rem;
    }
    .service img{
        width: 5rem;
    }
    .service::after,.service::before{
        content: '';
        width: 4rem;
        height: 1px;
        background: #666;
        position: absolute;
        left: 50%;    
        top: 2.5rem;
    }
    .service::after{
        margin-left:-8rem; 
    }
    .service::before{
        margin-left:4rem; 
    }
}
</style>
