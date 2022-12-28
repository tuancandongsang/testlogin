<template>
  <div class="calendar">
    <a-space direction="vertical">
      <a-date-picker
        v-model:value="value1"
        :format="dateFormat"
        @change="onChange"
      />
    </a-space>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    const dateFormat = 'YYYY/MM/DD';
    const time = moment().format().slice(0, 10);
    return {
      value1: moment(time, dateFormat),
      dateFormat,
      time,
    };
  },
  created() {
    this.changeTime();
  },
  methods: {
    changeTime() {
      const time = moment().format().slice(0, 10);
      this.time = time;
      console.log(time.slice(0, 10));
    },
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  },
};
</script>

<style lang="scss" scoped>
.calendar {
  display: flex;
  justify-content: end;
  margin: 15px 0;
}
</style>