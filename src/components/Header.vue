<template>
  <v-app-bar app color="primary" dark flat :clipped-left="true" :clipped-right="true">
    <div class="d-flex align-center">
      <v-btn class="mx-2 btn-fix" small fab text @click="toggleSidebar">
        <v-icon>menu</v-icon>
      </v-btn>
    </div>
    <div>
      <router-link to="/home">
        <img id="logo" src="../assets/logo-white.png" class="mt-2 ml-2" />
      </router-link>
    </div>
    <v-spacer></v-spacer>
    <v-btn id="configuration" class="mx-2 btn-fix" small fab text @click.stop="toggleConfiguration">
      <v-icon dark>settings</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { eventBus } from "@/main";

export default {
  name: "site-header",
  components: {},
  methods: {
    toggleSidebar() {
      eventBus.$emit("toggle-sidebar")
    },
    toggleConfiguration() {
      eventBus.$emit("toggle-configuration")
    }
  }
}
</script>

<style lang="css" scoped>
#logo {
  width: 200px;
}
</style>