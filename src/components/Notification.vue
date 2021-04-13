<template>
  <v-snackbar
    class="mt-4"
    top
    v-model="visible"
    :color="notification.color || 'accent'"
    :timeout="notification.timeout || 3000">
    {{ notification.text || 'No message' }}
    <v-btn text @click="visible = false">
      <v-icon>close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
import { eventBus } from "@/main"

export default {
  components: {},
  props: {},
  data() {
    return {
      visible: false,
      notification: {}
    }
  },
  created() {
    eventBus.$on("show-notification", payload => {
      this.notification = { ...payload }
      this.visible = true
    })
  }
}
</script>
