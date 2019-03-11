<template>
  <div id="payhandle">
     <p class="mb48 ft28">支付金额</p>
     <p class="mb94 ft70">￥1.00</p>
     <div class="descbox">
        <div class="key ft28">银行卡</div>
        <div class="value ft28">兴业银行（3211）</div>
     </div>
     <div class="descbox">
        <div class="key ft28">预留手机号</div>
        <div class="value ft28">184****3024</div>
     </div>
     <div class="validate">
         <span>短信验证码</span>
         <input type="text">
         <div class="remark">
            <div class="remark-btn pink" v-show="show" @click="getCode">点击获取</div>
            <div class="remark-btn gray" v-show="!show" >{{count}} s</div>
          </div>
     </div>
     <div class="btn mt60">确认支付</div>
  </div>
</template>

<script>
export default {
  name: 'PayHandle',
  data () {
    return {
      show: true,
      count: '',
      timer: null,
    }
  },
  methods:{
      getCode(){
        const TIME_COUNT = 60;
        if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--;
                } else {
                this.show = true;
                clearInterval(this.timer);
                this.timer = null;
                }
            }, 1000)
        }
      }  
  },
  components:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #payhandle{
      width: 3.5rem;
      height: auto;
      margin: 0 auto;
      margin-top: 0.11rem;
      background: #fff;
      padding: 0.35rem 0.13rem 0.43rem 0.14rem;
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
            width: 100%;
            height: 0.49rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            border-top: 1px solid rgba(238,238,238,1);
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
        .validate{
            width: 100%;
            height: 0.49rem;
            border-top: 1px solid rgba(238,238,238,1);
            border-bottom: 1px solid rgba(238,238,238,1);
            display: flex;
            align-items: center;
            justify-content: space-between;
            span{
                font-size:0.15rem;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(51,51,51,1);
            }
            input{
                border: none;
                width: 1.4rem;
                height: 0.28rem;
            }
            .remark{
                width: 0.79rem;
                height: 0.28rem;
                .remark-btn{
                    width: 100%;
                    height: 100%;
                    font-size:0.12rem;
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    text-align: center;
                    line-height:0.26rem;
                    border-radius:0.02rem;
                }
                .pink{
                    background:linear-gradient(-90deg,rgba(246,54,118,1),rgba(241,80,132,1));
                }
                .gray{
                    background:rgba(204,204,204,1);
                }
            }
        }
  }
</style>
