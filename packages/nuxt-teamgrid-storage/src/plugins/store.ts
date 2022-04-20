import { Plugin } from '@nuxt/types'
import {
  state,
  namespaced,
  mutations,
  actions,
  getters,
} from '@nuxt-teamgrid-storage/store/storage'

const context: Plugin = ({ store }) => {
  store.registerModule('storage', {
    state,
    namespaced,
    mutations,
    actions,
    getters,
  })
}

export default context
