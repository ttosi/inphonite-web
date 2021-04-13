<template>
  <div>
    <v-toolbar flat color="accent" dark dense>
      <v-toolbar-title>Jack, Joe</v-toolbar-title>
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
    <div>
      <datatable
        :data="data"
        :headers="headers"
        :pageName="pageName"
        :tableTitle="tableTitle" />
    </div>
  </div>
</template>

<script>
// import Base from "@/views/Base";
import { Appointment } from "@/entities";
import { Datatable } from "@/components";
import { eventBus } from "@/main";

export default {
  props: ["id"],
  components: {
    Datatable
  },
  data() {
    return {
      appointment: Appointment(),
      tableTitle: { name: "Appointments", icon: "event" },
      pageName: "people-details-appointments",
      data: [],
      headers: [
        { text: "Id", value: "id" },
        { text: "Start Time", value: "apptStartDateTime" },
        { text: "End Time", value: "apptEndDateTime" },
        { text: "Subject", value: "subject" },
        { text: "Location", value: "location" }
      ],
      actions: [
        { name: "New ", command: "add", icon: "add" },
        { name: "Delete", command: "delete", icon: "delete" },
        { name: "Refresh", command: "refresh", icon: "refresh" }
      ]
    };
  },
  methods: {
    async list() {
      this.data = await this.appointment.listByPersonId(this.id)
      console.log(this.data)
    },
    async open(appt) {
      this.$router.push({
        path: `/appointments/details/${appt.id}/general`
      });
    },
  },
  created() {
    eventBus.$on("datatable-people-details-appointments", payload => {
      this[payload.action](payload.data);
    });
  },
  mounted() {
    this.list()
  },
  watch: {
    id() {
      this.list();
    }
  }
};
</script>
