<template>
  <div id="lists">
    <div class="title">{{msg}}</div>
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from '@/components/lists/navbar';
export default {
  name: 'Lists',
  data () {
    return {
      msg: '订单'
    }
  },
  components:{
    Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #lists{
    width: 100%;
    height: 100%;
    background: #eee;
    padding-top: 0.58rem;
    .title{
      width: 100%;
      height: 0.48rem;
      position:fixed;
      top:0;
      z-index:999;
      background:rgba(255,255,255,1);
      text-align: center;
      line-height: 0.48rem;
      font-size: 0.16rem;
    }
  }
</style>
