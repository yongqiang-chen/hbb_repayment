<template>
  <div id="retrievesuccess">
    <div class="container">
        <div id="header">
            <div class="header-content">
                <div class="back" @click="back">
                    <img src="@/assets/back-white.png" alt="">
                </div>
                <div class="title">{{title}}</div>
            </div>
        </div>
    </div>
    <p>设置登录密码成功！</p>
    <div class="confirm">确定</div>
  </div>
</template>

<script>

export default {
  name: 'RetrieveSuccess',
  data () {
    return {
      title: '设置密码',
      
    }
  },
  components:{
    
  },
  methods: {
    back(){
        if (window.history.length <= 1) {
            this.$router.push({path:'/'})
            return false
        } else {
            this.$router.go(-1)
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #retrievesuccess{
        .container{
            width: 100%;
            height: 2.785rem;
            background: url('../assets/设置成功.png') no-repeat;
            background-size: 100% 100%;
            #header{
                .header-content{
                    width: 100%;
                    height: 0.48rem;
                    position: relative;
                    .back{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 0.48rem;
                        height: 0.48rem;
                        padding: 0.16rem 0.16rem;
                        img{
                        width: 0.16rem;
                        height: 0.16rem;
                        }
                    }
                    .title{
                        text-align: center;
                        font-size: 0.16rem;
                        line-height: 0.48rem;
                        font-family:PingFangSC-Medium;
                        font-weight:500;
                        color:rgba(255,255,255,1);
                        letter-spacing: 1px;
                    }
                }
            }
        }
        p{
            text-align: center;
            margin-top: 0.12rem;
            font-size: 0.14rem;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(128,128,128,1);
            line-height: 0.225rem;
        }
        .confirm{
            width: 3.35rem;
            height: 0.4rem;
            margin: 0.27rem auto;
            background: linear-gradient(-90deg,rgba(246,54,118,1),rgba(241,80,132,1));
            border-radius: 0.05rem;
            text-align: center;
            line-height: 0.4rem;
            font-size: 0.16rem;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(255,255,255,1);
            letter-spacing: 1px;
        }
     
  }
</style>
