import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

// 实现不了，必须进行监视，如何监视？
export default new Vuex.Store({
  state: {
    isSun: true,
    isclose: true,
    token: null,
  },
  getters: {},
  actions: {},
  mutations: {
    setToken(token = '') {
      this.tokem = token
    },
  },
})
