<template>
  <div class="listitem">
    <div class="listitem-list">
      <Itemlist v-for="item in itemsListRender" :key="item?.id" :data="item" />
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
  // data() {
  //   return {
  //     pageSize: 5,
  //   };
  // },
  methods: {
    ...mapActions(['getAllList']),
    ...mapMutations(['getRenderList', 'addingPagesizeload']),
    loadding() {
      this.addingPagesizeload(5);
      console.log(this.pageSize);
      this.getRenderList(this.itemsListRender);
    },
    filterpagesize(arr, pageSize) {
      let arrPushNew = [];
      if (20 - pageSize < 5) {
        for (let i = 0; i < 20; i++) {
          arrPushNew.push(arr[i]);
        }
        return arrPushNew;
      } else if (pageSize < 20) {
        for (let i = 0; i < pageSize; i++) {
          arrPushNew.push(arr[i]);
        }
        return arrPushNew;
      }
      return arr;
    },
    listpageSize(arr, number, pageSize) {
      let arrPushNew = [];
      const lastNumber = number - 1;
      if (number * pageSize > arr.length) {
        for (let i = lastNumber * pageSize; i < arr.length; i++) {
          arrPushNew.push(arr[i]);
        }
        return arrPushNew;
      } else {
        for (let i = lastNumber * pageSize; i < number * pageSize; i++) {
          arrPushNew.push(arr[i]);
        }
        return arrPushNew;
      }
    },
  },
  async created() {
    this.getAllList();
  },
  computed: {
    ...mapGetters([
      'itemsList',
      'filter',
      'itemsProcess',
      'itemSystem',
      'valueDate',
      'renderList',
      'pageNumber',
      'pageSize',
    ]),
    itemsListRender() {
      if (this.filter == 'allEvent') {
        // return this.itemsList;
        // const initArray = this.itemsList;
        const initArray = this.listpageSize(
          this.itemsList,
          this.pageNumber,
          20
        );
        return this.filterpagesize(initArray, this.pageSize);
      } else if (this.filter == 'process') {
        return this.itemsProcess.filter(
          (item) => item.initialDay == this.valueDate
        );
      } else if (this.filter == 'system') {
        return this.itemSystem.filter(
          (item) => item.initialDay == this.valueDate
        );
      }
      return [];
    },
    nodataCSS() {
      if (
        this.itemsListRender.length < 5 ||
        this.itemsListRender.length == 20
      ) {
        return true;
      }
      return false;
    },
  },
  updated() {
    this.getRenderList(this.itemsListRender);
    console.log(this.itemsListRender);
  },
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