import Vue from 'vue'

export default {
  SET_HOMEDATA: (state, data) => {
    state.homeData = data
  },

  SET_COOKBOOK: (state, data ) => {
    state.cookbook = data
  },

  SET_PRODUCTINFO: (state, data ) => {
    state.productInfo = data
  },

  SET_ISSHOWAPPDOWNLOAD: (state, data) => {
    state.isShowAppDownload = data
  },

  SET_ITEMS: (state, { items }) => {
    items.forEach(item => {
      if (item) {
        Vue.set(state.items, item.id, item)
      }
    })
  },

  SET_USER: (state, { id, user }) => {
    Vue.set(state.users, id, user || false) /* false means user not found */
  }
}
