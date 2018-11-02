<template>
  <div>
    抽奖
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
      gotoHome (path) {
         this.reLaunchPageTo(this.router + path)
      }
  },
  created () { // 生命周期函数
      // console.log('homeroot', this.$root, this.$root.$mp)
  },
  mounted () {
      // console.log('home999', this.$root, this.$root.$mp)
  }
}
</script>

<style scoped>
</style>
