import * as oauth from '@/api/oauth'

// inicializacion - localstorage - null
const initialAccessTokenState = () => {
  if (localStorage.getItem('accessToken')) 
    return localStorage.getItem('accessToken')
  else 
    return null 
}
//

export default {
  namespaced: true,
  state: {
    accessToken: initialAccessTokenState()
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
