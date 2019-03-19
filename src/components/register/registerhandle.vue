<template>
  <div id="registerhandle">
    <div class="container">
      <div class="form">
        <div class="label">
          <i>
            <img src="@/assets/proving.png" alt="">
          </i>
          <input type="text"  placeholder="请输入图形验证码" v-model.trim="captcha" @blur="passhandle">
          <div class="remark" @click="getcaptcha">
            <img :src="this.imgUrl" alt="">
          </div>
        </div>
        <div class="label">
          <i>
            <img src="@/assets/code-img.png" alt="">
          </i>
          <input type="text" :disabled="this.smsdisabled" placeholder="请输入验证码" v-model.trim="smscaptcha" @blur="decideNextStep">
          <div class="remark">
            <div class="btn gray" v-if="pass">点击获取</div>
            <div class="btn pink" v-else v-show="show" @click="getCode">点击获取</div>
            <div class="btn gray" v-show="!show" >{{count}} s</div>
          </div>
        </div>
        <div class="label">
          <i>
            <img src="@/assets/password.png" alt="">
          </i>
          <input type="password"  placeholder="请设置6-20位字母加数字登录密码" v-model.trim="password" @blur="inputpasswordhandle">
        </div>
      </div>
      <div class="button gray" v-if="disabled">下一步</div>
      <div class="button pink" v-else @click="registeredHandle">下一步</div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'RegisterHandle',
  data () {
    return {
        imgUrl: '',
        captcha: '',
        smscaptcha: '',
        password: '',
        pass: true,
        show: true,
        smsdisabled: true,
        count: '',
        timer: null,
        disabled: true
    }
  },
  props:["phone"],
  methods:{
    // 获取图形验证码
    getcaptcha(){
      this.imgUrl = 'http://47.102.119.238:8080/app/captcha.svl?userPhone=' + this.phone + '&d=' + Math.random();
      this.captcha = '';
    },
    //判断是否输入验证码
    passhandle(){
      if (this.captcha == "" || !this.captcha ){
        Toast('请输入图形验证码');
      }else{
        this.pass = false;
      }
    },
    // 获取短信验证码
    getCode(){
        const that = this;
        this.$axios.post('http://47.102.119.238:8080/sms/app/getSmsCodeCaptcha?userPhone=' + this.phone + '&captcha=' + this.captcha)
        .then(function (res) {
          // console.log(res);
          if(res.status == 200){
            const data = res.data;
            if(data.code == "0"){
              const TIME_COUNT = 60;
              if (!that.timer) {
                that.count = TIME_COUNT;
                that.show = false;
                that.timer = setInterval(() => {
                  if (that.count > 0 && that.count <= TIME_COUNT) {
                    that.count--;
                    } else {
                    that.show = true;
                    clearInterval(that.timer);
                    that.timer = null;
                  }
                }, 1000)
              }
              that.smsdisabled = false;
            }else if(data.code == "-2"){
              Toast(data.message);
              // console.log("1")
            }else if(data.code == "-1"){
              Toast(data.message);
            }else{
              Toast("系统出错，请返回重试");
            }
          }else{
            Toast(res.statusText);
            // console.log("2")
          }
        }).catch(function (err) {
          Toast(err);
          // console.log("3");
          // console.log(err)
        });
    }, 
    //判断是否进入下一步
    decideNextStep(){
      if((/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(this.password)) && this.smscaptcha ){
        this.disabled = false;
      }else{
        this.disabled = true;
      }
    } ,
    //输入密码操作后的判断
    inputpasswordhandle(){
      if((/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(this.password))){
        this.decideNextStep();
      }else{
        Toast("格式不对，请输入6-20位带有字母和数字的密码")
      }
    },
    //注册
    registeredHandle(){
      this.$axios.post('http://47.102.119.238:8080/borrowUser/registered?userPhone=' + this.phone + '&userPassword=' + this.password + '&smsCode=' + this.smscaptcha)
        .then(function (res) {
          console.log(res)
          if(res.status == "200"){
            const data = res.data;
            if(data.code == '0'){
              console.log(data.message)
              Toast("注册成功，请下载花宝呗app");
              setTimeout(function(){
                window.location.href="http://pageinfo.yzyhuababy.com/borrowUser/goDown";
              },2000);
            }else{
              Toast(data.message);
              console.log(data.message)
            }
          }else{
            Toast(res.statusText);
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  },
  created: function(){
    this.getcaptcha()
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
              border-radius:0.02rem;
            }
          }
        }
      }
      .gray{
        background:rgba(204,204,204,1);
      }
      .pink{
        background:linear-gradient(-90deg,rgba(246,54,118,1),rgba(241,80,132,1));
      }
      .button{
        width: 100%;
        height:0.4rem;
        text-align: center;
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