<template>
    <div id="navbar">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">我的订单</mt-tab-item>
            <mt-tab-item id="2">已关闭订单</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <item v-for="n in 3" :key="n"></item>
               
                
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <item v-for="n in 5" :key="n"></item>
            </mt-tab-container-item>
        </mt-tab-container>
        
    </div>
</template>
<script>
import Item from '@/components/lists/item';
export default {
    name: 'Navbar',
    data () {
        return {
            selected:'1'
        }
    },
    components:{
        Item
    }
}
</script>
<style  lang="scss">
    #navbar  .mint-tab-item-label{
                font-size:0.16rem;
                line-height: 1;
            }
    #navbar{
        margin: 0 0.13rem;
        background: #eee;
    }
    #navbar>.mint-navbar{
        margin-bottom: 0.08rem;
        width: 100%;
        height: 0.58rem;
        .mint-tab-item {
            padding: 0.2rem 0;
        }
        .mint-tab-item.is-selected {
            border-bottom: 3px solid rgba(250,66,109,1);
            color:rgba(250,66,109,1);
            margin-bottom: -0.015rem;
        }
    }
    
</style>


