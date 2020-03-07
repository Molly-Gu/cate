<template>
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for='(item,index) in 3' :key='index'>{{item}}</div>
               
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper';
    export default{
    methods:{
        initBs(){
            var mySwiper = new Swiper ('.swiper-container', {
           // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项 
            // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            }
        })        
        }
    },
    mounted(){
        this.$nextTick(()=>{
             this.initBs()
        })
    }
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
        background: red;
    }
   }
</style>