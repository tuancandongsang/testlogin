<template>
  <div class="listitem">
    <Itemlist />
    
  </div>
</template>

<script>
import Itemlist from '../../../components/itemlist.vue'
export default {
    components:{Itemlist}

}
</script>

<style scoped lang="scss">
.listitem{
    border: 1px solid #999;
    padding: 8px 12px 12px;
    border-radius: 4px;
}

</style>