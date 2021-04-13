import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    config: {},
    auth: {
      isAuthenticated: false,
      token: null,
      accountId: null
    }
  },
  getters: {
    isAuthenticated: (state) => {
      return state.auth.isAuthenticated;
    },
    userToken: (state) => {
      return btoa(unescape(encodeURIComponent(
        `${state.auth.accountId}:${state.auth.token}`
      )));
    },
    accountId: (state) => {
      return state.auth.accountId;
    },
    baseApiUrl: (state) => {
      return state.config.baseApiUrl;
    },
    user: (state) => {
      return state.user;
    },
    config: (state) => {
      return state.config;
    }
  },
  mutations: {
    setAuthentication(state, data) {
      state.auth = { ...data };
    },
    setUser(state, data) {
      state.user = { ...data };
    },
    setConfig(state, data) {
      state.config = { ...data };
    }
  },
  actions: {},
  modules: {}
});