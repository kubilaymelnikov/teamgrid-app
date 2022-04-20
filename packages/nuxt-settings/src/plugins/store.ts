import { Plugin } from '@nuxt/types'
import { state, namespaced, mutations } from '@nuxt-settings/store/settings'

const context: Plugin = ({ store }) => {
  store.registerModule(
    'settings',
    {
      state,
      namespaced,
      mutations,
    },
    { preserveState: true }
  )
}

export default context
