<template>
  <div id="listdetail" class="page">
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
    <info></info>
    <schedule></schedule>
    <div class="bottom-fixed">
        <div class="btn dashed">申请延长履约期</div>
        <div class="btn solid">立即还款</div>
    </div>
  </div>
</template>

<script>
import HeadTop from "@/components/common/header";
import Info from "@/components/listdetail/info";
import Schedule from "@/components/listdetail/schedule";
export default {
  name: "ListDetail",
  data() {
    return {
      title: "订单详情",
      show: true
    };
  },
  components: {
    HeadTop,
    Info,
    Schedule
  },
  methods: {
    closehandle() {
      this.show = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#listdetail {
  width: 100%;
  height: auto;
  min-height: 100%;
  background: #eee;
  overflow: hidden;
  .prompt {
    width: 100%;
    height: 0.305rem;
    background: rgba(255, 240, 244, 1);
    padding: 0.08rem 0.185rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .prompt-content {
      font-size: 0.11rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(246, 55, 119, 1);
      height: 100%;
      display: flex;
      align-items: center;
      i {
        display: inline-block;
        width: 0.145rem;
        height: 0.145rem;
        margin-right: 0.105rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .close {
      width: 0.12rem;
      height: 0.12rem;
      color: #f63777;
    }
  }
  .bottom-fixed{
      width: 100%;
      height: 0.65rem;
      position: fixed;
      bottom: 0;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      .btn{
          width: 1.565rem;
          height: 0.4rem;
          box-sizing: border-box;
          border: 1px solid rgba(250,66,109,1);
          border-radius: 0.04rem;
          text-align: center;
          line-height: 0.4rem;
          font-size: 0.16rem;
          letter-spacing: 1px;
      }
      .dashed{
          color: rgba(250,66,109,1);
          margin-right: 0.09rem;
      }
      .solid{
          background: rgba(250,66,109,1);
          color: #fff;
      }
  }
}
</style>
