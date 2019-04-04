<template>
    <div class="helpCenterWrap">
         <dl v-for="(i,index) in helpNav" :key="'help'+index" class="mt-3">
            <dt v-html="i.dt" class="px-2 my-1"></dt>
            <dd v-for="(j,num) in i.dd" :key="'dd'+num" class="mx-2 px-2">
            <router-link :to="j.link" v-html="j.title" class="text-secondary"></router-link>
            </dd>
        </dl>
    </div>
</template>

<script>
import Vue from "vue";

export default {
    name: "HelpCenter",  
    data(){
        return{
            helpNav:[
                {dt:'新手教程',
                 dd:[
                    {title:'如何创建钱包',link:'/createwallet'},
                    {title:'如何升级认证',link:'/upgrade'}
                    ]},
                {dt:'账户相关',
                 dd:[
                    {title:'什么是匿名地址',link:'/anonyaddress'},
                    {title:'什么是主地址',link:'/mainaddress'}
                    ]},
                {dt:'如何创建钱包',
                 dd:[
                    {title:'什么是信用等级',link:'/creditrating'}
                    ]},
            ]}
    } 
}
</script>

<style scoped>
.helpCenterWrap{
    max-width:500px;
    margin: 0 auto;
}
dt{
    background: #efefef;
    font-weight: bold;
    color: #333;
}
dd{
    color: #666;
    border-bottom: 1px solid #d2d2d2;
    font-size: 13px;
}
</style>

