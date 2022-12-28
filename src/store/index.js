import { createStore } from 'vuex';

import itemsList from './modules/itemsList';

const store = createStore({
  modules: {
    itemsList,
  },
});

export default store;
