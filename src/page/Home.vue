<template>
  <div id="home">
    <div>{{msg}}</div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/common/tabbar';
export default {
  name: 'Home',
  data () {
    return {
      msg: '首页'
    }
  },
  components:{
    Tabbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
</style>
