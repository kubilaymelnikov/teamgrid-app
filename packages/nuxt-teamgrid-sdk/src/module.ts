import { Module } from '@nuxt/types'
import { resolve } from 'path'

const module: Module = function () {
  this.addPlugin({
    src: resolve(__dirname, './plugins/plugin.js'),
  })

  this.extendBuild((config) => {
    config.resolve.alias['@nuxt-teamgrid-sdk'] = resolve(__dirname)
  })
}

export default module

export const meta = require('./../package.json')

import { TeamGridSDK } from '@nuxt-teamgrid-sdk/api/teamGridSDK'

declare module 'vue/types/vue' {
  interface Vue {
    $teamGridSDK: TeamGridSDK
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $teamGridSDK: TeamGridSDK
  }
  interface Context {
    $teamGridSDK: TeamGridSDK
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $teamGridSDK: TeamGridSDK
  }
}

export * from './module'
export * from './plugins/plugin'
export * from './api/teamGridSDK'
export * from './api/types/Contact'
export * from './api/types/List'
export * from './api/types/Project'
export * from './api/types/Service'
export * from './api/types/Tag'
export * from './api/types/Task'
export * from './api/types/Team'
export * from './api/types/TeamGridResponse'
export * from './api/types/Time'
export * from './api/types/User'
export * from './api/types/Webhook'
