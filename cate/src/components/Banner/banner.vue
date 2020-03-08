<template>
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for='(item,index) in imgs' :key='index'>
                    <img :src='item' alt="">
                </div>
               
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper';
    import {getFoodInfo} from '../api/api'
    export default{
    data(){
        return{
            imgs:[]
        }
    },
    methods:{
        initBs(){
            var mySwiper = new Swiper ('.swiper-container', {
           // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项 
            autoplay: {
                disableOnInteraction: false,
                delay: 2000
            },
            // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            }
        })        
        }
    },
    created(){
        getFoodInfo()
        .then((res)=>{
            let data=(res.data.list)
            data.map((val)=>{
                if(this.imgs.length<=2){
                    this.imgs.push(val.img)
                }
            })
        })
    },
    watch:{
        imgs(){
            this.$nextTick(()=>{
              this.initBs()
            })
        }
    },
    }
</script>
<style lang="less">
@import '~swiper/css/swiper.css';
   .banner{ 
         margin:.2rem 0;
   .swiper-container{
        margin: auto;
        width: 6.8rem;
        border: 20px;
        height: 3.2rem;
        img{
            height: 100%;
            width: 100%;
        }
    }
   }
</style>