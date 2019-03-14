<template>
  <div id="retrievepassword" class="page">
    <head-top :title="this.title"></head-top>
    <banner :text="this.text"></banner>
    <retrieve-password-handle :userPhone="this.userPhone"></retrieve-password-handle>
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
      text:'',
      userPhone:''
    }
  },
  components:{
    HeadTop,
    Banner,
    RetrievePasswordHandle
  },
  created:function(){
    const userPhone = localStorage.getItem("retrievePasswordPhone");
    var reg=/(\d{3})\d{4}(\d{4})/;
    this.text = userPhone.replace(reg, "$1****$2");
    this.userPhone = userPhone;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
</style>
