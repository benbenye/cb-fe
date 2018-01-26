import {
  getCookBook
} from '../api'
import createAPI from '../api'
import axios from 'axios';

export default function createActions(httpClientConfig = {headers: {}},
                                      httpApiClientConfig = {}) {
  if (httpClientConfig.headers) {
    httpClientConfig.headers['accept'] = 'application/json, */*'
    httpClientConfig.headers['Content-Type'] = 'application/json'
  }

  const httpClient = axios.create(httpClientConfig)
  const httpApiClient = axios.create(httpApiClientConfig)

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
