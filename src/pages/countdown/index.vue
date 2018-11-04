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
                countDownTime: '',
                timer: null
            }
        },
        components: { // 定义组件

        },
        methods: { 
            getCountDownInfo() {

            },
          getCountDownTime() {
            var times = (new Date(2018, 10, 11).getTime() - new Date().getTime())/1000;
            console.log('哈哈', times);
            var self = this;
            this.timer=setInterval(function(){
              var day=0,
                hour=0,
                minute=0,
                second=0;//时间默认值
              if(times > 0){
                day = Math.floor(times / (60 * 60 * 24));
                hour = Math.floor(times / (60 * 60)) - (day * 24);
                minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
              }
              if (day <= 9) day = '0' + day;
              if (hour <= 9) hour = '0' + hour;
              if (minute <= 9) minute = '0' + minute;
              if (second <= 9) second = '0' + second;
              //
              console.log(day+"天:"+hour+"小时："+minute+"分钟："+second+"秒");
              self.countDownTime = day+"天"+hour+"小时"+minute+"分钟"+second+"秒";
              times--;
            },1000);
            if(times<=0){
              clearInterval(this.timer);
            }

          }

        },
        created() { // 生命周期函数

        },
        mounted() {
            this.clientHeight = document.documentElement.clientHeight;
            console.log('哈哈', this.clientHeight);
            this.getCountDownTime();
        },
        destroyed() {
          clearInterval(this.timer);
          this.timer = null;
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
