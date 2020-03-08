<template>
    <div class="menu">
        <span @click="back" class="iconfont">&#xe63f;</span>menu
    </div>
   
</template>
<script>
    export default{
        methods: {
            back() {
                this.$router.go(-1)
            },
        },
    }
</script>
<style lang='less' scoped>
    .menu{
        z-index: 2;
        position: fixed;
        top:0;
        bottom: 1rem;
        left:0;
        right:0;
        background: white;
    }
</style>