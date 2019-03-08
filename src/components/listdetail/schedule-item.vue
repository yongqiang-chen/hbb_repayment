<template>
    <div id="scheduleitem">
        <div class="container">
            <p class="data">2019-01-25-15:42:36</p>
            <p class="info pink">您的借款即将到期,请尽快还款,2019-01-31
前若未还款,将视为逾期,平台将收取逾期利息</p>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"ScheduleItem",
    data (){
        return {
            msg:"进度item"
        }
    },
    components:{

    }
}
</script>
<style scoped lang="scss">
    #scheduleitem{
        width: 3.035rem;
        height: auto;
        min-height: 0.42rem;
        border-left: 1px solid rgba(250,66,109,1);
        margin-bottom: -0.04rem;
        padding-bottom: 0.25rem;
        .container{
            width: 100%;
            margin-left: 0.18rem;
            margin-top: -0.25rem;
            .data{
                font-size: 0.09rem;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(128,128,128,1);
                margin-bottom: 0.06rem;
            }
            .info{
                font-size: 0.13rem;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height: 0.2rem;
            }
            .pink{
                color:rgba(250,66,109,1);
            }
        }
    }
    #scheduleitem:before{
        content: '';
        border: 0.03rem solid rgba(250,66,109,1);
        background-color: rgba(250,66,109,1);
        display: inline-block;
        width: 0.04rem;
        height: 0.04rem;
        border-radius: 0.04rem;
        margin-left: -0.05rem;
        margin-right: 0.08rem;
    }
    #scheduleitem:last-child{
        border: none;
    }
</style>

