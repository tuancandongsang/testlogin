<template>
  <div class="pagination">
    <a-pagination
      showLessItems
      :total="renderListTotal"
      :showSizeChanger="false"
      @change="handleChangePage"
      v-model:current="pageNumber"
      v-model:pageSize="pageSize"
      size="small"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      pageSize: 20,
    };
  },
  async created() {
    await this.getAllList();

  },
  methods: {
    ...mapMutations(['changepagenumber', 'formatpageSize',]),
    ...mapActions(['getAllList']),
    handleChangePage(pageNumber, pageSize) {
      this.changepagenumber(pageNumber);
      console.log(pageNumber, pageSize);
      this.formatpageSize(5);
    },
    filterSize(arr, pageSize) {
      let arr1 = [];
      for (let i = 0; i < pageSize; i++) {
        let arr2 = arr[i];
        arr1.push(arr2);
      }
      return arr1;
    },
  },
  computed: {
    ...mapGetters([
      'itemsList',
      'renderList',
      'pageNumber',
      'renderListTotal',
      'filter',
      "itemSystem",
      'itemsProcess',
      'valueDate'
    ]),
    renderListTotal() {
      if (this.filter == 'allEvent') {
        return this.itemsList.length;
      }
      if (this.filter == 'process') {
        // return this.itemsProcess.length;
        return this.itemsProcess.filter((item) => item.initialDay = this.valueDate).length

      }
      if (this.filter == 'system') {
        return this.itemSystem.length;
      }
      return this.renderList.length;
    },
  },
};
</script>

<style scoped lang="scss">
.pagination {
  font-weight: 500;
  position: absolute;
  bottom: 10px;
  right: 50%;
  transform: translate(50%, 0);
  width: 70%;
  display: flex;
  justify-content: center;
}
</style>