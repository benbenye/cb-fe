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
      users: {/* [id: string]: User */},
      cookbook: {},//食谱首页
    },
    // actions,
    actions: createActions(httpClientConfig, httpApiClientConfig),
    mutations,
    getters
  })
}
