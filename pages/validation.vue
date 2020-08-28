<template>
  <div>
    <ValidationProvider>
      <input v-model="value" type="text">
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider
  },
  data () {
    return {
      value: 0
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
