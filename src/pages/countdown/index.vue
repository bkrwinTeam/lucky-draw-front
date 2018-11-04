<template>
    <div class="countDown" ref="countDown">
        <div class="info">
            <div class="activity-time">
                <div>开奖时间</div>
                <div>{{startTime}}</div>
                <div class="text-center">至</div>
                <div>{{endTime}}</div>
            </div>
            <div class="countDown-time">
                据开奖{{countDownTime}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() { // 选项 数据
            return {
                clientHeight: '',
                startTime: '2018.11.11 - 9:00',
                endTime: '2018.11.12 - 9:00',
                countDownTime: '10天'
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
        box-sizing: border-box;
    }
    .countDown .info {
        position: absolute;
        bottom: 170px;
        margin-left: 20px;

    }
    .countDown .activity-time {
        width: 160px;
        font-family: PingFangSC-Regular;
        font-size: 18px;
        font-weight: 200;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: left;
    }
    .countDown .activity-time .text-center {
        text-align: center;
    }
    .countDown .countDown-time {
        margin-top: 20px;
        font-family: PingFangSC-Regular;
        font-size: 24px;
        font-weight: 300;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: left;
    }
</style>
