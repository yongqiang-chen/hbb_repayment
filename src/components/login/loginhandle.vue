<template>
  <div id="login-handle">
    <div class="container">
      <div class="form">
        <i>
          <img src="@/assets/phone.png" alt="">
        </i>
        <input type="text" class="phone" placeholder="请输入注册手机号" v-model="phone" oninput="if(value.length>11)value=value.slice(0,11)" @blur="checkhandle">
      </div>
      <div class="button gray" v-if="!show">下一步</div>
      <div class="button pink" v-if="show" @click="provinghandle">下一步</div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'LoginHandle',
  data () {
    return {
      phone: "",
      show: false
    }
  },
  methods: {
    checkhandle(){
      const that = this;
      if (that.phone == "" || !that.phone ) {
            Toast('请输入电话号码');
            that.show = false;
        } else if (!(/^1[34578]\d{9}$/.test(that.phone))) {
          Toast('电话号码格式错误');
          that.show = false;
        } else{
          that.show = true;
        }
    },
    provinghandle(){
      this.$axios.post("http://47.102.119.238:8080/borrowUser/loginOne?userPhone=" + this.phone).then((res)=>{
        if(res.status == '200'){
          const data = res.data;
          // console.log(data)
          if(data.code == '0'){
            const result = data.result;
            localStorage.setItem("phone", result.userPhone);
            if(result.code == '0'){
              // Toast('手机号码不存在，进行注册操作');
              this.$router.push("/register");
            }
            if(result.code == '1'){
              // Toast('手机号码存在，进行登录操作');
              this.$router.push("/inputpassword");
            }
          }else{
            Toast(data.message);
          }
        }else{
          Toast(res.statusText);
        }
      })
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
        border-radius:0.04rem;
        margin-top: 0.43rem;
        font-size: 0.16rem;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height: 0.4rem;
      }
      .gray{
        background:rgba(204,204,204,1);
      }
      .pink{
        background:linear-gradient(-90deg,rgba(246,54,118,1),rgba(241,80,132,1));
      }
    }
  }
</style>