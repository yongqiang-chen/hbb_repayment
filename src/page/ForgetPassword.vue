<template>
  <div id="forgetpassword">
    <head-top :title="this.title"></head-top>
    <banner :text="this.text"></banner>
    <forget-handle></forget-handle>
  </div>
</template>

<script>
import HeadTop from '@/components/common/header';
import Banner from '@/components/common/banner';
import ForgetHandle from '@/components/forgetpassword/forgetpasswordhandle';
export default {
  name: 'ForgetPassword',
  data () {
    return {
      title: '忘记密码',
      text:"18190568373"
    }
  },
  components:{
    HeadTop,
    Banner,
    ForgetHandle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
</style>
