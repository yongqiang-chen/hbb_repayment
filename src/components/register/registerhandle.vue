<template>
  <div id="registerhandle">
    <div class="container">
      <div class="form">
        <div class="label">
          <i>
            <img src="@/assets/proving.png" alt="">
          </i>
          <input type="text"  placeholder="请输入图形验证码">
          <div class="remark">
            <img src="@/assets/picture-code.png" alt="">
          </div>
        </div>
        <div class="label">
          <i>
            <img src="@/assets/code-img.png" alt="">
          </i>
          <input type="text"  placeholder="请输入验证码">
          <div class="remark">
            <div class="btn" v-show="show" @click="getCode">点击获取</div>
            <div class="btn" v-show="!show" >{{count}} s</div>
          </div>
        </div>
        <div class="label">
          <i>
            <img src="@/assets/password.png" alt="">
          </i>
          <input type="password"  placeholder="请设置6-20位字母加数字登录密码">
        </div>
      </div>
      <div class="button">下一步</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterHandle',
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #registerhandle{
    width: 100%;
    height: auto;
    .container{
      padding: 0 0.375rem;
      .form{
        .label{
          display: flex;
          align-items: center;
          margin-bottom: 0.24rem;
          position: relative;
          i{
            display: inline-block;
            width: 0.26rem;
            height: 0.26rem;
            img{
              width: 100%;
              height: 100%;
            }
          }
          input{
            margin-left: 0.025rem;
            padding-left: 0.05rem;
            flex: 1;
            height: 0.26rem;;
            border: none;
            border-bottom: 1px solid rgba(246,54,118,1);
            font-size: 0.14rem;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color:rgba(128,128,128,1);
            line-height: 0.26rem;
            letter-spacing:1px;
          }
          .remark{
            width: 0.63rem;
            height: 0.26rem;
            position: absolute;
            top: -1px;
            right: 0;
            img{
              width: 100%;
              height: 100%;
            }
            .btn{
              width: 100%;
              height: 100%;
              font-size:0.12rem;
              font-family:PingFangSC-Medium;
              font-weight:500;
              color:rgba(255,255,255,1);
              text-align: center;
              line-height:0.26rem;
              background:linear-gradient(-90deg,rgba(246,54,118,1),rgba(241,80,132,1));
              border-radius:0.02rem;
            }
          }
        }
      }
      .button{
        width: 100%;
        height:0.4rem;
        text-align: center;
        background:rgba(204,204,204,1);
        border-radius:0.04rem;
        margin-top: 0.43rem;
        font-size: 0.16rem;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height: 0.4rem;
      }
    }
  }
</style>