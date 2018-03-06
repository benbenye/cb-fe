import {
  getCookBook
} from '../api'
import createAPI from '../api'
import axios from 'axios';

export default function createActions(httpWWWClientConfig, httpAPIClientConfig = {headers: {}}, platform) {
  const httpApiClient = axios.create(httpAPIClientConfig)
  const httpWWWClient = axios.create(httpWWWClientConfig)

  const {getCookBook} = createAPI(httpApiClient);
  const {getHomeData} = createAPI(httpApiClient);
  const {getProductInfo} = createAPI(httpApiClient);
  const {getCityInfo} = createAPI(httpWWWClient);

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
    CITYINFO: ({commit}) => {
      return getCityInfo()
        .then(res => {
          console.log(res.data)
          commit('SET_CITYINFO', res.data)
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
