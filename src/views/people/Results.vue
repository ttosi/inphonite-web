<template>
  <div>
    <v-toolbar flat color="accent" dark dense>
      <v-toolbar-title>Jack, Joe</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-btn
          text
          :key="index"
          v-for="(action, index) in actions"
          @click="doAction(action.command)">
          <v-icon left>{{ action.icon }}</v-icon>
          {{ action.name }}
        </v-btn>
      </div>
    </v-toolbar>
    <div>Results!!</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      actions: [
        { name: "Delete", command: "delete", icon: "delete" },
        { name: "Clear All", command: "clear", icon: "delete_sweep" },
        { name: "Refresh", command: "refresh", icon: "refresh" }
      ]
    };
  },
  methods: {
    doAction(action) {
      this[action]();
    }
  },
  created() {},
  mounted() {}
};
</script>

<style scoped>
.card-container {
  height: 665px;
  overflow-y: scroll;
}
</style>
