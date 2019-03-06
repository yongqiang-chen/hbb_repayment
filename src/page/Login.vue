<template>
  <div id="login">
    <head-top :title="this.title"></head-top>
    <banner :text="this.text"></banner>
    <login-hand></login-hand>
    
  </div>
</template>

<script>
import HeadTop from '@/components/common/header';
import Banner from '@/components/common/banner';
import LoginHand from '@/components/login/loginhandle';
export default {
  name: 'Login',
  data () {
    return {
      title: '花宝呗',
      text:"登录 · 注册"
    }
  },
  components:{
    HeadTop,
    Banner,
    LoginHand
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
</style>
