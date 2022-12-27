<template>
  <div class="listitem">
    <Itemlist />
    <div class="listitem-load">
      <button @click="loadding">Load More</button>
    </div>
  </div>
</template>

<script>
import listService from '../../../api/listService';
import Itemlist from '../../../components/itemlist.vue';
export default {
  components: { Itemlist },
  methods: {
    loadding() {
      console.log('load more');
    },
  },
  async created() {
    const response = await listService.getListAll();
    console.log(response);
  },
};
</script>

<style scoped lang="scss">
.listitem {
  border: 1px solid #999;
  padding: 8px 12px;
  border-radius: 4px;
  height: 80%;
  position: relative;
  &-load {
    position: absolute;
    width: 80%;
    padding: 8px 12px;
    border-top: 1px solid #999;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
    button {
      width: 100%;
      padding: 8px 12px;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 500;
      background-color: dodgerblue;
      cursor: pointer;
      &:hover {
        background-color: rgb(80, 164, 248);
      }
    }
  }
}
</style>