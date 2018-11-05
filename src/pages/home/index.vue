<template>
    <div class="homePage" ref="homePage">
        <img src="/static/image/light01.png" alt="" v-show="showLight">
        <img src="/static/image/light02.png" alt="" v-show="!showLight">
        <img src="/static/image/login-bg.png" alt="">
        <div class="phone-verify">
            <div class="phone-tip">输入手机号，确认抽奖机会</div>
            <div><input type="number" v-model="phone" class="phone-input" placeholder="请输入手机号码"></div>
            <div><button class="phone-submit" @click="submit()">提  交</button></div>
        </div>
        <van-popup v-model="showFailModal">对不起，您没有资格抽奖</van-popup>
    </div>
</template>

<script>
    export default {
        data() { // 选项 数据
            return {
                areaList:{},
                searchResult: [],
                clientHeight: '',
                phone: '',
                showFailModal: false,
                showLight: true,
                timeoutShowLight: null
            }
        },
        components: { // 定义组件

        },
        methods: { // 事件处理方法
            goToLuckyDraw() {
                this.navigatePageTo(this.router + 'luckyDraw')
            },
            submit() {
                if (!this.phone) {
                    console.log('phone none');
                    return;
                }
                console.log('phone', this.phone);
                if (this.phone === '123') {
                  this.$dialog.alert({
                      message: '对不起，您没有资格抽奖'
                    }).then(() => {
                      console.log('关闭弹窗');
                      this.phone = '';
                    });
                    return;
                }
                this.goToLuckyDraw();
            },
            onSave() {
            },
            onDelete() {
            },
            onChangeDetail(val) {
                if (val) {
                    this.searchResult = [{
                        name: '黄龙万科中心',
                        address: '杭州市西湖区'
                    }];
                } else {
                    this.searchResult = [];
                }
            },
            getQueryString(name){
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if (r != null) return unescape(r[2]); return null;
            },
            registPhone(){
                this.httpSer.post('Draw/DrawRegister',{phone: '18888888888'},(data)=>{
                    if(data.Code !== 0){
                        Toast.fail(data.Message);
                        return;
                    }
                    this.goToLuckyDraw();
                });
            }
        },
        created() { // 生命周期函数


        },
        mounted() {
          this.clientHeight = document.documentElement.clientHeight;
          var self = this;
          this.timeoutShowLight = setInterval(function() {
            self.showLight = !self.showLight;
          }, 200)
            let client = navigator.userAgent.toLowerCase();
            // if (client.indexOf('micromessenger') === -1) {
            //     return;
            // }
          // let code = this.getQueryString('code');
          let code = 'ozhsq0lre5D_n4k7tM9red9m2Cus';
            let href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx87fa2969561cf076&redirect_uri=" +
                encodeURIComponent(window.location.href) + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
            if(code){
                this.httpSer.post('Draw/DrawLogin',{OpenId: code,orgId: 100000015},(data)=>{
                    if(!data.Value){
                        return;
                    }
                    if(data.Value.DrawActivityType === 2){
                        return;
                    }
                    this.reLaunchPageTo(this.router + 'luckyDraw');
                });
                return;
            }
            window.location.replace(href);
            
        },
        destroyed() {
          console.log('destroyed');
          clearInterval(this.timeoutShowLight);
          this.timeoutShowLight = null;
        },
        watch: {
            clientHeight: function() {
                this.$refs.homePage.style.height = this.clientHeight+'px';
            }
        }
    }
</script>

<style scoped>
    .homePage {
        width: 100%;
        box-sizing: border-box;
        background-image: url('/static/image/background.jpg');
        background-size: cover;
        
    }
    .homePage img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .homePage .phone-verify {
        width: 16rem;
        position: absolute;
        bottom: 175px;
        left: 50%;
        margin-left:-8rem;

    }
    .homePage .phone-tip {
        font-family: STLibian-SC-Regular;
        font-size: 1.25rem;
        color: #FDF4AC;
        letter-spacing: 0;
    }
    .homePage .phone-input {
        width: 100%;
        height: 40px;
        margin: 0.8rem 0;
        background: #FFFFFF;
        box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.50);
        border-radius: 0.6rem;
        border: none;
        padding: 0 0.2rem;
        font-family: PingFangSC-Regular;
        font-size: 0.8rem;
        color: #999999;
        letter-spacing: 0;
    }
    .homePage .phone-submit {
        width:100%;
        height: 40px;
        background: #FE9101;
        border: none;
        border-radius: 6px;
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: #FFFFFF;
    }
    .homePage .modal {
        width: 100%; 
        height: 100%;
        position: absolute;
        top: 0;
        background: rgba(244,244,244, 0.5);
    }
    .homePage .modal .modal-content {
        width: 100%; 
        height: 3rem;
        position: relative;
        background: #fff;
        top: 50%;
        margin-top: -1.5rem;
        
    }
</style>
