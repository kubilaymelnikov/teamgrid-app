# `nuxt-teamgrid-sdk`

> TODO: description

## Usage

### nuxt.config.js
```js
module.exports = {
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://github.com/kubilaymelnikov/teamgrid-app
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
        .then((response) => response.data)
    } catch (error) {}
  },
})
</script>
```