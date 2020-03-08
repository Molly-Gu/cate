<template>
    <div class="footer">
        <ul>
            <router-link to='/shouye' tag="li" active-class="active">
                <span class="iconfont"> &#xe600;</span>
                <span>首页</span>
            </router-link>
            <router-link to='/type' tag="li" active-class="active">
                <span class="iconfont">&#xe6c6;</span>
                <span>分类</span>
            </router-link>
            <router-link to='communcity' tag="li" active-class="active">
                <span class="iconfont">&#xe67b;</span>
                <span>社区</span>
            </router-link>
            <router-link to='my' tag="li" active-class="active">
                <span class="iconfont">&#xe607;</span>
                <span>我的</span>
            </router-link>
        </ul>
    </div>
</template>
<style lang="less" scoped>
@import '../../../style/index.less';
   .footer{
       position: fixed;
       bottom:0;
       height: 1rem;
       ul{
           width: 100%;
           position:fixed;
           bottom: 0;
            li{
                float: left;
                text-align: center;
                width:24%;
                font-size:.24rem;
                color:rgba(204, 204, 204, 1);
                display: flex;
                flex-direction: column;
                justify-content:space-around
               .iconfont{               
                    font-size: .58rem;
                    color: red;
                }
                span{
                    line-height: .48rem;  
                }
            }
            .active{
                color:@theme;
            }
       }
   }

</style>
