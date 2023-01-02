<template>
  <div class="home">
    <Calendar v-if="filter == 'process'" />
    <Search v-if="filter == 'system'" />
    <Search v-if="filter == 'allEvent'" />
    <ListVue />
    <Pagination />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Calendar from '@/components/Celendar/Calendar.vue';
import Search from './component/search.vue';
import ListVue from './component/ListVue.vue';
import Pagination from '@/components/Pagination/Pagination.vue';
export default {
  components: { ListVue, Pagination, Search, Calendar },
  computed: {
    ...mapGetters(['filter']),
  },
};
</script>
<style scoped lang="scss">
.home {
  padding: 10px;
  height: 100%;
}
</style>