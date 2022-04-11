import { join } from 'path'

const meta = require('../package.json')

export default function () {
  const { nuxt, requireModule } = this

  if (!nuxt.options.components) {
    throw new Error(
      'please set `components: true` inside `nuxt.config` and ensure using `nuxt >= 2.13.0`'
    )
  }

  requireModule('@nuxtjs/tailwindcss')
  requireModule('@nuxtjs/moment')

  nuxt.hook('components:dirs', (dirs) => {
    dirs.push({
      path: join(__dirname, 'components'),
    })
  })
}

export { meta }
