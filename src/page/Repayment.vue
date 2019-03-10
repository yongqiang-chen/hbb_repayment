<template>
  <div id="repayment" class="page">
    <head-top :title="this.title"></head-top>
    <repayment-handle></repayment-handle>
    
  </div>
</template>

<script>
import HeadTop from '@/components/common/header';
import RepaymentHandle from '@/components/Repayment/repaymenthandle';
export default {
  name: 'Repayment',
  data () {
    return {
      title: '立即还款'
    }
  },
  components:{
    HeadTop,
    RepaymentHandle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #repayment{
      width: 100%;
      height: auto;
      min-height: 100%;
      background: #eee;
  }
</style>
