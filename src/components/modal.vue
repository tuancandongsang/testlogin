<template>
  <div class="modal">
    <span @click="showModal"><i class="fa-solid fa-filter"></i></span>
    <a-modal v-model:visible="visible" title="Select Event Type" @ok="handleOk">
      <div class="modal-radio">
        <div class="modal-radio-item">
          <label for="process">Process Evevt</label><br />
          <input
            type="radio"
            id="process"
            name="fav_language"
            value="process"
            v-model="picked"
          />
        </div>
        <div class="modal-radio-item">
          <label for="system">System Event</label><br />
          <input
            type="radio"
            id="system"
            name="fav_language"
            value="system"
            v-model="picked"
          />
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      visible: false,
      picked: 'process',
    };
  },
  methods: {
    ...mapMutations(['changefilter']),
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      const state = this.picked;
      this.changefilter(state);
      this.visible = false;
      console.log(e.target.value);
    },
  },
  computed: {
    ...mapGetters(['filter']),
  },
};
</script>
<style scoped lang="scss">
.modal {
  &-radio {
    &-item {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      label {
        font-size: 1rem;
      }
      input {
        font-size: 1.5rem;
      }
    }
  }
}
</style>