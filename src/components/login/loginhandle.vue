<template>
  <div id="login-handle">
    <div class="container">
      <div class="form">
        <i>
          <img src="@/assets/phone.png" alt="">
        </i>
        <input type="number" class="phone" placeholder="请输入注册手机号">
      </div>
      <div class="button">下一步</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginHandle',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #login-handle{
    width: 100%;
    height: auto;
    .container{
      padding: 0 0.375rem;
      .form{
        display: flex;
        align-items: center;
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