<template>
    <div class="luckyDrawAddress" ref="luckyDrawAddress">
        <van-address-edit
                :area-list="areaList"
                :address-info="defaultData"
                @save="onSave"
                @change-detail="onChangeDetail"
        />
        <div class="btn-box"><button @click="backToLastPage" class="back-btn">返回</button></div>
    </div>
</template>

<script>
    import AreaList from './area';
    export default {
        data() { // 选项 数据
            return {
                clientHeight: '',
                areaList: AreaList,
                searchResult: [],
                defaultData: {
                    name: '',
                    tel: '',
                    areaCode: '',
                    addressDetail: ''
                }
            }
        },
        components: { // 定义组件

        },
        methods: { 
            onSave(data) {
                this.httpSer.post('Draw/UpdateDrawUserInfo',{
                    Name: data.name,
                    Address: data.province + data.city + data.county,
                    DetailAddress: data.addressDetail,
                    Phone: data.tel,
                    AreaCode: data.areaCode
                },(res)=>{
                    if(!res.Value){
                        return;
                    }
                    if(res.Code !== 0){
                        Toast.fail(res.Message);
                        return;
                    }
                    this.backToLastPage();
                });
            },
            onDelete() {

            },
            onChangeDetail(val) {

            },
            backToLastPage() {
              this.$router.back();
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
    .luckyDrawAddress .btn-box {
        padding: 0 15px;
        margin-top: -25px;
    }
    .luckyDrawAddress .back-btn {
        width: 100%;
        height: 40px;
        font-size: 14px;
        color: #333;
        background-color: #fff;
        border: 1px solid #eee;
    }
</style>
