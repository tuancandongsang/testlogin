<template>
  <div class="pagination">
    <a-pagination
      showLessItems
      :total="numberPanigation"
      :showSizeChanger="false"
      @change="handleChangePage"
      v-model:current="current"
      v-model:pageSize="pageSize"
      size="small"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
      numberPanigation: 50,
      pageSize: 5,
    };
  },
  methods: {
    handleChangePage(pageNumber, pageSize) {
      console.log(pageNumber, pageSize);
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