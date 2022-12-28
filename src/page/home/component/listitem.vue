<template>
  <div class="listitem">
    <div class="listitem-list">
      <Itemlist v-for="item in itemsList" :key="item.id" :data="item" />
    </div>
    <div class="listitem-load">
      <button :class="nodataCSS ? 'nodataCSS' : ''" @click="loadding">
        Load More
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Itemlist from '../../../components/itemlist.vue';
export default {
  components: { Itemlist },
  // props: {
  //   itemsList: {
  //     type: Array,
  //     default: [],
  //     required: true,
  //   },
  //   valueSearch: {
  //     type: {
  //       type: Number,
  //     },
  //   },
  // },
  methods: {
    ...mapActions(['getAllList']),
    loadding() {
      console.log('load more');
    },
  },
  async created() {
    this.getAllList();
  },
  computed: {
    ...mapGetters(['itemsList', 'filter', 'itemsProcess', 'itemSystem']),
    itemsList() {
      if (this.filter == 'process') {
        return this.itemsProcess;
      } else if (this.filter == 'system') {
        return this.itemSystem;
      }
      return [];
    },
    nodataCSS() {
      if (this.itemsList.length == 0) {
        return true;
      }
      return false;
    },
  },
  // computed: { ...mapGetters(['itemsList', 'valueSearch']) },
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