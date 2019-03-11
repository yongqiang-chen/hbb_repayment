<template>
  <div id="pay" class="page">
    <head-top :title="this.title"></head-top>
    <pay-handle></pay-handle>
    
  </div>
</template>

<script>
import HeadTop from '@/components/common/header';
import PayHandle from '@/components/pay/payhandle';
export default {
  name: 'Pay',
  data () {
    return {
      title: '支付',
     
    }
  },
  components:{
    HeadTop,
    PayHandle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #pay{
      width: 100%;
      height: auto;
      min-height: 100%;
      background: #eee;
  }
</style>
