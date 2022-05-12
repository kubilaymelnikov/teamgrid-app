export const namespaced = true
export const state = () => ({
  team: {},
  users: [],
  activeTimes: [],
  times: [],
  services: [],
  webhooks: [],
  contacts: [],
  projects: [],
})
export const mutations = {
  setTimes(state, { times }) {
    state.times = times
  },
  addTime(state, { data }) {
    const add = (state, item) => {
      const index = state.times.findIndex((_) => _._id === item._id)
      if (index !== -1) {
        state.times[index] = Object.assign(state.times[index], item)
      } else {
        state.times.push(item)
      }
    }
    if (Array.isArray(data)) {
      data.forEach((time) => add(state, time))
    } else {
      add(state, data)
    }
  },
  removeTime(state, { data }) {
    state.times = state.times.filter((time) => time._id !== data._id)
  },
  addActiveTime(state, { data }) {
    const add = (state, item) => {
      const index = state.activeTimes.findIndex((_) => _._id === item._id)
      if (index !== -1) {
        state.activeTimes[index] = Object.assign(state.activeTimes[index], item)
      } else {
        state.activeTimes.push(item)
      }
    }
    if (Array.isArray(data)) {
      data.forEach((time) => add(state, time))
    } else {
      add(state, data)
    }
  },
  removeActiveTime(state, { data }) {
    state.activeTimes = state.activeTimes.filter(
      (time) => time._id !== data._id
    )
  },
  removeActiveTask(state) {
    state.activeTask = {}
  },
  setUsers(state, { users }) {
    state.users = users
  },
  setTeam(state, { team }) {
    state.team = team
  },
  setServices(state, { services }) {
    state.services = services
  },
  setContacts(state, { contacts }) {
    state.contacts = contacts
  },
  setProjects(state, { projects }) {
    state.projects = projects
  },
  addWebhook(state, { webhook }) {
    state.webhooks.push(webhook)
  },
  removeWebhook(state, { webhook }) {
    state.webhooks = state.webhooks.filter((_) => _._id !== webhook._id)
  },
  reset(state) {
    state.activeTimes = []
    state.times = []
  },
}
export const actions = {
  loadTimes({ commit }, params) {
    return this.$teamGridSDK.getTimes(params).then((response) => {
      const times = response.data.data.filter((_) => _.end !== null)
      const activeTimes = response.data.data.filter((_) => _.end === null)
      commit('setTimes', { sync: true, times })
      if (activeTimes.length) {
        commit('addActiveTime', { sync: true, data: activeTimes[0] })
      }
    })
  },
  loadTeam({ commit }) {
    return this.$teamGridSDK.getTeams().then((response) => {
      commit('setTeam', { sync: true, team: response.data.data })
    })
  },
  loadUsers({ commit }) {
    return this.$teamGridSDK.getUsers().then((response) => {
      commit('setUsers', { sync: true, users: response.data.data })
    })
  },
  loadServices({ commit }) {
    // This will break as soon as we'll have more than 500 different services.
    // We're probably good for a while.
    return this.$teamGridSDK.getServices().then((response) => {
      commit('setServices', { sync: true, services: response.data.data })
    })
  },
  async loadContacts({ commit }) {
    let contacts = []

    // Request new contact pages, and append these contacts to our
    // contact array, until the current page is the last page.
    // Teamgrid only allows to query up to 500 items per page,
    // but we have short of 1000 contacts...
    let reachedLastPage = false
    let currentPage = 1
    while (!reachedLastPage) {
      await this.$teamGridSDK.getContacts({
        limit: 500, // Teamgrids soft-limit per request
        page: currentPage++
      }).then((response) => {
        // Append fetched contacts to our array
        contacts = contacts.concat(response.data.data)

        // Check if was the last page
        reachedLastPage = response.data.pagination.page == response.data.pagination.pages

      // Abort while-loop on any error, as it would never terminate...
      }).catch((error) => {
        reachedLastPage = true
        console.error("Unable to fetch contacts for some reason!")
        console.log(error)
      })
    }

    commit('setContacts', { sync: true, contacts: contacts })
  },
  async loadProjects({ commit }) {
    let projects = []

    // Request new project pages, and append these projects to our
    // projects array, until the current page is the last page.
    // Teamgrid only allows to query up to 500 items per page,
    // but we have short of 800 projects...
    let reachedLastPage = false
    let currentPage = 1
    while (!reachedLastPage) {
      await this.$teamGridSDK.getProjects({
        limit: 500, // Teamgrids soft-limit per request
        page: currentPage++
      }).then((response) => {
        // Append fetched projects to our array
        projects = projects.concat(response.data.data)

        // Check if was the last page
        reachedLastPage = response.data.pagination.page == response.data.pagination.pages

      // Abort while-loop on any error, as it would never terminate...
      }).catch((error) => {
        reachedLastPage = true
        console.error("Unable to fetch projects for some reason!")
        console.log(error)
      })
    }

    commit('setProjects', { sync: true, projects: projects })
  },
  startTracking({ commit }, { userId, taskId }) {
    const time = Date.now()
    if (!taskId) {
      return this.$teamGridSDK
        .createTask({
          userId,
        })
        .then((task) => {
          return this.$teamGridSDK
            .startTracking(task.data.data._id, {
              userId,
            })
            .then(() => {
              this.$teamGridSDK
                .getTimes({
                  userId,
                  taskId,
                  limit: 1,
                  active: true,
                })
                .then((response) => {
                  commit('addActiveTime', {
                    sync: true,
                    data: response.data.data,
                  })
                })
            })
        })
    } else {
      return this.$teamGridSDK
        .startTracking(taskId, {
          userId,
          time,
        })
        .then(() => {
          this.$teamGridSDK
            .getTimes({
              userId,
              taskId,
              limit: 1,
              active: true,
            })
            .then((response) => {
              commit('addActiveTime', { sync: true, data: response.data.data })
            })
        })
    }
  },
  stopTracking({ commit, getters }, { userId }) {
    const stopTime = Date.now()
    const stopTracking = (activeTime, stopTime) => {
      return this.$teamGridSDK
        .stopTracking(activeTime.taskId, {
          userId: activeTime.userId,
          time: stopTime,
        })
        .then(() => {
          commit('removeActiveTime', { sync: true, data: activeTime })
          commit('removeActiveTask', { sync: true })
        })
    }
    const activeTime = getters.activeTimeByUser(userId)
    if (Object.keys(activeTime).length) {
      return stopTracking(activeTime, stopTime)
    }
  },
}
export const getters = {
  usersSelectOption: ({ users }) => {
    return users.map((user) => ({
      value: user.userId,
      label: user.name,
    }))
  },
  sortedTimesByUserAndDay:
    ({ times }) =>
    (userId, startFrom, startTo) => {
      return [...times]
        .filter((_) => _.userId === userId)
        .filter(
          (_) => new Date(_.start).getTime() >= new Date(startFrom).getTime()
        )
        .filter((_) => new Date(_.end).getTime() <= new Date(startTo).getTime())
        .sort((a, b) => {
          const dateA = new Date(a.start).getTime()
          const dateB = new Date(b.start).getTime()
          return dateA < dateB ? 1 : -1
        })
    },
  activeTimeByUser:
    ({ activeTimes }) =>
    (userId) => {
      return [...activeTimes]
        .filter((_) => _.userId === userId)
        .reduce((a, b) => Object.assign(a, b), {})
    },
  servicesSelectOption: ({ services }) => {
    return services.map((_) => ({
      value: _._id,
      label: _.name,
    }))
  },
}
