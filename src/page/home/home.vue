<template>
  <div class="home">
    <Calendar v-if="filter == 'process'" />
    <Search v-if="filter == 'system'" />
    <Listitem />
    <!-- :itemsList="itemsList" :valueSearch="valueSearch" -->
    <Pagination />
  </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex';
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
      // 'itemSystem',
      // 'itemsProcess',
      // 'itemsList',
      // 'valueSearch',
    ]),
  },
  // async created() {
  //   await this.getAllList();
  // },
  // methods: {
  //   ...mapActions(['getAllList']),
  // },
};
</script>
<style scoped lang="scss">
.home {
  padding: 10px;
  height: 100%;
}
</style>