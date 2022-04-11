import { Module } from '@nuxt/types'
import { join, resolve } from 'path'

const module: Module = function () {
  this.options.store = true

  this.addPlugin({
    src: resolve(__dirname, 'plugins/store.js'),
    fileName: join('teamgrid-shared', 'plugins.store-status.js'),
  })

  this.extendBuild((config) => {
    config.resolve.alias['@nuxt-status'] = resolve(__dirname)
  })
}

export default module

export * from './module'
export const meta = require('./../package.json')
