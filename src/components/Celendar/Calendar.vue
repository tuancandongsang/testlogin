<template>
  <div class="calendar">
    <a-space direction="vertical">
      <a-date-picker v-model:value="value" :format="dateFormat" @change="onChange" />
    </a-space>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
import {timeChangeString,dateFormat} from '../../utils/dateMoment'
export default {
  data() {
    return {
      value: dateFormat,
      time : timeChangeString,
    };
  },
  created() {
    this.changeTimeToString();
    this.updatedDate(this.time);
  },
  methods: {
    ...mapMutations(['updatedDate', 'fomatPageNumber', "formatpageSize",'formatnodataCSSinit']),
    changeTimeToString() {
      this.time = timeChangeString;
    },
    onChange(date, dateString) {
      console.log(date, dateString);
      this.updatedDate(dateString);
      this.fomatPageNumber();
      this.formatpageSize(5);
      this.formatnodataCSSinit()
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.calendar {
  display: flex;
  justify-content: end;
  margin: 15px 0;
}
</style>