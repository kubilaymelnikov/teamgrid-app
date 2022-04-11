import { TeamGridSDK } from '@teamgrid-app/nuxt-teamgrid-sdk/lib/api/teamGridSDK'
import { Plugin } from '@nuxt/types'

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
