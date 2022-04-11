import open from 'open'

export default {
  components: true,
  buildModules: [
    '@teamgrid-app/components',
    '@teamgrid-app/nuxt-teamgrid-sdk',
    '@teamgrid-app/nuxt-settings',
    '@teamgrid-app/nuxt-status',
    '@teamgrid-app/nuxt-teamgrid-storage',
  ],
  module: [],
  hooks: {
    listen(_, { host, port }) {
      open(`http://${host}:${port}`)
    },
  },
}
