<template>
  <div id="retrievepassword">
    <head-top :title="this.title"></head-top>
    <banner :text="this.text"></banner>
    <retrieve-password-handle></retrieve-password-handle>
  </div>
</template>

<script>
import HeadTop from '@/components/common/header';
import Banner from '@/components/common/banner';
import RetrievePasswordHandle from '@/components/retrievepassword/retrievepasswordhandle';

export default {
  name: 'RetrievePassword',
  data () {
    return {
      title: '设置密码',
      text:"18190568373"
    }
  },
  components:{
    HeadTop,
    Banner,
    RetrievePasswordHandle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
</style>
