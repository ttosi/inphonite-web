<template>
  <v-dialog v-model="visible" :persistent="true">
    <v-card>
      <v-card-title class="headline">{{ modal.title }}</v-card-title>
      <v-card-text>
        {{ modal.text }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :color="action.color"
          v-for="(action, index) in actions"
          :key="index"
          @click="modalAction('modalAction', action.command)">
            <v-icon dark right class="mr-2">{{ action.icon }}</v-icon>
            {{ action.name }}
          </v-btn>
        <v-btn depressed @click="visible = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { eventBus } from "@/main";

export default {
  components: {},
  props: {
    actions: { type: Array, required: true }
  },
  data() {
    return {
      visible: false,
      modal: {}
    };
  },
  methods: {
    modalAction(event, action) {
      console.log(action);
      this.visible = false;
      this.$emit(event, action);
    }
  },
  created() {
    console.log("modal created");
    eventBus.$on("show-modal", payload => {
      this.modal = { ...payload };
      this.visible = true;
    });
  }
};
</script>
