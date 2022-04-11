<template>
  <div>
    <h2>Stopwatch</h2>

    <div>
      <Stopwatch />
    </div>

    <h2>TeamGrid</h2>
    <div>
      <input v-model="token" type="text" />
      <button @click="$fetch">Load</button>
      {{ team }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: '',
    }
  },
  async fetch() {
    try {
      this.$store.commit('storage/setTeam', {
        team: await this.$teamGridSDK
          .auth(this.token)
          .getTeams()
          .then((response) => response.data.data),
      })
    } catch (error) {}
  },
  computed: {
    team() {
      return this.$store.state.storage.team
    },
  },
}
</script>
