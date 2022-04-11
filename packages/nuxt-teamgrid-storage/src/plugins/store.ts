import { Plugin } from '@nuxt/types'
import * as storage from '@nuxt-teamgrid-storage/store/storage'

const context: Plugin = ({ store }) => {
  store.registerModule('storage', storage)
}

export default context
