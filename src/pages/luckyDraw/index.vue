<template>
  <div>
    抽奖
  </div>
  <div v-on:click="gotoHome()">
    返回
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
      gotoHome () {
         this.reLaunchPageTo(this.router)
      }
  },
  created () { // 生命周期函数
      // console.log('homeroot', this.$root, this.$root.$mp)
  },
  mounted () {

  }
}
</script>

<style scoped>
</style>
