import * as oauth from '@/api/oauth'

// inicializacion - localstorage - null
const initialAccessTokenState = () => {
  if (localStorage.getItem('accessToken'))
    return localStorage.getItem('accessToken')
  else return null
}
//
export default {
  namespaced: true,
  state: {
    accessToken: initialAccessTokenState()
  },
  mutations: {
    SET_ACCESS_TOKEN(state, payload) {
      state.accessToken = payload
    }
  },
  actions: {
    getToken(context) {
      // Llama a la mutacion del Modulo Loading
      context.commit('loading/SET_LOADING', true, { root: true })

      oauth.getToken()
        .then(({ data }) => {
          context.commit('SET_ACCESS_TOKEN', data.access_token)
        })
        .catch(err => {
          context.commit('SET_ACCESS_TOKEN', null)
          console.log('Error Oauth', err)
        })
        .finally(() => {
          context.commit('loading/SET_LOADING', false, { root: true })
        })
    }
  }
}
