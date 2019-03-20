<template>
  <div id="inputpassword-handle">
    <div class="container">
      <div class="form">
        <i>
          <img src="@/assets/password.png" alt="">
        </i>
        <input type="password" class="password" placeholder="请输入登录密码" v-model.trim="password" @blur="switchhandle">
      </div>
      <div class="button gray" v-if="!show">登录</div>
      <div class="button pink" v-if="show" @click="loginrequesthandle">登录</div>
      <div class="forget">
          <router-link to="/forgetpassword">忘记密码？</router-link>
      </div>
      
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'LoginHandle',
  data () {
    return {
      password:'',
      show:false
    }
  },
  props:["phone"],
  methods:{
    switchhandle(){
      if (this.password == "" || !this.password ){
        Toast('请输入登录密码');
      }else{
        this.show = true;
      }
    },
    loginrequesthandle(){
       localStorage.setItem('token','');
       this.$axios.post("http://47.102.119.238:8080/borrowUser/login?userPhone="+ this.phone +"&userPassword="+ this.password).then((res)=>{
         console.log(res)
         if(res.status == '200'){
           const data = res.data;
           if(data.code == '0'){
             const result = data.result;
             localStorage.setItem('token',result.token);
             Toast("登录成功");
             setTimeout(()=>{
               this.checkBorrowHandle();
             },300);
           }else{
             Toast(data.message);
           }
         }else{
           Toast(res.statusText);
         }
       })
       this.password = '';
       this.show = false;
    },
    checkBorrowHandle(){
      const token = localStorage.getItem('token');
      console.log(token);
      // this.$axios({
      //   method: 'post',
      //   headers: {
      //     "Accept": "*/*",
      //     "token": token
      //   },
      //   url:'http://47.102.119.238:8080/borrowUser/checkBorrow'
      // }).then((res)=>{
      //   console.log(res)
      // }).catch(function(err){
      //   Toast(err);
      //   console.log(err);
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #inputpassword-handle{
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
      .forget{
            text-align: center;
            font-size: 0.14rem;
            font-family:PingFangSC-Regular;
            font-weight:400;
            line-height: 0.26rem;
            margin-top: 2rem;
            a{
                color:rgba(250,66,109,1);
            }
      }
    }
  }
</style>