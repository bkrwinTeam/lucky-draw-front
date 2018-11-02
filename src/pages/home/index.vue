<template>
    <div class="homePage">
        登陆页
        <button v-on:click="gotoLuckyDraw()">
            跳转
        </button>

        <van-address-edit
                :area-list="areaList"
                show-postal
                show-delete
                show-set-default
                show-search-result
                :search-result="searchResult"
                @save="onSave"
                @delete="onDelete"
                @change-detail="onChangeDetail"
        />
    </div>
</template>

<script>
    export default {
        data() { // 选项 数据
            return {
                areaList,
                searchResult: []
            }
        },
        components: { // 定义组件

        },
        methods: { // 事件处理方法
            gotoLuckyDraw() {
                this.reLaunchPageTo(this.router + 'luckyDraw')
            },
            onSave() {
                Toast('save');
            },
            onDelete() {
                Toast('delete');
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
            }
        },
        created() { // 生命周期函数

        },
        mounted() {

        }
    }
</script>

<style scoped>
    .homePage {
        width: 100%;
        height: 100%;
    }
</style>
