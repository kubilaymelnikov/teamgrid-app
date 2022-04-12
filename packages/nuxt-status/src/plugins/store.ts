import { Plugin } from '@nuxt/types'
import { state, namespaced, mutations } from '@nuxt-status/store/status'

const context: Plugin = ({ store }) => {
  store.registerModule(
    'status',
    {
      state: Object.assign(state, store.state.status || {}),
      namespaced,
      mutations,
    },
    { preserveState: true }
  )
}

export default context
