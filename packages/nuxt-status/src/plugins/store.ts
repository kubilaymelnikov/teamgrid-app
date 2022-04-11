import { Plugin } from '@nuxt/types'
import * as status from '@nuxt-status/store/status'

const context: Plugin = ({ store }) => {
  store.registerModule('status', status)
}

export default context
