import * as oauth from '@/api/oauth'

export default {
  namespaced: true,
  state: {
    accessToken: null
  },
  mutations: {
    SET_ACCES_TOKEN(state, payload) {
      state.accessToken = payload
    }
  },
  actions: {
    getToken(context) {
      oauth
        .getToken()
        .then(res => {
          context.commit('SET_ACCES_TOKEN', res.data.access_token)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          console.log('DONE!')
        })
    }
  }
}
