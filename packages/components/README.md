# `@teamgrid-app/components`

This module serves as a collection point for all components that we use in TeamGrid Desktop & TeamGrid Mobile.

## Usage

### nuxt.config.js

```js
module.exports = {
  buildModules: [
    // https://github.com/kubilaymelnikov/teamgrid-app/tree/master/packages/components#readme
    '@teamgrid-app/components',
  ],
}
```

### pages/index.vue

```vue
<template>
  <div>
    <Stopwatch />
  </div>
</template>
```
