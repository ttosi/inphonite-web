<template>
  <v-toolbar dense dark flat v-if="pageTitle !== 'Home'">
    <v-btn icon @click="back">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title class="font-weight-light subtitle-1" style="letter-spacing: 1px;">
      {{ pageTitle }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  name: "titlebar",
  components: {},
  data() {
    return {
      pageTitle: "home"
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  },
  watch: {
    $route(to, from) {
      this.pageTitle = to.name
    }
  }
}
</script>
