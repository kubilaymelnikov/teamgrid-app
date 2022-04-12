import { Plugin } from '@nuxt/types'
import { TeamGridSDK } from '@nuxt-teamgrid-sdk/api/teamGridSDK'

const plugin: Plugin = (_, inject) => {
  const teamGridSDK = new TeamGridSDK()
  inject('teamGridSDK', teamGridSDK)
}

export default plugin
