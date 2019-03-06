<template>
  <div id="register">
    <head-top :title="this.title"></head-top>
    <banner :text="this.text"></banner>
    <register-handle></register-handle>
  </div>
</template>

<script>
import HeadTop from '@/components/common/header';
import Banner from '@/components/common/banner';
import RegisterHandle from '@/components/register/registerhandle';

export default {
  name: 'Register',
  data () {
    return {
      title: '注册',
      text:"18190568373"
    }
  },
  components:{
    HeadTop,
    Banner,
    RegisterHandle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
</style>
