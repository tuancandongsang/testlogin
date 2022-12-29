<template>
  <div class="search">
    <a-input-search placeholder="input search text" style="width: 70%" @search="onSearch" />
    <p>Value: <b>{{ numberSearch }}</b></p>
  </div>
</template>
<script >
import { mapGetters } from 'vuex';
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
  computed: {
    ...mapGetters(['valueSearch', 'filter', 'itemsList', 'itemSystem', 'itemsProcess']),
    numberSearch() {
      if (this.filter == 'allEvent') {
        return this.itemsList.length
      } else if (this.filter == 'system') {
        return this.itemSystem.length
      } else if (this.filter == 'process') {
        return this.itemsProcess.length
      } else return 0
    }
  }
};
</script>
<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 60px;
  P {
    margin-top: 4px;
    align-self: start;
    padding-left: 60px;
  }
}
</style>