<template>
  <div class="pagination">
    <a-pagination
      showLessItems
      :total="renderListTotal"
      :showSizeChanger="false"
      @change="handleChangePage"
      v-model:current="current"
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
      current: 1,
      pageSize: 20,
    };
  },
  async created() {
    await this.getAllList();
    // console.log(this.filterSize(this.itemsList, this.pageSize));
  },
  methods: {
    ...mapMutations(['changepagenumber', 'formatpageSize']),
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
    ]),
    renderListTotal() {
      if (this.filter == 'allEvent') {
        return this.itemsList.length;
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