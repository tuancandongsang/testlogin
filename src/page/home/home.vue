<template>
  <div class="home">
    <!-- <Calendar /> -->
    <Search />
    <Listitem />
    <Pagination />
  </div>
</template>

<script>
// import Calendar from './component/calendar.vue';
import Search from '../../components/search.vue'
import Listitem from './component/listitem.vue';
import Pagination from './component/pagination.vue';
export default {
  components: {   Listitem,
     Pagination,
     Search,
    //  Calendar,
    },
};
</script>
<style scoped lang="scss">
.home {
  padding: 10px;
  height: 100%;
}
</style>