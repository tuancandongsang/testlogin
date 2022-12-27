<template>
    <div class="home">
        <Header />
        <Calendar />
        <Listitem />
        <div>phan trang</div>
    </div>
</template>

<script>
import Header from './component/header.vue'
import Calendar from './component/calendar.vue'
import Listitem from './component/listitem.vue'
export default {
    components: { Header, Calendar, Listitem }

}
</script>
<style scoped lang="scss">
.home {
    padding: 10px;

}
</style>