<template>
  <div id="register" class="page">
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
      text:"",
      phone:""
    }
  },
  components:{
    HeadTop,
    Banner,
    RegisterHandle
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
