<template>
  <div class="search">
    <a-input-search
      placeholder="input search text"
      style="width: 70%"
      @search="onSearch"
    />
    <p>Value: <b>0</b></p>
  </div>
</template>
<script >
// import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
  },
  // computed:{...mapGetters(['valueSearch']),}
};
</script>
<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  flex-direction: column;
  // margin:  15px 0;
  height: 60px;
  P {
    margin-top: 4px;
    align-self: start;
    padding-left: 60px;
  }
}
</style>