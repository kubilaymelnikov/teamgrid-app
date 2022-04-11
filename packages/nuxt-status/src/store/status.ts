export const namespaced = true

export const state = () => ({
  authenticated: false,
})

export const mutations = {
  authenticated(state, status) {
    state.authenticated = status
  },
}
