<template>
  <div id="app">
     <router-view></router-view>
      <Footer></Footer>
  </div>
</template>
<script>
  import Footer from './components/Footer/footer'
  export default {
    components:{ Footer}
  }
</script>    
<style lang="less" scoped>
@import '../style/index.less';
#app{
 
  width: 100%;
}

</style>
