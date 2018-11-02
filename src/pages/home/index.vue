<template>
  <div class="homePage">
     登陆页
      <button v-on:click="gotoLuckyDraw()">
        跳转
      </button>
  </div>
</template>

<script>
export default {
  data () { // 选项 数据
    return {

    }
  },
  components: { // 定义组件

  },
  methods: { // 事件处理方法
      gotoLuckyDraw () {
         this.reLaunchPageTo(this.router + 'luckyDraw')
      }
  },
  created () { // 生命周期函数

  },
  mounted () {

  }
}
</script>

<style lang="less">
.homePage{
    width: 100%;
    height: 100%;
}
</style>
