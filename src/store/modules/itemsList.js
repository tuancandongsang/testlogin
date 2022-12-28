import listService from '../../api/listService';
const state = {
  items: [],
  filter: 'process',
};

const getters = {
  itemsList: (state) => state.items,
  itemsProcess: (state) =>
    state.items.filter((item) => item.value == 'process'),
  itemSystem: (state) => state.items.filter((item) => item.value == 'system'),
  valueSearch: (state) => state.items.length,
  filter: (state) => state.filter,
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
};

export default {
  state,
  getters,
  actions,
  mutations,
};
