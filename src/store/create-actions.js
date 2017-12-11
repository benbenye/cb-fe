import {
  getCookBook
} from '../api'
import createAPI from '../api'
import axios from 'axios';

export default function createActions(
  httpClientConfig = {headers: {}},
  httpApiClientConfig = {}) {
  if(httpClientConfig.headers){
    httpClientConfig.headers['accept'] = 'application/json, */*'
    httpClientConfig.headers['Content-Type'] = 'application/json'
  }

  const httpClient = axios.create(httpClientConfig)
  const httpApiClient = axios.create(httpApiClientConfig)

  const {getCookBook} = createAPI(httpClient);

  return {
    // ensure data for rendering given list type
    COOKBOOK_DATA: ({ commit, dispatch, state }) => {
      // commit('SET_ACTIVE_TYPE')
      return getCookBook()
        .then(res => {
          commit('SET_COOKBOOK', res.data)
          // console.log(res.data)
        })
    }
  }
}
