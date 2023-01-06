const state = {
  horizontal: false,
  angle: null,
};
const getters = {
  horizontal: (state) => state.horizontal,
  angle: (state) => state.angle,
};

const actions = {};

const mutations = {
  getRotate(state) {
    state.horizontal = window.orientation;
  },
  getAngle(state) {
    state.angle = window.orientation;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
