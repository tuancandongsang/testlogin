<template>
  <div class="detail">
    <div class="detail-container">
      <h2>Event Details</h2>
      <p>
        <b>Name:</b> <span>{{ dataDetail?.name }}</span>
      </p>
      <p>
        Notified Date/Time: <span>{{ dataDetail?.time }}</span>
      </p>
      <p>
        <b>Present Value:</b> <span>{{ dataDetail?.presentValue }}</span>
      </p>
      <p>
        <b>Present Status:</b> <span>{{ dataDetail?.presentStatus }}</span>
      </p>
      <p>
        Previous State: <span>{{ dataDetail?.previousState }}</span>
      </p>
      <p>
        Conf Y/N: <span>{{ dataDetail?.conf }}</span>
      </p>
      <p><b>Note:</b></p>
      <textarea v-model="message" placeholder="note..."></textarea>
    </div>
    <div class="detail-btn">
      <router-link to="/">
        <Button content="Ok" />
      </router-link>
    </div>
  </div>
</template>

<script>
import listService from '@/api/listService';
import Button from "@/components/Button/Button.vue";
import './Detail.scss';
export default {
  components:{Button},
  props: ['id'],
  data() {
    return {
      dataDetail: null,
      message: '',
    };
  },
  async created() {
    const response = await listService.getListDetail(this.id);
    this.dataDetail = response.data;
    console.log(this.dataDetail);
    this.message = this.dataDetail.note;
  },
};
</script>