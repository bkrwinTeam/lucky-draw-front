<template>
    <div class="countDown" ref="countDown">
        <div class="info">
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() { // 选项 数据
            return {
                clientHeight: ''
            }
        },
        components: { // 定义组件

        },
        methods: { 
            getCountDownInfo() {

            }

        },
        created() { // 生命周期函数

        },
        mounted() {
            this.clientHeight = document.documentElement.clientHeight;
            console.log('哈哈', this.clientHeight);
        },
        watch: {
            clientHeight: function() {
                this.$refs.countDown.style.height = this.clientHeight+'px';
            }
        }
    }
</script>

<style scoped>
    .countDown {
        width: 100%;
        box-sizing: border-box;
        background-image: url('/static/image/countDown.jpg');
        background-size: cover;
        
    }
</style>
