<template>
    <div id="schedule">
        <div class="top">
            <div class="title">当前进度</div>
            <div class="tips">您的借款即将到期,请尽快还款,2019-01-31到期</div>
        </div>
        <div class="content">
            <schedule-item></schedule-item>
            <schedule-item></schedule-item>
            <schedule-item></schedule-item>
            <schedule-item></schedule-item>
        </div>
    </div>
</template>
<script>
import ScheduleItem from '@/components/listdetail/schedule-item';
export default {
    name:"Schedule",
    data (){
        return {
            msg:"进度"
        }
    },
    components:{
        ScheduleItem
    }
}
</script>
<style scoped lang="scss">
    #schedule{
        width: 3.5rem;
        height: auto;
        min-height: 1rem;
        margin: 0 auto;
        background: #fff;
        box-sizing: border-box;
        padding: 0.15rem 0.135rem 0.3rem 0.135rem;
        .top{
            width: 100%;
            height: 0.15rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.15rem;
            .title{
                font-size:0.15rem;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(51,51,51,1);
            }
            .tips{
                width: 2.425rem;
                height: 0.12rem;
                font-size:0.12rem;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(246,55,119,1);
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap
            }
        }
        .content{
            position: relative;
        }
        .content:before{
            content: " ";
            background-color: #f3f3f3;
            display: block;
            position: absolute;
            top: 0;
            left: -0.02rem;
            width: 0.05rem;
            height: 0.04rem;
        }
    }
</style>

