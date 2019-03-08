<template>
  <div id="item">
    <div class="item-container">
      <div class="left-box">
        <p class="ft26">借款金额</p>
        <p class="ft40">￥1500</p>
      </div>
      <div class="right-box">
        <p class="ft22">2019-01-23 15:54:26</p>
        <!-- <p class="ft28 pink">待还款</p> -->
        <!-- <p class="ft28 green">待放款</p> -->
        <!-- <p class="ft28 orange">待审核</p> -->
        <!-- <p class="ft28 gray">已关闭</p> -->
        <p class="ft28 gray">审核不通过</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  data () {
    return {
      msg: '个例'
    }
  },
  components:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #item{
    background:rgba(255,255,255,1);
    .item-container{
      width: 3.495rem;
      height: 0.835rem;
      box-sizing: border-box;
      padding: 0.17rem 0.13rem 0.2rem 0.12rem;
      display: flex;
      justify-content: space-between;
      .left-box{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        letter-spacing: 1px;
        .ft26{
          font-size: 0.13rem;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:rgba(51,51,51,1);
        }
        .ft40{
          font-size:0.2rem;
          font-family:PingFangSC-Medium;
          font-weight:500;
          color:rgba(250,66,109,1);
        }
      }
      .right-box{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        letter-spacing: 1px;
        .ft22{
          font-size: 0.11rem;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:rgba(128,128,128,1);
        }
        .ft28{
          font-size:0.14rem;
          font-family:PingFangSC-Medium;
          font-weight:500;
        }
        .gray{
          color:rgba(51,51,51,1);
        }
        .pink{
          color: rgba(250,66,109,1);
        }
        .green{
          color:rgba(47,179,16,1);
        }
        .orange{
          color:rgba(255,117,16,1);
        }
      }
    }
  }
</style>
