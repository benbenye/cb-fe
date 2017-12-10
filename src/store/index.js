import Vue from 'vue'
import Vuex from 'vuex'
import createActions from './create-actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore (httpClientConfig, httpApiClientConfig) {
  return new Vuex.Store({
    state: {
      activeType: null,
      itemsPerPage: 20,
      items: {/* [id: number]: Item */},
      users: {/* [id: string]: User */},
      lists: {
        top: [/* number */],
        new: [],
        show: [],
        ask: [],
        job: []
      }
    },
    // actions,
    actions: createActions(httpClientConfig, httpApiClientConfig),
    mutations,
    getters
  })
}
