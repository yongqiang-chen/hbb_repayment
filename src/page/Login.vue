<template>
  <div class="login">
    <h1>{{msg}}</h1>
    <div class="desc">描述</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: '登录'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >
  
</style>
