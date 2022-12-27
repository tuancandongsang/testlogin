<template>
  <div class="home">
    <Header />
    <Calendar />
    <Listitem />
    <Pagination />
  </div>
</template>

<script>
import Header from './component/header.vue';
import Calendar from './component/calendar.vue';
import Listitem from './component/listitem.vue';
import Pagination from './component/pagination.vue';
export default {
  components: { Header, Calendar, Listitem, Pagination },
};
</script>
<style scoped lang="scss">
.home {
  padding: 10px;
  position: relative;
  height: 100vh;
}
</style>