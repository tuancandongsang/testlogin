<template>
    <div class="detail">
        <div class="detail-container">
            <h2> Event Details</h2>
            <p><b>Name:</b> <span>{{ dataDetail?.name }}</span></p>
            <p>Notified Date/Time: <span>{{ dataDetail?.time }}</span></p>
            <p><b>Present Value:</b> <span>{{ dataDetail?.presentValue }}</span></p>
            <p><b>Present Status:</b> <span>{{ dataDetail?.presentStatus }}</span></p>
            <p>Previous State: <span>{{ dataDetail?.previousState }}</span></p>
            <p>Conf Y/N: <span>{{ dataDetail?.conf }}</span></p>
            <p><b>Note:</b></p>
            <textarea v-model="message" placeholder="note..."></textarea>
        </div>
        <div class="detail-btn">
            <router-link to="/" ><button>OK</button></router-link>
        </div>
    </div>
</template>

<script>
import listService from '../../api/listService';
export default {
    props: ['id'],
    data(){
        return{
            dataDetail: null,
            message:''
        }
    },
    async created(){
        const response = await listService.getListDetail(this.id)
        this.dataDetail = response.data
        console.log( this.dataDetail);
        this.message = this.dataDetail.presentStatus
    }

}
</script>

<style scoped lang="scss">
.detail {
    padding: 20px;
    position: relative;
    height: 100%;

    &-container {
        padding: 10px;

        h2 {
            text-align: center;
        }
        span{
            font-size: 1rem;
            color: tomato;
            font-weight: 600;
        }
        textarea{
            width: 100%;
            height: 200px;
            padding: 10px;
            border: 1px solid #999;
            border-radius: 8px;
        }
    }

    &-btn {
        width: 90%;
        position: absolute;
        bottom: 0;

        button {
            width: 100%;
            padding: 4px 12px;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 500;
            background-color: dodgerblue;
            color: #333;
            cursor: pointer;

            &:hover {
                background-color: rgb(80, 164, 248);
            }
        }
    }
}
</style>