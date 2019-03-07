<template>
  <div id="index">
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/common/tabbar';
export default {
  name: 'Index',
  data () {
    return {
      
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
