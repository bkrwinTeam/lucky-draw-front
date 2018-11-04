<template>
    <div class="homePage">
        登陆页
        <button v-on:click="registPhone()">
            跳转
        </button>
    </div>
</template>

<script>
    export default {
        data() { // 选项 数据
            return {
                phone: ''
            }
        },
        components: { // 定义组件

        },
        methods: { // 事件处理方法
            goToLuckyDraw() {
                this.reLaunchPageTo(this.router + 'luckyDraw')
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
            let client = navigator.userAgent.toLowerCase();
            if (client.indexOf('micromessenger') === -1) {
                return;
            }
            let code = this.getQueryString('code');
            let href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx87fa2969561cf076&redirect_uri=" +
                encodeURIComponent(window.location.href) + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
            if(code){
                this.httpSer.post('Draw/DrawLogin',{code: code,orgId: 100000015},(data)=>{
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
        }
    }
</script>

<style scoped>
    .homePage {
        width: 100%;
        height: 100%;
    }
</style>
