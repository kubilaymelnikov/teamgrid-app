export const namespaced = true

export const state = () => ({
  token: '',
  user: '',
  service: '',
})

export const mutations = {
  updateSettings(state, { settings }) {
    Object.keys(settings).forEach((key) => {
      state[key] = settings[key]
    })
  },
}
