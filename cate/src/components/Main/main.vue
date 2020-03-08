<template>
   <div class="main">
        <!-- <router-link tag='img' class="p1" to='/recommand' scr='../../assets/pic5.png'></router-link> -->
        <img @click="goRec" class="p1" src="../../assets/pic5.png" alt="">
        <img @click='goHealth' class="p2" src="../../assets/pic4.png" alt=" not found">
        <img  @click="goPick" class="p3" src="../../assets/pic3.png" alt=" not found">
        <img  @click='goMenu' class="p4" src="../../assets/pic2.png" alt=" not found">
        <img  @click='goFamily' class="p5" src="../../assets/pic1.png" alt=" not found"> 

        <transition
        enter-active-class="fadeInRight animated"
        leave-active-class="fadeOutRight animated"
        >
            <router-view></router-view>
        </transition>  
         
   </div>
</template>
<script>
export default{

    methods:{
        goRec(){
            this.$router.push('/shouye/recommand')
        },
        goHealth(){
            this.$router.push('/shouye/health')
        },
        goPick(){
            this.$router.push('/shouye/pick')
        },
        goFamily(){
            this.$router.push('/shouye/family')
        },
        goMenu(){
            this.$router.push('/shouye/menu')
        },


    }
}
</script>
<style lang='less' scoped>

    .main{
        margin: auto;
        margin-bottom: .3rem;
       .p1{
          height: 1.9rem;
          width: 3.35rem;
          margin-left: .3rem;
          margin-bottom: .16rem;
       }
       .p2{
           height: 1.9rem;
           width: 3.35rem;
           margin-left: .15rem;
           margin-bottom: .16rem;
       }
       .p3{
          margin-left: .3rem;
          height: 2.15rem;
          width: 2.15rem;
       }
       .p4,.p5{
           height: 2.15rem;
           width: 2.15rem;
           margin-left: .19rem;
       }
    }
</style>