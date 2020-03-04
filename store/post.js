const posts = [
  {
    _id: 'id1',
    title: 'Post 1',
    views: 0,
    comments: [1, 2],
    date: new Date(new Date()).toLocaleString()
  },
  {
    _id: 'id2',
    title: 'Post 2',
    views: 552,
    comments: [1, 2],
    date: new Date().toLocaleString()
  }
]

export const state = () => ({})

export const mutations = {}

export const actions = {
  async fetchAdmin({ commit }) {
    try {
      return await this.$axios.$get('/api/post/admin')
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async remove({ commit }, id) {
    try {
      return await this.$axios.$delete(`/api/post/admin/'${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async update({ commit }, { id, text }) {
    // console.log('Store Ok', formData)
    try {
      return await this.$axios.$put(`/api/post/admin/'${id}`, { text })
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async fetchAdminById({}, id) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id))
      }, 1000)
    })
  },

  async create({ commit }, { title, text, image }) {
    try {
      const fd = new FormData()

      fd.append('title', title)
      fd.append('text', text)
      fd.append('image', image, image.name)
      // return await new Promise(resolve => {
      //   setTimeout(() => {
      //     resolve(console.log('Created!', fd))
      //   }, 1000)
      // })
      return await this.$axios.$post('/api/post/admin', fd)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}

export const getters = {}
