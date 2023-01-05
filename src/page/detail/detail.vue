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
import listService from '../../api/listService'
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
      const item = this.dataItem
      const newData = {
        note: this.message
      }
      console.log(item.id, newData);
      try {
        await listService.getListUpdate(item.id, newData)
      } catch (error) {
        console.log(error);
      }
      // await this.getListUpdate(item.id, newData)
      this.$router.push('/')
    }
  },
  computed: { ...mapGetters(['itemsList', 'dataItem']) },
};
</script>