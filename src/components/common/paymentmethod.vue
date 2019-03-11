<template>
    <div id="paymentmethod">
       <van-popup v-model="show"  position="bottom">
            <div class="model-content">
                <div class="top">
                    <div class="text">选择支付方式</div>
                    <div class="close" @click="closehandle">x</div>
                </div>
                <ul class="select">
                    <li>
                        <div class="left">
                            <i>
                                <img src="@/assets/bank-icon.png" alt="">
                            </i>
                            <span>银行卡快捷支付</span>
                        </div>
                        <div class="right">
                            <label>
                                <input type="radio" name="radio" value="bank">
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <i>
                                <img src="@/assets/weixin-icon.png" alt="">
                            </i>
                            <span>微信支付</span>
                        </div>
                        <div class="right">
                            <label>
                                <input type="radio" name="radio" value="weixin">
                            </label>
                        </div>
                    </li>
                </ul>
                <div class="pay-btn">
                    确认支付
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script>
export default {
    name: "PaymentMethod",
    data () {
        return {
           show: true
        }
    },
    methods:{
        closehandle(){
            this.show = false;
        }
    }
}
</script>
<style scoped lang="scss">
    #paymentmethod{
        .model-content{
          width: 100%;
          height: auto;
          padding: 0 0.2rem 0.52rem 0.2rem;
          .top{
              width: 100%;
              height: 0.55rem;
              border-bottom: 1px solid rgba(238,238,238,1);
              position: relative;
              .text{
                  width: 100%;
                  height: 100%;
                  text-align: center;
                  line-height: 0.55rem;
              }
              .close{
                  width: 0.55rem;
                  height: 0.55rem;
                  text-align: center;
                  line-height: 0.5rem;
                  position: absolute;
                  top: 0;
                  right: -0.18rem;
                  font-size: 0.23rem;
              }
          }
          .select{
              width: 100%;
              height: auto;
              li{
                  width: 100%;
                  height: 0.61rem;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  border-bottom: 1px solid rgba(238,238,238,1);
                  .left{
                      display: flex;
                      align-items: center;
                      i{
                          display: inline-block;
                          width: 0.25rem;
                          height: 0.25rem;
                          margin-right: 0.14rem;
                          img{
                              width: 100%;
                              height: 100%;
                          }
                      }
                      span{
                            font-size: 0.16rem;
                            font-family:PingFangSC-Medium;
                            font-weight:500;
                            color:rgba(51,51,51,1);
                      }
                  }
                  .right{
                      input{
                          width: 0.16rem;
                          height: 0.16rem;
                      }
                  }
              }
          }
          .pay-btn{
                width: 100%;
                height: 0.4rem;
                background:linear-gradient(-90deg,rgba(246,54,118,1),rgba(241,80,132,1));
                border-radius: 0.04rem;
                font-size:0.16rem;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(255,255,255,1);
                text-align: center;
                line-height: 0.4rem;
                letter-spacing: 1px;
                margin-top: 0.21rem;
           }
       }
    }
</style>

