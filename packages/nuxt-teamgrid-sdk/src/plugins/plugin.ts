import { Plugin } from '@nuxt/types'
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

const plugin: Plugin = (_, inject) => {
  const teamGridSDK = new TeamGridSDK()
  inject('teamGridSDK', teamGridSDK)
}

export default plugin
