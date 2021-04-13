<template>
  <v-app :class="{ 'login-bg': !isAuthenticated }">
    <loading></loading>
    <site-header v-if="isAuthenticated" />
    <sidebar v-if="isAuthenticated" />
    <configuration v-if="isAuthenticated" />
    <v-content fill-height>
      <notification></notification>
      <!-- <modal></modal> -->
      <titlebar v-if="isAuthenticated"></titlebar>
      <div class="pa-3">
        <!-- <keep-alive> -->
          <router-view />
        <!-- </keep-alive> -->
      </div>
    </v-content>
    <site-footer v-if="isAuthenticated" />
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"
import config from "@/config"
import {
  Header,
  Sidebar,
  Configuration,
  Titlebar,
  Loading,
  Notification,
  // Modal,
  Footer
} from "@/components";

export default {
  name: "App",
  components: {
    "site-header": Header,
    "site-footer": Footer,
    Configuration,
    Titlebar,
    Notification,
    // Modal,
    Loading,
    Sidebar
  },
  data: () => ({}),
  methods: {
    ...mapMutations({
      setConfig: "setConfig"
    })
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated"
    })
  },
  created() {
    this.setConfig(config)
  }
};
</script>

<style>
.login-bg {
  background: #17bdff !important;
  background: -moz-linear-gradient(top, #17bdff 0%, #052b3b 100%) !important;
  background: -webkit-linear-gradient(top, #17bdff 0%, #052b3b 100%) !important;
  background: linear-gradient(to bottom, #17bdff 0%, #052b3b 100%) !important;
}
</style>
