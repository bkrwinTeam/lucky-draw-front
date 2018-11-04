<template>
    <div class="luckDraw" ref="luckDraw">
        <div class="button-box" v-if="showBeginToDraw">
            <button class="draw-button" @click="beginDraw()">抽 奖</button>
        </div>
        <div class="res-box" v-if="showLuckyRes">
            <img src="/static/image/lucky-word.png" alt="">
            <img src="/static/image/lucky-expression.png" alt="">
            <div class="btn-box">
                <button class="res-btn" @click="completeAddress()">填写奖品邮寄地址</button>
                <button class="res-btn" @click="showLuckyInfo()">查看中奖信息</button>
            </div>
        </div>
        <div class="res-box" v-if="showFailRes">
            <img src="/static/image/fail-word.png" alt="">
            <img src="/static/image/fail-expression.png" alt="">
        </div>
    </div>
    <div v-on:click="gotoHome()">
        返回
    </div>
</template>

<script>
    export default {
        data () { // 选项 数据
            return {
                clientHeight: '',
                showBeginToDraw: true,
                showLuckyRes: false,
                showFailRes: false
            }
        },
        components: { // 定义组件

        },
        methods: { // 事件处理方法
            gotoHome () {
                this.reLaunchPageTo(this.router)
            },
            beginDraw() {
                if (this.showBeginToDraw) {
                    this.showLuckyRes = true;
                    this.showBeginToDraw = !this.showBeginToDraw;
                    return;
                }
            },
            completeAddress() {
                console.log('填写地址');
                this.reLaunchPageTo(this.router + 'luckyDrawAddress');
            },
            showLuckyInfo() {
                console.log('查看中奖信息');
                this.reLaunchPageTo(this.router + 'luckyDrawResult');
            }
        },
        created () { // 生命周期函数
            // console.log('homeroot', this.$root, this.$root.$mp)
        },
        mounted () {
            this.clientHeight = document.documentElement.clientHeight;
        },
        watch: {
            clientHeight: function () {
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
    }

    .luckDraw .button-box {
        width: 100%;
        position: absolute;
        bottom: 9rem;
        text-align: center;
    }

    .luckDraw .draw-button {
        width: 240px;
        height: 100px;
        background: #FE9101;
        box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.50);
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
        box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.50);
        border: none;
        border-radius: 20px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
    }
</style>
