<template>
    <div class="my">
        <h2>我的</h2>
        <div class="top">
            <ul>
                <li>
                    <img src="../../assets/logo.png" alt="">
                    <div class="middle">   
                        <div>   
                        <span class="name">昵称</span> 
                        <span class="level">LV3</span>
                        </div>
                        <span class="tel">4124124143</span> 
                    </div>
                    
                    <span class="iconfont">&#xe615;</span>  
                </li>
            </ul>
            <ol>
                <li>
                    <span class="iconfont">&#xe628;</span>
                    <span>我的发布</span>
                    <span class=iconfont>&#xe615;</span>
                </li>
                <li>
                    <span class="iconfont">&#xe637;</span>
                    <span>我的收藏</span>
                <span class=iconfont>&#xe615;</span>
                </li>
                <li>
                    <span class="iconfont">&#xe630;</span>
                    <span>我的关注</span>
                <span class=iconfont>&#xe615;</span>
                </li>
                <li>
                    <span class="iconfont">&#xe64c;</span>
                    <span>系统设置</span>
                <span class=iconfont>&#xe615;</span>
                </li>
                <li>
                    <span class="iconfont">&#xe606;</span>
                    <span>帮助中心</span>
                  <span class=iconfont>&#xe615;</span>  
                </li>
            </ol>
            <div class="quit">退出登录</div>
        </div>
    </div>
</template>
<script>
    
</script>
<style lang='less' scoped>
    .my{
        margin: 0 .3rem;
         h2{
            font-size: .36rem;
            font-weight: 600;
            margin-top:.22rem;
            margin-bottom: .32rem;
            line-height: .88rem;
            text-align: center;
        }
        ul{
            margin: .3rem 0 .5rem 0;
            display: flex;
            justify-content: space-around;   
            border-radius: 20px;
            background:linear-gradient(to right ,rgba(255,100,0,1),rgba(255,185,66));
            padding: .5rem .4rem;
            li {
                width: 6rem;
                height: 1rem;
                display: flex;
                .iconfont{
                    font-size: .4rem;
                    margin-left: 2.7rem;
                    line-height: 1rem;
                }
                img{
                    line-height: 1rem;
                    width: 1rem;
                    border-radius: 50%;
                    border: 1px solid white;
                    margin: 0;
                    padding: 0;
                }
                .middle{
                    display: flex;
                    flex-direction: column;
                    margin-left: .3rem;
                div{
                    display: flex;
                    
                    .level{
                        line-height: .35rem;
                        height:.4rem;
                        width: .82rem;
                        border-radius: .2rem;
                        background:white;
                        color: orange;
                        font-size:.18rem ;
                        text-align: center;
                        margin-left:.15rem ;
                    }
                    .name{
                        font-size: .32rem;
                        color: white;
                        width: .82rem;
                      
                    }
                }
               
                .tel{
                    color: white;
                    font-size: .26rem;
                    line-height: .5rem;
                }
            }
            
            }
        }
        ol{
            color:#222;
            display: flex;
            flex-direction: column;
            font-size: .3rem;
            margin-bottom: 1.3rem;
            li{
               
                line-height: 1rem;
                display: flex;
                span:nth-child(2){
                    margin:0 4.5rem 0 .3rem  ;
                }
            }
        }
        .quit{
                      margin: auto;
            line-height: .9rem;
            width: 4.5rem;
            border-radius: 20px;
            color: white;
            background:linear-gradient(to right ,rgba(255,100,0,1),rgba(255,185,66));
            text-align: center;
            font-size: .26rem;
        }
    }
</style>