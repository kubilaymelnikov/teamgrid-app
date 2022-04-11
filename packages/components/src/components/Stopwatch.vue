<template>
  <time :class="$style.stopwatch" v-text="time"> </time>
</template>

<script>
export default {
  name: 'Stopwatch',
  props: {
    /** Die Startzeit der Stopuhr. */
    startTime: {
      type: Date,
      require: false,
      default: () => new Date(),
    },
  },
  data() {
    return {
      currentTime: new Date(),
      animationFrameID: undefined,
      intervalID: undefined,
    }
  },
  computed: {
    time() {
      const timeElapsedDate = new Date(this.currentTime - this.startTime)
      const timeElapsedNumber = timeElapsedDate.getTime() / 1000

      const secNumber = Math.abs(Math.floor(timeElapsedNumber % 60))
      const minNumber = Math.abs(Math.floor((timeElapsedNumber / 60) % 60))
      const hourNumber = Math.abs(Math.floor(timeElapsedNumber / 60 / 60))

      const secString = String(secNumber).padStart(2, '0')
      const minString = String(minNumber).padStart(2, '0')
      const hourString = String(hourNumber).padStart(2, '0')

      return `${hourString}:${minString}:${secString}`
    },
  },
  created() {
    this.start()
  },
  destroyed() {
    this.stop()
  },
  methods: {
    start() {
      if (process.client && !this.intervalID) {
        this.animationFrameID = requestAnimationFrame(this.update)
      } else {
        this.intervalID = setInterval(this.update, 100)
      }
    },
    stop() {
      if (process.client && !this.intervalID) {
        cancelAnimationFrame(this.animationFrameID)
        this.animationFrameID = undefined
      } else {
        clearInterval(this.intervalID)
        this.intervalID = undefined
      }
    },
    update() {
      this.currentTime = new Date()

      if (process.client && !this.intervalID) {
        requestAnimationFrame(this.update)
      }
    },
  },
}
</script>

<style lang="postcss" module>
.stopwatch {
  @apply font-mono cursor-default select-none;
}
</style>
