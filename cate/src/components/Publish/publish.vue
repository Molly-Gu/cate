<template>
    <div class="recommand">
        <h3>浓郁奶香</h3>
        
        <div class="imgs" v-for="(item,index) in imgs" :key="index">
            <img :src="item" alt="not found">
        </div>
    </div>
</template> 
<script>
    export default{
        data(){
            return{
                 imgs:['../../assets/a.png','../../assets/pic1.png','../../assets/pic2.png']
            }
        }
    }
</script>
<style lang="less" scoped>
    .recommand{
         margin-left: .3rem;
        h3{
            font-size: .28rem;
            line-height: .9rem;
        }
        .imgs{
            height: 2.1rem;
            width: 2.2rem;
            border-radius: 5px;
            display: inline-block;
            background: red;

        }

    }
</style>