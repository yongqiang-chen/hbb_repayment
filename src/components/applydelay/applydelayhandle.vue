<template>
    <div id="applydelayhandle">
        <p class="mb48 ft28">应付金额</p>
        <p class="mb94 ft70">￥1.00</p>
        <div class="descbox mb36">
            <div class="key ft28">延长期限</div>
            <div class="value ft28">7天</div>
        </div>
        <div class="descbox">
            <div class="key ft28">延长履约期服务费</div>
            <div class="value ft28">1.00元</div>
        </div>
        <div class="btn mt60">确认支付</div>
    </div>
</template>
<script>
export default {
    name: "ApplyDelayHandle",
    data () {
        return {
            
        }
    }
}
</script>
<style scoped lang="scss">
    #applydelayhandle{
        width: 3.5rem;
        height: auto;
        margin: 0 auto;
        margin-top: 0.1rem;
        padding: 0.41rem 0.14rem 0.46rem 0.14rem;
        background: #fff;
        border-radius: 0.04rem;
        p{
            text-align: center;
        }
        .ft28{
            font-size: 0.14rem;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(51,51,51,1);
        }
        .ft70{
            font-size: 0.35rem;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(246,55,119,1);
        }
        .mb36{
            margin-bottom: 0.18rem;
        }
        .mb48{
            margin-bottom: 0.24rem;
        }
        .mb94{
            margin-bottom: 0.47rem;
        }
        .mt60{
            margin-top: 0.3rem;
        }
        .descbox{
            display: flex;
            justify-content: space-between;
        }
        .btn{
            width: 100%;
            height: 0.4rem;
            text-align: center;
            line-height: 0.4rem;
            font-size: 0.16rem;
            letter-spacing: 1px;
            color:rgba(255,255,255,1);
            background:linear-gradient(-90deg,rgba(246,54,118,1),rgba(241,80,132,1));
            border-radius: 0.05rem;
        }
    }
</style>

