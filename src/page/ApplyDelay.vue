<template>
  <div id="applydelay" class="page">
    <head-top :title="this.title"></head-top>
    <apply-delay-handle></apply-delay-handle>
    <payment-method></payment-method>
    
  </div>
</template>

<script>
import HeadTop from '@/components/common/header';
import ApplyDelayHandle from '@/components/applydelay/applydelayhandle';
import PaymentMethod from '@/components/common/paymentmethod';
export default {
  name: 'ApplyDelay',
  data () {
    return {
      title: '花宝呗申请延长履约期',
     
    }
  },
  components:{
    HeadTop,
    ApplyDelayHandle,
    PaymentMethod
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #applydelay{
      width: 100%;
      height: auto;
      min-height: 100%;
      background: #eee;
  }
</style>
