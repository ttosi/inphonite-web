<template>
  <div class="d-flex">
    <div>
      <v-date-picker color="accent" v-model="picker"></v-date-picker>
      <div class="mt-3 text-center">
        <v-btn @click="today" class="font-weight-regular" x-small dark color="#888">Today</v-btn>
      </div>
    </div>
    <div class="flex-grow-1 ml-5">
      <Datatable 
        :data="data"
        :headers="headers"
        :pageName="pageName"
        :tableTitle="tableTitle"
        @openRow="openRow" />
    </div>
    <Bottombar :actions="bottomActions" />
  </div>
</template>

<script>
import Base from "@/views/Base";
import { Appointment } from "@/entities";
import { Datatable, Bottombar } from "@/components";

export default Base.extend({
  components: {
    Datatable,
    Bottombar
  },
  data() {
    return {
      appointment: Appointment(),
      tableTitle: { name: "Appointments", icon: "event" },
      hasDatatable: true,
      picker: Date.create(new Date()).format("{yyyy}-{MM}-{dd}"),
      data: [],
      headers: [
        { text: "Id", value: "id" },
        { text: "Time", value: "timeApptStart" },
        { text: "Name", value: "contactName" },
        { text: "Result", value: "notifyResult" }
      ],
      bottomActions: ["refresh", "help"]
    };
  },
  methods: {
    async list() {
      this.data = await this.appointment.list(this.dateticks);
    },
    openRow(appt) {
      this.$router.push({ path: `/appointments/details/${appt.id}/general` });
    },
    // openContact(contact) {
    //   this.$router.push({ path: `/people/details/${contact.notifyContactId}/general` })
    // },
    today() {
      this.picker = Date.create(new Date()).format("{yyyy}-{MM}-{dd}");
    }
  },
  computed: {
    selectedDate() {
      return Date.create(this.picker).format("{MM}/{dd}/{yyyy}");
    },
    dateticks() {
      return new Date(this.selectedDate).getTime() * 10000 + 621355968000000000;
    }
  },
  watch: {
    selectedDate() {
      this.list();
    },
    $route(to, from) {
      this.list()
    }
  },
  created() {},
  mounted() {}
});
</script>
