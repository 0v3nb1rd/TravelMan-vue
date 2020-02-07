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
  async fetchAdmin() {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts)
      }, 1000)
    })
  },
  remove({}, { id, text }) {
    console.log(id)
  },
  async fetchAdminById({}, id) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id))
      }, 1000)
    })
  },
  update({}, formData) {
    console.log('Store Ok', formData)
  },
  async create({ commit }, { title, text, image }) {
    try {
      const fd = new FormData()
      fd.append('title', title)
      fd.append('text', text)
      fd.append('image', image, image.name)
      return await new Promise(resolve => {
        setTimeout(() => {
          resolve(console.log('Created!'))
        }, 1000)
      })
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}

export const getters = {}
