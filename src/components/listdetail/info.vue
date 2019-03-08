<template>
  <div id="info">
    <div class="top">
      <div class="data">2019-01-25 15:34:40</div>
      <div class="state">待还款</div>
    </div>
    <div class="center">
      <p class="ft28">借款金额</p>
      <p class="ft70">￥1500</p>
    </div>
    <div class="bottom">
      <div class="outerbox">
        <div class="ft26">实际到账：<span>1430</span>元</div>
        <div class="ft26">综合服务费：<span>70</span>元</div>
      </div>
      <div class="outerbox">
        <div class="ft30">到账银行</div>
        <div class="ft30">兴业银行（****5111)</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      msg: '订单详情信息块'
    }
  },
  components:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #info{
      margin: 0.06rem auto;
      width: 3.5rem;
      height: 2.22rem;
      background: #fff;
      box-sizing: border-box;
      padding: 0.135rem 0.135rem 0.2rem 0.135rem;
      .top{
        width: 100%;
        height: 0.15rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .data{
          font-size:0.14rem;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:rgba(51,51,51,1);
        }
        .state{
          font-size:0.15rem;
          font-family:PingFangSC-Medium;
          font-weight:500;
          color:rgba(246,55,119,1);
        }
      }
      .center{
        width: 100%;
        height: 1.1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .ft28{
          font-size:0.14rem;
          font-family:PingFangSC-Medium;
          font-weight:500;
          color:rgba(51,51,51,1);
          margin-bottom: 0.11rem;
          letter-spacing: 1px;
        }
        .ft70{
          font-size:0.35rem;
          font-family:PingFangSC-Medium;
          font-weight:500;
          color:rgba(246,55,119,1);
        }
      }
      .bottom{
        width: 100%;
        height: 0.63rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .outerbox{
          display: flex;
          justify-content: space-between;
          .ft26{
            font-size:0.13rem;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(51,51,51,1);
          }
          .ft30{
            font-size:0.15rem;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(128,128,128,1);
          }
        }
      }
  }
</style>
