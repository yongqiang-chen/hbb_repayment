<template>
  <div id="inputpassword" class="page">
    <head-top :title="this.title"></head-top>
    <banner :text="this.text"></banner>
    <handle-password></handle-password>
  </div>
</template>

<script>
import HeadTop from '@/components/common/header';
import Banner from '@/components/common/banner';
import HandlePassword from '@/components/inputpassword/inputpasswordhandle';
export default {
  name: 'InputPassword',
  data () {
    return {
      title: '登录',
      text: "18190568373"
    }
  },
  components:{
    HeadTop,
    Banner,
    HandlePassword
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
</style>
