import { Plugin } from '@nuxt/types'
import * as settings from '@nuxt-settings/store/settings'

const context: Plugin = ({ store }) => {
  store.registerModule('settings', settings)
}

export default context
