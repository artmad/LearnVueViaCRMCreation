import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    loading: false
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
    setLoading(state, isLoading) {
      state.loading = isLoading;
    }
  },
  getters: {
    error: s => s.error,
    loading: s=> s.loading
  },
  actions: {
  },
  modules: {
    auth
  }
})
