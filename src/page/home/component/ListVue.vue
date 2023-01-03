<template>
  <div class="listitem">
    <div class="listitem-list">
      <ItemList v-for="item in itemsListRender" :key="item?.id" :data="item" />
    </div>
    <div class="listitem-load" @click="loadding">
      <Button :nodataCSS="nodataCSS ? 'button-disabled' : ''" content="Load More" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { listpageSize, filterpagesize } from "@/utils/common";

import ItemList from '@/components/ItemList.vue';
import Button from '@/components/Button/Button.vue';

export default {
  components: { ItemList, Button },
  methods: {
    ...mapActions(['getAllList']),
    ...mapMutations([
      'getRenderList',
      'addingPagesizeload',
      'updatenodataCSSinit',
    ]),
    loadding() {
      this.addingPagesizeload(5);
      this.getRenderList(this.itemsListRender);
      this.hinden();
    },
    hinden() {
      if (this.filter == 'allEvent') {
        const alo = (this.pageNumber - 1) * 20 + this.itemsListRender.length;
        if (alo == this.itemsList.length) {
          this.updatenodataCSSinit();
        }
      }
      if (this.filter == 'process') {
        const alo = (this.pageNumber - 1) * 20 + this.itemsListRender.length;
        if (
          alo ==
          this.itemsProcess.filter((item) => item.initialDay == this.valueDate)
            .length
        ) {
          this.updatenodataCSSinit();
        }
      }
    },
  },
  async created() {
    await this.getAllList();
    // console.log('create', this.itemsList);
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
      'nodataCSSinit',
    ]),
    itemsListRender() {
      if (this.filter == 'allEvent') {
        const initArray = listpageSize(
          this.itemsList,
          this.pageNumber,
          20
        );
        return filterpagesize(initArray, this.pageSize);
      } else if (this.filter == 'process') {
        const arrrr = this.itemsProcess.filter(
          (item) => item.initialDay == this.valueDate
        );
        const initArray = listpageSize(arrrr, this.pageNumber, 20);
        return filterpagesize(initArray, this.pageSize);
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
        this.itemsListRender.length == 20 ||
        this.nodataCSSinit == true
      ) {
        return true;
      }
      return false;
    },
  },
  updated() {
    this.getRenderList(this.itemsListRender);
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
  }
}
</style>