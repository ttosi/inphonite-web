<template>
  <v-bottom-navigation absolute dark flat>
    <v-btn
      class="mr-1"
      color="lightgrey"
      v-for="(action, index) in computedActions"
      :key="index"
      @click="doAction('doAction', action.action)">
      <span class="mt-1 font-weight-regular">{{ action.name }}</span>
      <v-icon>{{ action.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import bottomActions from "@/data/bottomActions";

export default {
  props: {
    actions: { type: Array, required: true }
  },
  data() {
    return {
      actionData: bottomActions
    };
  },
  methods: {
    doAction(event, action) {
      this.$emit(event, action, "fuck")
    }
  },
  computed: {
    computedActions() {
      return this.actions.map(a => {
        return this.actionData.find(b => b.action == a)
      })
    }
  }
};
</script>