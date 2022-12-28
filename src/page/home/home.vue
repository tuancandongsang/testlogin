<template>
  <div class="home">
    <Calendar />
    <Listitem />
    <Pagination />
  </div>
</template>

<script>
import Calendar from './component/calendar.vue';
import Listitem from './component/listitem.vue';
import Pagination from './component/pagination.vue';
export default {
  components: {  Calendar, Listitem, Pagination },
};
</script>
<style scoped lang="scss">
.home {
  padding: 10px;
  height: 100%;
}
</style>