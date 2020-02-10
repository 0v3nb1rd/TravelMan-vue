export const state = () => ({
  token: null //admin show
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  async login({ commit, dispatch }, formData) {
    try {
      // const token = await new Promise((resolve, reject) => {
      //   setTimeout(() => resolve('travel-token'), 2000)
      // })
      const { token } = await this.$axios.$post(
        '/api/auth/admin/login',
        formData
      )
      // console.log('token', token)
      dispatch('setToken', token)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  setToken({ commit }, token) {
    commit('setToken', token)
  },
  logout({ commit }) {
    commit('clearToken')
  },
  async createUser({ commit }, formData) {
    try {
      await this.$axios.$post('/api/auth/admin/create', formData)
      // console.log('CreateUser', formData)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}

export const getters = {
  isAuthenticated: state => Boolean(state.token)
}
