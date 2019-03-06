<template>
    <div id="banner">
        <div class="banner-content">
            <div class="logo">
                <img src="@/assets/logo.png" alt="">
            </div>
            <div class="text">
                {{this.text}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Banner',
    data(){
        return {}
    },
    props:["text"]
}
</script>
<style scoped lang="scss">
    #banner{
        width: 100%;
        height: 2.3rem;
        overflow: hidden;
        .banner-content{  
            margin: 0.345rem 0;
            width: 100%;
            height: 1.61rem;
            .logo{
                width: 1.35rem;
                height: 1.35rem;
                margin: 0 auto;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .text{
                width: 100%;
                height: 0.26rem;
                text-align: center;
                line-height: 0.26rem;
                font-size: 0.16rem;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(246,54,118,1);
            }
        }
    }
</style>


