<template>
  <div class="luckDraw" ref="luckDraw">
      <div v-if="isShowDrawBg">
        <transition name="fade">
            <img src="/static/image/draw-box-small.png" alt="" v-show="isShowDrawBox">
          </transition>
        <transition name="fade">
            <img src="/static/image/draw-box-big.png" alt="" v-show="!isShowDrawBox">
          </transition>
        <div class="button-box" v-if="isShowBeginToDraw">
            <button class="draw-button" @click="beginDraw()">抽 奖</button>
        </div>
        <transition name="fade">
          <div class="res-box" v-if="isShowLuckyRes">
              <img src="/static/image/lucky-word.png" alt="">
              <img src="/static/image/lucky-expression.png" alt="">
              <div class="btn-box">
                  <button class="res-btn" @click="completeAddress()">填写奖品邮寄地址</button>
                  <button class="res-btn" @click="showLuckyInfo()">查看中奖信息</button>
              </div>
          </div>
        </transition>
        <transition name="fade">
            <div class="res-box" v-if="isShowFailRes">
                <img src="/static/image/fail-word.png" alt="">
                <img src="/static/image/fail-expression.png" alt="">
            </div>
        </transition>
      </div>
      <div class="countDown" v-if="isShowCountDown">
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
      <div class="end-activity" v-if="isShowEndActivity">
      </div>
  </div>

</template>

<script>
export default {
  data() { // 选项 数据
    return {
      clientHeight: '',
      isShowBeginToDraw: true,
      isShowLuckyRes: false,
      isShowFailRes: false,
      isShowDrawBox: false,
      drawBoxTimer: null,
      isShowCountDown: false,
      isShowDrawBg: true,
      startTime: '',
      endTime: '',
      countDownTime: '',
      countDownTimer: null,
      isShowEndActivity: false
    }
  },
  components: {

  },
  methods: {
    getDrawInfo() {
      this.httpSer.get('Draw/GetDrawActivityEntity', {orgId: 100000015},(data)=>{
        if(data.Code !== 0){
          return;
        }
        this.startTime = this.formatTime(new Date(parseInt(data.Value.BeginDate.replace("/Date(", "").replace(")/", ""), 10)));
        this.endTime = this.formatTime(new Date(parseInt(data.Value.EndDate.replace("/Date(", "").replace(")/", ""), 10)));
        let endDate = new Date(parseInt(data.Value.EndDate.replace("/Date(", "").replace(")/", ""), 10)).getTime();
        // let endDate = new Date(2018, 10, 3).getTime();
        let startDate = new Date(parseInt(data.Value.BeginDate.replace("/Date(", "").replace(")/", ""), 10)).getTime();
        // let startDate = new Date(2018, 10, 11).getTime();

        let now = new Date().getTime();
        if (endDate <= now) {
          this.showEndActivityPage();
          console.log('活动已经结束');
          return;
        }
        if (startDate > now) {
          this.showCountDownPage();
          return;
        }
        console.log('抽奖进行中');
      });
    },
    beginDraw() {
      this.httpSer.post('Draw/LuckyDraw', {orgId: 100000015},(data)=>{
        if(data.Code !== 0){
          return;
        }
        if (!data.value) {
          this.showFailResPage();
          return;
        }
        this.showLuckyResPage();
      });
    },
    showLuckyResPage() {
      this.isShowBeginToDraw = false;
      this.isShowLuckyRes = true;
      this.clearDrawBoxInterval();
      this.isShowDrawBox = false;
    },
    showFailResPage() {
      this.isShowBeginToDraw = false;
      this.isShowFailRes = true;
      this.clearDrawBoxInterval();
      this.isShowDrawBox = false;
    },
    completeAddress() {
      console.log('填写地址');
      this.navigatePageTo(this.router + 'luckyDrawAddress');
    },
    showLuckyInfo() {
      console.log('查看中奖信息');
      this.navigatePageTo(this.router + 'luckyDrawResult');
    },
    showDrawBoxInterval() {
      var self = this;
      this.drawBoxTimer = setInterval(function() {
        self.isShowDrawBox = !self.isShowDrawBox
      }, 1000);
    },
    clearDrawBoxInterval() {
      clearInterval(this.drawBoxTimer);
      this.drawBoxTimer = null;
    },
    clearCountDownInterval() {
      clearInterval(this.countDownTimer);
      this.countDownTimer = null;
    },
    showCountDownPage () {
      console.log('活动未开始');
      this.isShowCountDown = true;
      this.isShowDrawBg = false;
      this.isShowBeginToDraw = false;
      this.clearDrawBoxInterval();
      this.getCountDownTime();
    },
    showEndActivityPage() {
      this.isShowEndActivity = true;
      this.isShowDrawBg = false;
      this.isShowBeginToDraw = false;
      this.clearDrawBoxInterval();
    },
    getCountDownTime() {
      var times = (new Date(2018, 10, 11).getTime() - new Date().getTime())/1000;
      var self = this;
      this.countDownTimer=setInterval(function(){
        let day=0,
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
        self.countDownTime = day+"天"+hour+"小时"+minute+"分钟"+second+"秒";
        times--;
      },1000);
      if(times<=0){
        this.clearCountDownInterval();
      }
    },
    formatTime(time) {
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      let hour= time.getHours();
      let minute = time.getMinutes();
      let second = time.getSeconds();
      if (day <= 9) day = '0' + day;
      if (hour <= 9) hour = '0' + hour;
      if (minute <= 9) minute = '0' + minute;
      if (second <= 9) second = '0' + second;
      return year + '-' + month + '-' + day+" "+hour+":"+minute+":"+second;
    }
  },
  created() {
  },
  destroyed() {
    this.clearDrawBoxInterval();
    this.clearCountDownInterval();

  },
  mounted() {
    this.clientHeight = document.documentElement.clientHeight;
    this.showDrawBoxInterval();
    this.getDrawInfo();
  },
  watch: {
    clientHeight: function() {
      this.$refs.luckDraw.style.height = this.clientHeight + 'px';
    }
  }
}
</script>

<style scoped>
.luckDraw {
    width: 100%;
    box-sizing: border-box;
    background-image: url('/static/image/draw-bg.jpg');
    background-size: cover;
}
.luckDraw img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.luckDraw .button-box {
    width: 100%;
    position: absolute;
    bottom: 9rem;
    text-align: center;
}
.luckDraw .draw-button {
    width:240px;
    height: 100px;
    background: #FE9101;
    box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.50);
    border: none;
    border-radius: 50px;
    font-family: PingFangSC-Regular;
    font-size: 48px;
    color: #FFFFFF;
    letter-spacing: 0;
}
.luckDraw .draw-button:hover {
    cursor: pointer;
}
.luckDraw .res-box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
}
.luckDraw .res-box img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.luckDraw .btn-box {
    width: 100%;
    position: absolute;
    z-index: 233;
    bottom: 75px;
    left: 0;
    display: flex;
    justify-content: space-around;
}
.luckDraw .res-btn {
    width: 132px;
    height: 36px;
    background: #FE9101;
    box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.50);
    border: none;
    border-radius: 20px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
.countDown {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    background-image: url('/static/image/countDown.jpg');
    background-size: cover;
}
.countDown .info {
    position: absolute;
    bottom: 170px;
    margin-left: 20px;

}
.countDown .activity-time {
    width: 170px;
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
    .end-activity {
        height: 100%;
        width: 100%;
        background-image: url('/static/image/activity-end.png');
        background-size: cover;
    }
</style>
