<template>
    <div class="type">
        <h2>全部分类</h2>
        <div class="wrapper">
            <div class="content">
                <ul> 
                    <!-- <li v-for='(v,i) in 100' :key="i">
                        {{v}}
                    </li> -->
                    <li v-for="(item,index) in obj" :key='index'>
                        <h3>{{index}}</h3>
                        <ol>
                            <li v-for='(v,i) in item' :key="i">{{v}}</li>
                        </ol>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>
<script>
import {getFoodInfo} from '../api/api'
import BScroll from 'better-scroll'
export default{
    data(){
        return{
        obj:{},
        types:{//自己写的假数据
            '肉类':[
                "鸡肉",'鱼肉','鸭肉','羊肉','兔肉'
            ],
            '素菜':[
                '白菜','藕','青椒','土豆'
            ]
        }
        }  
    },
    methods:{
        initBS() {
            var wrapper=document.querySelector("wrapper")
            const scroll = new BScroll('.wrapper');
        },
    },
   created(){
         getFoodInfo()     
        .then((res)=>{
            let data=(res.data.list)
            for(var i =0;i<data.length;i++){
                let series=(data[i].series)
                //console.log(data[i].classify)
                if(!this.obj[series]){//not exist
                    this.obj[series]=[data[i].classify]
                }else{//exist
                    // console.log(obj[series])
                    if(this.obj[series].indexOf(data[i].classify)==-1){
                        this.obj[series].push(data[i].classify) 
                    }
                }
            }
            console.log(this.obj)
            })
            this.$nextTick(()=>{
                this.initBS()
            })
    }
    
}
</script>
<style lang='less' scoped>
 @import '~swiper/css/swiper.min.css';
    .type{
        background:white;
        margin: 0 .3rem;
        text-align: center;
        h2{
            font-size: .32rem;
            font-weight: 600;
            margin-top:.22rem;
            margin-bottom: .32rem;
            line-height: .88rem;
            height: .88rem;
        }
        .wrapper{
            position: fixed;
            top:1.42rem;
            bottom:1rem;
            left: 0;
            right: 0;
            background: red;
            overflow: hidden;
        ul{
            h3{
                font-size: .3rem;
                height: 1rem;
                line-height: 1rem;
            }
            ol{
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                align-items: center;
                li{
                   
                 //  margin-top:.28rem;
                    height:1.1rem;
                    width: 1.1rem;
                    border-radius: 50%;
                    border:1px solid rgb(210,210,210,1);    
                    line-height: 1.1rem;
                    text-align: center;
                    font-size: .26rem;
                    margin: 0.2rem;
                }
            }
        }
        }
    }
</style>