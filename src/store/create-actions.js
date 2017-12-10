import {
  getCookBook
} from '../api'
import createAPI from '../api'
import axios from 'axios';

export default function createActions(
  httpClientConfig = {},
  httpApiClientConfig = {}) {
  const httpClient = axios.create(httpClientConfig)
  const httpApiClient = axios.create(httpApiClientConfig)

  const {getCookBook} = createAPI(httpClient);

  return {
    // ensure data for rendering given list type
    COOKBOOK_DATA: ({ commit, dispatch, state }) => {
      // commit('SET_ACTIVE_TYPE')
      return getCookBook()
        .then(res => {
          console.log(res)
        })
    }
  }
}
