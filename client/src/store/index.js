import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    routes: ''
  },
  mutations: {
    set_routes (state, payload) { state.routes = payload }
  }
})

export default store
