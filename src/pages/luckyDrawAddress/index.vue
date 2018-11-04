<template>
    <div class="luckyDrawAddress" ref="luckyDrawAddress">
        <van-address-edit
                :area-list="areaList"
                show-postal
                show-set-default
                show-search-result
                :search-result="searchResult"
                @save="onSave"
                @change-detail="onChangeDetail"
        />
    </div>
</template>

<script>
    export default {
        data() { // 选项 数据
            return {
                clientHeight: '',
                areaList: {},
                searchResult: []
            }
        },
        components: { // 定义组件

        },
        methods: { 
            onSave() {

            },
            onDelete() {

            },
            onChangeDetail() {

            }

        },
        created() { // 生命周期函数

        },
        mounted() {
            this.clientHeight = document.documentElement.clientHeight;
        },
        watch: {
            clientHeight: function() {
                // this.$refs.luckyDrawRes.style.height = this.clientHeight+'px';
            }
        }
    }
</script>

<style scoped>
    .luckyDrawAddress {
        width: 100%;
        box-sizing: border-box;
        border: 1px solid white;
        margin-top: 40px;
    }
</style>
