<template>
  <div id="inputpassword" class="page">
    <head-top :title="this.title"></head-top>
    <banner :text="this.text"></banner>
    <handle-password :phone="this.phone"></handle-password>
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
      text:'',
      phone: ''
    }
  },
  components:{
    HeadTop,
    Banner,
    HandlePassword
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
