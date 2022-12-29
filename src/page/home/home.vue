<template>
  <div class="home">
    <Calendar v-if="filter == 'process'" />
    <Search v-if="filter == 'system' " />
    <Search v-if="filter == 'allEvent' " />
    <Listitem />
    <Pagination />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Calendar from './component/calendar.vue';
import Search from '../../components/search.vue';
import Listitem from './component/listitem.vue';
import Pagination from './component/pagination.vue';
export default {
  components: { Listitem, Pagination, Search, Calendar },
  computed: {
    ...mapGetters([
      'filter',
    ]),
  },
};
</script>
<style scoped lang="scss">
.home {
  padding: 10px;
  height: 100%;
}
</style>