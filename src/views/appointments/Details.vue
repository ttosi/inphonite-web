<template>
  <div>
    <v-card class="pa-0 ma-0" tile>
      <v-tabs v-model="activeTab" dark tile>
        <v-tab right v-for="(tab, index) of tabs" :key="index" :to="tab.route">
          <v-icon left>{{ tab.icon }}</v-icon>
          {{ tab.name }}
        </v-tab>
        <v-tab-item
          class="ma-0"
          v-for="tab of tabs"
          :key="tab.id"
          :value="tab.route"
          :transition="false"
          :reverse-transition="false">
            <router-view></router-view>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import Base from "@/views/Base";

export default Base.extend({
  components: {
  },
  data() {
    return {
      activeTab: "/appointments/details/general",
      tabs: [
        { name: "General", route: "general", icon: "person" },
        // { name: "Results", route: "results", icon: "show_chart" }
      ]
    };
  },
  methods: {}
});
</script>

<style>
.v-tab {
  font-weight: 400;
  font-size: 13px !important;
  border-right: 1px solid #666;
}

.v-btn {
  font-weight: 400;
}
</style>