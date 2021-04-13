<template>
  <v-navigation-drawer
    :mini-variant="isMiniSidebar"
    width="215px"
    app
    permanent
    dark
    class="secondary"
    :clipped="true">
    <v-list dense>
      <v-list-item
        :disabled="isSameRoute(item.route)"
        v-for="item in items"
        :key="item.title"
        link
        @click.stop="navigate(item.route)">
        <v-list-item-icon>
          <v-icon :color="isSameRoute(item.route) ? 'accent' : ''" :title="item.title">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="font-weight-regular text-uppercase">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { eventBus } from "@/main";
import navigation from "../data/navigation";

export default {
  name: "sidebar",
  components: {},
  data() {
    return {
      currentRoute: "",
      isMiniSidebar: true,
      items: navigation
    }
  },
  methods: {
    navigate(route) {
      this.isMiniSidebar = true
      this.$router.push({ path: route })
    },
    isSameRoute(route) {
      return `${this.currentRoute}` === route
    }
  },
  created() {
    eventBus.$on("toggle-sidebar", () => {
      this.isMiniSidebar = !this.isMiniSidebar
    })
  },
  computed: {},
  watch: {
    $route(to, from) {
      this.currentRoute = to.path
    }
  }
}
</script>

<style scoped>
</style>