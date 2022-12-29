<template>
  <div class="listitem">
    <div class="listitem-list">
      <Itemlist v-for="item in itemsListRender" :key="item.id" :data="item" />
    </div>
    <div class="listitem-load">
      <button :class="nodataCSS ? 'nodataCSS' : ''" @click="loadding">
        Load More
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Itemlist from '@/components/itemlist.vue';
export default {
  components: { Itemlist },
  methods: {
    ...mapActions(['getAllList']),
    ...mapMutations(['getRenderList', 'loadMorePageSize']),
    loadding() {
      console.log('load more');
      this.loadMorePageSize(5)
      console.log(this.pageSize);
      this.getRenderList(this.itemsListRender)
    },
    filterpagesize(arr, pageSize) {
      let arr1 = [];
      for (let i = 0; i < pageSize; i++) {
        let arr2 = arr[i]
        arr1.push(arr2)
      }
      return arr1
    }
  },
  async created() {
    this.getAllList();
  },
  computed: {
    ...mapGetters(['itemsList', 'filter', 'itemsProcess', 'itemSystem','valueDate', 'renderList','pageSize' ]),
    itemsListRender() {
      if(this.filter == 'allEvent'){
        return this.filterpagesize(this.itemsList, this.pageSize) 
      } else if (this.filter == 'process') {
        return this.itemsProcess.filter((item) => item.initialDay == this.valueDate);
      } else if (this.filter == 'system') {
        return this.itemSystem.filter((item) => item.initialDay == this.valueDate);
      }
      return [];
    },
    nodataCSS() {
      if (this.itemsListRender.length < 5) {
        return true;
      }
      return false;
    },
  },
  updated(){
    this.getRenderList(this.itemsListRender)
  }
};
</script>

<style scoped lang="scss">
.listitem {
  border: 1px solid #999;
  padding: 8px 12px;
  border-radius: 4px;
  height: 85%;
  position: relative;
  &-list {
    height: 90%;
    overflow: auto;
  }
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
      padding: 4px 12px;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 500;
      background-color: dodgerblue;
      cursor: pointer;
      &:hover {
        background-color: rgb(80, 164, 248);
      }
    }
    .nodataCSS {
      background-color: #999;
      &:hover {
        background-color: #999;
      }
    }
  }
}
</style>