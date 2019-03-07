<template>
  <div id="tabbar">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item v-for="nav in navs" :id="nav.id" :key="nav.id">
        <img slot="icon" :src="nav.selectedimg" v-if="selected == nav.id">
        <img slot="icon" :src="nav.img" v-else>
        
          {{nav.title}}
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
    return {
        navs:[
            {
                id:"Home",
                name:"Home",
                title:"首页",
                selectedimg:require("@/assets/home-selected.png"),
                img:require("@/assets/home.png")
            },
            {
                id:"Lists",
                name:"Lists",
                title:"订单",
                selectedimg:require("@/assets/list-selected.png"),
                img:require("@/assets/list.png")
            },
            {
                id:"Mine",
                name:"Mine",
                title:"我的",
                selectedimg:require("@/assets/mine-selected.png"),
                img:require("@/assets/mine.png")
            }
        ],
        selected:"Lists"
    }
  },
  watch: {
      $route (e) {
          // console.log(e.name)
          this.selected = e.name;
      },
      selected: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定
        // console.log(val)
        // console.log(oldVal)
        this.$router.push({
          path: val
        })
      }
    }
}
</script>

<style scoped lang="scss">
  .mint-tabbar .mint-tab-item{
    color:rgba(153,153,153,1);
  }
  .mint-tabbar > .mint-tab-item.is-selected{
      color:rgba(250,66,109,1);
  }
</style>
