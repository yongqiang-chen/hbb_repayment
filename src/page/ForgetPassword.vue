<template>
  <div id="forgetpassword" class="page">
    <head-top :title="this.title"></head-top>
    <banner :text="this.text"></banner>
    <forget-handle :phone="this.phone"></forget-handle>
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
      text:'',
      phone:''
    }
  },
  components:{
    HeadTop,
    Banner,
    ForgetHandle
  },
  created:function(){
    const phone = localStorage.getItem("phone");
    var reg=/(\d{3})\d{4}(\d{4})/;
    this.text = phone.replace(reg, "$1****$2");
    this.phone = phone;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
</style>
