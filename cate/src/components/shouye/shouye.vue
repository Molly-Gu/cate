<template>
    <div class='index'>
        <h2>每日美食</h2>
        <Search></Search>
        <Banner></Banner>
        <Main></Main>
        <!-- <Recommand></Recommand> -->
    </div>
</template>
<script>
    import Search from  '../Search/search.vue'
    import Banner from '../Banner/banner'
    import Main from '../Main/main'
    import Recommand from '../Recommand/recommand'
    export default{
        components:{ Search,Banner,Main,Recommand }
    }
</script>

<style lang="less" scoped>
@import '../../../style/index.less';
    .index{
        height: 100px;
        width: 100px;
        background: red;
    h2{
        text-align: center;
        font-size: .32rem;
        font-weight: 600;
        margin-top:.22rem;
        margin-bottom: .32rem;
        }
    }
  
</style>