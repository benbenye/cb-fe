import {
  getCookBook
} from '../api'
import createAPI from '../api'
import axios from 'axios';

export default function createActions(httpAPIClientConfig = {headers: {}}) {
  if (httpAPIClientConfig.headers) {
    httpAPIClientConfig.headers['accept'] = 'application/json, */*'
    httpAPIClientConfig.headers['Content-Type'] = 'application/json'
  }

  const httpApiClient = axios.create(httpAPIClientConfig)

  const {getCookBook} = createAPI(httpApiClient);
  const {getHomeData} = createAPI(httpApiClient);
  const {getProductInfo} = createAPI(httpApiClient);

  return {
    // ensure data for rendering given list type
    COOKBOOK_DATA: ({commit, dispatch, state}) => {
      return getCookBook()
        .then(res => {
          commit('SET_COOKBOOK', res.data)
        })
    },
    HOMEDATA_DATA: ({commit}) => {
      return getHomeData()
        .then(res => {
          commit('SET_HOMEDATA', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    PRODUCTINFO_DATA: ({commit}, {id}) => {
      return getProductInfo(id)
        .then(res => {
          commit('SET_PRODUCTINFO', res.data)
        })
    }
  }
}
