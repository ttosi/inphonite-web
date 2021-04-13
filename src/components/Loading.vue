<template>
  <v-overlay :value="loading">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>

<script>
import { eventBus } from "@/main"

export default {
  components: {},
  data() {
    return {
      loading: false
    }
  },
  created() {
    eventBus.$on("is-loading", isLoading => {
      this.loading = isLoading
    })
  }
}
</script>
