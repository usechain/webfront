<template>
    <div id="banner" :style="{'height':bannerH+'px'}">
        <ul>
            <li class="on">1</li>
            <li>2</li>
        </ul>
        <div id="banner_list" v-if="languageName==='ch'">
            <a href="/exchange" target="_blank" class="w-100 h-100"><img src="../assets/images/banner1.jpg" class="w-100 h-100" /></a>
            <a href="/announcement" target="_blank" class=" w-100 h-100"><img src="../assets/images/banner2.jpg" class="w-100 h-100"/></a>
        </div>
         <div id="banner_list" v-if="languageName==='en'">
            <a href="/exchange" target="_blank" class=" w-100 h-100"><img src="../assets/images/banner1_en.jpg" class="w-100 h-100" /></a>
            <a href="/announcement" target="_blank" class="w-100 h-100"><img src="../assets/images/banner2_en.jpg" class="w-100 h-100"/></a>
        </div>
    </div>
</template>

<script>
import $ from "jquery";

export default {
  props:['languageName'], 

  data(){
    return {
      bannerH:'',
    }
  },
  mounted() {
    var bannerW=$('#banner').width();
    this.bannerH = parseInt(bannerW*9/20);

    var t=0;
    var n=0;
    var count='';

    count = $("#banner_list a").length;

    $("#banner_list a:not(:first-child)").hide();

    $("#banner li").click(function() {
      var i = $(this).text() - 1; //获取Li元素内的值，即1，2，3，4
      n = i;
      if (i >= count) return;

      $("#banner_list a")
        .filter(":visible")
        .fadeOut(500)
        .parent()
        .children()
        .eq(i)
        .fadeIn(1000);

      document.getElementById("banner").style.background = "";

      $(this).toggleClass("on");

      $(this)
        .siblings()
        .removeAttr("class");
    });

    t = setInterval(function(){
        n = n >= count - 1 ? 0 : ++n;
        $("#banner li")
            .eq(n)
            .trigger("click");
    }, 4000);

    $("#banner").hover(
      function() {
        clearInterval(t);
      },
      function() {
        t = setInterval(function(){
            n = n >= count - 1 ? 0 : ++n;
            $("#banner li")
                .eq(n)
                .trigger("click");
        }, 4000);
      }
    );

  }
};
</script>

<style scoped>
#banner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

#banner_list img {
  border: 0px;
}

#banner ul {
  position: absolute;
  list-style-type: none;
  filter: Alpha(Opacity=80);
  opacity: 0.8;
  z-index: 1002;
  margin: 0;
  padding: 0;
  bottom: 3px;
  right: 5px;
}

#banner ul li {
  padding: 0px 8px;
  float: left;
  display: block;
  color: #fff;
  background: #2f68af;
  cursor: pointer;
  border: 1px solid #333;
}

#banner ul li.on {
  background-color: #000;
}

#banner_list a {
  position: absolute;
}
</style>
