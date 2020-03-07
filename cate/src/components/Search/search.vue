<template>
    <div class='index'>   
        <div class="input">
            <span class="iconfont">&#xe848;</span>
            <input type="text" placeholder="搜索你想吃的">
            <span class="sou">搜索</span>
        </div>
        
    </div>
</template>
<style lang="less" scoped>
    .index{
        .input{
            margin: auto;
            padding:.13rem 0;
            position: relative;
            height: .62rem;
            border-radius: 20px;
            font-size: 28rem;
            line-height: .62rem; 
            border-radius: 50px;
            width: 6.8rem;
            box-sizing: border-box;
            .iconfont{
                position: absolute;
                top:0.03rem;
                bottom: 0;
                font-size:.34rem ;
                z-index: 2;
                left:.3rem ;
            }
            input{
                border:0px;
                outline:none;
                width:6rem;
                position: absolute;
                left: 0;
                right: 0;
                top:0;
                bottom: 0;
                background: rgba(240,240,240,1);
                color: grey;
                padding-left:.8rem;
                font-size: .24rem;
                border-radius: 50px;
                margin: 0 .13rem;
             }
             .sou{
                position: absolute;
                right: -6px;
                top:0;
                bottom: 0;
                background:rgba(211,211,211,1) ;
                text-align: center;
                color: black;
                width:1.16rem;
                line-height:.36rem;
                border-bottom-right-radius: 30px;
                border-top-right-radius: 30px;
                font-size: .24rem;
                padding:.13rem 0;
                box-sizing: border-box;
             }
        }
    }
</style>