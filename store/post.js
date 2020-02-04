export const state = () => ({})

export const mutations = {}

export const actions = {
  async fetchAdmin() {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            _id: Math.round(Math.random() * 1000),
            title: 'Post 1',
            views: 0,
            comments: [1, 2],
            date: new Date(new Date()).toLocaleString()
          },
          {
            _id: Math.round(Math.random() * 1000),
            title: 'Post 2',
            views: 552,
            comments: [1, 2],
            date: new Date().toLocaleString()
          }
        ])
      }, 1000)
    })
  },
  remove({}, id) {
    console.log(id)
  }
}

export const getters = {}
