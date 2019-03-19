<template>
  <div id="retrievepasswordhandle">
    <div class="container">
      <div class="form">
        <i>
          <img src="@/assets/password.png" alt="">
        </i>
        <input type="password"  placeholder="请设置6-20位字母加数字登录密码" v-model.trim="userPassword" @blur="decideNextStep">
      </div>
      <div class="button gray" v-if="disabled">下一步</div>
      <div class="button pink" v-else @click="getBackTwoHandle">下一步</div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'RetrievePasswordHandle',
  data () {
    return {
      userPassword: '',
      disabled: true
    }
  },
  props:["userPhone"],
  methods:{
    // 验证密码是否符合规范，判断是否进入下一步
    decideNextStep(){
      if (this.userPassword == "" || !this.userPassword ){
        Toast('请输入登录密码');
        this.disabled = true;
      }else if((/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(this.userPassword))){
        this.disabled = false;
      }else{
        Toast('请输入6-20位带有字母和数字的密码');
        this.disabled = true;
      }
    },
    // 找回密码第二步提交
    getBackTwoHandle(){
      this.$axios.post('http://47.102.119.238:8080/borrowUser/getBackTwo?userPhone='+ this.userPhone +'&userPassword='+ this.userPassword).then((res)=>{
        console.log(res);
        if(res.status == '200'){
          const data = res.data;
          if(data.code == '0'){
            console.log("修改成功");
            this.userPassword = '';
            localStorage.setItem("retrievePasswordPhone", '');
            this.$router.push("/retrievesuccess");
          }else if(data.code == "-2"){
              Toast(data.message);
              console.log(data.message);
            }else if(data.code == "-1"){
              Toast(data.message);
              console.log(data.message);
            }else{
              Toast("系统出错，请返回重试");
              console.log(data.message);
            }
        }else{
          Toast(res.statusText);
          console.log(res.statusText);
        }
      }).catch(function(err){
        Toast(err);
        console.log(err);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #retrievepasswordhandle{
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