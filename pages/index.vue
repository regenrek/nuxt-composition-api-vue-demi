<template>
  <div class="container" :class="[isDark ? 'dark': 'light']">
    <div>
      <Logo />
      <h1 class="title">
        nuxts-composition-api-vue-demi
      </h1>
      <NjBurger />
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue-demi'
import { usePreferredDark } from '@vueuse/core'
import { NjBurger } from '@nujek/ui'

export default defineComponent({
  components: {
    NjBurger
  },
  setup () {
    // is user prefers dark theme
    const isDark = usePreferredDark()

    return { isDark }
  }
})
</script>

<style>
.dark {
  background-color: black;
  color: white;
}

.light {
  background-color: white;
  color: #333;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
