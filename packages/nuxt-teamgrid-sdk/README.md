# `@teamgrid-app/nuxt-teamgrid-sdk`

This module exposes the TeamGrid API in the Nuxt Context.

## Usage

### nuxt.config.js

```js
module.exports = {
  buildModules: [
    // https://github.com/kubilaymelnikov/teamgrid-app/tree/master/packages/nuxt-teamgrid-sdk#readme
    '@teamgrid-app/nuxt-teamgrid-sdk',
  ],
}
```

### pages/index.vue

```vue
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      token: '',
      team: {},
    }
  },
  async fetch() {
    try {
      this.team = await this.$teamGridSDK
        .auth(this.token)
        .getTeams()
        .then((response) => response.data.data)
    } catch (error) {}
  },
})
</script>
```
