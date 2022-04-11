import open from 'open'

export default {
  components: true,
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/moment', './../src/index.js'],
  hooks: {
    listen(_, { host, port }) {
      open(`http://${host}:${port}`)
    },
  },
}
