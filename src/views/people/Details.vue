<template>
  <div>
    <v-card class="pa-0 ma-0" tile>
      <v-tabs v-model="activeTab" dark tile>
        <template v-for="(tab, index) of tabs">
          <v-tab 
            right
            v-if="!(isNew && tab.route !== 'general')" 
            :key="index"
            :to="tab.route">
            <v-icon left>{{ tab.icon }}</v-icon>
            {{ tab.name }}
          </v-tab>
        </template>
        <v-tab-item
          class="ma-0"
          v-for="tab of tabs"
          :key="tab.id"
          :value="tab.route"
          :transition="false"
          :reverse-transition="false">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template> 

<script>
// import Base from "@/views/Base";

export default {
  components: {},
  data() {
    return {
      activeTab: "/people/details/general",
      isNew: this.$route.query.isnew,
      tabs: [
        { name: "General", route: "general", icon: "person" },
        { name: "Appointments", route: "appointments", icon: "event" },
        // { name: "Results", route: "results", icon: "show_chart" }
      ]
    };
  },
  methods: {}
};
</script>

<style>
.v-tab {
  font-weight: 400;
  font-size: 13px !important;
  border-left: 1px solid #666;
}

.v-btn {
  font-weight: 400;
}
</style>