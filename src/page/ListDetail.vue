<template>
  <div id="listdetail">
    <head-top :title="this.title"></head-top>
    <div class="prompt" v-if="show">
        <div class="prompt-content">
            <i>
                <img src="@/assets/lingdang.png" alt="">
            </i>
            温馨提示：开启消息推送，活动不再错过!
        </div>
        <div class="close" @click="closehandle">x</div>
    </div>
    <div>{{msg}}</div>
  </div>
</template>

<script>
import HeadTop from '@/components/common/header';
export default {
  name: 'ListDetail',
  data () {
    return {
      title: '订单详情',
      msg: '订单详情',
      show: true
    }
  },
  components:{
      HeadTop,
  },
  methods:{
      closehandle(){
          this.show = false;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #listdetail{
      width: 100%;
      height: 100%;
      background: #eee;
      .prompt{
          width: 100%;
          height: 0.305rem;
          background:rgba(255,240,244,1);
          padding: 0.08rem 0.185rem;
          display: flex;
          justify-content: space-between;
          align-items: center; 
          .prompt-content{
              font-size:0.11rem;
              font-family:PingFangSC-Regular;
              font-weight:400;
              color:rgba(246,55,119,1);
              height: 100%;
              display: flex;
              align-items: center;
              i{
                  display: inline-block;
                  width: 0.145rem;
                  height: 0.145rem;
                  margin-right: 0.105rem;
                  img{
                      width: 100%;
                      height: 100%;
                  }
              }
          }
          .close{
              width: 0.12rem;
              height: 0.12rem;
              color: #F63777;
          }
      }
  }
</style>
