import axios from 'axios'

export const state = () => ({
  loadingStatus: 'init',
  response: null,
})

export const mutations = {
  SET_RESPONSE(state, response) {
    state.response = response
  },
  SET_LOADING_STATUS(state, loadingStatus) {
    state.loadingStatus = loadingStatus
  },
}

export const actions = {
  GET_RESPONSE(context) {
    context.commit('SET_LOADING_STATUS', 'loading')
    return axios
      .get('https://baconipsum.com/api/?type=meat-and-filler&format=json')
      .then((response) => {
        context.commit('SET_RESPONSE', response)
        context.commit('SET_LOADING_STATUS', 'succes')
      })
  },
}

export const getters = {
  doneResponse(state) {
    return state.response
  },
  checkLoadingStatus(state) {
    return state.loadingStatus
  },
}
