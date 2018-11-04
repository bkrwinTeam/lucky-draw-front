<template>
    <div class="luckyDrawRes" ref="luckyDrawRes">
        <div class="my-info">
            <div class="title">个人信息</div>
            <div class="content">123</div>
        </div>
        <div class="my-award">
            <div class="title">您的奖品</div>
            <div class="content">123</div>
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


        },
        created() { // 生命周期函数

        },
        mounted() {
            this.clientHeight = document.documentElement.clientHeight;
        },
        watch: {
            clientHeight: function() {
                this.$refs.luckyDrawRes.style.height = this.clientHeight+'px';
            }
        }
    }
</script>

<style scoped>
    .luckyDrawRes {
        width: 100%;
        box-sizing: border-box;
        background-image: url('/static/image/bg-blur.jpg');
        background-size: cover;
        border-top: 1px solid red;
    }
    .luckyDrawRes .my-info, .luckyDrawRes .my-award {
        width: 300px;
        margin: 40px auto;
        padding: 10px 0;
        background: #FEF1B3;
        border-radius: 10px;
    }
    .luckyDrawRes .content {
        margin-top: 10px;
    }
</style>
