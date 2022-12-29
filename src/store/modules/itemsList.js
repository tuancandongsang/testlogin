import listService from '../../api/listService';
const state = {
  items: [],
  filter: 'process',
  valueDate: '',
  valueSearch: 0,
  render: [],
  pageNumber: 1,
  pageSize: 5,

};

const getters = {
  itemsList: (state) => state.items,
  itemsProcess: (state) =>
    state.items.filter((item) => item.value == 'process'),
  itemSystem: (state) => state.items.filter((item) => item.value == 'system'),
  filter: (state) => state.filter,
  valueDate: (state) => state.valueDate,
  valueSearch: (state) => state.items.length,
  renderList: (state) => state.render,
  pageNumber: (state) => state.pageNumber,
  pageSize: (state) => state.pageSize,
  renderListTotal:(state) => state.render.length,

};

const actions = {
  async getAllList({ commit }) {
    try {
      const data = await listService.getListAll();
      commit('getAllList', data.data);
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  getAllList(state, item) {
    state.items = item;
  },
  changefilter(state, filterState) {
    state.filter = filterState;
  },
  updatedDate(state, date) {
    state.valueDate = date
  },
  getRenderList(state, render) {
    state.render = render
  },
  loadMorePageSize(state, more5){
    state.pageSize = state.pageSize + more5
  },
  formatloadMorePageSize(state){
    state.pageSize = 5
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
