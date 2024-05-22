import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      teste: 0
    }
  },
  mutations: {
    teste(state) {
      state.teste++
    }
  }
})
