<template>
  <div>
    <v-toolbar flat color="accent" dark dense>
      <v-toolbar-title>
        {{ name }}
        <span class="mx-3">&rarr;</span>
        {{ values.apptStart | formatDate }} - {{ Date.create(values.apptEnd, { fromUTC: true }).format('{h}:{mm} {TT}') }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-btn
          v-for="(action, index) in actions"
          @click="doAction(action.command)"
          :key="index"
          text>
          <v-icon left>{{ action.icon }}</v-icon>
          {{ action.name }}
        </v-btn>
      </div>
    </v-toolbar>
    <div class="card-container">
      <form-data class="ma-3" :form="form" :values="values"></form-data>
    </div>
  </div>
</template>

<script>
import { Appointment } from "@/entities";
import { Form, Modal } from "@/components";
import { eventBus } from "@/main";
import apptForm from "@/data/forms/appointment";

export default {
  props: ["id"],
  components: {
    "form-data": Form
  },
  data() {
    return {
      appointment: Appointment(),
      form: apptForm,
      values: [],
      name: "",
      hasLoaded: false,
      actions: [
        { name: "Save ", command: "save", icon: "save" },
        { name: "Delete ", command: "delete", icon: "delete" }
      ]
    };
  },
  methods: {
    async get() {
      this.values = await this.appointment.get(this.id);
      this.name = `${this.values.contactName}`;
    },
    async save() {
      const response = await this.appointment.update(this.values);
      eventBus.$emit("show-notification", {
        text: `${this.name} successfully saved`,
        color: "success"
      });
    },
    async delete() {
      // if (confirm(`Are you sure you want to delete ${this.name}'s appointment?`)) {
      //   const response = await this.appointment.delete(this.values);
      //   eventBus.$emit("show-notification", {
      //     text: `${this.name} successfully deleted`,
      //     color: "success"
      //   });
      //   this.$router.go(-1);
      // }

      eventBus.$emit("show-modal", {
        title: "hello title",
        text: "Here's some cool text!!!",

      })

    },
    doAction(action) {
      this[action]();
    }
  },
  watch: {
    id() {
      this.get();
    }
  },
  async mounted() {
    this.values = await this.appointment.get(this.id);
    this.name = `${this.values.contactName}`;
  }
};
</script>

<style scoped>
.card-container {
  height: 665px;
  overflow-y: scroll;
}
</style>
