import { Plugin } from '@nuxt/types'
import {
  state,
  namespaced,
  mutations,
  actions,
  getters,
} from '@nuxt-teamgrid-storage/store/storage'

const context: Plugin = ({ store }) => {
  store.registerModule(
    'storage',
    {
      state: Object.assign(state, store.state.storage || {}),
      namespaced,
      mutations,
      actions,
      getters,
    },
    { preserveState: true }
  )
}

export default context
