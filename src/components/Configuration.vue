<template>
  <v-navigation-drawer
    v-if="configurationVisible"
    absolute
    dark
    class="primary"
    :right="true"
    :clipped="true"
    height="290px"
    permanent>
    <v-divider></v-divider>
    <v-list-item class="configuration-item">
      <v-list-item-content>
        <v-list-item-title class="title">{{ fullName }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link @click.stop="navigate(item.route)">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="font-weight-regular text-uppercase">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { authService as auth } from "@/services"
import { eventBus } from "@/main"
import configuration from "../data/configuration"

export default {
  data() {
    return {
      fullName: this.$store.getters.user.fullName,
      configurationVisible: false,
      items: configuration
    }
  },
  methods: {
    navigate(route) {
      this.configurationVisible = false
      if (route === "/logout") {
        auth.logout().then(() => {
          this.$router.push({ path: '/login' })
        })
      }
      this.$router.push({ path: route })
    }
  },
  created() {
    eventBus.$on("toggle-configuration", () => {
      this.configurationVisible = !this.configurationisible
    });

    console.log(this.$store.getters.user.fullName);

    document.body.addEventListener(
      "click",
      e => {
        if (e.target.parentElement.parentElement.getAttribute("role")) {
          return
        }
        this.configurationVisible = false
      },
      true
    )
  }
}
</script>

<style scoped>
.v-navigation-drawer {
  margin-top: 64px;
}
</style>