<template>
  <div class="detail">
    <div class="detail-container">
      <h2>Event Details</h2>
      <p>
        <b>Name:</b> <span>{{ dataItem?.name }}</span>
      </p>
      <p>
        Notified Date/Time: <span>{{ dataItem?.time }}</span>
      </p>
      <p>
        <b>Present Value:</b> <span>{{ dataItem?.presentValue }}</span>
      </p>
      <p>
        <b>Present Status:</b> <span>{{ dataItem?.presentStatus }}</span>
      </p>
      <p>
        Previous State: <span>{{ dataItem?.previousState }}</span>
      </p>
      <p>
        Conf Y/N: <span>{{ dataItem?.conf }}</span>
      </p>
      <p><b>Note:</b></p>
      <textarea v-model="message" placeholder="note..."></textarea>
    </div>
    <div class="detail-btn" @click="handleSubmit">
      <Button content="Ok" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button.vue";
import './Detail.scss';
import { mapActions, mapGetters } from 'vuex';
export default {
  components: { Button },
  props: ['id'],
  data() {
    return {
      message: '',
    };
  },
  async created() {
    await this.getAllList()
    await this.getItemDetail(this.id)
    const checkId = this.itemsList.map(item => item.id).find(id => id == this.id)
    if (!checkId) {
      this.$router.push({ name: 'home' })
    }
    this.message = this.dataItem.note
  },
  methods: {
    ...mapActions(['getAllList', 'getItemDetail', 'getListUpdate']),
    async handleSubmit() {
      console.log(this.dataItem);
      const dataItem = this.dataItem
      const newData = {
        id: dataItem.id,
        name: dataItem.name,
        time: dataItem.time,
        presentValue: dataItem.presentValue,
        presentStatus: dataItem.presentStatus,
        previousState: dataItem.previousState,
        conf: dataItem.conf,
        value: dataItem.value,
        initialDay: dataItem.initialDay,
        note: this.message
      }
      console.log(newData,newData);
       this.getListUpdate(newData.id, newData)
      this.$router.push('/')
      console.log('doneeee');
    }
  },
  computed: { ...mapGetters(['itemsList', 'dataItem']) },
};
</script>