<template>
  <div id="header">
    <div class="header-content">
      <div class="back" @click="back">
        <img src="@/assets/back.png" alt="">
      </div>
      <div class="title">{{title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name:"Header",
  data(){
    return {}
  },
  props:['title'],
  methods: {
    back(){
        if (window.history.length <= 1) {
            this.$router.push({path:'/'})
            return false
        } else {
            this.$router.go(-1)
        }
    }
  }
}
</script>
<style scoped lang="scss">
  #header{
    background: #fff;
    width: 100%;
    height: 0.48rem;
    position:fixed;
    top:0;
    z-index:999;
    .header-content{
      width: 100%;
      height: 0.48rem;
      position: relative;
      .back{
        position: absolute;
        top: 0;
        left: 0;
        width: 0.48rem;
        height: 0.48rem;
        padding: 0.16rem 0.16rem;
        img{
          width: 0.16rem;
          height: 0.16rem;
        }
      }
      .title{
        text-align: center;
        font-size: 0.16rem;
        line-height: 0.48rem;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
        letter-spacing: 1px;
      }
    }
  }
</style>
