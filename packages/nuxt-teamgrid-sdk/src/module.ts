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
