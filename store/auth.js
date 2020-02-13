import Cookie from 'cookie'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

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
    this.$axios.setToken(token, 'Bearer')
    commit('setToken', token)
    Cookies.set('jwt-token', token) // add Coocies
  },
  logout({ commit }) {
    this.$axios.setToken(false)
    commit('clearToken')
    Cookies.remove('jwt-token') // Remove Coocies
  },
  async createUser({ commit }, formData) {
    try {
      // return await new Promise(resolve => {
      //   setTimeout(() => {
      //     resolve(console.log('Created!', formData))
      //   }, 1000)
      // })
      await this.$axios.$post('/api/auth/admin/create', formData)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  authLogin({ dispatch }) {
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie
    // console.log(cookieStr)
    const cookies = Cookie.parse(cookieStr || '') || {}
    const token = cookies['jwt-token']
    // console.log(token)
    if (isJWTValid(token)) {
      dispatch('setToken', token)
    } else {
      dispatch('logout')
    }
  }
}

export const getters = {
  isAuthenticated: state => Boolean(state.token),
  token: state => state.token
}

function isJWTValid(token) {
  if (!token) {
    return false
  }
  const jwtData = jwtDecode(token) || {}
  const expires = jwtData.exp || 0
  // console.log(jwtData)
  return new Date().getTime() / 1000 < expires
}
