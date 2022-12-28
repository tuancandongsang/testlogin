import listService from '../../api/listService'
const state = {
  items: [],
};

const getters = {
  itemsList: (state) => state.items,
  valueSearch: (state) => state.items.length
};

const actions = {
  async getAllList({ commit }) {
    try {
      const data = await listService.getListAll()
      commit('getAllList', data.data)
    } catch (error) {
      console.log(error)
    }
  },
};

const mutations = {
  getAllList(state, item){
    state.items = item
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
